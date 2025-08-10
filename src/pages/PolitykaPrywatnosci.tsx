import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PolitykaPrywatnosci = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Polityka prywatności - Yappi Kids"
        description="Polityka prywatności sklepu Yappi Kids. Dowiedz się jak przetwarzamy i chronimy Twoje dane osobowe zgodnie z RODO."
        keywords="polityka prywatności, ochrona danych osobowych, RODO, prywatność"
      />
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Polityka prywatności
          </h1>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Informacje ogólne</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>1.2.</strong> Możesz skontaktować się z nami w sprawach dotyczących ochrony danych 
                  na adres e-mail: kontakt@yappi.pl.
                </p>
                <p>
                  <strong>1.3.</strong> Niniejsza polityka prywatności określa zasady przetwarzania 
                  i ochrony danych osobowych w związku z korzystaniem ze sklepu internetowego yappi.pl.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Rodzaje przetwarzanych danych</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>2.1.</strong> W związku z realizacją zamówień przetwarzamy następujące dane:
                  <br/>• Imię i nazwisko
                  <br/>• Adres e-mail
                  <br/>• Numer telefonu (opcjonalnie)
                  <br/>• Adres dostawy (ulica, kod pocztowy, miasto)
                </p>
                <p>
                  <strong>2.2.</strong> Podczas korzystania ze strony automatycznie zbieramy dane techniczne:
                  <br/>• Adres IP
                  <br/>• Typ przeglądarki
                  <br/>• System operacyjny
                  <br/>• Czas wizyty na stronie
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Cele i podstawy prawne przetwarzania</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>3.1. Realizacja zamówień</strong>
                  <br/>• Cel: wykonanie umowy sprzedaży
                  <br/>• Podstawa prawna: art. 6 ust. 1 lit. b RODO
                  <br/>• Okres przechowywania: przez czas niezbędny do realizacji umowy i rozliczenia gwarancji
                </p>
                <p>
                  <strong>3.2. Komunikacja z klientami</strong>
                  <br/>• Cel: obsługa zapytań i reklamacji
                  <br/>• Podstawa prawna: art. 6 ust. 1 lit. f RODO (uzasadniony interes)
                  <br/>• Okres przechowywania: do czasu wyjaśnienia sprawy
                </p>
                <p>
                  <strong>3.3. Prowadzenie ksiąg rachunkowych</strong>
                  <br/>• Cel: wywiązywanie się z obowiązków podatkowych
                  <br/>• Podstawa prawna: art. 6 ust. 1 lit. c RODO (obowiązek prawny)
                  <br/>• Okres przechowywania: 5 lat od końca roku, w którym powstał obowiązek podatkowy
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Przekazywanie danych</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>4.1.</strong> Twoje dane mogą być przekazywane następującym odbiorcom:
                  <br/>• Firmy kurierskie - w celu realizacji dostawy
                  <br/>• Podmioty obsługujące płatności - w celu realizacji transakcji
                  <br/>• Biuro rachunkowe - w celu prowadzenia ksiąg rachunkowych
                  <br/>• Organy państwowe - jeśli wynika to z przepisów prawa
                </p>
                <p>
                  <strong>4.2.</strong> Wszystkie podmioty przetwarzające dane w naszym imieniu 
                  zobowiązane są do zachowania poufności i bezpieczeństwa danych.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Twoje prawa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>5.1.</strong> Masz prawo do:
                  <br/>• Dostępu do swoich danych osobowych
                  <br/>• Sprostowania nieprawidłowych danych
                  <br/>• Usunięcia danych (prawo do bycia zapomnianym)
                  <br/>• Ograniczenia przetwarzania
                  <br/>• Przenoszenia danych
                  <br/>• Wyrażenia sprzeciwu wobec przetwarzania
                </p>
                <p>
                  <strong>5.2.</strong> Aby skorzystać z powyższych praw, skontaktuj się z nami 
                  na adres kontakt@yappi.pl.
                </p>
                <p>
                  <strong>5.3.</strong> Masz również prawo do wniesienia skargi do Prezesa 
                  Urzędu Ochrony Danych Osobowych.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>6.1.</strong> Nasza strona używa plików cookies w celu:
                  <br/>• Zapewnienia prawidłowego funkcjonowania sklepu
                  <br/>• Zapamiętania zawartości koszyka
                  <br/>• Analizy ruchu na stronie (Google Analytics)
                </p>
                <p>
                  <strong>6.2.</strong> Możesz kontrolować ustawienia cookies w swojej przeglądarce. 
                  Wyłączenie cookies może wpłynąć na funkcjonalność sklepu.
                </p>
                <p>
                  <strong>6.3.</strong> Szczegółowe informacje o używanych cookies znajdziesz 
                  w ustawieniach cookies na naszej stronie.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Bezpieczeństwo danych</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>7.1.</strong> Stosujemy odpowiednie środki techniczne i organizacyjne 
                  w celu zapewnienia bezpieczeństwa Twoich danych osobowych.
                </p>
                <p>
                  <strong>7.2.</strong> Nasz serwis jest zabezpieczony certyfikatem SSL, 
                  który szyfruje przekazywane dane.
                </p>
                <p>
                  <strong>7.3.</strong> Dostęp do danych osobowych mają tylko upoważnione osoby, 
                  które zostały przeszkolone w zakresie ochrony danych.
                </p>
                <p>
                  <strong>7.4.</strong> Regularnie tworzymy kopie zapasowe danych i testujemy 
                  procedury ich odzyskiwania.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Zmiany polityki prywatności</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>8.1.</strong> Zastrzegamy sobie prawo do wprowadzania zmian 
                  w niniejszej polityce prywatności.
                </p>
                <p>
                  <strong>8.2.</strong> O wszelkich zmianach będziemy informować poprzez 
                  publikację zaktualizowanej wersji na naszej stronie internetowej.
                </p>
                <p>
                  <strong>8.3.</strong> W przypadku istotnych zmian, powiadomimy Cię 
                  dodatkowo poprzez e-mail.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  W sprawach dotyczących ochrony danych osobowych możesz skontaktować się z nami:
                </p>
                <p>
                  <strong>E-mail:</strong> kontakt@yappi.pl<br/>
                  <strong>Telefon:</strong> +48 123 456 789
                </p>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground pt-8">
              <p>Ostatnia aktualizacja: 10 sierpnia 2025</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PolitykaPrywatnosci;