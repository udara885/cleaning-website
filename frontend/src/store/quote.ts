import { create } from "zustand"
import { Quote } from "../types/types"

interface QuoteState {
  quotes: Quote[]
  setQuotes: (quotes: Quote[]) => void
  addQuote: (newQuote: Quote) => Promise<{
    success: boolean
    message: string
  }>
}

export const useQuoteStore = create<QuoteState>((set) => ({
  quotes: [],
  setQuotes: (quotes) => set({ quotes }),
  addQuote: async (newQuote) => {
    const res = await fetch("/api/v1/quotes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuote),
    })
    const data = await res.json()
    if (!data.success) return { success: false, message: data.message }
    set((state) => ({ quotes: [...state.quotes, data.data] }))
    return { success: true, message: "Quote Request sent succcessfully!" }
  },
}))
