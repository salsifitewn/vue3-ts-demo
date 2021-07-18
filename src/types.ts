// Contain all the types we want to use for this app

export interface User {
  id?: number
  lastName?: string
  firstName?: string
  email?: string
  zipCode?: number
  address?: string
  city?: string
  phone?: number
}
export interface Stock {
  symbol: string
  name: string
  exchange: string
  assetType: string
  ipoDate: Date
  status: string
  isActive: boolean
}
