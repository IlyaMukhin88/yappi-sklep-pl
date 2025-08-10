import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Shield, Truck, Users } from "lucide-react";

const ONas = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="O nas - Yappi Kids | Historia marki kombinezonów dziecięcych"
        description="Poznaj historię marki Yappi Kids. Tworzymy najcieplejsze i najwygodniejsze kombinezony dziecięce z myślą o polskich rodzinach."
        keywords="o nas Yappi Kids, historia marki kombinezony dziecięce, producent odzieży dziecięcej"
      />
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            O nas
          </h1>
          
          <div className="space-y-16">
            {/* Hero section */}
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Tworzymy kombinezony z myślą o Twoim dziecku
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Yappi Kids to polska marka specjalizująca się w produkcji wysokiej jakości 
                kombinezonów dziecięcych. Od 2020 roku tworzymy odzież, która łączy w sobie 
                komfort, bezpieczeństwo i style, idealnie dostosowaną do polskich warunków klimatycznych.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Miłość do dzieci</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Każdy kombinezon projektujemy z myślą o komforcie 
                    i bezpieczeństwie najmłodszych.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Najwyższa jakość</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Używamy tylko certyfikowanych materiałów, 
                    bezpiecznych dla delikatnej skóry dziecka.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Truck className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Darmowa dostawa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Bezpłatna dostawa w całej Polsce, 
                    bo każde dziecko zasługuje na ciepło.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>Wsparcie rodzin</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Jesteśmy tu dla polskich rodzin, 
                    oferując wsparcie na każdym etapie zakupu.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Story */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Nasza historia
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Marka Yappi Kids powstała z potrzeby serca polskich rodziców, 
                    którzy szukali kombinezonów dziecięcych idealnie dostosowanych 
                    do naszego klimatu. Założyciele marki, sami będąc rodzicami, 
                    dostrzegli lukę na rynku wysokiej jakości odzieży dziecięcej 
                    w przystępnych cenach.
                  </p>
                  <p>
                    W 2020 roku rozpoczęliśmy pracę nad pierwszymi modelami, 
                    współpracując z najlepszymi projektantami i technologami. 
                    Naszym celem było stworzenie kombinezonu, który będzie 
                    nie tylko ciepły i wygodny, ale także bezpieczny i trwały.
                  </p>
                  <p>
                    Dziś, po czterech latach intensywnej pracy, jesteśmy dumni 
                    z tego, co udało nam się osiągnąć. Tysiące polskich rodzin 
                    zaufało naszym produktom, a ich opinie są dla nas 
                    najważniejszą nagrodą.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Dlaczego wybrać Yappi?
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Materiały najwyższej jakości, certyfikowane dla dzieci</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Projektowanie z myślą o polskim klimacie</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Przystępne ceny przy najwyższej jakości</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Darmowa dostawa w całej Polsce</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Pełna obsługa posprzedażowa</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Mission */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-2xl">Nasza misja</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center max-w-3xl mx-auto">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Naszą misją jest zapewnienie każdemu polskiemu dziecku dostępu do ciepłej, 
                    wygodnej i bezpiecznej odzieży. Wierzymy, że każde dziecko zasługuje na to, 
                    aby czuć się komfortowo podczas zabawy na świeżym powietrzu, niezależnie od pogody.
                  </p>
                  <div className="mt-8 p-6 bg-accent/10 rounded-lg">
                    <p className="font-semibold text-foreground">
                      "Ciepło dla każdego dziecka, radość dla każdej rodziny"
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      - motto marki Yappi Kids
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Zespół
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Za marką Yappi Kids stoi zespół doświadczonych projektantów, technologów 
                i specjalistów od obsługi klienta. Wszyscy jesteśmy rodzicami i rozumiemy, 
                jak ważny jest komfort i bezpieczeństwo naszych dzieci. To właśnie ta 
                osobista motywacja napędza nas do ciągłego doskonalenia naszych produktów.
              </p>
            </div>

            {/* Contact CTA */}
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="text-center p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Masz pytania? Skontaktuj się z nami!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Jesteśmy tu, aby pomóc Ci wybrać idealne kombinezony dla Twojego dziecka. 
                  Nasz zespół obsługi klienta odpowie na wszystkie Twoje pytania.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/kontakt" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors"
                  >
                    Skontaktuj się z nami
                  </a>
                  <a 
                    href="/faq" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-md font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    Zobacz FAQ
                  </a>
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

export default ONas;