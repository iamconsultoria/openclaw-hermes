import { Card } from "@/components/ui/card";
import { comparisonData } from "@/lib/comparisonData";

export default function BenchmarksSection() {
  const benchmarks = comparisonData.benchmarks.categories;

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        {benchmarks.map((benchmark, idx) => {
          const maxValue = Math.max(
            typeof benchmark.hermes === "number" ? benchmark.hermes : 0,
            typeof benchmark.openclaw === "number" ? benchmark.openclaw : 0
          );
          const hermesPercent =
            typeof benchmark.hermes === "number"
              ? (benchmark.hermes / maxValue) * 100
              : 0;
          const openclawPercent =
            typeof benchmark.openclaw === "number"
              ? (benchmark.openclaw / maxValue) * 100
              : 0;

          return (
            <Card key={idx} className="p-6">
              <h4 className="font-bold mb-2">{benchmark.name}</h4>
              <p className="text-sm text-muted-foreground mb-4">
                {benchmark.description}
              </p>

              <div className="space-y-4">
                {/* Hermes Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Hermes Agent</span>
                    <span className="text-sm font-bold">
                      {benchmark.hermes} {benchmark.unit}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${hermesPercent}%` }}
                    />
                  </div>
                </div>

                {/* OpenClaw Bar */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">OpenClaw</span>
                    <span className="text-sm font-bold">
                      {benchmark.openclaw} {benchmark.unit}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-accent h-2 rounded-full transition-all"
                      style={{ width: `${openclawPercent}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Winner Badge */}
              {benchmark.winner && (
                <div className="mt-4 pt-4 border-t border-border">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      benchmark.winner === "hermes"
                        ? "bg-primary/20 text-primary"
                        : "bg-accent/20 text-accent"
                    }`}
                  >
                    {benchmark.winner === "hermes" ? "Hermes" : "OpenClaw"} wins
                  </span>
                </div>
              )}
            </Card>
          );
        })}
      </div>

      {/* Summary */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <h3 className="text-2xl font-bold mb-6">Benchmark Summary</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-primary mb-4">Hermes Agent Wins</h4>
            <ul className="space-y-2 text-sm">
              {benchmarks
                .filter((b) => b.winner === "hermes")
                .map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-primary">✓</span>
                    <span>{b.name}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-accent mb-4">OpenClaw Wins</h4>
            <ul className="space-y-2 text-sm">
              {benchmarks
                .filter((b) => b.winner === "openclaw")
                .map((b, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span>{b.name}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
