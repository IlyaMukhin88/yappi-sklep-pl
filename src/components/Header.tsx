import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  cartItemsCount?: number;
  onCartClick?: () => void;
}

const Header = ({ cartItemsCount = 0, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-primary">Yappi</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Strona główna
          </a>
          <a href="#produkty" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Produkty
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            Kontakt
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="relative"
            onClick={onCartClick}
          >
            <ShoppingCart className="h-5 w-5" />
            {cartItemsCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-accent text-xs font-semibold text-accent-foreground flex items-center justify-center">
                {cartItemsCount}
              </span>
            )}
          </Button>
          
          <Button variant="ghost" size="sm" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;