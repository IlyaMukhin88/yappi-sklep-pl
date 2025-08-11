import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useCart } from "@/hooks/useCart";
import { toast } from "@/hooks/use-toast";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    street: "",
    postalCode: "",
    city: "",
    notes: "",
    acceptTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, acceptTerms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.acceptTerms) {
      toast({
        title: "Błąd",
        description: "Musisz zaakceptować regulamin i politykę prywatności.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Błąd",
        description: "Wypełnij wszystkie wymagane pola.",
        variant: "destructive"
      });
      return;
    }

    // Generate order number
    const orderNumber = `YP${Date.now().toString().slice(-6)}`;
    
    // In a real app, this would send order to backend
    console.log("Order submitted:", { orderNumber, formData, cart });
    
    // Clear cart and redirect to confirmation
    clearCart();
    navigate(`/potwierdzenie?order=${orderNumber}`);
    
    toast({
      title: "Zamówienie złożone",
      description: `Twoje zamówienie ${orderNumber} zostało wysłane. Sprawdź e-mail.`,
    });
  };

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <SEOHead
          title="Koszyk pusty - Yappi"
          description="Twój koszyk jest pusty. Wróć do sklepu i wybierz kombinezony Yappi."
        />
        <Header cartItemsCount={0} onCartClick={() => {}} />
        
        <main className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Koszyk jest pusty</h1>
          <p className="text-muted-foreground mb-8">
            Dodaj produkty do koszyka, aby przejść do zamówienia.
          </p>
          <Button onClick={() => navigate("/")}>
            Wróć do sklepu
          </Button>
        </main>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Zamówienie - Yappi Kombinezony Dziecięce"
        description="Sfinalizuj zakup ciepłych kombinezonów dziecięcych Yappi. Bezpieczne zamówienie z darmową dostawą."
      />
      <Header cartItemsCount={cart.itemsCount} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Finalizacja zamówienia</h1>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <Card>
              <CardHeader>
                <CardTitle>Dane do wysyłki</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Imię *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nazwisko *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Telefon (opcjonalnie)</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="street">Ulica i numer *</Label>
                    <Input
                      id="street"
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="postalCode">Kod pocztowy *</Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        placeholder="00-000"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">Miasto *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="notes">Uwagi do zamówienia</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Dodatkowe informacje..."
                      rows={3}
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Sposób płatności</h3>
                      <p className="text-sm text-muted-foreground">
                        ✓ Przelew na numer karty (dane do przelewu otrzymasz w e-mailu)
                      </p>
                    </div>
                    
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.acceptTerms}
                        onCheckedChange={handleCheckboxChange}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        Akceptuję <a href="/regulamin" className="text-primary hover:underline">regulamin</a> oraz{" "}
                        <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                          politykę prywatności
                        </a> *
                      </Label>
                    </div>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent-hover"
                    disabled={!formData.acceptTerms}
                  >
                    Zamów - zapłać przelewem
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Order Summary */}
            <Card>
              <CardHeader>
                <CardTitle>Podsumowanie zamówienia</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.items.map((item) => (
                  <div key={item.id} className="flex gap-3 p-3 bg-muted/30 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.color} • Rozmiar {item.size}
                      </p>
                      <p className="text-sm">
                        {item.quantity} x {item.price} zł = {item.quantity * item.price} zł
                      </p>
                    </div>
                  </div>
                ))}
                
                <Separator />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Produkty:</span>
                    <span>{cart.total} zł</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Dostawa:</span>
                    <span className="text-success font-semibold">Gratis</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Razem:</span>
                    <span>{cart.total} zł</span>
                  </div>
                </div>
                
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">✓ Darmowa dostawa</h4>
                  <p className="text-sm text-muted-foreground">
                    Czas dostawy: 1-3 dni robocze
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;