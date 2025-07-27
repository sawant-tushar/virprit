// --- START OF FILE ServiceDetailsPage.tsx ---
import React from 'react';
import SEO from '@/components/SEO';
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useParams } from 'wouter';
// Consumer packaging boxes
import consumerPackaging1 from "@assets/Consumer packaging boxes/IMG-20250712-WA0023.jpg";
import consumerPackaging2 from "@assets/Consumer packaging boxes/IMG-20250712-WA0029.jpg";
import ledBulbBox2 from "@assets/Consumer packaging boxes/Led bulb box 2.jpg";
import ledBulbBox from "@assets/Consumer packaging boxes/Led bulb box.jpg";

// Customized packaging
import customizedPaperBox2 from "@assets/Customized packaging/Customized paper box 2.jpg";
import customizedPaperBox3 from "@assets/Customized packaging/Customized paper box 3.jpg";
import customizedPaperBox4 from "@assets/Customized packaging/Customized paper box 4.jpg";
import customizedPaperBox5 from "@assets/Customized packaging/Customized paper box 5.jpg";
import customizedPaperBox from "@assets/Customized packaging/Customized paper box.jpg";

// Food boxes
import cakeBox1 from "@assets/Food boxes/Cake box 1.jpg";
import customizedCakeBox from "@assets/Food boxes/customized cake box.png";
import foodBox1 from "@assets/Food boxes/IMG-20250712-WA0015 (2).jpg";
import cakeBox6 from "@assets/Food boxes/Cake box 6.jpg";
import cakeBoxes3 from "@assets/Food boxes/cake_boxes 3.png";
import cakeBoxes7 from "@assets/Food boxes/cake_boxes 7.png";
import cakeBox2 from "@assets/Food boxes/Cake box 2.jpg";

// Labels
import label1 from "@assets/Labels/IMG-20250712-WA0026.jpg";
import label2 from "@assets/Labels/IMG-20250712-WA0027.jpg";
import images from "@assets/Labels/images.png";
import images2 from "@assets/Labels/images (2).jpeg";
import images3 from "@assets/Labels/images (3).jpeg";
import images4 from "@assets/Labels/images (4).jpeg";
import images5 from "@assets/Labels/images (5).jpeg";
import images6 from "@assets/Labels/images (6).jpeg";

// Leaflets, brochures and catalougue
import brochure1 from "@assets/Leaflets , brochures and catalougue/Brochure 1.jpg";
import brochure3 from "@assets/Leaflets , brochures and catalougue/Brochure 3.jpg";
import brochure7 from "@assets/Leaflets , brochures and catalougue/Brochure 7.jpg";
import brochure8 from "@assets/Leaflets , brochures and catalougue/Brochure 8.jpg";
import brochure11 from "@assets/Leaflets , brochures and catalougue/Brochure 11.jpg";
import catalogue2 from "@assets/Leaflets , brochures and catalougue/Catalougue 2.jpg";
import flyer1 from "@assets/Leaflets , brochures and catalougue/Flyer 1.jpg";
import flyer55 from "@assets/Leaflets , brochures and catalougue/Flyer 1.jpg 55.jpg";
import flyer2 from "@assets/Leaflets , brochures and catalougue/flyer 2.png";
import flyer8 from "@assets/Leaflets , brochures and catalougue/Flyer 8.jpg";

// Masala boxes
import masalaBox1 from "@assets/Masala boxes/IMG-20250713-WA0014.jpg";
// import masalaBox4 from "@assets/Masala boxes/Masala box 4.png";
import masalaBoxes1 from "@assets/Masala boxes/Masala boxes 1.png";
import msalaBox5 from "@assets/Masala boxes/Msala box 5.jpg";
import msalaBox6 from "@assets/Masala boxes/Msala box 6.jpg";

