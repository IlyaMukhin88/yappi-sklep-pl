import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById('produkty');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Ciepłe, wygodne
            <span className="text-accent block">kombinezony dziecięce</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Kombinezon Yappi — idealny na każdą pogodę.<br />
            <strong className="text-accent">Darmowa dostawa</strong> w całej Polsce!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-accent-foreground px-8 py-6 text-lg font-semibold rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
              onClick={scrollToProducts}
            >
              Kup teraz
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-foreground px-8 py-6 text-lg rounded-full backdrop-blur-sm bg-white/10"
              onClick={scrollToProducts}
            >
              Zobacz produkty
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">86-116</div>
              <div className="text-sm text-white/80">Rozmiary</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">2</div>
              <div className="text-sm text-white/80">Kolory</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">24h</div>
              <div className="text-sm text-white/80">Wysyłka</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-accent">0 zł</div>
              <div className="text-sm text-white/80">Dostawa</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;