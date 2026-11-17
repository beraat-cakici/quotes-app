"use client";

import { useState } from "react";
import { HeartCrack } from "lucide-react";

import { useQuotes } from "@/context/QuotesContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LikedQuotes() {
  const { quotes, userId, likeQuote } = useQuotes();

  const [pendingIndex, setPendingIndex] = useState(null);

  const likedQuotes = quotes
    .map((quote, index) => ({ quote, index }))
    .filter(({ quote }) => quote.likedBy.includes(userId));

  function handleUnlike(index) {
    setPendingIndex(index);

    setTimeout(() => {
      likeQuote(index);
      setPendingIndex(null);
    }, 500);
  }

  return (
    <main className="flex-1 bg-background px-4 py-10">
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          My Liked Quotes
        </h1>

        {likedQuotes.length === 0 ? (
          <p className="rounded-lg bg-muted p-6 text-center text-muted-foreground">
            You haven't liked any quotes yet.
          </p>
        ) : (
          <div className="flex flex-col gap-5">
            {likedQuotes.map(({ quote, index }) => {
              const isPending = pendingIndex === index;

              return (
                <Card key={index} className="shadow-sm">
                  <div className="flex justify-end px-4 pt-4">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleUnlike(index)}
                      disabled={isPending}
                      aria-label={`Unlike quote by ${quote.author}`}
                      className="text-red-500 hover:text-red-600"
                    >
                      <HeartCrack
                        className={`size-5 ${isPending ? "animate-pulse" : ""}`}
                      />
                    </Button>
                  </div>

                  <CardContent className="flex flex-col gap-5">
                    <blockquote className="text-lg leading-relaxed text-foreground sm:text-xl">
                      "{quote.quote}"
                    </blockquote>

                    <p className="text-right text-sm font-semibold text-muted-foreground">
                      — {quote.author}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
