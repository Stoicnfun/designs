import { useState } from "react";
import SectionReveal from "@/components/SectionReveal";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import livingroomImg from "@/assets/portfolio-livingroom.jpg";
import bedroomImg from "@/assets/portfolio-bedroom.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import officeImg from "@/assets/portfolio-office.jpg";
import bathroomImg from "@/assets/portfolio-bathroom.jpg";
import commercialImg from "@/assets/commercial-interior.jpg";
import heroImg from "@/assets/hero-interior.jpg";

const categories = ["All", "Living Rooms", "Bedrooms", "Offices", "Kitchens"];

const projects = [
  { img: livingroomImg, title: "Contemporary Living Space", category: "Living Rooms", desc: "A serene living room with neutral tones and natural textures, designed for comfort and elegance." },
  { img: bedroomImg, title: "Luxury Master Suite", category: "Bedrooms", desc: "A tranquil master bedroom with soft lighting, premium fabrics, and a calming color palette." },
  { img: kitchenImg, title: "Modern Gourmet Kitchen", category: "Kitchens", desc: "A chef's dream kitchen with marble countertops, warm wood cabinetry, and designer fixtures." },
  { img: officeImg, title: "Executive Corner Office", category: "Offices", desc: "A sophisticated executive office blending warm wood paneling with contemporary gold accents." },
  { img: bathroomImg, title: "Spa-Inspired Bathroom", category: "Living Rooms", desc: "A luxurious bathroom retreat featuring a freestanding tub and natural stone finishes." },
  { img: commercialImg, title: "Fine Dining Restaurant", category: "Offices", desc: "An upscale restaurant interior with marble floors, elegant lighting, and refined seating arrangements." },
  { img: heroImg, title: "Grand Living Hall", category: "Living Rooms", desc: "A double-height living space with floor-to-ceiling windows and minimalist luxury furnishings." },
  { img: bedroomImg, title: "Guest Bedroom Retreat", category: "Bedrooms", desc: "A welcoming guest bedroom with warm tones, pendant lighting, and thoughtful amenities." },
];

interface Project {
  img: string;
  title: string;
  category: string;
  desc: string;
}

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = activeCategory === "All" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-charcoal">
        <div className="relative z-10 text-center px-4">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">Our Portfolio</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground">Featured Projects</h1>
        </div>
      </section>

      {/* Filters + Gallery */}
      <section className="section-padding bg-background">
        <div className="container-luxury">
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-gold text-primary-foreground"
                      : "bg-cream-dark text-muted-foreground hover:bg-warm-beige"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedProject(project)}
                  className="image-hover-zoom rounded-lg group cursor-pointer relative aspect-[4/3]"
                >
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover rounded-lg" />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-500 rounded-lg flex items-end p-6">
                    <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-gold text-xs tracking-[0.2em] uppercase">{project.category}</p>
                      <h3 className="font-display text-lg font-semibold text-primary-foreground">{project.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-background rounded-lg max-w-3xl w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full aspect-video object-cover" />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-foreground/50 rounded-full flex items-center justify-center text-primary-foreground hover:bg-foreground/70 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-2">{selectedProject.category}</p>
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">{selectedProject.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PortfolioPage;