// Paper bags
import paperBagStock from "@assets/Paper bags/istockphoto-531492115-612x612.jpg";
import paperBag1 from "@assets/Paper bags/Paper bag 1.jpg";
import paperBag2 from "@assets/Paper bags/Paper bag 2.jpg";
import paperBag3 from "@assets/Paper bags/Paper bag 3.jpg";
import paperBag5 from "@assets/Paper bags/paper bag 5.jpg";
import paperBag7 from "@assets/Paper bags/paper bag 7.jpg";
import paperBag44 from "@assets/Paper bags/Paper bag 44.jpg";
import paperBag77 from "@assets/Paper bags/Paper bag 77.jpg";
import paperBag444 from "@assets/Paper bags/Paper bag 444.jpg";
import paperBag4444 from "@assets/Paper bags/Paper bag 4444.jpg";
import paperBag444666 from "@assets/Paper bags/Paper bag 444666.jpg";
import paperCourierBags from "@assets/Paper bags/Paper-Courier-Bags 4444.jpg";

// Perfume boxes
import perfumeBox1 from "@assets/Perfume boxes/IMG-20250712-WA0028.jpg";
import perfumeBox2 from "@assets/Perfume boxes/Perfume box 2.jpg";
// import perfumeBox2_4 from "@assets/Perfume boxes/Perfume box 2.jpg 4.png";
import perfumeBox4 from "@assets/Perfume boxes/Perfume box 4.jpg";
import perfumeBox6 from "@assets/Perfume boxes/perfume box 6.jpg";
import perfumeBox6_2 from "@assets/Perfume boxes/Perfume box 6.jpg";
import perfumeBox7 from "@assets/Perfume boxes/Perfume box 7.jpg";
import perfumeBox9 from "@assets/Perfume boxes/Perfume box 9.jpg";
import perfumeBox from "@assets/Perfume boxes/Perfume box.jpg";

// Pharmaceutical boxes
import pharma1 from "@assets/Pharmaceutical boxes/4154 (1).jpg";
import pharma2 from "@assets/Pharmaceutical boxes/IMG-20250713-WA0003 (1).jpg";
import pharma3 from "@assets/Pharmaceutical boxes/IMG-20250713-WA0004.jpg";
import pharma4 from "@assets/Pharmaceutical boxes/IMG-20250713-WA0005.jpg";
import pharma5 from "@assets/Pharmaceutical boxes/IMG-20250713-WA0006.jpg";
import pharma6 from "@assets/Pharmaceutical boxes/pharma 1.jpg";
import pharma7 from "@assets/Pharmaceutical boxes/pharma 2.jpg";
// import pharma8 from "@assets/Pharmaceutical boxes/pharma 4.png";
// import pharma9 from "@assets/Pharmaceutical boxes/pharma 6.png";
// import pharma10 from "@assets/Pharmaceutical boxes/pharma 7.png";
import pharma11 from "@assets/Pharmaceutical boxes/pharma 8.jpg";
import pharma12 from "@assets/Pharmaceutical boxes/Pic.jpg";

// Stationary
import stationary1 from "@assets/Stationary/75862.jpg";
import stationary2 from "@assets/Stationary/IMG-20250712-WA0007.jpg";
import stationary3 from "@assets/Stationary/IMG-20250712-WA0009 (3).jpg";
import stationary4 from "@assets/Stationary/IMG-20250712-WA0011 (1).jpg";
import letterhead288 from "@assets/Stationary/Letterhead288.jpg";

// Sweet boxes
import sweetBox1 from "@assets/Sweet boxes/IMG-20250712-WA0018.jpg";
import sweetBox2 from "@assets/Sweet boxes/IMG-20250712-WA0020.jpg";
// import sweetBox3 from "@assets/Sweet boxes/original-d0cf7d24ede4807c7015fa99bc56326.png";
// import sweetBox4 from "@assets/Sweet boxes/SB-120A.png";
import sweetBox5 from "@assets/Sweet boxes/sweet box 1.png";
// import sweetBox6 from "@assets/Sweet boxes/sweet-box-design-indian-food-260nw-2290279701.png";

