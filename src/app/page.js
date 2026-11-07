"use client";

import { QuoteText } from "@/components/typography/QuoteText";
import { AuthorText } from "@/components/typography/AuthorText";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

import { useQuotes } from "@/context/QuotesContext";

export default function Home() {
  const { quotes, likeQuote, userId, handlePrevious, handleNext, index } =
    useQuotes();

  const isLiked = quotes[index].likedBy.includes(userId);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
      <Card>
        <div className="flex justify-end">
          <Button
            title={isLiked ? "\u2665" : "\u2661"}
            handleClick={() => likeQuote(index)}
            className={
              isLiked
                ? "text-red-600 text-2xl"
                : "text-gray-400 hover:text-red-500 text-2xl"
            }
          />
        </div>
        <Card
          className={
            isLiked ? "bg-rose-50 border-rose-200" : "bg-white border-gray-200"
          }
        >
          <div className="flex min-h-[130px] flex-col">
            <div className="flex-grow">
              <QuoteText>{quotes[index].quote}</QuoteText>
            </div>

            <div className="mt-6">
              <AuthorText>{quotes[index].author}</AuthorText>
            </div>
          </div>
        </Card>
        <div className="mt-6 flex justify-between gap-3">
          <Button
            title="Previous Quote"
            handleClick={handlePrevious}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
          />

          <Button
            title="Next Quote"
            handleClick={handleNext}
            className="bg-gray-200 text-gray-800 hover:bg-gray-300"
          />
        </div>
      </Card>
    </main>
  );
}
