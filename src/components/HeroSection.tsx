import { Crosshair } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[hsl(var(--hero-from))] via-[hsl(var(--hero-via))] to-[hsl(var(--hero-to))] border border-border p-8 md:p-12">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--primary)/0.15),transparent_60%)]" />
      <div className="relative z-10 flex flex-col items-center text-center gap-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
          <Crosshair className="w-3 h-3" />
          Plataforma ativa
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
          Nexus App
        </h1>
        <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
          Central de Inteligência para Marketplaces
        </p>
        <p className="text-sm text-muted-foreground/70 max-w-lg">
          Ferramentas estratégicas de dados para precificação, ads, fulfillment, devoluções e rentabilidade — tudo em um só lugar.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
