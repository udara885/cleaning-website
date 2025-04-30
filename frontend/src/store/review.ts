import { create } from "zustand"

interface Review {
  firstName: string
  lastName: string
  comment: string
  rating: number
  createdAt: string
}

interface ReviewState {
  reviews: Review[]
  setReviews: (reviews: Review[]) => void
  getReviews: () => Promise<
    | {
        success: boolean
        message: string
      }
    | undefined
  >
  addReview: (newReview: Review) => Promise<{
    success: boolean
    message: string
  }>
}

export const useReviewStore = create<ReviewState>((set) => ({
  reviews: [],
  setReviews: (reviews) => set({ reviews }),
  getReviews: async () => {
    const res = await fetch("/api/v1/reviews")
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set({ reviews: data.data })
  },
  addReview: async (newReview) => {
    const res = await fetch("/api/v1/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
    const data = await res.json()
    if (!data.success) return { success: false, message: data.error }
    set((state) => ({ reviews: [...state.reviews, data.data] }))
    return { success: true, message: "Review added successfully!" }
  },
}))
