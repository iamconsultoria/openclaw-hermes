import { Check, X } from "lucide-react";
import { comparisonData } from "@/lib/comparisonData";

export default function ComparisonTable() {
  const categories = [
    {
      name: "Setup Time",
      hermes: "~2 minutes",
      openclaw: "~8 minutes",
      winner: "hermes",
    },
    {
      name: "Security CVEs",
      hermes: "0",
      openclaw: "9",
      winner: "hermes",
    },
    {
      name: "Autonomous Learning",
      hermes: "Yes",
      openclaw: "Limited",
      winner: "hermes",
    },
    {
      name: "Platform Coverage",
      hermes: "5 platforms",
      openclaw: "22+ platforms",
      winner: "openclaw",
    },
    {
      name: "Ecosystem Size",
      hermes: "~150 skills",
      openclaw: "2,857+ skills",
      winner: "openclaw",
    },
    {
      name: "Memory Persistence",
      hermes: "90 days",
      openclaw: "30 days",
      winner: "hermes",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left py-4 px-4 font-semibold">Feature</th>
            <th className="text-left py-4 px-4 font-semibold">Hermes Agent</th>
            <th className="text-left py-4 px-4 font-semibold">OpenClaw</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((cat, idx) => (
            <tr
              key={idx}
              className="border-b border-border hover:bg-secondary/50 transition-colors"
            >
              <td className="py-4 px-4 font-medium">{cat.name}</td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  {cat.winner === "hermes" && (
                    <Check className="w-4 h-4 text-primary" />
                  )}
                  {cat.hermes}
                </div>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  {cat.winner === "openclaw" && (
                    <Check className="w-4 h-4 text-accent" />
                  )}
                  {cat.openclaw}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
