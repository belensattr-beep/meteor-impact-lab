import Header from "@/components/Header";
import ControlPanel from "@/components/ControlPanel";
import OrbitalView from "@/components/OrbitalView";
import ImpactMapView from "@/components/ImpactMapView";
import StatusBar from "@/components/StatusBar";

const Index = () => {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Header />
      
      <main className="flex-1 overflow-hidden">
        <div className="h-full grid grid-cols-1 lg:grid-cols-4 gap-4 p-4">
          {/* Control Panel - Left Sidebar */}
          <div className="lg:col-span-1 h-full min-h-[400px]">
            <ControlPanel />
          </div>

          {/* Visualization Area - Main Content */}
          <div className="lg:col-span-3 h-full grid grid-rows-2 gap-4">
            {/* 3D Orbital View - Top */}
            <div className="min-h-[300px]">
              <OrbitalView />
            </div>

            {/* 2D Impact Map - Bottom */}
            <div className="min-h-[300px]">
              <ImpactMapView />
            </div>
          </div>
        </div>
      </main>

      <StatusBar />
    </div>
  );
};

export default Index;
