"use client";

import { useState } from "react";

import { useQuotes } from "@/context/QuotesContext";
import { QuoteText } from "@/components/typography/QuoteText";
import { AuthorText } from "@/components/typography/AuthorText";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

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
    <main className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-800">
          My Liked Quotes
        </h1>

        {likedQuotes.length === 0 ? (
          <p className="text-gray-600">You haven't liked any quotes yet.</p>
        ) : (
          <div className="flex flex-col gap-4">
            {likedQuotes.map(({ quote, index }) => {
              const isPending = pendingIndex === index;

              return (
                <Card key={index}>
                  <div className="flex justify-end">
                    <Button
                      title={isPending ? "💔" : "♥"}
                      hoverTitle="💔"
                      handleClick={() => handleUnlike(index)}
                      disabled={isPending}
                      className="text-2xl text-red-600"
                    />
                  </div>

                  <QuoteText>{quote.quote}</QuoteText>

                  <div className="mt-4">
                    <AuthorText>{quote.author}</AuthorText>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
