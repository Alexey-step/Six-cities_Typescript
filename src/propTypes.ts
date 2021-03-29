export interface Offer {
  type: string,
  price: number,
  rating: number,
  previewImage: string,
  title: string,
  isPremium: boolean,
  isFavorite: boolean,
  id: number,
  bedrooms: number,
  city: CityDetails,
  description: string,
  goods: Array<string>,
  host: UserDetails,
  images: Array<string>,
  location: LocationDetails,
  maxAdults: number
};

export interface CityDetails {
  location: LocationDetails,
  name: string
}

export interface LocationDetails {
  latitude: number,
  longitude: number,
  zoom: number
}

export interface UserDetails {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string
}

export interface Review {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: UserDetails
};

export interface UserAuthorize {
  avatarUrl: string,
  email: string,
  id: number,
  isPro: boolean,
  name: string
};

export interface CommentPost {
  comment: string,
  rating: string
}
