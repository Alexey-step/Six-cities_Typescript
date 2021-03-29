enum Cities {
  PARIS = `Paris`,
  COLOGNE = `Cologne`,
  BRUSSELS = `Brussels`,
  AMSTERDAM = `Amsterdam`,
  HAMBURG = `Hamburg`,
  DUSSELDORF = `Dusseldorf`
};

enum Options {
  POPULAR = `Popular`,
  PRICE_LOW_TO_HIGH = `Price: low to high`,
  PRICE_HIGH_TO_LOW = `Price: high to low`,
  TOP_RATED_FIRST = `Top rated first`
};

const WIDTH_PER_STAR = 20;

const Type = {
  CITIES: {
    article: `cities__place-card`,
    img: {
      class: `cities`,
      width: 260,
      height: 200
    },
    info: ``,
    divClass: `cities__places-list`
  },
  FAVORITE: {
    article: `favorites__card`,
    img: {
      class: `favorites`,
      width: 150,
      height: 110
    },
    info: `favorites__card-info`,
    divClass: `favorites__places`
  },
  NEARBY: {
    article: `near-places__card`,
    img: {
      class: `near-places`,
      width: 260,
      height: 200
    },
    info: ``,
    divClass: `near-places__list`
  }
};

const MapStyle = {
  MAIN: {
    width: `100%`,
    height: `100%`
  },
  PROPERTY: {
    width: `1144px`,
    height: `579px`,
    margin: `0 auto`
  }
};

enum AuthorizationStatus {
  AUTH = `AUTH`,
  NO_AUTH = `NO_AUTH`
};

enum AppRoute {
  MAIN = `/`,
  PROPERTY = `/property`,
  FAVORITES = `/favorites`,
  LOGIN = `/login`,
  OFFER = `/offer`,
  NOT_FOUND = `/not-found`
};

enum APIRoute {
  LOGIN = `/login`,
  OFFERS = `/hotels`,
  COMMENTS = `/comments`,
  FAVORITE = `/favorite`,
  LOGOUT = `/logout`,
  NEARBY = `/nearby`
};

enum CommentLength {
  MIN = 50,
  MAX = 300
};

const STARS: Array<number> = [5, 4, 3, 2, 1];

const ERROR_TIMEOUT = 3000;

const MAX_IMAGE = 6;
const TEST_DATA = `test`;

export {
  WIDTH_PER_STAR,
  MAX_IMAGE,
  ERROR_TIMEOUT,
  STARS,
  TEST_DATA,
  MapStyle,
  Cities,
  Type,
  AuthorizationStatus,
  AppRoute,
  APIRoute,
  CommentLength,
  Options,
};
