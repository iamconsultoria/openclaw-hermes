import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Check, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { comparisonData } from "@/lib/comparisonData";
import ComparisonTable from "@/components/ComparisonTable";
import InstallationGuide from "@/components/InstallationGuide";
import BenchmarksSection from "@/components/BenchmarksSection";
import UserReviews from "@/components/UserReviews";
import FeaturesComparison from "@/components/FeaturesComparison";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              AI Agent Compare
            </div>
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310419663029490395/VawkCN5rN42aJXB7DfEcZN/hero-comparison-BXc3YquuAGetke5Nvg2MDz.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="container max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Hermes Agent vs OpenClaw
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Compare two leading AI agents side-by-side. Explore features, benchmarks, installation guides, and real user reviews to make an informed decision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2">
              View Comparison <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline">
              Installation Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container max-w-6xl mx-auto py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="installation">Installation</TabsTrigger>
            <TabsTrigger value="benchmarks">Benchmarks</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Hermes Card */}
              <Card className="p-8 border-2 hover:border-primary/50 transition-colors">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">
                    {comparisonData.overview.hermes.name}
                  </h2>
                  <p className="text-accent font-semibold">
                    {comparisonData.overview.hermes.tagline}
                  </p>
                </div>
                <p className="text-muted-foreground mb-6">
                  {comparisonData.overview.hermes.description}
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Creator:</span>{" "}
                    {comparisonData.overview.hermes.creator}
                  </div>
                  <div>
                    <span className="font-semibold">Founded:</span>{" "}
                    {comparisonData.overview.hermes.founded}
                  </div>
                  <div>
                    <span className="font-semibold">GitHub Stars:</span>{" "}
                    {comparisonData.overview.hermes.stars}
                  </div>
                  <div>
                    <span className="font-semibold">Philosophy:</span>{" "}
                    {comparisonData.overview.hermes.philosophy}
                  </div>
                </div>
              </Card>

              {/* OpenClaw Card */}
              <Card className="p-8 border-2 hover:border-accent/50 transition-colors">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">
                    {comparisonData.overview.openclaw.name}
                  </h2>
                  <p className="text-accent font-semibold">
                    {comparisonData.overview.openclaw.tagline}
                  </p>
                </div>
                <p className="text-muted-foreground mb-6">
                  {comparisonData.overview.openclaw.description}
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-semibold">Creator:</span>{" "}
                    {comparisonData.overview.openclaw.creator}
                  </div>
                  <div>
                    <span className="font-semibold">Founded:</span>{" "}
                    {comparisonData.overview.openclaw.founded}
                  </div>
                  <div>
                    <span className="font-semibold">GitHub Stars:</span>{" "}
                    {comparisonData.overview.openclaw.stars}
                  </div>
                  <div>
                    <span className="font-semibold">Philosophy:</span>{" "}
                    {comparisonData.overview.openclaw.philosophy}
                  </div>
                </div>
              </Card>
            </div>

            {/* Quick Comparison */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Comparison</h3>
              <ComparisonTable />
            </Card>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features">
            <FeaturesComparison />
          </TabsContent>

          {/* Installation Tab */}
          <TabsContent value="installation">
            <InstallationGuide />
          </TabsContent>

          {/* Benchmarks Tab */}
          <TabsContent value="benchmarks">
            <BenchmarksSection />
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <UserReviews />
          </TabsContent>
        </Tabs>
      </section>

      {/* Recommendations Section */}
      <section className="bg-secondary/30 py-16 mt-16">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Which One Should You Choose?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Choose Hermes Agent if...
              </h3>
              <ul className="space-y-3">
                {comparisonData.recommendations.hermes.map((rec, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-accent">
                Choose OpenClaw if...
              </h3>
              <ul className="space-y-3">
                {comparisonData.recommendations.openclaw.map((rec, idx) => (
                  <li key={idx} className="flex gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container max-w-6xl mx-auto text-center text-muted-foreground">
          <p>
            This comparison is based on research from official documentation, user reviews, and community feedback as of April 2026.
          </p>
        </div>
      </footer>
    </div>
  );
}
