import { Card } from "@/components/ui/card";
import { comparisonData } from "@/lib/comparisonData";
import { Check } from "lucide-react";

export default function FeaturesComparison() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Hermes Features */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-primary">Hermes Agent</h3>
        <div className="space-y-6">
          {comparisonData.features.hermes.map((category, idx) => (
            <Card key={idx} className="p-6">
              <h4 className="font-semibold mb-4 text-lg">{category.category}</h4>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>

      {/* OpenClaw Features */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-accent">OpenClaw</h3>
        <div className="space-y-6">
          {comparisonData.features.openclaw.map((category, idx) => (
            <Card key={idx} className="p-6">
              <h4 className="font-semibold mb-4 text-lg">{category.category}</h4>
              <ul className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
