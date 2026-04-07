import { ExternalLink, BarChart3, Package, Rocket, DollarSign, RotateCcw, Landmark, ArrowUpRight } from "lucide-react";

interface App {
  nome: string;
  descricao: string;
  categoria: string;
  status: string;
  tag: string;
  url: string;
  github: string;
  icone: string;
}

const iconMap: Record<string, React.ReactNode> = {
  "🧮": <BarChart3 className="w-5 h-5" />,
  "📦": <Package className="w-5 h-5" />,
  "🚀": <Rocket className="w-5 h-5" />,
  "💰": <DollarSign className="w-5 h-5" />,
  "↩️": <RotateCcw className="w-5 h-5" />,
  "🏦": <Landmark className="w-5 h-5" />,
  "⚖️": <BarChart3 className="w-5 h-5" />,
  "📊": <BarChart3 className="w-5 h-5" />,
};

const AppCard = ({ app }: { app: App }) => {
  const icon = iconMap[app.icone] || <ExternalLink className="w-5 h-5" />;
  const isBeta = app.status === "Beta";

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="rounded-lg bg-primary/10 p-2 text-primary">{icon}</div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-semibold text-sm text-foreground truncate">{app.nome}</h3>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{app.descricao}</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-1.5 mt-auto">
        <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[hsl(var(--badge-cat-bg))] text-[hsl(var(--badge-cat-text))]">
          {app.categoria}
        </span>
        {isBeta ? (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[hsl(var(--badge-beta-bg))] text-[hsl(var(--badge-beta-text))]">
            Beta
          </span>
        ) : (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[hsl(var(--badge-status-bg))] text-[hsl(var(--badge-status-text))]">
            {app.status}
          </span>
        )}
        {app.tag && (
          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-[hsl(var(--badge-tag-bg))] text-[hsl(var(--badge-tag-text))]">
            {app.tag}
          </span>
        )}
      </div>
    </a>
  );
};

export default AppCard;
