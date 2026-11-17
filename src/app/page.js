"use client";

import { useQuotes } from "@/context/QuotesContext";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Home() {
  const { quotes, likeQuote, userId, handlePrevious, handleNext, index } =
    useQuotes();

  const currentQuote = quotes[index];
  const isLiked = currentQuote.likedBy.includes(userId);

  return (
    <main className="flex flex-1 items-center justify-center bg-background px-4 py-8 sm:py-12">
      <Card className="w-full max-w-xl shadow-lg">
        <CardContent className="flex flex-col gap-6 sm:gap-8">
          <div className="flex justify-end">
            <Button
              variant="ghost"
              size="icon-lg"
              onClick={() => likeQuote(index)}
              aria-label={isLiked ? "Unlike quote" : "Like quote"}
              aria-pressed={isLiked}
              className={
                isLiked
                  ? "text-red-500 hover:text-red-600"
                  : "text-muted-foreground hover:text-red-500"
              }
            >
              <Heart className={isLiked ? "fill-current" : ""} />
            </Button>
          </div>

          <div
            className={`flex min-h-[180px] flex-col justify-between rounded-lg p-5 sm:p-6 ${
              isLiked ? "bg-rose-50 dark:bg-rose-950/15" : "bg-muted"
            }`}
          >
            <blockquote className="text-center text-lg font-medium leading-relaxed sm:text-xl">
              "{currentQuote.quote}"
            </blockquote>

            <p className="mt-8 text-right text-sm font-semibold text-muted-foreground">
              — {currentQuote.author}
            </p>
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-3 sm:flex-row sm:justify-between">
          <Button
            variant="secondary"
            size="lg"
            onClick={handlePrevious}
            className="w-full sm:flex-1"
          >
            Previous Quote
          </Button>

          <Button
            variant="default"
            size="lg"
            onClick={handleNext}
            className="w-full sm:flex-1"
          >
            Next Quote
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
