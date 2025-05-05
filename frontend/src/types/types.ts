export interface Quote {
  companyName: string
  contactPerson: string
  phoneNumber: string
  email: string
  serviceAddress: string
  serviceType: string[]
  frequency: string
  propertyType: string
  squareFootage: string
  bedrooms: string
  bathrooms: string
  additionalAreas: string
  specialRequests: string
  startDate: string
  preferredTime: string
}

export interface Review {
  firstName: string
  lastName: string
  comment: string
  rating: number
  createdAt: string
}
