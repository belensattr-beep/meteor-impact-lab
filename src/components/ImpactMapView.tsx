import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Map } from "lucide-react";

const ImpactMapView = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Mapbox GL JS integration will be added here
    // For now, we'll display a placeholder
    console.log("Mapbox container ready");
  }, []);

  return (
    <Card className="h-full overflow-hidden bg-card/80 backdrop-blur-sm border-border shadow-lg relative">
      <div className="absolute top-4 left-4 z-10 bg-card/90 backdrop-blur-sm rounded-lg px-3 py-2 border border-border">
        <div className="flex items-center gap-2">
          <Map className="h-4 w-4 text-secondary" />
          <span className="text-sm font-semibold text-foreground">Terrestrial Impact Analysis</span>
        </div>
      </div>

      <div className="absolute top-4 right-4 z-10 space-y-2">
        <Card className="bg-card/90 backdrop-blur-sm px-3 py-2 border border-border">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded-full bg-destructive" />
              <span className="text-muted-foreground">Impact Crater</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded-full bg-orange-500" />
              <span className="text-muted-foreground">Seismic Zone</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="h-3 w-3 rounded-full bg-blue-500" />
              <span className="text-muted-foreground">Tsunami Risk</span>
            </div>
          </div>
        </Card>
      </div>
      
      <div 
        ref={mapRef} 
        className="w-full h-full bg-gradient-to-br from-background via-card to-background"
      >
        {/* Mapbox GL JS will be initialized here */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center space-y-4 p-8">
            <div className="inline-block p-6 rounded-full bg-secondary/10 border border-secondary/20">
              <Map className="h-16 w-16 text-secondary animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-foreground">2D Impact Mapping</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Mapbox GL JS integration for terrestrial impact visualization. 
              Displays crater boundaries, tsunami zones, and seismic intensity contours.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-xs text-secondary">
                <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                <span>Requires Mapbox Access Token</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ImpactMapView;
