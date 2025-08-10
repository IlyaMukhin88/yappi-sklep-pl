import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  colors: Array<{
    name: string;
    value: string;
    image: string;
  }>;
  sizes: string[];
  onAddToCart?: (productId: string, color: string, size: string, quantity: number) => void;
}

const ProductCard = ({ id, name, price, colors, sizes, onAddToCart }: ProductCardProps) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value || "");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const selectedColorData = colors.find(c => c.value === selectedColor);

  const handleAddToCart = () => {
    if (selectedColor && selectedSize && onAddToCart) {
      onAddToCart(id, selectedColor, selectedSize, quantity);
    }
  };

  const canAddToCart = selectedColor && selectedSize;

  return (
    <Card className="group overflow-hidden shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img
          src={selectedColorData?.image || colors[0]?.image}
          alt={`${name} - ${selectedColorData?.name || colors[0]?.name}`}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <Badge className="absolute top-3 right-3 bg-success text-success-foreground">
          Dostawa w cenie
        </Badge>
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 left-3 text-white bg-black/20 hover:bg-black/40 backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-3xl font-bold text-primary mb-4">{price} zł</p>

        <div className="space-y-4">
          {/* Color Selection */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Kolor:
            </label>
            <div className="flex gap-2">
              {colors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => setSelectedColor(color.value)}
                  className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                    selectedColor === color.value
                      ? 'border-primary ring-2 ring-primary/20'
                      : 'border-border hover:border-primary/50'
                  }`}
                  style={{ backgroundColor: color.value === 'szary' ? 'hsl(var(--product-gray))' : 'hsl(var(--product-blue))' }}
                  title={color.name}
                />
              ))}
            </div>
            {selectedColorData && (
              <p className="text-sm text-muted-foreground mt-1">
                Wybrany: {selectedColorData.name}
              </p>
            )}
          </div>

          {/* Size Selection */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Rozmiar:
            </label>
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger>
                <SelectValue placeholder="Wybierz rozmiar" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Quantity */}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">
              Ilość:
            </label>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="text-lg font-semibold px-4">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0 flex flex-col gap-3">
        <Button
          className="w-full bg-accent hover:bg-accent-hover text-accent-foreground"
          onClick={handleAddToCart}
          disabled={!canAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Dodaj do koszyka
        </Button>
        
        <Button 
          variant="outline" 
          className="w-full"
          onClick={handleAddToCart}
          disabled={!canAddToCart}
        >
          Kup teraz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;