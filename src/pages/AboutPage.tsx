import SectionReveal from "@/components/SectionReveal";
import { CheckCircle2, Target, Eye, Users } from "lucide-react";
import aboutTeamImg from "@/assets/about-team.jpg";
import heroImg from "@/assets/hero-interior.jpg";

const values = [
  { icon: Target, title: "Our Mission", desc: "To create exceptional interior spaces that enhance the quality of life through innovative design, impeccable craftsmanship, and unwavering attention to detail." },
  { icon: Eye, title: "Our Vision", desc: "To be India's most trusted interior design firm, recognized for transforming ordinary spaces into extraordinary experiences." },
];

const whyChoose = [
  "10+ years of industry experience",
  "Award-winning design team",
  "End-to-end project management",
  "Premium materials & craftsmanship",
  "On-time project delivery",
  "Transparent pricing",
];

const team = [
  { name: "Arjun Mehta", role: "Founder & Lead Designer" },
  { name: "Kavita Rao", role: "Senior Architect" },
  { name: "Vikram Singh", role: "Project Manager" },
  { name: "Neha Agarwal", role: "3D Visualization Expert" },
];

const AboutPage = () => {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="About Structures Interior Design" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Story</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">About Structures</h1>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-background">
        <div className="container-luxury grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div>
              <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Who We Are</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">A Decade of Design Excellence</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Founded in 2014, Structures has grown from a boutique design studio into one of India's premier interior design firms. We believe that great design has the power to transform not just spaces, but lives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team of passionate designers, architects, and craftspeople work together to bring your vision to life, combining aesthetics with functionality to create spaces that are both beautiful and livable.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="image-hover-zoom rounded-lg">
              <img src={aboutTeamImg} alt="Structures design team at work" className="w-full rounded-lg" />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-cream-dark">
        <div className="container-luxury grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <SectionReveal key={v.title} delay={i * 0.15}>
              <div className="bg-background p-10 rounded-lg border border-border/50">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <v.icon className="text-gold" size={24} />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-4 text-foreground">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-luxury max-w-3xl mx-auto text-center">
          <SectionReveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Why Choose Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12">The Structures Difference</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {whyChoose.map((item, i) => (
              <SectionReveal key={item} delay={i * 0.08}>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-cream-dark">
                  <CheckCircle2 size={20} className="text-gold shrink-0" />
                  <span className="text-foreground font-medium text-sm">{item}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-charcoal">
        <div className="container-luxury text-center">
          <SectionReveal>
            <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Team</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-12">Meet the Experts</h2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <SectionReveal key={member.name} delay={i * 0.1}>
                <div className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-lg p-8">
                  <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-4">
                    <Users size={28} className="text-gold" />
                  </div>
                  <h4 className="font-display text-lg font-semibold text-primary-foreground">{member.name}</h4>
                  <p className="text-primary-foreground/50 text-sm mt-1">{member.role}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
