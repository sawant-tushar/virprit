import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import HeroCarousel from "@/components/HeroCarousel";
import SEO from "@/components/SEO";
import aboutImage from "@assets/IMG-20250712-WA0020_1752494051443.jpg";
import gallery1 from "@assets/2209.i518.002.S.m005.c13.realistic box mockup design set_1752494051433.jpg";
import gallery2 from "@assets/41532_1752494051437.jpg";
import gallery3 from "@assets/384474-PC21ZY-538_1752494051438.jpg";
import gallery4 from "@assets/IMG-20250712-WA0007_1752494051439.jpg";
import gallery5 from "@assets/4992296_1752494051438.jpg";
import gallery6 from "@assets/IMG-20250712-WA0021_1752494051443.jpg";
import gallery7 from "@assets/IMG-20250712-WA0027_1752494374093.jpg";
import gallery8 from "@assets/IMG-20250712-WA0028_1752494374095.jpg";
import gallery9 from "@assets/IMG-20250712-WA0029_1752494374096.jpg";
import gallery10 from "@assets/IMG-20250712-WA0030_1752494374096.jpg";
import gallery11 from "@assets/IMG-20250712-WA0031_1752494374097.jpg";
import gallery12 from "@assets/IMG-20250713-WA0003_1752494374097.jpg";
import gallery13 from "@assets/IMG-20250713-WA0004_1752494374098.jpg";
import gallery14 from "@assets/IMG-20250713-WA0005_1752494374098.jpg";
import gallery15 from "@assets/IMG-20250713-WA0006_1752494374099.jpg";
import gallery16 from "@assets/Pic.jpg";
import gallery17 from "@assets/IMG-20250713-WA0012_1752494374100.jpg";
import gallery18 from "@assets/IMG-20250713-WA0014_1752494374100.jpg";
import gallery19 from "@assets/printed-envelope.jpg";
import gallery20 from "@assets/istockphoto-531492115-612x612_1752494374101.jpg";
import gallery21 from "@assets/m021t006_paper_food_box_mockup_02_1752494374102.jpg";

export default function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEO
        title="Virprit Print & Pack Solutions - Printing & Packaging"
        description="Leading manufacturer and supplier of printing and packaging solutions. Specializing in pharmaceutical boxes, labels, stickers, business cards, and custom packaging."
        keywords="printing, packaging, pharmaceutical boxes, labels, stickers, business cards, Mumbai, India"
      />

      <HeroCarousel />



      {/* Product Gallery */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Product Gallery
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of high-quality printing and packaging solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: gallery1, alt: "Premium packaging boxes with custom designs" },
              { src: gallery2, alt: "Colorful sticker labels and promotional materials" },
              { src: gallery3, alt: "Professional invitation cards and stationery" },
              { src: gallery4, alt: "Business cards and corporate branding materials" },
              { src: gallery5, alt: "Sales tags and promotional price labels" },
              { src: gallery6, alt: "printing and packaging equipment" },
              { src: gallery7, alt: "Colorful crayons packaging and stationery supplies" },
              { src: gallery8, alt: "Luxury perfume packaging box designs" },
              { src: gallery9, alt: "Premium cosmetic packaging box mockups" },
              { src: gallery10, alt: "Corrugated printed boxes for shipping" },
              { src: gallery11, alt: "Toy packaging and promotional materials" },
              { src: gallery12, alt: "Pharmaceutical packaging and medicine boxes" },
              { src: gallery13, alt: "Pharmaceutical packaging and capsule boxes" },
              { src: gallery14, alt: "Healthcare product packaging solutions" },
              { src: gallery15, alt: "Topical medication packaging boxes" },
              { src: gallery16, alt: "Blank gift tags and product labels" },
              { src: gallery17, alt: "Custom clothing tags and size labels" },
              { src: gallery18, alt: "Spice packaging and food product boxes" },
              { src: gallery19, alt: "Professional letterhead and business stationery" },
              { src: gallery20, alt: "Digital printing and design solutions" },
              { src: gallery21, alt: "Food packaging boxes for takeaway and delivery" }
            ].map((item, index) => (
              <Card key={index} className="product-card overflow-hidden fade-in">
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <img
                src={aboutImage}
                alt="Professional printing facility with quality control and modern equipment"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>

            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                About Virprit Print & Pack Solutions
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Established as a leading manufacturer and supplier of printing and packaging solutions,
                we specialize in pharmaceutical boxes, labels, stickers, business stationery, and custom packaging.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With years of experience in the printing industry, we provide standardized as well as
                customized solutions according to customer specifications, ensuring quality and timely delivery.
              </p>
              <Button asChild size="lg">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Virprit Print & Pack Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shipping-fast text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times for all your printing needs</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
                <p className="text-gray-600">100% secure payment options for your peace of mind</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-medal text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Premium quality products with professional finishing</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-award text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Products</h3>
                <p className="text-gray-600">100% quality check on all our products</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">
            Ready to Start Your Printing Project?
          </h2>
          <p className="text-xl mb-8 fade-in">
            Get a custom quote for your printing and packaging needs today
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white fade-in">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
