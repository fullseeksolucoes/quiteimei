import type { FiscalHealthStatus } from "@meicontrol/types";

const statusConfig: Record<
  FiscalHealthStatus,
  { label: string; className: string }
> = {
  GREEN: { label: "Tudo em dia", className: "bg-green-100 text-green-800" },
  YELLOW: { label: "Atenção", className: "bg-yellow-100 text-yellow-800" },
  RED: { label: "Pendência crítica", className: "bg-red-100 text-red-800" },
};

interface FiscalHealthBadgeProps {
  status: FiscalHealthStatus;
}

export function FiscalHealthBadge({ status }: FiscalHealthBadgeProps) {
  const config = statusConfig[status];
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${config.className}`}
    >
      {config.label}
    </span>
  );
}
