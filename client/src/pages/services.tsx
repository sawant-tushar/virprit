import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import boxImage1 from "@assets/2209.i518.002.S.m005.c13.realistic box mockup design set_1752494051433.jpg";
import boxImage2 from "@assets/depressing-blue-monday-composition_1752494051439.jpg";
import boxImage3 from "@assets/15046_1752494051436.jpg";
import labelImage1 from "@assets/IMG-20250712-WA0031_1752494374097.jpg";
import labelImage2 from "@assets/4992296_1752494051438.jpg";
import invitationImage from "@assets/384474-PC21ZY-538_1752494051438.jpg";
import tagImage from "@assets/4992296_1752494051438.jpg";
import businessCardImage from "@assets/IMG-20250712-WA0007_1752494051439.jpg";
import stationeryImage from "@assets/IMG-20250712-WA0009_1752494051440.jpg";
import envelopeImage from "@assets/IMG-20250712-WA0011_1752494051440.jpg";
import medicineBoxImage from "@assets/4154_1752494051433.jpg";
import blankPaperImage from "@assets/white_box1.jpeg";
import perfumeBox from "@assets/IMG-20250712-WA0028_1752494374095.jpg";
import cosmeticBox from "@assets/IMG-20250712-WA0029_1752494374096.jpg";
import corrugatedBox from "@assets/IMG-20250712-WA0030_1752494374096.jpg";
import pharmaBox1 from "@assets/Pic.jpg";
import pharmaBox2 from "@assets/IMG-20250713-WA0004_1752494374098.jpg";
import pharmaBox3 from "@assets/IMG-20250713-WA0005_1752494374098.jpg";
import pharmaBox4 from "@assets/IMG-20250713-WA0006_1752494374099.jpg";
import blankTags from "@assets/IMG-20250713-WA0011_1752494374099.jpg";
import clothingTags from "@assets/IMG-20250713-WA0012_1752494374100.jpg";
import spiceBox from "@assets/IMG-20250713-WA0014_1752494374100.jpg";
import letterheadImage from "@assets/printed-envelope.jpg";
import foodBox from "@assets/IMG-20250712-WA0015_1752494051441.jpg";
import gallery6 from "@assets/IMG-20250712-WA0020_1752494051443.jpg";
import toysImage from "@assets/IMG-20250712-WA0030_1752494374096.jpg";
import customPack from "@assets/IMG-20250712-WA0017_1752491780018.jpg";



