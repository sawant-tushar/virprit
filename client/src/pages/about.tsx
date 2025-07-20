import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";
import historyImage from "@assets/depressing-blue-monday-composition_1752491780015.jpg";
import productImage1 from "@assets/IMG-20250712-WA0028_1752494374095.jpg";
import productImage2 from "@assets/IMG-20250713-WA0003_1752494374097.jpg";
import productImage3 from "@assets/m021t006_paper_food_box_mockup_02_1752494374102.jpg";

export default function AboutPage() {
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
        title="About Us - Virprit Print & Pack Solutions"
        description="Learn about Virprit Print & Pack Solutions - leading manufacturer and supplier of printing and packaging solutions with years of experience in the industry."
        keywords="about virprit, printing company history, packaging solutions, industrial printing, Mumbai"
      />

      {/* Hero Section */}
      {/* <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">About Virprit Print & Pack Solutions</h1>
          <p className="text-xl fade-in">Leading the industry in printing and packaging excellence since our inception</p>
        </div>
      </section> */}

      {/* Company History */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Virprit Print & Pack Solutions was established with a vision to become a leading
                manufacturer and supplier of high-quality printing and packaging solutions. Since our
                inception, we have been committed to delivering excellence in every product we create.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey began with a small team of dedicated professionals who shared a common
                goal: to provide innovative printing and packaging solutions that meet the evolving
                needs of various industries, particularly the pharmaceutical sector.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we stand as a trusted partner for businesses across India, offering a
                comprehensive range of services from pharmaceutical packaging to business stationery.
              </p>
            </div>

            <div className="fade-in">
              <img
                src={historyImage}
                alt="Historical printing press showing evolution of printing technology"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">
            About Virprit Print & Pack Solutions
          </h1>
          <p className="text-xl fade-in">
            Quality. Reliability. Customer Satisfaction. Your packaging partner since 2018.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Our Story */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Established in 2018, Virprit Print and Pack Solutions has grown into a trusted name in the packaging industry,
              known for quality, reliability, and customer satisfaction. We specialize in both standardized and customized
              packaging solutions that meet diverse industry needs.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              Our premium product range includes Consumer Goods Boxes, Pharmaceutical Boxes, Sweet Boxes, Perfume Boxes,
              Printed Boxes, and fully Custom Packaging — all backed by in-house printing capabilities to ensure consistent and
              impactful brand presentation.
            </p>
          </div>

          {/* Our Commitment */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Our Commitment</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Virprit, we believe packaging is more than just a box — it's your brand's first impression.
              Our commitment is built on professional expertise, attention to detail, personalized service, and competitive pricing.
            </p>
            <p className="text-lg text-muted-foreground">
              We use innovative design, high-quality materials, and a customer-first approach to deliver packaging that helps your brand stand out in a crowded marketplace.
            </p>
          </div>

          {/* Infrastructure */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Infrastructure & Network</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our operations are supported by a well-organized supply chain and warehouse network. Backed by a clear organizational hierarchy,
              our team ensures seamless coordination across departments — from order to final delivery.
            </p>
          </div>

          {/* Customer-Centric Approach */}
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Customer-Centric Approach</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Our customers are at the heart of everything we do. We aim to build long-term relationships by delivering on time,
              offering reliable after-sales support, and maintaining open lines of communication.
            </p>
            <p className="text-lg text-muted-foreground">
              We continuously strive to improve our service quality. Our clients value us not just for the products we make,
              but for the trust and dedication we bring to every interaction.
            </p>
          </div>

          {/* Closing Statement */}
          <div className="text-center fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Where Quality Meets Trust</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose Virprit Print and Pack Solutions — where packaging becomes a powerful part of your brand journey.
            </p>
          </div>

        </div>
      </section>



      {/* Mission & Vision */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="fade-in">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <i className="fas fa-bullseye text-2xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide innovative, high-quality printing and packaging solutions that meet
                  the specific needs of our clients while maintaining the highest standards of
                  quality, reliability, and customer service.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <i className="fas fa-eye text-2xl text-primary"></i>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted and preferred printing and packaging partner in India,
                  known for our commitment to quality, innovation, and customer satisfaction across
                  all industries we serve.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Virprit?</h2>
            <p className="text-xl text-muted-foreground">Here's what sets us apart from the competition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center fade-in">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-medal text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Superior Quality</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Professional manufacturing processes</li>
                  <li>• Rigorous quality control at every stage</li>
                  <li>• Premium materials and advanced technology</li>
                  <li>• Compliance with industry standards</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-cogs text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Advanced Technology</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• State-of-the-art printing equipment</li>
                  <li>• Digital and offset printing capabilities</li>
                  <li>• Automated packaging systems</li>
                  <li>• Continuous technology upgrades</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-8">
                <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-tachometer-alt text-3xl text-primary"></i>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Lightning Speed</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Fast turnaround times</li>
                  <li>• Efficient production processes</li>
                  <li>• Quick quote generation</li>
                  <li>• On-time delivery guarantee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Product Range</h2>
            <p className="text-xl text-muted-foreground">A glimpse of our diverse printing and packaging solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden fade-in">
              <div className="h-48 overflow-hidden">
                <img
                  src={productImage1}
                  alt="Luxury perfume packaging with custom design"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Premium Packaging</h3>
                <p className="text-muted-foreground">Custom luxury packaging for cosmetics and consumer goods</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden fade-in">
              <div className="h-48 overflow-hidden">
                <img
                  src={productImage2}
                  alt="Pharmaceutical packaging solutions"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Pharmaceutical Packaging</h3>
                <p className="text-muted-foreground">Specialized pharmaceutical and healthcare packaging</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden fade-in">
              <div className="h-48 overflow-hidden">
                <img
                  src={productImage3}
                  alt="Digital printing and design services"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">Digital Solutions</h3>
                <p className="text-muted-foreground">Modern printing technology and design services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-handshake text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">Honest and transparent business practices</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-lightbulb text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">Continuous improvement and creative solutions</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-users text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">Working together to achieve excellence</p>
              </CardContent>
            </Card>

            <Card className="text-center fade-in">
              <CardContent className="p-6">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-star text-2xl text-primary"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">Striving for perfection in everything we do</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
