import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Github, ArrowRight, Scan, Code2, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import hiroMarker from "@/assets/hiro-marker.png";

const Home = () => {
  const supportedMarkers = [
    {
      name: "Hiro Pattern",
      image: hiroMarker,
      description: "Classic AR.js marker"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <Badge className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 smooth">
            Open Source • AR.js • FastAPI
          </Badge>

          {/* Main Title */}
          <h1 className="font-display text-6xl md:text-8xl font-bold text-foreground leading-tight">
            UQRL AR Image Tracker
          </h1>

          {/* Subtitle */}
          <p className="font-body text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Scan image markers. Render 3D. All in your browser.
          </p>

          {/* CTA Button */}
          <div className="pt-4">
            <Button variant="default" size="hero" asChild className="animate-fade-in">
              <Link to="/ar-viewer">
                <Camera className="w-6 h-6" />
                Start AR Experience
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Tech Icons */}
          <div className="flex items-center justify-center gap-8 pt-8 text-muted-foreground">
            <div className="flex items-center gap-2 text-sm">
              <Code2 className="w-5 h-5" />
              <span>No Install</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-sm">
              <Zap className="w-5 h-5" />
              <span>Real-time</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div className="flex items-center gap-2 text-sm">
              <Scan className="w-5 h-5" />
              <span>WebAR</span>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Markers Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              Supported Markers
            </h2>
            <p className="font-body text-muted-foreground">
              High-contrast patterns for reliable tracking
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {supportedMarkers.map((marker, index) => (
              <Card key={index} className="glass-panel p-6 hover-lift smooth group">
                <div className="aspect-square bg-white rounded-lg mb-6 overflow-hidden border border-uqrl-glass-border">
                  <img
                    src={marker.image}
                    alt={marker.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-lg font-medium text-foreground mb-2">
                  {marker.name}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {marker.description}
                </p>
              </Card>
            ))}
          </div>
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

          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/about" className="font-body">About</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/uqrl/ar-image-tracker" target="_blank" rel="noopener noreferrer" className="font-body">
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:contact@uqrl.dev" className="font-body">Contact</a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;