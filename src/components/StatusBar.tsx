import { Activity, Database, Zap } from "lucide-react";

const StatusBar = () => {
  return (
    <div className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Database className="h-3 w-3" />
              <span>PostgreSQL + PostGIS</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Activity className="h-3 w-3" />
              <span>NASA NeoWs API</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Zap className="h-3 w-3" />
              <span>USGS TNM Data</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-muted-foreground">System Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
