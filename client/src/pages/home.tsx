import { motion } from "framer-motion";
import { SectionTitle } from "@/components/section-title";
import { ProjectCard } from "@/components/project-card";
import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiReact, SiTypescript, SiTailwindcss, SiNodedotjs } from "react-icons/si";
import { DownloadIcon } from "lucide-react";

const skills = [
  { icon: SiReact, label: "React" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiNodedotjs, label: "Node.js" },
];

const projects = [
  {
    title: "Project 1",
    description: "A modern web application built with React and TypeScript",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    link: "#",
  },
  {
    title: "Project 2",
    description: "An e-commerce platform with advanced features",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A real-time collaboration tool for teams",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    link: "#",
  },
  {
    title: "Project 4",
    description: "A mobile-first dashboard application",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    link: "#",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1506443102696-39d0c10eae2b"
            alt="background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              A Full Stack Developer passionate about creating beautiful and functional web applications
            </p>
            <div className="flex gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" size="lg">
                <DownloadIcon className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
                alt="Profile"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <div>
              <SectionTitle>About Me</SectionTitle>
              <p className="text-lg text-muted-foreground mb-6">
                With over 5 years of experience in web development, I specialize in
                building modern, responsive, and user-friendly applications using
                the latest technologies.
              </p>
              <p className="text-lg text-muted-foreground">
                I'm passionate about creating clean, efficient code and delivering
                exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:border-primary transition-colors">
                  <skill.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="font-medium">{skill.label}</h3>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <SectionTitle>Projects</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <SectionTitle>Get in Touch</SectionTitle>
          <div className="max-w-lg mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
