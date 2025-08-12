import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.55.0";
import { Resend } from "npm:resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface OrderData {
  orderNumber: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    street: string;
    postalCode: string;
    city: string;
    notes?: string;
  };
  items: Array<{
    id: string;
    name: string;
    color: string;
    size: string;
    quantity: number;
    price: number;
    image: string;
  }>;
  total: number;
  currency: string;
}

const supabase = createClient(
  Deno.env.get("SUPABASE_URL") ?? "",
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
);

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const generateAdminEmail = (order: OrderData): string => {
  const itemsHtml = order.items.map(item => `
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 12px; text-align: left;">
        <img src="${item.image}" alt="${item.name}" style="width: 60px; height: 60px; object-fit: cover; border-radius: 8px; margin-right: 12px; vertical-align: middle;">
        <strong>${item.name}</strong><br>
        <small style="color: #6b7280;">${item.color} • Rozmiar ${item.size}</small>
      </td>
      <td style="padding: 12px; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px; text-align: right;">${item.price} ${order.currency}</td>
      <td style="padding: 12px; text-align: right; font-weight: bold;">${item.quantity * item.price} ${order.currency}</td>
    </tr>
  `).join('');

  return `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">🛍️ Nowe zamówienie #${order.orderNumber}</h1>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h2 style="margin-top: 0; color: #374151;">Dane klienta:</h2>
            <p><strong>Imię i nazwisko:</strong> ${order.customer.firstName} ${order.customer.lastName}</p>
            <p><strong>E-mail:</strong> ${order.customer.email}</p>
            ${order.customer.phone ? `<p><strong>Telefon:</strong> ${order.customer.phone}</p>` : ''}
            <p><strong>Adres dostawy:</strong><br>
              ${order.customer.street}<br>
              ${order.customer.postalCode} ${order.customer.city}
            </p>
            ${order.customer.notes ? `<p><strong>Uwagi:</strong> ${order.customer.notes}</p>` : ''}
          </div>

          <h2 style="color: #374151;">Zamówione produkty:</h2>
          <table style="width: 100%; border-collapse: collapse; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <thead>
              <tr style="background-color: #f3f4f6;">
                <th style="padding: 12px; text-align: left; font-weight: bold;">Produkt</th>
                <th style="padding: 12px; text-align: center; font-weight: bold;">Ilość</th>
                <th style="padding: 12px; text-align: right; font-weight: bold;">Cena</th>
                <th style="padding: 12px; text-align: right; font-weight: bold;">Suma</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: right;">
            <h3 style="margin: 0; color: #059669;">Łączna wartość: ${order.total} ${order.currency}</h3>
            <p style="margin: 5px 0 0 0; color: #065f46;">+ Darmowa dostawa</p>
          </div>

          <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0;"><strong>⚡ Akcja wymagana:</strong> Skontaktuj się z klientem w celu potwierdzenia zamówienia i przygotowania wysyłki.</p>
          </div>
        </div>
      </body>
    </html>
  `;
};

