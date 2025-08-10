import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  structuredData?: object;
}

const SEOHead = ({
  title = "Yappi - Ciepłe Kombinezony Dziecięce | Darmowa Dostawa",
  description = "Ciepłe, wygodne kombinezony dziecięce Yappi. Dostępne rozmiary 86-116, kolory szary i niebieski. Darmowa dostawa w całej Polsce!",
  keywords = "kombinezon dziecięcy, kombinezon dla dziecka, kombinezon zimowy dla dzieci, kombinezon Yappi, odzież dziecięca",
  image = "/hero-image.jpg",
  url = "/",
  structuredData
}: SEOHeadProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={`https://yappi-kids.pl${url}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={`https://yappi-kids.pl${url}`} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:site_name" content="Yappi Kids" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;