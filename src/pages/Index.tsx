import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import { Home, Building2, Briefcase, Star, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-interior.jpg";
import livingroomImg from "@/assets/portfolio-livingroom.jpg";
import bedroomImg from "@/assets/portfolio-bedroom.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import officeImg from "@/assets/portfolio-office.jpg";

const services = [
  { icon: Home, title: "Residential Design", desc: "Crafting personalized living spaces that reflect your unique style and comfort." },
  { icon: Building2, title: "Commercial Design", desc: "Creating impactful commercial environments that drive business success." },
  { icon: Briefcase, title: "Office Interiors", desc: "Designing productive workspaces that inspire creativity and collaboration." },
];

const portfolioItems = [
  { img: livingroomImg, title: "Modern Living Room", category: "Residential" },
  { img: bedroomImg, title: "Luxury Bedroom Suite", category: "Residential" },
  { img: kitchenImg, title: "Gourmet Kitchen", category: "Residential" },
  { img: officeImg, title: "Executive Office", category: "Commercial" },
];

const testimonials = [
  { name: "Priya Sharma", role: "Homeowner", text: "Structures transformed our home beyond imagination. Every detail was perfectly crafted.", rating: 5 },
  { name: "Rajesh Gupta", role: "CEO, TechVentures", text: "Our new office space has significantly boosted team productivity and morale.", rating: 5 },
  { name: "Ananya Patel", role: "Restaurant Owner", text: "The restaurant interior they designed has become a landmark in itself. Truly exceptional work.", rating: 5 },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury modern interior design by Structures" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="text-gold font-body text-sm tracking-[0.3em] uppercase mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Transforming Spaces with Elegance & Innovation
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Designing Spaces<br />That Inspire
          </h1>
          <p className="text-primary-foreground/80 text-lg sm:text-xl font-light max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.6s" }}>
            At Structures, we blend artistry with functionality to create interiors that elevate your everyday experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/portfolio">View Our Projects</Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/contact">Get a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Intro */}
      <section className="section-padding bg-background">
        <div className="container-luxury text-center max-w-3xl mx-auto">
          <SectionReveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">About Structures</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Where Vision Meets Craftsmanship
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              With a decade of experience in luxury interior design, Structures has been at the forefront of transforming residential and commercial spaces across India. Our approach combines timeless elegance with modern innovation, ensuring every project is a masterpiece.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-cream-dark">
        <div className="container-luxury">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">What We Do</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Our Featured Services</h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <SectionReveal key={service.title} delay={i * 0.15}>
                <div className="bg-background p-8 rounded-lg group hover:shadow-xl transition-all duration-500 border border-border/50">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <service.icon className="text-gold" size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="text-center mt-12">
              <Button variant="gold-outline" asChild>
                <Link to="/services" className="inline-flex items-center gap-2">
                  All Services <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Work</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {portfolioItems.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="image-hover-zoom rounded-lg group cursor-pointer relative aspect-[4/3]">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 rounded-lg flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-gold text-xs tracking-[0.2em] uppercase">{item.category}</p>
                      <h3 className="font-display text-xl font-semibold text-primary-foreground">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="text-center mt-12">
              <Button variant="gold-outline" asChild>
                <Link to="/portfolio" className="inline-flex items-center gap-2">
                  View All Projects <ArrowRight size={16} />
                </Link>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Testimonials</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground">What Our Clients Say</h2>
            </div>
          </SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.15}>
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 p-8 rounded-lg">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                  <div>
                    <p className="font-display font-semibold text-primary-foreground">{t.name}</p>
                    <p className="text-primary-foreground/50 text-sm">{t.role}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Contact */}
      <section className="section-padding bg-background">
        <div className="container-luxury text-center max-w-2xl mx-auto">
          <SectionReveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Get Started</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Let's discuss your vision and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg" asChild>
                <Link to="/contact">Book a Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+919560585099">Call +91 9560585099</a>
              </Button>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
