"use client";

import { createContext, useContext, useState } from "react";
import { quotes as initialQuotes } from "@/quotes";

const QuotesContext = createContext(null);

const userId = "user-123";

export function QuotesProvider({ children }) {
  const [quotes, setQuotes] = useState([...initialQuotes]);
  const [index, setIndex] = useState(0);

  function likeQuote(quoteIndex) {
    setQuotes((prevQuotes) =>
      prevQuotes.map((quote, index) => {
        if (index === quoteIndex) {
          const alreadyLiked = quote.likedBy.includes(userId);

          return {
            ...quote,
            likedBy: alreadyLiked
              ? quote.likedBy.filter((id) => id !== userId)
              : [...quote.likedBy, userId],
          };
        }

        return quote;
      }),
    );
  }
  function handlePrevious() {
    setIndex((currentIndex) =>
      currentIndex === 0 ? quotes.length - 1 : currentIndex - 1,
    );
  }

  function handleNext() {
    setIndex((currentIndex) =>
      currentIndex === quotes.length - 1 ? 0 : currentIndex + 1,
    );
  }

  return (
    <QuotesContext.Provider
      value={{ quotes, likeQuote, userId, handlePrevious, handleNext, index }}
    >
      {children}
    </QuotesContext.Provider>
  );
}

export function useQuotes() {
  return useContext(QuotesContext);
}
