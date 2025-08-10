import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TabelaRozmiarow = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Tabela rozmiarów kombinezonów dziecięcych Yappi"
        description="Sprawdź dokładne wymiary kombinezonów Yappi dla dzieci. Rozmiary 86-116 cm z wymiarami i poradami jak dobrać odpowiedni rozmiar."
        keywords="tabela rozmiarów kombinezon dziecięcy, rozmiary 86 92 98 104 110 116, jak dobrać rozmiar kombinezon"
      />
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Tabela rozmiarów
          </h1>
          
          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Rozmiary kombinezonów Yappi</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 font-semibold">Rozmiar</th>
                        <th className="text-left p-4 font-semibold">Wzrost (cm)</th>
                        <th className="text-left p-4 font-semibold">Wiek (w przybliżeniu)</th>
                        <th className="text-left p-4 font-semibold">Obwód klatki (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">86</td>
                        <td className="p-4">80-86</td>
                        <td className="p-4">12-18 miesięcy</td>
                        <td className="p-4">50-52</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">92</td>
                        <td className="p-4">86-92</td>
                        <td className="p-4">18-24 miesięcy</td>
                        <td className="p-4">52-54</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">98</td>
                        <td className="p-4">92-98</td>
                        <td className="p-4">2-3 lata</td>
                        <td className="p-4">54-56</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">104</td>
                        <td className="p-4">98-104</td>
                        <td className="p-4">3-4 lata</td>
                        <td className="p-4">56-58</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">110</td>
                        <td className="p-4">104-110</td>
                        <td className="p-4">4-5 lat</td>
                        <td className="p-4">58-60</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">116</td>
                        <td className="p-4">110-116</td>
                        <td className="p-4">5-6 lat</td>
                        <td className="p-4">60-62</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Jak dobrać odpowiedni rozmiar?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">1. Zmierz wzrost dziecka</h3>
                  <p className="text-muted-foreground">
                    Najlepiej mierzyć rano, gdy dziecko stoi przy ścianie bez butów. 
                    Kombinezon powinien być o 2-4 cm dłuższy od wzrostu dziecka.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">2. Sprawdź obwód klatki piersiowej</h3>
                  <p className="text-muted-foreground">
                    Zmierz obwód pod pachami, na wysokości klatki piersiowej. 
                    Kombinezon powinien być luźny, aby dziecko mogło się swobodnie poruszać.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">3. Uwzględnij czas noszenia</h3>
                  <p className="text-muted-foreground">
                    Jeśli kupujesz kombinezon na cały sezon, warto wybrać rozmiar większy, 
                    ponieważ dzieci szybko rosną.
                  </p>
                </div>
                
                <div className="bg-accent/10 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Wskazówka:</strong> W przypadku wątpliwości między dwoma rozmiarami, 
                    zalecamy wybór większego rozmiaru dla większego komfortu i dłuższego użytkowania.
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

export default TabelaRozmiarow;