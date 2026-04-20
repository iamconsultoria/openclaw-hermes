import { Card } from "@/components/ui/card";
import { comparisonData } from "@/lib/comparisonData";
import { Star } from "lucide-react";

export default function UserReviews() {
  const hermesReviews = comparisonData.userReviews.filter(
    (r) => r.agent === "hermes"
  );
  const openclawReviews = comparisonData.userReviews.filter(
    (r) => r.agent === "openclaw"
  );

  const ReviewCard = ({
    review,
  }: {
    review: (typeof comparisonData.userReviews)[0];
  }) => (
    <Card className="p-6">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h4 className="font-bold">{review.author}</h4>
          <p className="text-sm text-muted-foreground">{review.role}</p>
        </div>
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? "fill-accent text-accent"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
      <h5 className="font-semibold mb-2">{review.title}</h5>
      <p className="text-sm text-muted-foreground mb-3">{review.content}</p>
      <div className="flex justify-between items-center text-xs text-muted-foreground">
        <span>{review.platform}</span>
        <span>{review.date}</span>
      </div>
    </Card>
  );

  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Hermes Reviews */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-primary">Hermes Agent</h3>
        <div className="space-y-4">
          {hermesReviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      </div>

      {/* OpenClaw Reviews */}
      <div>
        <h3 className="text-2xl font-bold mb-6 text-accent">OpenClaw</h3>
        <div className="space-y-4">
          {openclawReviews.map((review, idx) => (
            <ReviewCard key={idx} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
