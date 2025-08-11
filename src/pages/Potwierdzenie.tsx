import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Potwierdzenie = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("order");

  useEffect(() => {
    if (!orderNumber) {
      navigate("/");
    }
  }, [orderNumber, navigate]);

  if (!orderNumber) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Potwierdzenie zamówienia - Yappi"
        description="Dziękujemy za zamówienie w sklepie Yappi. Wkrótce skontaktujemy się z Tobą."
      />
      <Header cartItemsCount={0} onCartClick={() => {}} />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-16 w-16 text-success mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-4">Zamówienie zostało złożone!</h1>
            <p className="text-lg text-muted-foreground">
              Dziękujemy za wybór kombinezonów Yappi
            </p>
          </div>
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center justify-center gap-2">
                <span>Numer zamówienia: {orderNumber}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Co dalej?</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Zamówienie zostało wysłane na podany adres e-mail. 
                  Nasz manager skontaktuje się z Tobą mailowo lub telefonicznie 
                  w ciągu 24 godzin w celu potwierdzenia dostępności produktów 
                  i przesłania danych do przelewu.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <h4 className="font-medium">E-mail</h4>
                    <p className="text-sm text-muted-foreground">
                      Szczegóły zamówienia
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg">
                  <Phone className="h-5 w-5 text-primary" />
                  <div className="text-left">
                    <h4 className="font-medium">Telefon</h4>
                    <p className="text-sm text-muted-foreground">
                      Kontakt w 24h
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-accent/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">💳 Płatność</h4>
                <p className="text-sm text-muted-foreground">
                  Dane do przelewu otrzymasz w e-mailu potwierdzającym zamówienie. 
                  Po zaksięgowaniu płatności, Twoje zamówienie zostanie wysłane.
                </p>
              </div>
              
              <div className="bg-success/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">🚚 Dostawa</h4>
                <p className="text-sm text-muted-foreground">
                  Darmowa dostawa w całej Polsce. Czas dostawy: 1-3 dni robocze 
                  od momentu zaksięgowania płatności.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="space-y-4">
            <Button 
              onClick={() => navigate("/")}
              className="bg-accent hover:bg-accent-hover"
            >
              Wróć do sklepu
            </Button>
            
            <div className="text-sm text-muted-foreground">
              <p>
                Pytania? Skontaktuj się z nami: <br />
                <a href="mailto:kontakt@yappi.pl" className="text-primary hover:underline">
                  kontakt@yappi.pl
                </a> lub{" "}
                <a href="tel:+48123456789" className="text-primary hover:underline">
                  +48 123 456 789
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Potwierdzenie;