interface RevenueProgressBarProps {
  current: number;
  limit: number;
}

export function RevenueProgressBar({ current, limit }: RevenueProgressBarProps) {
  const percentage = Math.min((current / limit) * 100, 100);
  const color =
    percentage >= 95
      ? "bg-red-500"
      : percentage >= 85
        ? "bg-yellow-500"
        : "bg-green-500";

  return (
    <div className="w-full">
      <div className="flex justify-between text-sm mb-1">
        <span>
          R$ {current.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
        </span>
        <span className="text-gray-500">
          {percentage.toFixed(1)}% do limite
        </span>
      </div>
      <div className="h-3 w-full rounded-full bg-gray-200 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      <p className="text-xs text-gray-400 mt-1">
        Limite anual: R${" "}
        {limit.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
      </p>
    </div>
  );
}
