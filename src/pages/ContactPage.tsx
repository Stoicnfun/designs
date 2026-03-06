import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-charcoal">
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Get In Touch</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">Contact Us</h1>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            Let's discuss your project and bring your vision to life.
          </p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <SectionReveal>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 bg-cream-dark border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-cream-dark border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-cream-dark border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-cream-dark border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <Button variant="gold" size="lg" type="submit" className="w-full sm:w-auto">
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </SectionReveal>

            {/* Contact Info + Map */}
            <SectionReveal delay={0.2}>
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-8">Contact Information</h2>
                <div className="space-y-6 mb-10">
                  <a href="tel:+919560585099" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Phone size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <p className="font-medium text-foreground">+91 9560585099</p>
                    </div>
                  </a>
                  <a href="mailto:info@structures.in" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Mail size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium text-foreground">info@structures.in</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                      <MapPin size={20} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Address</p>
                      <p className="font-medium text-foreground">New Delhi, India</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div className="mb-10">
                  <p className="text-sm font-medium text-foreground mb-4">Follow Us</p>
                  <div className="flex gap-3">
                    {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors text-muted-foreground">
                        <Icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="bg-cream-dark rounded-lg aspect-video flex items-center justify-center border border-border">
                  <div className="text-center">
                    <MapPin size={32} className="text-gold mx-auto mb-2" />
                    <p className="text-muted-foreground text-sm">Google Maps Integration</p>
                    <p className="text-muted-foreground text-xs">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
