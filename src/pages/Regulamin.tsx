import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Regulamin = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Regulamin sklepu Yappi Kids - Kombinezony dziecięce"
        description="Regulamin sklepu internetowego Yappi Kids. Warunki zakupów, płatności, dostaw i zwrotów kombinezonów dziecięcych."
        keywords="regulamin sklep internetowy, warunki zakupu kombinezony dziecięce"
      />
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Regulamin sklepu
          </h1>
          
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>§ 1. Postanowienia ogólne</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>1.1.</strong> Niniejszy regulamin określa zasady funkcjonowania sklepu internetowego Yappi Kids, 
                  dostępnego pod adresem yappi-kids.pl, prowadzonego przez Yappi sp. z o.o.
                </p>
                <p>
                  <strong>1.2.</strong> Korzystanie ze sklepu internetowego oznacza akceptację postanowień niniejszego regulaminu.
                </p>
                <p>
                  <strong>1.3.</strong> Sklep internetowy umożliwia zawieranie umów sprzedaży na odległość 
                  pomiędzy Sprzedawcą a Klientami.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 2. Definicje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>2.1. Sprzedawca</strong> - Yappi sp. z o.o., ul. Przykładowa 123, 00-001 Warszawa, 
                  NIP: 1234567890, REGON: 123456789.
                </p>
                <p>
                  <strong>2.2. Klient</strong> - osoba fizyczna, prawna lub jednostka organizacyjna nieposiadająca 
                  osobowości prawnej, która dokonuje zakupu w Sklepie internetowym.
                </p>
                <p>
                  <strong>2.3. Konsument</strong> - Klient będący osobą fizyczną, która dokonuje czynności prawnej 
                  niezwiązanej bezpośrednio z jej działalnością gospodarczą lub zawodową.
                </p>
                <p>
                  <strong>2.4. Umowa sprzedaży</strong> - umowa sprzedaży zawarta pomiędzy Sprzedawcą a Klientem 
                  za pośrednictwem Sklepu internetowego.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 3. Składanie zamówień</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>3.1.</strong> Zamówienia można składać całodobowo za pośrednictwem formularza zamówienia 
                  dostępnego w Sklepie internetowym.
                </p>
                <p>
                  <strong>3.2.</strong> Warunkiem złożenia zamówienia jest wypełnienie formularza zamówienia 
                  oraz akceptacja regulaminu sklepu.
                </p>
                <p>
                  <strong>3.3.</strong> Po złożeniu zamówienia Klient otrzymuje potwierdzenie przyjęcia zamówienia 
                  na podany adres e-mail.
                </p>
                <p>
                  <strong>3.4.</strong> Umowa sprzedaży zostaje zawarta z chwilą otrzymania przez Klienta 
                  potwierdzenia przyjęcia zamówienia przez Sprzedawcę.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 4. Ceny i płatności</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>4.1.</strong> Ceny produktów w Sklepie internetowym są podane w złotych polskich 
                  i zawierają podatek VAT.
                </p>
                <p>
                  <strong>4.2.</strong> Dostawa na terenie Polski jest bezpłatna dla wszystkich zamówień.
                </p>
                <p>
                  <strong>4.3.</strong> Obecnie akceptowanym sposobem płatności jest przelew bankowy na numer karty. 
                  Dane do płatności są przesyłane w potwierdzeniu zamówienia.
                </p>
                <p>
                  <strong>4.4.</strong> Zamówienie zostanie zrealizowane po otrzymaniu płatności.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 5. Dostawa</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>5.1.</strong> Dostawa odbywa się za pośrednictwem firmy kurierskiej na terenie Polski.
                </p>
                <p>
                  <strong>5.2.</strong> Czas realizacji zamówienia wynosi 2-5 dni roboczych od momentu otrzymania płatności.
                </p>
                <p>
                  <strong>5.3.</strong> Klient zostanie poinformowany o numerze przesyłki umożliwiającym śledzenie statusu dostawy.
                </p>
                <p>
                  <strong>5.4.</strong> Ryzyko przypadkowej utraty lub uszkodzenia produktu przechodzi na Klienta 
                  z chwilą wydania produktu Klientowi lub osobie przez niego wskazanej.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 6. Prawo odstąpienia od umowy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>6.1.</strong> Konsument może odstąpić od umowy bez podania przyczyny w terminie 14 dni 
                  od dnia otrzymania produktu.
                </p>
                <p>
                  <strong>6.2.</strong> Aby skorzystać z prawa odstąpienia, Konsument musi poinformować Sprzedawcę 
                  o swojej decyzji w sposób jednoznaczny.
                </p>
                <p>
                  <strong>6.3.</strong> Produkt musi zostać zwrócony w stanie nienaruszonym, 
                  z oryginalnymi metkami i opakowaniem.
                </p>
                <p>
                  <strong>6.4.</strong> Koszt odesłania produktu ponosi Konsument, chyba że odstąpienie 
                  wynika z pomyłki Sprzedawcy.
                </p>
                <p>
                  <strong>6.5.</strong> Sprzedawca zwróci otrzymane płatności w terminie 14 dni 
                  od otrzymania oświadczenia o odstąpieniu.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 7. Reklamacje</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>7.1.</strong> Sprzedawca odpowiada względem Klienta, jeśli produkt ma wadę fizyczną 
                  lub prawną (rękojmi).
                </p>
                <p>
                  <strong>7.2.</strong> Reklamacje można zgłaszać na adres e-mail: zwroty@yappi-kids.pl 
                  lub pisemnie na adres siedziby Sprzedawcy.
                </p>
                <p>
                  <strong>7.3.</strong> Sprzedawca rozpatruje reklamację w terminie 14 dni od jej otrzymania 
                  i informuje Klienta o sposobie jej załatwienia.
                </p>
                <p>
                  <strong>7.4.</strong> W przypadku uznania reklamacji, Sprzedawca podle produktu wymianie, 
                  naprawie lub zwrotowi zgodnie z życzeniem Klienta i przepisami prawa.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 8. Ochrona danych osobowych</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>8.1.</strong> Administratorem danych osobowych Klientów jest Sprzedawca.
                </p>
                <p>
                  <strong>8.2.</strong> Dane osobowe przetwarzane są zgodnie z polityką prywatności, 
                  dostępną na stronie internetowej sklepu.
                </p>
                <p>
                  <strong>8.3.</strong> Podanie danych osobowych jest dobrowolne, ale konieczne 
                  do realizacji zamówienia.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>§ 9. Postanowienia końcowe</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  <strong>9.1.</strong> Sprzedawca zastrzega sobie prawo do zmiany niniejszego regulaminu 
                  z ważnych przyczyn.
                </p>
                <p>
                  <strong>9.2.</strong> W sprawach nieuregulowanych niniejszym regulaminem mają zastosowanie 
                  przepisy prawa polskiego.
                </p>
                <p>
                  <strong>9.3.</strong> Ewentualne spory będą rozstrzygane przez sąd właściwy 
                  według siedziby Sprzedawcy.
                </p>
                <p>
                  <strong>9.4.</strong> Regulamin wchodzi w życie z dniem publikacji w sklepie internetowym.
                </p>
              </CardContent>
            </Card>

            <div className="text-center text-sm text-muted-foreground pt-8">
              <p>Ostatnia aktualizacja: 10 stycznia 2024</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Regulamin;