import ProductCard from "./ProductCard";
import kombinezkonSzaryImage from "@/assets/kombinezon-szary.jpg";
import kombinezkonNiebieskiImage from "@/assets/kombinezon-niebieski.jpg";

interface ProductsSectionProps {
  onAddToCart?: (productId: string, color: string, size: string, quantity: number) => void;
}

const ProductsSection = ({ onAddToCart }: ProductsSectionProps) => {
  const products = [
    {
      id: "yappi-kombinezon",
      name: "Kombinezon dziecięcy Yappi",
      price: 89,
      colors: [
        {
          name: "Szary",
          value: "szary",
          image: kombinezkonSzaryImage
        },
        {
          name: "Niebieski", 
          value: "niebieski",
          image: kombinezkonNiebieskiImage
        }
      ],
      sizes: ["86", "92", "98", "104", "110", "116"]
    }
  ];

  return (
    <section id="produkty" className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nasze produkty
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Odkryj kolekcję ciepłych, wygodnych kombinezonów Yappi. 
            Idealne na każdą pogodę, dostępne w dwóch pięknych kolorach.
          </p>
        </div>

        <div className="flex justify-center">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              colors={product.colors}
              sizes={product.sizes}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* USP Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">🚚</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Darmowa dostawa</h3>
            <p className="text-muted-foreground">Bezpłatna wysyłka na terenie całej Polski</p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">❄️</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Ciepło i komfort</h3>
            <p className="text-muted-foreground">Wysokiej jakości materiały zapewniają ciepło</p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-2xl">👶</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Bezpieczne dla dzieci</h3>
            <p className="text-muted-foreground">Certyfikowane materiały, bezpieczne dla skóry</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;