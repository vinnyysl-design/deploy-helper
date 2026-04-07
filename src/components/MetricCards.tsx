import { Box, CheckCircle, FlaskConical, LayoutGrid } from "lucide-react";

interface MetricCardsProps {
  total: number;
  ativos: number;
  beta: number;
  categorias: number;
}

const MetricCards = ({ total, ativos, beta, categorias }: MetricCardsProps) => {
  const metrics = [
    { label: "Total de apps", value: total, icon: <Box className="w-4 h-4 text-primary" /> },
    { label: "Ativos", value: ativos, icon: <CheckCircle className="w-4 h-4 text-primary" /> },
    { label: "Em beta", value: beta, icon: <FlaskConical className="w-4 h-4 text-primary" /> },
    { label: "Categorias", value: categorias, icon: <LayoutGrid className="w-4 h-4 text-primary" /> },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {metrics.map((m) => (
        <div key={m.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
          {m.icon}
          <div>
            <p className="text-xl font-bold text-foreground">{m.value}</p>
            <p className="text-xs text-muted-foreground">{m.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MetricCards;
