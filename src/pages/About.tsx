import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Camera,
  Code2,
  Cpu,
  Database,
  Globe,
  Smartphone,
  ArrowRight,
  CheckCircle,
  Github,
  ExternalLink,
  Scan
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Link } from "react-router-dom";

const About = () => {
  const steps = [
    {
      number: "01",
      title: "Prepare Markers",
      description: "Print or display supported markers with good lighting and contrast.",
      icon: <Scan className="w-5 h-5" />
    },
    {
      number: "02",
      title: "Grant Camera Access",
      description: "Allow browser camera access when prompted. Ensure good lighting conditions.",
      icon: <Camera className="w-5 h-5" />
    },
    {
      number: "03",
      title: "Point and Track",
      description: "Aim camera at marker. 3D objects render automatically when detected.",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const techStack = [
    {
      category: "Frontend",
      technologies: [
        { name: "AR.js", description: "WebAR marker tracking library" },
        { name: "Node.js", description: "For FrontEnd templates" },
        { name: "React", description: "Component-based UI framework" },
        { name: "General HTMl & CSS", description: "For general web purpose" }
      ],
      icon: <Globe className="w-5 h-5" />
    },
    {
      category: "Backend",
      technologies: [
        { name: "Python", description: "Optional: if you decide you use minimal version from GitHub or Workshop" },
        { name: "NPM", description: "For development hosting alongside with NodeJS" },
        { name: "No backend", description: "As of current development, no other backend needed unless you want more customised configuration" }
      ],
      icon: <Database className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-primary/10 text-primary border border-primary/20">
            Documentation & Guide
          </Badge>

          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
            About UQRL AR
          </h1>

          <p className="font-body text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            An open-source WebAR platform for real-time image tracking and 3D rendering.
            Built for developers who need reliable, browser-based augmented reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button variant="default" size="lg" asChild>
              <Link to="/ar-viewer">
                <Camera className="w-5 h-5" />
                Try AR Experience
              </Link>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/justcallmeHao/UQRL_AR_generation" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                View on GitHub
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Usage Guide */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              How to Use
            </h2>
            <p className="font-body text-muted-foreground">
              Three simple steps to start tracking
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="glass-panel p-8 text-center hover-lift smooth">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>

                <div className="font-display text-2xl font-semibold text-primary mb-4">{step.number}</div>
                <h3 className="font-display text-lg font-medium text-foreground mb-4">{step.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-6 bg-muted/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Technology Stack
            </h2>
            <p className="font-body text-muted-foreground">
              Built with modern web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {techStack.map((category, index) => (
              <Card key={index} className="glass-panel p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  <h3 className="font-display text-lg font-medium text-foreground">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="border-l-2 border-primary/30 pl-4">
                      <div className="font-body font-medium text-foreground">{tech.name}</div>
                      <div className="font-body text-sm text-muted-foreground">{tech.description}</div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Source Badge */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Badge className="bg-primary/10 text-primary border border-primary/20 text-lg px-6 py-2">
            ⭐ Open Source Project
          </Badge>

          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Ready to Get Started?
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            Experience WebAR in your browser right now.
          </p>

          <Button variant="default" size="hero" asChild>
            <Link to="/ar-viewer">
              <Camera className="w-6 h-6" />
              Launch AR Experience
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold text-foreground">UQRL AR Image Tracker</span>
          </div>

          <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 smooth">
            Made by Hao Vo (as Workshop Director) from love. Cheers!!!
          </Badge>

          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/about" className="font-body">About</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/justcallmeHao/UQRL_AR_generation" target="_blank" rel="noopener noreferrer" className="font-body">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/howlvoreworkingspace/" target="_blank" rel="noopener noreferrer" className="font-body">
                <Github className="w-4 h-4" />
                Contact author for feedbacks
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;