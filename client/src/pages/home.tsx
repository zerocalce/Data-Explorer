import React from "react";
import { motion } from "framer-motion";
import { 
  Activity, 
  Atom, 
  Cpu, 
  Database, 
  Hexagon, 
  Layers, 
  Network, 
  Share2, 
  ShieldCheck, 
  Terminal, 
  Zap 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Data from IPFS
const MOLECULE_DATA = {
  chemical_identity: {
    name: "Zenith-Nexus Astro-Metallic Monolith",
    designation: "AMD-ZENITH-01",
    class: "Organometallic Coordination Polymer Cluster",
    molecular_formula: "C138H72Co6N12Ru",
    description: "A central Ruthenium(II) energy core octahedrally coordinated to six ethynyl-linked Cobalt(II) phthalocyanine peripheral nodes, mimicking a neural processing architecture."
  },
  structural_data: {
    SMILES_Simplified: "c1(C#Cc2ccncc2[Co]L)c(C#Cc3ccncc3[Co]L)c(C#Cc4ccncc4[Co]L)c(C#Cc5ccncc5[Co]L)c(C#Cc6ccncc6[Co]L)c1C#Cc7ccncc7[Co]L",
    geometry: "Octahedral (Core) / Square Planar (Nodes)",
    coordination_center: "Ru(II) [Central Core]",
    peripheral_nodes: "Co(II)-Phthalocyanine [6 Blue Nodes]"
  },
  properties: {
    stability: "Thermally stable up to 450°C",
    electronic_profile: "High-speed electron delocalization",
    synthesis_feasibility: "High",
    drug_likeness: "Low"
  },
  metadata: {
    aesthetic_sync: "Cyberpunk-Industrial-Cosmic"
  }
};

const GlitchText = ({ text }: { text: string }) => {
  return (
    <span className="relative inline-block group">
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-primary opacity-0 group-hover:opacity-100 animate-pulse translate-x-[2px]">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-secondary opacity-0 group-hover:opacity-100 animate-pulse -translate-x-[2px]">
        {text}
      </span>
    </span>
  );
};

const CyberCard = ({ children, className = "", title, icon: Icon }: any) => (
  <Card className={`bg-card/40 border-primary/20 backdrop-blur-sm cyber-clip ${className}`}>
    <CardHeader className="pb-2 border-b border-primary/10">
      <CardTitle className="text-lg font-display uppercase tracking-widest flex items-center gap-2 text-primary">
        {Icon && <Icon className="w-5 h-5" />}
        <GlitchText text={title} />
      </CardTitle>
    </CardHeader>
    <CardContent className="pt-4">
      {children}
    </CardContent>
  </Card>
);

const HexNode = ({ active = false, label }: { active?: boolean, label: string }) => (
  <motion.div 
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ type: "spring", damping: 12 }}
    className="flex flex-col items-center gap-2"
  >
    <div className={`w-16 h-16 relative flex items-center justify-center`}>
      <Hexagon 
        className={`w-full h-full ${active ? 'text-primary fill-primary/20' : 'text-muted-foreground/30'}`} 
        strokeWidth={1}
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <Atom className={`w-6 h-6 ${active ? 'text-accent animate-spin-slow' : 'text-muted-foreground'}`} />
      </div>
    </div>
    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">{label}</span>
  </motion.div>
);

