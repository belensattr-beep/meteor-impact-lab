import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, RotateCcw, Settings2 } from "lucide-react";
import { toast } from "sonner";

const ControlPanel = () => {
  const [asteroid, setAsteroid] = useState("apophis");
  const [latitude, setLatitude] = useState(40.7);
  const [longitude, setLongitude] = useState(-74.0);
  const [diameter, setDiameter] = useState([370]);
  const [velocity, setVelocity] = useState([12.6]);

  const handleSimulate = () => {
    toast.success("Simulation started", {
      description: `Calculating impact scenario for ${asteroid}...`,
    });
  };

  const handleReset = () => {
    setLatitude(40.7);
    setLongitude(-74.0);
    setDiameter([370]);
    setVelocity([12.6]);
    toast.info("Parameters reset to default values");
  };

  return (
    <Card className="h-full overflow-y-auto bg-card/80 backdrop-blur-sm border-border shadow-lg">
      <div className="p-6 space-y-6">
        <div className="flex items-center gap-2 pb-4 border-b border-border">
          <Settings2 className="h-5 w-5 text-primary" />
          <h2 className="text-xl font-bold text-foreground">Simulation Parameters</h2>
        </div>

        {/* Asteroid Selection */}
        <div className="space-y-2">
          <Label htmlFor="asteroid" className="text-sm font-medium text-foreground">
            Near-Earth Object
          </Label>
          <Select value={asteroid} onValueChange={setAsteroid}>
            <SelectTrigger id="asteroid" className="bg-input border-border">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apophis">99942 Apophis</SelectItem>
              <SelectItem value="bennu">101955 Bennu</SelectItem>
              <SelectItem value="ryugu">162173 Ryugu</SelectItem>
              <SelectItem value="didymos">65803 Didymos</SelectItem>
              <SelectItem value="eros">433 Eros</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Impact Coordinates */}
        <div className="space-y-4 pt-2">
          <h3 className="text-sm font-semibold text-foreground">Impact Coordinates</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="latitude" className="text-xs text-muted-foreground">
                Latitude
              </Label>
              <Input
                id="latitude"
                type="number"
                value={latitude}
                onChange={(e) => setLatitude(Number(e.target.value))}
                className="bg-input border-border"
                step="0.1"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="longitude" className="text-xs text-muted-foreground">
                Longitude
              </Label>
              <Input
                id="longitude"
                type="number"
                value={longitude}
                onChange={(e) => setLongitude(Number(e.target.value))}
                className="bg-input border-border"
                step="0.1"
              />
            </div>
          </div>
        </div>

        {/* Physical Properties */}
        <div className="space-y-4 pt-2">
          <h3 className="text-sm font-semibold text-foreground">Physical Properties</h3>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="text-xs text-muted-foreground">Diameter (meters)</Label>
              <span className="text-sm font-mono text-primary">{diameter[0]}m</span>
            </div>
            <Slider
              value={diameter}
              onValueChange={setDiameter}
              min={50}
              max={1000}
              step={10}
              className="py-2"
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label className="text-xs text-muted-foreground">Velocity (km/s)</Label>
              <span className="text-sm font-mono text-primary">{velocity[0]} km/s</span>
            </div>
            <Slider
              value={velocity}
              onValueChange={setVelocity}
              min={5}
              max={40}
              step={0.1}
              className="py-2"
            />
          </div>
        </div>

        {/* Energy Calculation Display */}
        <Card className="p-4 bg-muted/30 border-border">
          <h3 className="text-xs font-semibold text-muted-foreground mb-2">Estimated Impact Energy</h3>
          <div className="text-2xl font-bold text-primary">
            {(0.5 * (4/3 * Math.PI * Math.pow(diameter[0]/2, 3) * 3000) * Math.pow(velocity[0] * 1000, 2) / 4.184e12).toFixed(2)} MT
          </div>
          <p className="text-xs text-muted-foreground mt-1">Megatons of TNT equivalent</p>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4">
          <Button 
            onClick={handleSimulate} 
            className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Play className="h-4 w-4 mr-2" />
            Run Simulation
          </Button>
          <Button 
            onClick={handleReset}
            variant="outline"
            className="border-border hover:bg-muted"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Info */}
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed">
            Adjust parameters to simulate various impact scenarios. The system calculates kinetic energy, crater dimensions, and secondary effects based on NASA NEO data and USGS terrain models.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default ControlPanel;
