import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Settings, Maximize, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";

const ARViewer = () => {

  const openARScene = () => {
    window.open("/ar/ar-scene.html", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />

      {/* Camera status indicator */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="glass-panel px-4 py-2 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="font-mono text-sm">AR Ready</span>
        </div>
      </div>

      {/* Top Controls */}
      <div className="absolute top-6 left-6 z-50 flex items-center gap-3">
        <Button variant="glass" size="icon" asChild>
          <Link to="/">
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>

        <Button variant="glass" size="icon" onClick={openARScene}>
          <Maximize className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default ARViewer;
