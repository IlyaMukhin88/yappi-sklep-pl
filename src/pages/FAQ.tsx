import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="FAQ - Często zadawane pytania o kombinezony Yappi"
        description="Odpowiedzi na najczęściej zadawane pytania o kombinezony dziecięce Yappi. Dowiedz się więcej o rozmiarach, pielęgnacji i zamówieniach."
        keywords="FAQ kombinezony dziecięce, pytania odpowiedzi Yappi, jak prać kombinezon dziecięcy"
      />
      <Header />
      
      <main className="container px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">
            Często zadawane pytania
          </h1>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Jakie rozmiary kombinezonów są dostępne?
              </AccordionTrigger>
              <AccordionContent>
                Kombinezony Yappi dostępne są w rozmiarach 86, 92, 98, 104, 110 i 116 cm. 
                Każdy rozmiar odpowiada wzrostowi dziecka i jest dostosowany do różnych grup wiekowych 
                - od 12 miesięcy do 6 lat. Sprawdź naszą tabelę rozmiarów, aby wybrać odpowiedni rozmiar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Jakie kolory kombinezonów oferujecie?
              </AccordionTrigger>
              <AccordionContent>
                Obecnie oferujemy kombinezony Yappi w dwóch kolorach: szarym i niebieskim. 
                Oba kolory są uniwersalne i pasują zarówno do dziewczynek, jak i chłopców. 
                Kolory są trwałe i nie blakną podczas prania.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Czy dostawa jest rzeczywiście darmowa?
              </AccordionTrigger>
              <AccordionContent>
                Tak! Oferujemy całkowicie darmową dostawę na terenie całej Polski dla wszystkich zamówień. 
                Nie ma minimalnej kwoty zamówienia - nawet jeśli zamawiasz jeden kombinezon, 
                dostawa jest bezpłatna. Przesyłki realizujemy za pośrednictwem renomowanej firmy kurierskiej.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Jak długo trwa realizacja zamówienia?
              </AccordionTrigger>
              <AccordionContent>
                Standardowy czas realizacji zamówienia to 2-5 dni roboczych. Składa się z:
                <br/>• 1-2 dni na przygotowanie zamówienia
                <br/>• 1-3 dni na dostawę kurierem
                <br/>
                Po wysłaniu otrzymasz numer śledzenia, dzięki któremu możesz sprawdzić status przesyłki.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Jak dbać o kombinezon Yappi?
              </AccordionTrigger>
              <AccordionContent>
                Kombinezony Yappi są łatwe w pielęgnacji:
                <br/>• Pranie w pralce w temperaturze do 30°C
                <br/>• Używaj delikatnych detergentów bez wybielaczy
                <br/>• Suszenie w pozycji poziomej lub na suszarce
                <br/>• Nie prasować bezpośrednio - używaj tkaniny ochronnej
                <br/>• Nie czyścić chemicznie
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Czy można zwrócić kombinezon?
              </AccordionTrigger>
              <AccordionContent>
                Tak, masz prawo do zwrotu w ciągu 14 dni od otrzymania produktu bez podania przyczyny. 
                Kombinezon musi być w stanie nienaruszonym, z oryginalnymi metkami i opakowaniem. 
                Koszt odesłania ponosi klient, chyba że zwrot wynika z naszej pomyłki.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Jakie sposoby płatności przyjmujecie?
              </AccordionTrigger>
              <AccordionContent>
                Aktualnie przyjmujemy płatności przelewem bankowym na numer karty. 
                Po złożeniu zamówienia otrzymasz e-mail z danymi do przelewu i instrukcjami płatności. 
                Zamówienie zostanie zrealizowane po otrzymaniu płatności.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Z jakich materiałów wykonane są kombinezony?
              </AccordionTrigger>
              <AccordionContent>
                Kombinezony Yappi wykonane są z wysokiej jakości materiałów:
                <br/>• Zewnętrzna warstwa: wodoodporna tkanina
                <br/>• Wypełnienie: ciepła wata syntetyczna
                <br/>• Podszewka: miękka, przyjazna dla skóry tkanina
                <br/>• Wszystkie materiały posiadają certyfikaty bezpieczeństwa dla dzieci
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Czy kombinezony są odpowiednie na zimę?
              </AccordionTrigger>
              <AccordionContent>
                Tak! Kombinezony Yappi zostały zaprojektowane z myślą o polskich warunkach klimatycznych. 
                Zapewniają ochronę przed chłodem, wiatrem i wilgocią. Są idealne na jesień i zimę, 
                zapewniając dziecku ciepło i komfort podczas zabaw na świeżym powietrzu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Jak mogę skontaktować się z obsługą klienta?
              </AccordionTrigger>
              <AccordionContent>
                Możesz skontaktować się z nami na kilka sposobów:
                <br/>• E-mail: kontakt@yappi-kids.pl
                <br/>• Telefon: +48 123 456 789
                <br/>• Godziny pracy: 9:00-17:00, poniedziałek-piątek
                <br/>• Strona kontaktowa: formularz na stronie /kontakt
                <br/>
                Odpowiadamy na wszystkie zapytania w ciągu 24 godzin w dni robocze.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;