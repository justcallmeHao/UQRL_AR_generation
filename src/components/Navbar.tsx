import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, Github, Info } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-7xl mx-auto glass-panel px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 smooth">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Camera className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-semibold text-foreground">
              UQRL
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              asChild
            >
              <Link to="/">Home</Link>
            </Button>

            <Button
              variant={isActive("/about") ? "default" : "ghost" as "default" | "ghost"}
              size="sm"
              asChild
            >
              <Link to="/about">
                <Info className="w-4 h-4" />
                About
              </Link>
            </Button>

            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href="https://github.com/uqrl/ar-image-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};