const CoreVisualizer = () => {
  return (
    <div className="relative w-full h-[400px] flex items-center justify-center bg-black/40 border border-primary/20 rounded-lg overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* Central Core */}
      <div className="relative z-10 animate-pulse">
        <div className="w-32 h-32 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.3)]">
          <div className="text-center">
            <div className="text-2xl font-display font-bold text-primary">Ru</div>
            <div className="text-xs text-primary/70">CORE</div>
          </div>
        </div>
      </div>

      {/* Orbital Rings */}
      <div className="absolute w-64 h-64 border border-secondary/30 rounded-full animate-[spin_10s_linear_infinite]" />
      <div className="absolute w-80 h-80 border border-accent/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

      {/* Nodes Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="15%" y2="30%" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="85%" y2="30%" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="15%" y2="70%" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
        <line x1="50%" y1="50%" x2="85%" y2="70%" stroke="rgba(0, 240, 255, 0.2)" strokeWidth="1" />
      </svg>

      {/* Peripheral Nodes */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2"><HexNode active label="N-01" /></div>
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2"><HexNode active label="N-04" /></div>
      <div className="absolute top-[30%] left-[15%]"><HexNode active label="N-06" /></div>
      <div className="absolute top-[30%] right-[15%]"><HexNode active label="N-02" /></div>
      <div className="absolute bottom-[30%] left-[15%]"><HexNode active label="N-05" /></div>
      <div className="absolute bottom-[30%] right-[15%]"><HexNode active label="N-03" /></div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-4 md:p-8 font-sans overflow-x-hidden">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-primary/20 pb-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary uppercase drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
            Zenith-Nexus
          </h1>
          <div className="flex items-center gap-3 mt-2">
            <Badge variant="outline" className="border-primary text-primary bg-primary/10 rounded-none px-2 py-0.5 font-mono text-xs">
              V.3.0.1
            </Badge>
            <span className="text-muted-foreground font-mono text-sm tracking-widest uppercase">
              Astro-Metallic Monolith Analysis
            </span>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-right hidden md:block">
            <div className="text-xs text-muted-foreground font-mono">SYSTEM STATUS</div>
            <div className="text-accent font-display">ONLINE</div>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-xs text-muted-foreground font-mono">SECURE LINK</div>
            <div className="text-primary font-display">ENCRYPTED</div>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Left Column - Data */}
        <div className="md:col-span-4 space-y-6">
          <CyberCard title="Identity Matrix" icon={Share2}>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-muted-foreground">DESIGNATION</span>
                <span className="text-primary">{MOLECULE_DATA.chemical_identity.designation}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-muted-foreground">CLASS</span>
                <span className="text-right max-w-[60%]">{MOLECULE_DATA.chemical_identity.class}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-muted-foreground">FORMULA</span>
                <span className="text-secondary">{MOLECULE_DATA.chemical_identity.molecular_formula}</span>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 border border-primary/10 rounded">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {MOLECULE_DATA.chemical_identity.description}
              </p>
            </div>
          </CyberCard>

          <CyberCard title="System Properties" icon={Activity}>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span>THERMAL STABILITY</span>
                  <span className="text-accent">450°C</span>
                </div>
                <Progress value={85} className="h-1 bg-accent/20" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span>ELECTRON VELOCITY</span>
                  <span className="text-primary">OPTIMAL</span>
                </div>
                <Progress value={92} className="h-1 bg-primary/20" />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span>SYNTHESIS FEASIBILITY</span>
                  <span className="text-secondary">HIGH</span>
                </div>
                <Progress value={78} className="h-1 bg-secondary/20" />
              </div>
            </div>
          </CyberCard>
        </div>

        {/* Center Column - Visualizer */}
        <div className="md:col-span-5 space-y-6">
          <CyberCard title="Structural Viz" icon={Hexagon} className="h-full min-h-[500px]">
            <CoreVisualizer />
            <div className="mt-4 grid grid-cols-2 gap-4">
               <div className="bg-black/40 p-3 rounded border border-white/5">
                  <div className="text-[10px] text-muted-foreground uppercase mb-1">Coordination Center</div>
                  <div className="font-display text-lg text-primary">Ru(II)</div>
               </div>
               <div className="bg-black/40 p-3 rounded border border-white/5">
                  <div className="text-[10px] text-muted-foreground uppercase mb-1">Peripheral Nodes</div>
                  <div className="font-display text-lg text-secondary">6x Co(II)</div>
               </div>
            </div>
          </CyberCard>
        </div>

        {/* Right Column - Terminal/Details */}
        <div className="md:col-span-3 space-y-6">
          <CyberCard title="Data Stream" icon={Terminal}>
             <ScrollArea className="h-[200px] font-mono text-xs text-muted-foreground">
                <div className="space-y-2">
                  <p><span className="text-primary">{">"}</span> INITIALIZING SEQUENCE...</p>
                  <p><span className="text-primary">{">"}</span> CONNECTING TO IPFS NODE...</p>
                  <p><span className="text-primary">{">"}</span> RETRIEVING CID: bafkre...vaea</p>
                  <p><span className="text-green-500">{">"}</span> DATA INTEGRITY: 100%</p>
                  <p><span className="text-primary">{">"}</span> PARSING SMILES STRING...</p>
                  <div className="text-white/30 break-all pl-4 border-l border-white/10 my-2">
                    {MOLECULE_DATA.structural_data.SMILES_Simplified}
                  </div>
                  <p><span className="text-primary">{">"}</span> RENDERING MODEL...</p>
                  <p><span className="text-green-500">{">"}</span> READY.</p>
                </div>
             </ScrollArea>
          </CyberCard>

          <CyberCard title="Architecture" icon={Network}>
             <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-default group">
                   <Layers className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
                   <div className="text-sm font-mono">Octahedral Core</div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-default group">
                   <Layers className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                   <div className="text-sm font-mono">Square Planar Nodes</div>
                </div>
                <div className="flex items-center gap-3 p-2 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-default group">
                   <Zap className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
                   <div className="text-sm font-mono">Pi-Conjugation</div>
                </div>
             </div>
          </CyberCard>

          <div className="p-4 border border-destructive/30 bg-destructive/5 rounded cyber-clip-inverse">
             <div className="flex items-center gap-2 text-destructive mb-2">
               <ShieldCheck className="w-4 h-4" />
               <span className="text-xs font-bold tracking-widest uppercase">Security Protocol</span>
             </div>
             <p className="text-[10px] text-destructive/80 font-mono">
               UNAUTHORIZED REPLICATION OF THIS MOLECULAR STRUCTURE IS PROHIBITED BY INTERGALACTIC TREATY 77-B.
             </p>
          </div>
        </div>

      </div>
    </div>
  );
}
