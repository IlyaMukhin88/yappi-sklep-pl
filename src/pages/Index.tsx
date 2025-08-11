import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import CartSidebar from "@/components/CartSidebar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { useCart } from "@/hooks/useCart";
import kombinezkonSzaryImage from "@/assets/kombinezon-szary.jpg";
import kombinezkonNiebieskiImage from "@/assets/kombinezon-niebieski.jpg";

const Index = () => {
  const navigate = useNavigate();
  const { cart, addToCart, updateQuantity, removeFromCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (productId: string, color: string, size: string, quantity: number) => {
    const productImages = {
      szary: kombinezkonSzaryImage,
      niebieski: kombinezkonNiebieskiImage
    };

    addToCart(
      productId,
      "Kombinezon dziecięcy Yappi",
      color,
      size,
      quantity,
      89, // price
      productImages[color as keyof typeof productImages]
    );
  };

  const handleCheckout = () => {
    navigate("/zamowienie");
  };

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Yappi Kids",
    "url": "https://yappi.pl",
    "description": "Ciepłe, wygodne kombinezony dziecięce Yappi",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://yappi.pl/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Yappi - Ciepłe Kombinezony Dziecięce | Darmowa Dostawa"
        description="Ciepłe, wygodne kombinezony dziecięce Yappi. Dostępne rozmiary 86-116, kolory szary i niebieski. Darmowa dostawa w całej Polsce!"
        keywords="kombinezon dziecięcy, kombinezon dla dziecka, kombinezon zimowy dla dzieci, kombinezon Yappi, odzież dziecięca, rozmiary 86 92 98 104 110 116"
        structuredData={structuredData}
      />
      <Header 
        cartItemsCount={cart.itemsCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main>
        <HeroSection />
        <ProductsSection onAddToCart={handleAddToCart} />
      </main>

      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onCheckout={handleCheckout}
      />
    </div>
  );
};

export default Index;