// Tags and Stickers
import tag1 from "@assets/Tags and Stickers/41532.jpg";
import tag2 from "@assets/Tags and Stickers/4992296.jpg";
import tag3 from "@assets/Tags and Stickers/IMG-20250712-WA0012.jpg";
import tag4 from "@assets/Tags and Stickers/IMG-20250712-WA0021.jpg";
import tag5 from "@assets/Tags and Stickers/IMG-20250713-WA0011.jpg";
import tag6 from "@assets/Tags and Stickers/IMG-20250713-WA0012.jpg";

// Toy and game boxes
import toyBox1 from "@assets/Toy and game boxes/IMG-20250712-WA0030.jpg";
import toyBox2 from "@assets/Toy and game boxes/IMG-20250712-WA0031.jpg";
import toyBox3 from "@assets/Toy and game boxes/toy game box 2.jpg";
import toyBox4 from "@assets/Toy and game boxes/toy game box.jpg";
// import toyBox5 from "@assets/Toy and game boxes/toy game box.jpg 5.png";
// import toyBox6 from "@assets/Toy and game boxes/toy game box.jpg 7.png";
// import toyBox7 from "@assets/Toy and game boxes/toy game box.jpg 8.png";
import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


interface ServiceDetailProps {
    title: string;
    description: string;
    keyFeatures: string[];
    galleryImages: string[];
    keywords: string;
}

