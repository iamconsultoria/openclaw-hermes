import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { comparisonData } from "@/lib/comparisonData";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function InstallationGuide() {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(text);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const CommandBlock = ({ command }: { command: string }) => (
    <div className="relative">
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm font-mono mb-2">
        <code>{command}</code>
      </pre>
      <button
        onClick={() => copyToClipboard(command)}
        className="absolute top-2 right-2 p-2 hover:bg-secondary rounded transition-colors"
        title="Copy command"
      >
        {copiedCmd === command ? (
          <Check className="w-4 h-4 text-primary" />
        ) : (
          <Copy className="w-4 h-4" />
        )}
      </button>
    </div>
  );

  return (
    <Tabs defaultValue="hermes" className="w-full">
      <TabsList className="grid w-full grid-cols-2 mb-8">
        <TabsTrigger value="hermes">Hermes Agent</TabsTrigger>
        <TabsTrigger value="openclaw">OpenClaw</TabsTrigger>
      </TabsList>

      {/* Hermes Installation */}
      <TabsContent value="hermes" className="space-y-8">
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Installation Requirements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(comparisonData.localTesting.hermes.requirements).map(
              ([key, value]) => (
                <div key={key}>
                  <span className="font-semibold capitalize">{key}:</span>
                  <p className="text-muted-foreground">{value}</p>
                </div>
              )
            )}
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Installation Steps</h3>
          <div className="space-y-6">
            {comparisonData.localTesting.hermes.steps.map((step) => (
              <div key={step.step} className="border-l-4 border-primary pl-6">
                <h4 className="font-bold text-lg mb-3">
                  Step {step.step}: {step.title}
                </h4>
                {step.commands && (
                  <div className="space-y-2 mb-3">
                    {step.commands.map((cmd, idx) => (
                      <CommandBlock key={idx} command={cmd} />
                    ))}
                  </div>
                )}
                {step.description && (
                  <p className="text-muted-foreground">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Tips for Success</h3>
          <ul className="space-y-3">
            {comparisonData.localTesting.hermes.tips.map((tip, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </Card>
      </TabsContent>

      {/* OpenClaw Installation */}
      <TabsContent value="openclaw" className="space-y-8">
        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Installation Requirements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(comparisonData.localTesting.openclaw.requirements).map(
              ([key, value]) => (
                <div key={key}>
                  <span className="font-semibold capitalize">{key}:</span>
                  <p className="text-muted-foreground">{value}</p>
                </div>
              )
            )}
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Installation Steps</h3>
          <div className="space-y-6">
            {comparisonData.localTesting.openclaw.steps.map((step) => (
              <div key={step.step} className="border-l-4 border-accent pl-6">
                <h4 className="font-bold text-lg mb-3">
                  Step {step.step}: {step.title}
                </h4>
                {step.commands && (
                  <div className="space-y-2 mb-3">
                    {step.commands.map((cmd, idx) => (
                      <CommandBlock key={idx} command={cmd} />
                    ))}
                  </div>
                )}
                {step.description && (
                  <p className="text-muted-foreground">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-8">
          <h3 className="text-2xl font-bold mb-6">Tips for Success</h3>
          <ul className="space-y-3">
            {comparisonData.localTesting.openclaw.tips.map((tip, idx) => (
              <li key={idx} className="flex gap-3">
                <span className="text-accent font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
