import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const googleFormURL = "https://docs.google.com/forms/d/e/1FAIpQLScsy1oLk2q3vQAyua3wO6JnBQfoxPPQ4FUjm9BHdwAYuCH-5Q/formResponse";

    const formPayload = new FormData();
    formPayload.append("entry.1067018178", formData.name);
    formPayload.append("entry.47550243", formData.email);
    formPayload.append("entry.406235988", formData.phone);
    formPayload.append("entry.1391360485", formData.message);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors", // required to avoid CORS issues from browser
        body: formPayload,
      });

      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting the form. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };


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
        title="Contact Us - Virprit Print & Pack Solutions"
        description="Get in touch with Virprit Print & Pack Solutions for all your printing and packaging needs. Contact us for quotes, inquiries, and support."
        keywords="contact virprit, printing quotes, packaging inquiries, Mumbai contact, customer support"
      />

      {/* Hero Section */}
      <section className="bg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 fade-in">Contact Us</h1>
          <p className="text-xl fade-in">Get in touch with our team for all your printing and packaging needs</p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="fade-in">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about your printing and packaging requirements..."
                      className="mt-1"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-white" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="fade-in">
              <h2 className="text-3xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-6">

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      virpritprint1311@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-phone text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">
                      +91 86685 00982<br />
                      +91 92097 65493
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-map-marker-alt text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Virprit Print & Pack Solutions<br />
                      B-52, 1st Floor, Wadhan Industrial Estate, near SBI Bank,<br />
                      Gaurai Pada, Vasai (E), Maharashtra 401208, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="fas fa-clock text-primary"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-xl text-muted-foreground">Visit our facility in Mumbai</p>
          </div>

          <Card className="fade-in">
            <CardContent className="p-4">
              <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <i className="fas fa-map-marker-alt text-4xl text-primary mb-4"></i>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Location Map</h3>
                  <p className="text-muted-foreground">
                    Virprit Print & Pack Solutions<br />
                    Mumbai, Maharashtra, India
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Map iframe will be integrated here
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section> */}
    </>
  );
}
