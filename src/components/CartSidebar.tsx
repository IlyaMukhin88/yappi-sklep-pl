import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { Cart, CartItem } from "@/types/cart";

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Cart;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemoveItem: (itemId: string) => void;
  onCheckout: () => void;
}

const CartSidebar = ({ 
  isOpen, 
  onClose, 
  cart, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout 
}: CartSidebarProps) => {
  const handleCheckout = () => {
    onCheckout();
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Koszyk ({cart.itemsCount})
          </SheetTitle>
        </SheetHeader>

        {cart.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Koszyk jest pusty
            </h3>
            <p className="text-muted-foreground mb-4">
              Dodaj produkty do koszyka, aby kontynuować zakupy
            </p>
            <Button onClick={onClose}>
              Kontynuuj zakupy
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 py-4">
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <CartItemComponent
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemoveItem}
                  />
                ))}
              </div>
            </ScrollArea>

            <div className="space-y-4">
              <Separator />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Produkty:</span>
                  <span>{cart.total} zł</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Dostawa:</span>
                  <span className="text-success font-semibold">Gratis</span>
                </div>
                <Separator />
                <div className="flex justify-between text-lg font-semibold">
                  <span>Razem:</span>
                  <span>{cart.total} zł</span>
                </div>
              </div>

              <SheetFooter>
                <Button 
                  className="w-full bg-accent hover:bg-accent-hover"
                  onClick={handleCheckout}
                >
                  Przejdź do zamówienia
                </Button>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

interface CartItemComponentProps {
  item: CartItem;
  onUpdateQuantity: (itemId: string, quantity: number) => void;
  onRemove: (itemId: string) => void;
}

const CartItemComponent = ({ item, onUpdateQuantity, onRemove }: CartItemComponentProps) => {
  return (
    <div className="flex gap-3 p-3 bg-muted/30 rounded-lg">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      
      <div className="flex-1 min-w-0">
        <h4 className="font-medium text-foreground truncate">{item.name}</h4>
        <p className="text-sm text-muted-foreground">
          {item.color} • Rozmiar {item.size}
        </p>
        <p className="text-sm font-semibold text-primary">{item.price} zł</p>
      </div>

      <div className="flex flex-col items-end gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onRemove(item.id)}
          className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-3 w-3" />
        </Button>
        
        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="h-6 w-6 p-0"
          >
            <Minus className="h-3 w-3" />
          </Button>
          
          <span className="text-sm font-medium px-2 min-w-[24px] text-center">
            {item.quantity}
          </span>
          
          <Button
            variant="outline"
            size="sm"
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="h-6 w-6 p-0"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;