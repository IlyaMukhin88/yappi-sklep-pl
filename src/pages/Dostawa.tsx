import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, RotateCcw, Clock, Shield } from "lucide-react";

const Dostawa = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Dostawa i zwroty kombinezonów Yappi - Darmowa dostawa w Polsce"
        description="Darmowa dostawa kombinezonów dziecięcych Yappi w całej Polsce. Poznaj warunki dostawy, czas realizacji i politykę zwrotów."
        keywords="darmowa dostawa kombinezon dziecięcy, zwroty, reklamacje, dostawa w Polsce"
      />
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Dostawa i zwroty
          </h1>
          
          <div className="grid gap-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Truck className="h-5 w-5 text-primary" />
                    Dostawa
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Darmowa dostawa</h3>
                    <p className="text-muted-foreground">
                      Oferujemy bezpłatną dostawę na terenie całej Polski 
                      dla wszystkich zamówień kombinezonów Yappi.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Czas realizacji</h3>
                    <p className="text-muted-foreground">
                      • Przygotowanie zamówienia: 1-2 dni robocze<br/>
                      • Dostawa kurierem: 1-3 dni robocze<br/>
                      • Łączny czas: 2-5 dni roboczych
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Sposób dostawy</h3>
                    <p className="text-muted-foreground">
                      Przesyłki dostarczane są przez renomowaną firmę kurierską 
                      z możliwością śledzenia przesyłki.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <RotateCcw className="h-5 w-5 text-primary" />
                    Zwroty
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Prawo do zwrotu</h3>
                    <p className="text-muted-foreground">
                      Masz 14 dni na zwrot produktu bez podania przyczyny, 
                      zgodnie z prawem konsumenckim.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Warunki zwrotu</h3>
                    <p className="text-muted-foreground">
                      • Produkt w stanie nienaruszonym<br/>
                      • Oryginalne opakowanie i metki<br/>
                      • Bez śladów użytkowania
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Koszt zwrotu</h3>
                    <p className="text-muted-foreground">
                      Koszt odesłania ponosi klient, chyba że zwrot 
                      wynika z naszej pomyłki.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Proces zamówienia
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">1</div>
                    <h3 className="font-semibold mb-2">Składanie zamówienia</h3>
                    <p className="text-sm text-muted-foreground">Wybierz produkt, rozmiar i złóż zamówienie online</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">2</div>
                    <h3 className="font-semibold mb-2">Potwierdzenie</h3>
                    <p className="text-sm text-muted-foreground">Otrzymasz e-mail z potwierdzeniem i instrukcjami płatności</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">3</div>
                    <h3 className="font-semibold mb-2">Realizacja</h3>
                    <p className="text-sm text-muted-foreground">Po otrzymaniu płatności realizujemy zamówienie</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold mx-auto mb-3">4</div>
                    <h3 className="font-semibold mb-2">Dostawa</h3>
                    <p className="text-sm text-muted-foreground">Kurier dostarcza paczkę pod wskazany adres</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Gwarancja jakości
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Wszystkie nasze produkty objęte są gwarancją jakości. 
				  W przypadku wad produkcyjnych oferujemy wymianę lub zwrot pieniędzy, za wyłączeniem kosztów przesyłki.
                </p>
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Kontakt w sprawie zwrotów:</strong><br/>
                    E-mail: kontakt@yappi.pl<br/>
                    Telefon: +48 123 456 789<br/>
                    Godziny: 9:00-17:00, pon-pt
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

export default Dostawa;