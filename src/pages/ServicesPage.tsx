import SectionReveal from "@/components/SectionReveal";
import { Home, Building2, Briefcase, LayoutGrid, Box, Hammer } from "lucide-react";
import livingroomImg from "@/assets/portfolio-livingroom.jpg";
import commercialImg from "@/assets/commercial-interior.jpg";
import officeImg from "@/assets/portfolio-office.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import bathroomImg from "@/assets/portfolio-bathroom.jpg";
import bedroomImg from "@/assets/portfolio-bedroom.jpg";

const services = [
  { icon: Home, title: "Residential Interior Design", desc: "From cozy apartments to sprawling villas, we design homes that reflect your personality and lifestyle. Every room tells a story of elegance.", img: livingroomImg },
  { icon: Building2, title: "Commercial Interior Design", desc: "We create commercial spaces that leave lasting impressions—restaurants, hotels, showrooms, and retail environments designed for impact.", img: commercialImg },
  { icon: Briefcase, title: "Office Interior Design", desc: "Modern workspaces that foster productivity, creativity, and employee well-being. Functional yet aesthetically inspiring office environments.", img: officeImg },
  { icon: LayoutGrid, title: "Space Planning", desc: "Strategic space planning that maximizes every square foot. We optimize flow, functionality, and aesthetics for any type of space.", img: kitchenImg },
  { icon: Box, title: "3D Visualization", desc: "See your dream space before it's built. Our photorealistic 3D renders bring designs to life, allowing you to visualize every detail.", img: bathroomImg },
  { icon: Hammer, title: "Renovation & Remodeling", desc: "Breathe new life into existing spaces with our renovation expertise. We transform outdated interiors into modern, functional masterpieces.", img: bedroomImg },
];

const ServicesPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">What We Offer</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">Our Services</h1>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            Comprehensive interior design solutions tailored to your unique needs and aspirations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="flex flex-col gap-24">
            {services.map((service, i) => (
              <SectionReveal key={service.title}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                      <service.icon className="text-gold" size={24} />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">{service.desc}</p>
                  </div>
                  <div className={`image-hover-zoom rounded-lg ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                    <img src={service.img} alt={service.title} className="w-full aspect-[4/3] object-cover rounded-lg" />
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