export default function ServicesPage() {
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

  const services = [
    {
      title: "Sweet Boxes",
      description: "Beautiful and elegant sweet boxes for gifting, festivals, and special occasions with premium finishing and custom designs.",
      image: gallery6,
      features: ["Gift Sweet Boxes", "Festival Sweet Boxes", "Wedding Sweet Boxes", "Premium Designs"],
      gallery: [boxImage2]
    },
    {
      title: "Pharmaceutical Boxes",
      description: "Specialized pharmaceutical packaging solutions meeting industry standards for medicine, tablets, and healthcare products.",
      image: pharmaBox1,
      features: ["Medicine Boxes", "Tablet Packaging", "Healthcare Products", "Regulatory Compliant"],
      gallery: [pharmaBox1, pharmaBox2, pharmaBox3, pharmaBox4, medicineBoxImage]
    },
    {
      title: "Consumer Packaging Boxes",
      description: "High-quality consumer goods packaging for retail products, electronics, and everyday items with attractive designs.",
      image: cosmeticBox,
      features: ["Retail Packaging", "Electronics Boxes", "Consumer Goods", "Brand Enhancement"],
      gallery: [cosmeticBox, boxImage3, corrugatedBox]
    },
    {
      title: "Customized Packaging Boxes",
      description: "Fully customized packaging solutions tailored to your specific product requirements and brand identity.",
      image: customPack,
      features: ["Custom Designs", "Brand Identity", "Specific Requirements", "Professional Finish"],
      gallery: [perfumeBox, cosmeticBox, boxImage1]
    },
    {
      title: "Perfume Boxes",
      description: "Luxury perfume packaging boxes with premium finishes for cosmetics and fragrance products.",
      image: perfumeBox,
      features: ["Luxury Packaging", "Cosmetic Boxes", "Premium Finishes", "Elegant Designs"],
      gallery: [perfumeBox, cosmeticBox]
    },
    {
      title: "Food Boxes",
      description: "Food-grade packaging solutions for takeaway, delivery, bakery items, and food products.",
      image: foodBox,
      features: ["Takeaway Boxes", "Bakery Packaging", "Food Grade Material", "Delivery Solutions"],
      gallery: [foodBox, spiceBox]
    },
    {
      title: "White Boxes",
      description: "Clean and professional white boxes suitable for various products and industries with versatile applications.",
      image: blankPaperImage,
      features: ["Versatile Use", "Clean Design", "Professional Look", "Multi-Purpose"],
      gallery: [blankPaperImage, corrugatedBox, boxImage3]
    },
    {
      title: "Chocolate Boxes",
      description: "Specialized chocolate packaging boxes designed to preserve freshness and enhance product presentation.",
      image: boxImage2,
      features: ["Freshness Protection", "Premium Presentation", "Gift Packaging", "Custom Sizes"],
      gallery: [boxImage1, boxImage2, perfumeBox, cosmeticBox]
    },
    {
      title: "Masala Boxes",
      description: "Spice and masala packaging boxes with moisture protection and attractive branding for food products.",
      image: spiceBox,
      features: ["Spice Packaging", "Moisture Protection", "Food Grade", "Brand Enhancement"],
      gallery: [spiceBox, foodBox]
    },
    {
      title: "Tags and Stickers",
      description: "High-quality tags and stickers for product identification, pricing, and promotional purposes.",
      image: labelImage2,
      features: ["Product Tags", "Price Tags", "Promotional Stickers", "Custom Designs"],
      gallery: [blankTags, clothingTags]
    },
    {
      title: "Labels",
      description: "Professional labels for product identification, branding, and regulatory compliance with various finishes.",
      image: labelImage1,
      features: ["Product Labels", "Barcode Labels", "Warning Labels", "Waterproof Labels"],
      gallery: [labelImage1, labelImage2, tagImage]
    },
    {
      title: "Toy and Game Boxes",
      description: "Colorful and attractive packaging for toys and games designed to appeal to children and parents.",
      image: toysImage,
      features: ["Toy Packaging", "Game Boxes", "Child-Safe Materials", "Attractive Designs"],
      gallery: [boxImage3, corrugatedBox]
    },
    {
      title: "Stationery",
      description: "Professional business stationery including envelopes, letterheads, and corporate communication materials.",
      image: letterheadImage,
      features: ["Business Letterheads", "Corporate Envelopes", "Professional Design", "Quality Paper"],
      gallery: [letterheadImage, envelopeImage, stationeryImage, businessCardImage]
    }
  ];

  return (
    <>
      <SEO
        title="Products & Services - Virprit Print & Pack Solutions"
        description="Comprehensive printing and packaging solutions including pharmaceutical boxes, labels, stickers, business cards, and custom packaging services."
        keywords="printing services, packaging solutions, pharmaceutical boxes, labels, stickers, business cards, custom packaging"
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">Products & Services</h1>
          <p className="text-xl fade-in">Comprehensive printing and packaging solutions for every industry</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Product Categories</h2>
            <p className="text-xl text-muted-foreground">Explore our wide range of printing and packaging solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="product-card overflow-hidden fade-in flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - professional printing and packaging solutions`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{service.description}</p>

                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="grid grid-cols-1 gap-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-center text-sm">
                          <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* {service.gallery && (
                    <div className="mb-4 flex-grow">
                      <h4 className="text-base font-semibold text-foreground mb-2">Product Gallery:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.gallery.slice(0, 4).map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`${service.title} example ${idx + 1}`}
                            className="w-full h-24 object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    </div>
                  )} */}

                  <Button asChild className="w-full mt-auto bg-accent hover:bg-accent/90 text-white">
                    <Link href="/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Box Types List */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete List of Box Types</h2>
            <p className="text-xl text-muted-foreground">Comprehensive packaging solutions for every industry requirement</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              "Sweet Boxes", "Pharmaceutical Boxes", "Consumer Packaging Boxes", "Customized Packaging Boxes",
              "Perfume Boxes", "Food Boxes", "White Boxes", "Chocolate Boxes", "Masala Boxes", "Toy and Game Boxes",
              "Medicine Boxes", "Tablet Packaging", "Cosmetic Boxes", "Electronics Boxes", "Gift Boxes",
              "Retail Packaging", "Corrugated Boxes", "Display Boxes", "Shipping Boxes", "Storage Boxes",
              "Jewelry Boxes", "Watch Boxes", "Mobile Phone Boxes", "Laptop Boxes", "Book Packaging",
              "CD/DVD Boxes", "Hardware Boxes", "Tool Boxes", "Industrial Boxes", "Export Packaging",
              "E-commerce Boxes", "Subscription Boxes", "Sample Boxes", "Prototype Boxes"
            ].map((boxType, index) => (
              <Card key={index} className="text-center p-4 fade-in hover:shadow-lg transition-shadow">
                <CardContent className="p-3">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <i className="fas fa-box text-lg text-primary"></i>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{boxType}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-xl text-muted-foreground">Complete printing and packaging solutions under one roof</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-palette text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Custom Design</h3>
                <p className="text-muted-foreground">Professional graphic design services for all your printing needs</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-truck text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">Quick turnaround times and reliable delivery nationwide</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-recycle text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Eco-Friendly</h3>
                <p className="text-muted-foreground">Sustainable printing practices with environmentally friendly materials</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-certificate text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">Rigorous quality control and ISO certified processes</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Customer Support</h3>
                <p className="text-muted-foreground">Dedicated support during business hours for all your projects</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-dollar-sign text-2xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Competitive Pricing</h3>
                <p className="text-muted-foreground">Best value for money with transparent pricing</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 fade-in">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 fade-in">Contact us today for a free consultation and quote</p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white fade-in">
            <Link href="/contact">Get Free Quote</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
