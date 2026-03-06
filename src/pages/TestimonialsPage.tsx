import SectionReveal from "@/components/SectionReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Priya Sharma", role: "Homeowner, Delhi", text: "Structures completely transformed our 3BHK apartment into a stunning modern home. Their attention to detail and ability to understand our vision was remarkable. Every guest who visits is blown away!", rating: 5 },
  { name: "Rajesh Gupta", role: "CEO, TechVentures", text: "We hired Structures for our 10,000 sq ft office redesign. The result? A workspace that our employees love coming to every day. Productivity went up 30% after the renovation.", rating: 5 },
  { name: "Ananya Patel", role: "Restaurant Owner", text: "The restaurant interior they designed has become a landmark in our city. The ambiance they created perfectly complements our cuisine and has significantly increased our footfall.", rating: 5 },
  { name: "Vikram & Meera Joshi", role: "Homeowners, Gurgaon", text: "From our initial consultation to the final walkthrough, the team was professional, creative, and responsive. Our villa looks like it belongs in a design magazine!", rating: 5 },
  { name: "Sunita Reddy", role: "Hotel Manager", text: "Structures redesigned our boutique hotel lobby and suites. The transformation was incredible—our guest satisfaction scores have never been higher.", rating: 5 },
  { name: "Arjun Kapoor", role: "Startup Founder", text: "They designed our startup office on a tight budget without compromising on style. The space is modern, functional, and perfectly reflects our brand identity.", rating: 4 },
];

const TestimonialsPage = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-charcoal">
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Client Reviews</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">Testimonials</h1>
          <p className="text-primary-foreground/60 mt-4 max-w-xl mx-auto">
            Hear what our clients have to say about their experience with Structures.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 0.1}>
                <div className="bg-cream-dark border border-border/50 p-8 rounded-lg h-full flex flex-col">
                  <Quote size={32} className="text-gold/30 mb-4" />
                  <p className="text-foreground/80 leading-relaxed mb-6 flex-1 italic">"{t.text}"</p>
                  <div>
                    <div className="flex gap-1 mb-3">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={14} className={j < t.rating ? "fill-gold text-gold" : "text-border"} />
                      ))}
                    </div>
                    <p className="font-display font-semibold text-foreground">{t.name}</p>
                    <p className="text-muted-foreground text-sm">{t.role}</p>
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

export default TestimonialsPage;