const ServiceDetailsPage: React.FC = () => {
    const { serviceName } = useParams<{ serviceName: string }>();

    const serviceData: { [key: string]: ServiceDetailProps } = {
        "pharmaceutical-boxes-details": {
            title: "Pharmaceutical Boxes",
            description: "Designed with precision and compliance, our Pharmaceutical Boxes ensure safe and sterile packaging for medicines and healthcare products. These boxes are made with high-grade materials and printed with legible, regulation-compliant information for secure transportation and handling.",
            keyFeatures: [
                "Regulation Compliance: Designed to meet industry standards for medicine packaging.",
                "High-Grade Materials: Utilizing quality materials that ensure product protection and integrity.",
                "Clear Information: Printed with legible, accurate, and compliant information.",
                "Secure Transportation: Ensuring safe handling and transportation of pharmaceuticals.",
                "Variety of Options: Offering boxes, inners, outers, mono cartons, catch covers, and leaflets."
            ],
            galleryImages: [
                pharma1,
                pharma2,
                pharma3,
                pharma4,
                pharma5,
                pharma6,
                pharma7,
                // pharma8,
                // pharma9,
                // pharma10,
                pharma11,
                pharma12
            ],
            keywords: "pharmaceutical boxes, medicine packaging, tablet packaging, healthcare packaging"
        },
        "sweet-boxes-details": {
            title: "Sweet Boxes",
            description: "Our Sweet Boxes are crafted to maintain freshness and enhance the presentation of traditional and modern sweets. Available in various sizes, designs, and festive themes, they are ideal for gifting and retail use, offering both appeal and hygiene.",
            keyFeatures: [
                "Premium Finishing: High-quality materials and designs for a luxurious feel.",
                "Customizable Designs: Tailored options for various festive themes and occasions.",
                "Variety of Sizes: Available in a range of sizes to accommodate different sweet selections.",
                "Ideal for Gifting: Perfect for creating memorable and attractive gifts.",
                "Retail Ready: Suitable for retail use, enhancing product appeal and hygiene."
            ],
            galleryImages: [
                sweetBox1,
                sweetBox2,
                // sweetBox3,
                // sweetBox4,
                sweetBox5,
                // sweetBox6
            ],
            keywords: "sweet boxes, gift boxes, festival packaging, wedding sweets"
        },
        "consumer-packaging-boxes-details": {
            title: "Consumer Packaging",
            description: "We offer Consumer Packaging Boxes for everyday products like cosmetics, electronics, home care, and more. These boxes are customized to reflect your brand identity while ensuring durability, attractiveness, and product safety throughout the supply chain.",
            keyFeatures: [
                "Brand Identity: Packaging that reflects and reinforces your brand.",
                "Durability: Built to withstand handling and transportation.",
                "Attractiveness: Designed to enhance product appeal.",
                "Product Safety: Protecting products throughout the supply chain.",
                "Wide Range: Packaging options for a variety of consumer goods."
            ],
            galleryImages: [
                consumerPackaging1,
                consumerPackaging2,
                ledBulbBox2,
                ledBulbBox
            ],
            keywords: "consumer packaging, retail packaging, product boxes, custom packaging"
        },
        "customized-packaging-boxes-details": {
            title: "Customized Packaging Boxes",
            description: "Tailored to your brand's unique needs, our Customized Packaging Boxes offer complete flexibility in design, print, and material. These boxes help you stand out in the market with distinctive branding, product-fit structure, and premium aesthetics.",
            keyFeatures: [
                "Custom Designs: Fully adaptable to your brand identity.",
                "Print Options: A wide range of printing techniques and finishes.",
                "Material Selection: Choice of materials to suit product and budget.",
                "Product-Fit Structure: Boxes perfectly designed for your product's dimensions.",
                "Premium Aesthetics: Options for adding a high-end look and feel."
            ],
            galleryImages: [
                // customizedPaperBox,
                customizedPaperBox2,
                customizedPaperBox3,
                customizedPaperBox4,
                customizedPaperBox5
            ],
            keywords: "custom packaging, branded boxes, product packaging, personalized packaging"
        },
        "perfume-boxes-details": {
            title: "Perfume Boxes",
            description: "Our Perfume Boxes are designed with elegance and sophistication to complement luxury fragrances. They offer secure holding, appealing visual impact, and options for foil stamping, UV coating, and embossing to enhance shelf presence.",
            keyFeatures: [
                "Elegance and Sophistication: Designed to match the luxury of perfume brands.",
                "Secure Holding: Ensuring safe containment and protection.",
                "Visual Appeal: Designed for a strong shelf presence.",
                "Custom Finishes: Foil stamping, UV coating, embossing, and more.",
                "Premium Quality: High-grade materials for a luxurious feel."
            ],
            galleryImages: [
                perfumeBox1,
                perfumeBox2,
                // perfumeBox2_4,
                perfumeBox4,
                // perfumeBox6,
                perfumeBox6_2,
                perfumeBox7,
                perfumeBox9,
                perfumeBox
            ],
            keywords: "perfume boxes, fragrance packaging, luxury packaging, cosmetic boxes"
        },
        "food-boxes-details": {
            title: "Food Boxes",
            description: "Made from food-grade material, our Food Boxes are safe, hygienic, and customizable. Whether for bakery items, snacks, or takeaways, these boxes offer moisture resistance and strong construction to preserve freshness and flavor.",
            keyFeatures: [
                "Food-Grade Material: Safe for direct food contact.",
                "Moisture Resistance: Helps preserve freshness.",
                "Strong Construction: Ensures product protection.",
                "Customizable: Designed to accommodate diverse food products.",
                "Hygienic Design: Maintained cleanliness and safe handling."
            ],
            galleryImages: [
                cakeBox1,
                // customizedCakeBox,
                foodBox1,
                cakeBox6,
                cakeBoxes3,
                cakeBoxes7,
                cakeBox2
            ],
            keywords: "food boxes, takeaway boxes, bakery packaging, food grade packaging"
        },
        "masala-boxes-details": {
            title: "Masala Boxes",
            description: "Our Masala Boxes are developed to preserve the aroma and freshness of spices. They are available in vibrant prints and high-barrier materials to prevent contamination and maintain product integrity during handling and display.",
            keyFeatures: [
                "Aroma and Freshness: Designed to preserve spice quality.",
                "Vibrant Prints: Enhancing visual appeal.",
                "High-Barrier Materials: Protecting against contamination.",
                "Product Integrity: Maintaining quality during handling and display."
            ],
            galleryImages: [
                masalaBox1,
                // masalaBox4,
                masalaBoxes1,
                msalaBox5,
                msalaBox6
            ],
            keywords: "masala boxes, spice packaging, aroma preservation, food packaging"
        },
        "tags-and-stickers-details": {
            title: "Tags and Stickers",
            description: "Our Tags and Stickers add value to your product branding and identification. Available in various shapes, finishes, and adhesives, these are ideal for retail labeling, garment tags, and promotional use with durable, high-quality print.",
            keyFeatures: [
                "Branding and Identification: Enhancing product visibility.",
                "Variety of Options: Available in different shapes, finishes, and adhesives.",
                "Retail Labeling: Perfect for clear and effective product labeling.",
                "Garment Tags: Designed for apparel and fashion items.",
                "Promotional Use: Ideal for various marketing and promotional campaigns."
            ],
            galleryImages: [
                tag1,
                tag2,
                tag3,
                tag4,
                tag5,
                tag6
            ],
            keywords: "tags and stickers, retail labels, garment tags, promotional stickers, custom tags"
        },
        "labels-details": {
            title: "Labels",
            description: "We offer Labels for bottles, jars, boxes, and more—suitable for industries like cosmetics, food, pharma, and FMCG. With options like waterproof, tamper-proof, and heat-resistant materials, our labels combine performance and design seamlessly.",
            keyFeatures: [
                "Versatile Application: Suitable for a wide range of packaging types.",
                "Industry Compliance: Meeting the standards for cosmetics, food, pharma, and FMCG.",
                "Material Options: Waterproof, tamper-proof, and heat-resistant materials.",
                "Performance and Design: Combining functionality with aesthetics."
            ],
            galleryImages: [
                label1,
                label2,
                images,
                images2,
                images3,
                images4,
                images5,
                images6
            ],
            keywords: "labels, product labels, bottle labels, jar labels, custom labels"
        },
        "toy-and-game-boxes-details": {
            title: "Toy and Game Boxes",
            description: "Built for visual appeal and secure storage, our Toy and Game Boxes are strong, child-friendly, and eye-catching. These boxes support vibrant graphics, compartments, and protection for both educational and entertainment products.",
            keyFeatures: [
                "Visual Appeal: Designed to attract children and parents.",
                "Secure Storage: Ensuring safe containment and protection.",
                "Child-Friendly: Constructed with safety in mind.",
                "Durable Build: Withstand handling and use.",
                "Graphic Support: Supporting vibrant and engaging designs."
            ],
            galleryImages: [
                toyBox1,
                toyBox2,
                toyBox3,
                toyBox4,
                // toyBox5,
                // toyBox6,
                // toyBox7
            ],
            keywords: "toy and game boxes, game packaging, toy packaging, child-safe packaging"
        },
        "stationery-details": {
            title: "Stationery",
            description: "Professional business stationery including envelopes, letterheads, and corporate communication materials.",
            keyFeatures: [
                "Professional Design: Premium Design.",
                "Variety of Options: Available in different designs"
            ],
            galleryImages: [
                stationary1,
                stationary2,
                stationary3,
                stationary4,
                letterhead288
            ],
            keywords: "Business Letterheads, Corporate Envelopes, Professional Design, Quality Paper"
        },
        "white-boxes-details": {
            title: "White Boxes",
            description: "Simple, clean, and versatile, our White Boxes are perfect for minimalistic branding or utility packaging. They are ideal for shipping, storage, or retail where a neat and professional look is required.",
            keyFeatures: [
                "Versatile Use: Suitable for a wide range of products and industries.",
                "Clean Design: Professional and appealing look.",
                "Cost-Effective: Great for economical packaging solutions.",
                "Shipping and Retail: Perfect for a variety of distribution needs."
            ],
            galleryImages: [

            ],
            keywords: "white boxes, shipping boxes, retail packaging, storage boxes"
        },
        "brochure-leaflets-details": {
            title: "Brochure Leaflets",
            description: "Elevate Your Brand with Impactful Brochure Leaflets. Our professionally designed brochures and leaflets effectively communicate your brand message with high-quality printing and customizable designs that capture attention and leave a lasting impression.",
            keyFeatures: [
                "Multi-fold options: bi-fold, tri-fold, and Z-fold designs for versatile presentation",
                "Premium quality paper choices including Matt, Gloss, and Art Paper finishes",
                "Full-color, edge-to-edge printing for vibrant, professional results",
                "Custom sizes and die-cut shapes available for unique branding opportunities",
                "Eye-catching designs tailored to your specific brand identity and messaging"
            ],
            galleryImages: [
                brochure1,
                brochure3,
                brochure7,
                brochure8,
                brochure11,

            ],
            keywords: "brochure printing, leaflet design, marketing materials, promotional brochures, custom leaflets"
        },
        "catalogues-details": {
            title: "Catalogues",
            description: "Showcase Your Products Professionally with Custom Catalogues. Our catalogues are designed to present your products or services in the best possible light, with high-quality printing and binding options that reflect your brand's professionalism and attention to detail.",
            keyFeatures: [
                "Multiple binding options: perfect bound, saddle-stitched, or spiral binding",
                "Standard sizes (A4, A5) plus fully customizable dimensions",
                "Rich color printing on premium high GSM paper stock",
                "Premium finishing options including Matte/Gloss lamination, Spot UV, Foil stamping, and Embossing",
                "Flexible formats ranging from 4 pages to 100+ pages"
            ],
            galleryImages: [
                catalogue2,
                // Add more catalogue-specific images if available
                flyer1,
                flyer55,
                flyer2,
                flyer8
            ],
            keywords: "catalogue printing, product catalogues, custom catalog printing, professional catalog design, bound catalogues"
        },

    };

    // Use a fallback in case the serviceName doesn't match
    const serviceDetail = serviceName ? serviceData[serviceName] : null;

    if (!serviceDetail) {
        return (
            <div>
                <SEO title="Service Not Found" description="The requested service details could not be found." keywords="" />
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Service Not Found</h1>
                        <p className="text-lg text-muted-foreground mb-8">
                            Sorry, the details for this service could not be found. Please check the URL or try again.
                        </p>
                    </div>
                </section>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={`${serviceDetail.title} - Virprit Print & Pack Solutions`}
                description={serviceDetail.description}
                keywords={serviceDetail.keywords}
            />

            <section className="py-6 md:py-12 bg-white">
                <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    {/* Title and Description */}
                    <Card className="border-0 shadow-md mb-6">
                        <CardHeader>
                            <CardTitle className="text-2xl md:text-3xl font-bold text-foreground">{serviceDetail.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription className="text-muted-foreground text-sm md:text-base">{serviceDetail.description}</CardDescription>
                        </CardContent>
                    </Card>


                    {/* Key Features */}
                    <Card className="border-0 shadow-md mb-6">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-foreground">Key Features</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground text-sm md:text-base">
                                {serviceDetail.keyFeatures.map((feature, index) => (
                                    <li key={index} className="mb-2">{feature}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>



                    {/* Gallery */}
                    {Array.isArray(serviceDetail.galleryImages) && serviceDetail.galleryImages.length > 0 && (
                        <Card className="border-0 shadow-md mb-6">
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold text-foreground">Gallery</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {serviceDetail.galleryImages.map((src, index) => (
                                        <img
                                            key={index}
                                            src={src}
                                            alt={`${serviceDetail.title} Example ${index + 1}`}
                                            className="w-full h-48 object-cover rounded-md shadow-sm"
                                        />
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    )}



                    {/* CTA Button */}
                    <Card className="border-0 shadow-md">
                        <CardFooter>
                            <Button asChild size="lg" className="w-full bg-accent hover:bg-accent/90 text-white">
                                <Link href="/contact">Get a Quote</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </>
    );
};

export default ServiceDetailsPage;
// --- END OF FILE ServiceDetailsPage.tsx ---