const generateCustomerEmail = (order: OrderData): string => {
  const itemsHtml = order.items.map(item => `
    <tr style="border-bottom: 1px solid #e5e7eb;">
      <td style="padding: 12px;">
        <strong>${item.name}</strong><br>
        <small style="color: #6b7280;">${item.color} • Rozmiar ${item.size}</small>
      </td>
      <td style="padding: 12px; text-align: center;">${item.quantity}</td>
      <td style="padding: 12px; text-align: right;">${item.quantity * item.price} ${order.currency}</td>
    </tr>
  `).join('');

  return `
    <html>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #2563eb; text-align: center;">🎉 Dziękujemy za zamówienie!</h1>
          
          <div style="background-color: #ecfdf5; padding: 20px; border-radius: 8px; text-align: center; margin: 20px 0;">
            <h2 style="margin: 0; color: #059669;">Zamówienie zostało przyjęte</h2>
            <p style="margin: 10px 0 0 0; font-size: 18px;"><strong>Numer zamówienia: #${order.orderNumber}</strong></p>
          </div>

          <p>Cześć ${order.customer.firstName}!</p>
          <p>Twoje zamówienie zostało pomyślnie złożone i zostanie przetworzone w najbliższym czasie.</p>

          <h3 style="color: #374151;">Podsumowanie zamówienia:</h3>
          <table style="width: 100%; border-collapse: collapse; background-color: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
            <thead>
              <tr style="background-color: #f3f4f6;">
                <th style="padding: 12px; text-align: left; font-weight: bold;">Produkt</th>
                <th style="padding: 12px; text-align: center; font-weight: bold;">Ilość</th>
                <th style="padding: 12px; text-align: right; font-weight: bold;">Suma</th>
              </tr>
            </thead>
            <tbody>
              ${itemsHtml}
            </tbody>
          </table>

          <div style="background-color: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: right;">
            <p style="margin: 0; font-size: 18px;"><strong>Łączna wartość: ${order.total} ${order.currency}</strong></p>
            <p style="margin: 5px 0 0 0; color: #059669; font-weight: bold;">Dostawa: GRATIS 🚚</p>
          </div>

          <div style="background-color: #eff6ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h4 style="margin-top: 0; color: #2563eb;">📦 Następne kroki:</h4>
            <ul style="margin: 0; padding-left: 20px;">
              <li>Otrzymasz od nas wiadomość z danymi do przelewu</li>
              <li>Po zaksięgowaniu wpłaty, przygotujemy Twoje zamówienie</li>
              <li>Czas dostawy: 1-3 dni robocze</li>
            </ul>
          </div>

          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h4 style="margin-top: 0; color: #374151;">📞 Masz pytania?</h4>
            <p style="margin: 0;">Skontaktuj się z nami:<br>
              📧 Email: kontakt@yappi.pl<br>
              📱 Telefon: +48 123 456 789</p>
          </div>

          <p style="margin-top: 30px; text-align: center; color: #6b7280;">
            Dziękujemy za wybór Yappi! 💙<br>
            <small>To jest automatyczna wiadomość. Nie odpowiadaj na nią.</small>
          </p>
        </div>
      </body>
    </html>
  `;
};

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const orderData: OrderData = await req.json();
    
    console.log("Processing order:", orderData.orderNumber);

    // Check if order already exists (idempotency)
    const { data: existingOrder, error: checkError } = await supabase
      .from('orders')
      .select('email_sent')
      .eq('order_number', orderData.orderNumber)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      throw new Error(`Error checking existing order: ${checkError.message}`);
    }

    if (existingOrder) {
      if (existingOrder.email_sent) {
        console.log("Emails already sent for order:", orderData.orderNumber);
        return new Response(
          JSON.stringify({ message: "Emails already sent for this order" }),
          { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
    } else {
      // Store order in database
      const { error: insertError } = await supabase
        .from('orders')
        .insert({
          order_number: orderData.orderNumber,
          customer_data: orderData.customer,
          cart_items: orderData.items,
          total_amount: orderData.total,
          currency: orderData.currency,
          email_sent: false
        });

      if (insertError) {
        throw new Error(`Error storing order: ${insertError.message}`);
      }
    }

    // Send emails
    const adminEmailHtml = generateAdminEmail(orderData);
    const customerEmailHtml = generateCustomerEmail(orderData);

    // Send admin email
    const adminEmailResponse = await resend.emails.send({
      from: "Yappi <noreply@yappi.pl>",
      to: ["sklep@yappi.pl"], // Admin email
      subject: `🛍️ Nowe zamówienie #${orderData.orderNumber} - ${orderData.total} PLN`,
      html: adminEmailHtml,
    });

    console.log("Admin email sent:", adminEmailResponse);

    if (adminEmailResponse.error) {
      throw new Error(`Admin email failed: ${adminEmailResponse.error.message}`);
    }

    // Send customer email
    const customerEmailResponse = await resend.emails.send({
      from: "Yappi <noreply@yappi.pl>",
      to: [orderData.customer.email],
      subject: `✅ Potwierdzenie zamówienia #${orderData.orderNumber} - Yappi`,
      html: customerEmailHtml,
    });

    if (customerEmailResponse.error) {
      throw new Error(`Customer email failed: ${customerEmailResponse.error.message}`);
    }

    console.log("Customer email sent:", customerEmailResponse);

    // Update order as email sent
    const { error: updateError } = await supabase
      .from('orders')
      .update({ email_sent: true })
      .eq('order_number', orderData.orderNumber);

    if (updateError) {
      console.error("Error updating email_sent status:", updateError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Order emails sent successfully",
        adminEmailId: adminEmailResponse.data?.id,
        customerEmailId: customerEmailResponse.data?.id
      }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      }
    );

  } catch (error: any) {
    console.error("Error in send-order-emails function:", error);
    return new Response(
      JSON.stringify({ 
        success: false,
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders }
      }
    );
  }
};

serve(handler);