import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Clock, MessageCircle } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Kontakt - Yappi Kids | Kombinezony dziecięce"
        description="Skontaktuj się z nami w sprawie kombinezonów dziecięcych Yappi. E-mail, telefon, formularz kontaktowy. Odpowiadamy w ciągu 24h."
        keywords="kontakt Yappi, obsługa klienta kombinezony dziecięce, pomoc zakupy online"
      />
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Kontakt
          </h1>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-primary" />
                    Wyślij wiadomość
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Imię *</Label>
                        <Input id="firstName" placeholder="Twoje imię" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Nazwisko *</Label>
                        <Input id="lastName" placeholder="Twoje nazwisko" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input id="email" type="email" placeholder="twoj@email.pl" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Telefon</Label>
                      <Input id="phone" placeholder="+48 123 456 789" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Temat *</Label>
                      <Input id="subject" placeholder="Temat wiadomości" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Wiadomość *</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Opisz swoje pytanie lub problem..."
                        rows={6}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full">
                      Wyślij wiadomość
                    </Button>
                    
                    <p className="text-sm text-muted-foreground">
                      * Pola wymagane. Odpowiadamy na wszystkie zapytania w ciągu 24 godzin w dni robocze.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-primary" />
                    E-mail
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Ogólne zapytania</h3>
                      <p className="text-muted-foreground">kontakt@yappi-kids.pl</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Zamówienia</h3>
                      <p className="text-muted-foreground">zamowienia@yappi-kids.pl</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Zwroty i reklamacje</h3>
                      <p className="text-muted-foreground">zwroty@yappi-kids.pl</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Telefon
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold">Infolinia</h3>
                      <p className="text-muted-foreground">+48 123 456 789</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Obsługa klienta</h3>
                      <p className="text-muted-foreground">+48 987 654 321</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    Godziny pracy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Poniedziałek - Piątek</span>
                      <span className="text-muted-foreground">9:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sobota</span>
                      <span className="text-muted-foreground">10:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Niedziela</span>
                      <span className="text-muted-foreground">Nieczynne</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                    <p className="text-sm">
                      <strong>Szybka pomoc:</strong> W przypadku pilnych pytań dotyczących zamówień, 
                      prosimy o kontakt e-mailowy - odpowiadamy najszybciej jak to możliwe.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Często zadawane pytania</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Zanim napiszesz do nas, sprawdź naszą sekcję FAQ - 
                    być może znajdziesz tam odpowiedź na swoje pytanie.
                  </p>
                  <Button variant="outline" asChild className="w-full">
                    <a href="/faq">Zobacz FAQ</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Kontakt;