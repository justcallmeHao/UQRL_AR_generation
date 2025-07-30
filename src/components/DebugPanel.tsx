import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity, Eye, Hand, Terminal } from "lucide-react";

interface DebugPanelProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const DebugPanel = ({ title, icon, children, className = "" }: DebugPanelProps) => {
  return (
    <Card className={`glass-panel w-80 ${className}`}>
      <div className="flex items-center gap-2 p-4 border-b border-ar-glass-border">
        {icon}
        <h3 className="font-semibold text-sm text-foreground">{title}</h3>
      </div>
      <div className="p-4">
        {children}
      </div>
    </Card>
  );
};

export const MarkerDetectionPanel = () => {
  const markers = [
    { id: "hiro", name: "Hiro Marker", detected: true, confidence: 0.95 },
    { id: "kanji", name: "Kanji Marker", detected: false, confidence: 0.0 },
    { id: "custom", name: "Custom Logo", detected: true, confidence: 0.78 }
  ];

  return (
    <DebugPanel
      title="Marker Detection"
      icon={<Eye className="w-4 h-4 text-ar-primary" />}
      className="absolute top-4 left-4"
    >
      <div className="space-y-3">
        {markers.map((marker) => (
          <div key={marker.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${marker.detected ? 'bg-ar-success' : 'bg-muted'}`} />
              <span className="text-sm font-mono">{marker.name}</span>
            </div>
            <Badge variant={marker.detected ? "default" : "secondary" as "default" | "secondary"} className="text-xs">
              {(marker.confidence * 100).toFixed(0)}%
            </Badge>
          </div>
        ))}
      </div>
    </DebugPanel>
  );
};

export const HandTrackingPanel = () => {
  const handData = {
    detected: true,
    landmarks: 21,
    gesture: "pointing",
    confidence: 0.89
  };

  return (
    <DebugPanel
      title="Hand Tracking"
      icon={<Hand className="w-4 h-4 text-ar-secondary" />}
      className="absolute top-4 right-4"
    >
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Status:</span>
          <Badge variant={(handData.detected ? "default" : "secondary") as "default" | "secondary"}>
            {handData.detected ? "Active" : "Inactive"}
          </Badge>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Landmarks:</span>
          <span className="font-mono">{handData.landmarks}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Gesture:</span>
          <span className="font-mono capitalize">{handData.gesture}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Confidence:</span>
          <span className="font-mono">{(handData.confidence * 100).toFixed(1)}%</span>
        </div>
      </div>
    </DebugPanel>
  );
};

export const ConsolePanel = () => {
  const logs = [
    { time: "14:23:15", level: "INFO", message: "AR.js initialized successfully" },
    { time: "14:23:16", level: "INFO", message: "Camera stream started" },
    { time: "14:23:18", level: "SUCCESS", message: "Marker 'hiro' detected" },
    { time: "14:23:20", level: "INFO", message: "3D model loaded: robot.glb" },
    { time: "14:23:22", level: "WARNING", message: "Low lighting detected" },
    { time: "14:23:25", level: "INFO", message: "Hand tracking enabled" },
    { time: "14:23:27", level: "SUCCESS", message: "Gesture recognized: pointing" },
    { time: "14:23:30", level: "ERROR", message: "Failed to load texture.jpg" }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "SUCCESS": return "text-ar-success";
      case "WARNING": return "text-ar-warning";
      case "ERROR": return "text-destructive";
      default: return "text-ar-primary";
    }
  };

  return (
    <DebugPanel
      title="Console Output"
      icon={<Terminal className="w-4 h-4 text-ar-warning" />}
      className="absolute bottom-4 left-4 w-96"
    >
      <ScrollArea className="h-48 console rounded-lg p-3">
        <div className="space-y-1 text-xs font-mono">
          {logs.map((log, index) => (
            <div key={index} className="flex gap-2">
              <span className="text-muted-foreground shrink-0">[{log.time}]</span>
              <span className={`${getLevelColor(log.level)} shrink-0 w-16`}>{log.level}</span>
              <span className="text-console-text">{log.message}</span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </DebugPanel>
  );
};

export const SystemStatusPanel = () => {
  const systemInfo = {
    fps: 60,
    memory: "147.2 MB",
    gpu: "WebGL 2.0",
    latency: "12ms"
  };

  return (
    <DebugPanel
      title="System Status"
      icon={<Activity className="w-4 h-4 text-ar-success" />}
      className="absolute bottom-4 right-4"
    >
      <div className="grid grid-cols-2 gap-3 text-sm">
        <div>
          <span className="text-muted-foreground">FPS:</span>
          <div className="font-mono text-lg font-bold text-ar-success">{systemInfo.fps}</div>
        </div>
        <div>
          <span className="text-muted-foreground">Memory:</span>
          <div className="font-mono text-sm">{systemInfo.memory}</div>
        </div>
        <div>
          <span className="text-muted-foreground">GPU:</span>
          <div className="font-mono text-sm">{systemInfo.gpu}</div>
        </div>
        <div>
          <span className="text-muted-foreground">Latency:</span>
          <div className="font-mono text-sm">{systemInfo.latency}</div>
        </div>
      </div>
    </DebugPanel>
  );
};