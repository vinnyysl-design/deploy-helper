import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import MetricCards from "@/components/MetricCards";
import AppCard from "@/components/AppCard";
import apps from "@/data/apps.json";

const Index = () => {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");

  const categorias = useMemo(
    () => ["Todos", ...Array.from(new Set(apps.map((a) => a.categoria))).sort()],
    []
  );

  const filtrados = useMemo(() => {
    const termo = busca.toLowerCase().trim();
    return apps.filter((app) => {
      const matchCat = categoria === "Todos" || app.categoria === categoria;
      const conteudo = `${app.nome} ${app.descricao} ${app.tag}`.toLowerCase();
      const matchTermo = conteudo.includes(termo);
      return matchCat && matchTermo;
    });
  }, [busca, categoria]);

  const ativos = apps.filter((a) => a.status === "Ativo").length;
  const beta = apps.filter((a) => a.status === "Beta").length;
  const numCategorias = new Set(apps.map((a) => a.categoria)).size;

  return (
    <div className="min-h-screen bg-background px-4 py-8 md:px-8 max-w-6xl mx-auto space-y-8">
      <HeroSection />
      <MetricCards total={apps.length} ativos={ativos} beta={beta} categorias={numCategorias} />

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Buscar aplicativo..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/40 text-sm transition-shadow"
          />
        </div>
        <div className="relative">
          <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            className="pl-9 pr-8 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary/40 appearance-none cursor-pointer transition-shadow"
          >
            {categorias.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {categorias.map((c) => (
          <button
            key={c}
            onClick={() => setCategoria(c)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              categoria === c
                ? "bg-primary/15 text-primary border-primary/30"
                : "bg-card text-muted-foreground border-border hover:border-primary/20 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Apps grid */}
      {filtrados.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-sm">Nenhum aplicativo encontrado.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtrados.map((app) => (
            <AppCard key={app.nome} app={app} />
          ))}
        </div>
      )}

      {/* Footer */}
      <footer className="text-center text-xs text-muted-foreground pt-8 pb-4">
        Nexus App © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Index;
