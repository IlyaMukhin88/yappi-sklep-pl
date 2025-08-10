const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-16">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Yappi</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Ciepłe, wygodne kombinezony dziecięce najwyższej jakości. 
              Idealne na każdą pogodę, stworzone z myślą o komforcie i bezpieczeństwie dzieci.
            </p>
            <p className="text-sm text-muted-foreground">
              <strong>Darmowa dostawa</strong> na terenie całej Polski
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Sklep</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#produkty" className="hover:text-primary transition-colors">Produkty</a></li>
              <li><a href="/tabela-rozmiarow" className="hover:text-primary transition-colors">Tabela rozmiarów</a></li>
              <li><a href="/dostawa" className="hover:text-primary transition-colors">Dostawa i zwroty</a></li>
              <li><a href="/faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Obsługa klienta</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/kontakt" className="hover:text-primary transition-colors">Kontakt</a></li>
              <li><a href="/regulamin" className="hover:text-primary transition-colors">Regulamin</a></li>
              <li><a href="/polityka-prywatnosci" className="hover:text-primary transition-colors">Polityka prywatności</a></li>
              <li><a href="/o-nas" className="hover:text-primary transition-colors">O nas</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Yappi. Wszystkie prawa zastrzeżone.
          </p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground">
              Płatność: Przelew bankowy
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;