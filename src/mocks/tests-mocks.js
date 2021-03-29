export const TEST_DATA = `test`;


export const cards = {
  start: [
    {
      id: 1,
      isFavorite: false
    },
    {
      id: 2,
      isFavorite: false
    },
    {
      id: 3,
      isFavorite: true
    }
  ],
  end: [
    {
      id: 1,
      isFavorite: false
    },
    {
      id: 2,
      isFavorite: true
    },
    {
      id: 3,
      isFavorite: true
    }
  ],
  change: {
    id: 2,
    isFavorite: true
  }
};

export const favoritesCards = {
  start: [
    {
      id: 1,
      isFavorite: true
    },
    {
      id: 2,
      isFavorite: true
    },
    {
      id: 3,
      isFavorite: true
    }
  ],
  end: [
    {
      id: 2,
      isFavorite: true
    },
    {
      id: 3,
      isFavorite: true
    }
  ],
  remove: {
    id: 1,
    isFavorite: true
  }
};

export const offers = {
  adapted: [
    {
      city: {
        name: `Paris`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      images: [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      ],
      goods: [
        `Laptop friendly workspace`,
        `Washer`,
        `Breakfast`,
        `Air conditioning`
      ],
      host: {
        id: 25,
        name: `Angelina`,
        avatarUrl: `img/avatar-angelina.jpg`,
        isPro: true
      },
      location: {
        latitude: 48.85761,
        longitude: 2.358499,
        zoom: 16
      },
      title: `Tile House`,
      rating: 2,
      type: `house`,
      bedrooms: 2,
      price: 161,
      description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
      id: 1,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      isPremium: true,
      isFavorite: false,
      maxAdults: 9
    },
    {
      city: {
        name: `Amsterdam`,
        location: {
          latitude: 48.85661,
          longitude: 2.351499,
          zoom: 13
        }
      },
      images: [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      ],
      goods: [
        `Laptop friendly workspace`,
        `Washer`,
        `Breakfast`,
        `Air conditioning`
      ],
      host: {
        id: 25,
        name: `Angelina`,
        avatarUrl: `img/avatar-angelina.jpg`,
        isPro: true
      },
      location: {
        latitude: 48.85761,
        longitude: 2.358499,
        zoom: 16
      },
      title: `Tile House`,
      rating: 4,
      type: `house`,
      bedrooms: 3,
      price: 161,
      description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
      id: 2,
      previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      isPremium: true,
      isFavorite: false,
      maxAdults: 3
    }
  ],
  server: [
    {
      "city": {
        "name": `Paris`,
        "location": {
          "latitude": 48.85661,
          "longitude": 2.351499,
          "zoom": 13
        }
      },
      "images": [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      ],
      "goods": [
        `Laptop friendly workspace`,
        `Washer`,
        `Breakfast`,
        `Air conditioning`
      ],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "avatar_url": `img/avatar-angelina.jpg`,
        "is_pro": true
      },
      "location": {
        "latitude": 48.85761,
        "longitude": 2.358499,
        "zoom": 16
      },
      "title": `Tile House`,
      "rating": 2,
      "type": `house`,
      "bedrooms": 2,
      "price": 161,
      "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
      "id": 1,
      "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      "is_premium": true,
      "is_favorite": false,
      "max_adults": 9
    },
    {
      "city": {
        "name": `Amsterdam`,
        "location": {
          "latitude": 48.85661,
          "longitude": 2.351499,
          "zoom": 13
        }
      },
      "images": [
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
        `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
      ],
      "goods": [
        `Laptop friendly workspace`,
        `Washer`,
        `Breakfast`,
        `Air conditioning`
      ],
      "host": {
        "id": 25,
        "name": `Angelina`,
        "avatar_url": `img/avatar-angelina.jpg`,
        "is_pro": true
      },
      "location": {
        "latitude": 48.85761,
        "longitude": 2.358499,
        "zoom": 16
      },
      "title": `Tile House`,
      "rating": 4,
      "type": `house`,
      "bedrooms": 3,
      "price": 161,
      "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
      "id": 2,
      "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
      "is_premium": true,
      "is_favorite": false,
      "max_adults": 3
    }
  ]
};

export const reviews = {
  server: [
    {
      "user": {
        "id": 11,
        "name": `Jack`,
        "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
        "is_pro": false
      },
      "id": 1,
      "rating": 3,
      "comment": `I stayed here for one night and it was an unpleasant experience.`,
      "date": `2021-02-18T15:34:01.286Z`
    },
    {
      "user": {
        "id": 11,
        "name": `Jack`,
        "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
        "is_pro": false
      },
      "id": 2,
      "rating": 4,
      "comment": `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
      "date": `2021-02-18T15:34:01.286Z`
    }
  ],
  adapted: [
    {
      user: {
        id: 11,
        name: `Jack`,
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
        isPro: false
      },
      id: 1,
      rating: 3,
      comment: `I stayed here for one night and it was an unpleasant experience.`,
      date: `2021-02-18T15:34:01.286Z`
    },
    {
      user: {
        id: 11,
        name: `Jack`,
        avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/2.jpg`,
        isPro: false
      },
      id: 2,
      rating: 4,
      comment: `The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.`,
      date: `2021-02-18T15:34:01.286Z`
    }
  ]
};

export const offer = {
  adapted: {
    city: {
      name: `Paris`,
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    images: [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`
    ],
    goods: [
      `Laptop friendly workspace`,
      `Washer`,
      `Breakfast`,
      `Air conditioning`
    ],
    host: {
      id: 25,
      name: `Angelina`,
      avatarUrl: `img/avatar-angelina.jpg`,
      isPro: true
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    title: `Tile House`,
    rating: 2,
    type: `house`,
    bedrooms: 2,
    price: 161,
    description: `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    id: 1,
    previewImage: `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    isPremium: true,
    isFavorite: false,
    maxAdults: 9
  },
  server: {
    "city": {
      "name": `Paris`,
      "location": {
        "latitude": 48.85661,
        "longitude": 2.351499,
        "zoom": 13
      }
    },
    "images": [
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/3.jpg`,
      `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    ],
    "goods": [
      `Laptop friendly workspace`,
      `Washer`,
      `Breakfast`,
      `Air conditioning`
    ],
    "host": {
      "id": 25,
      "name": `Angelina`,
      "avatar_url": `img/avatar-angelina.jpg`,
      "is_pro": true
    },
    "location": {
      "latitude": 48.85761,
      "longitude": 2.358499,
      "zoom": 16
    },
    "title": `Tile House`,
    "rating": 2,
    "type": `house`,
    "bedrooms": 2,
    "price": 161,
    "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
    "id": 1,
    "preview_image": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    "is_premium": true,
    "is_favorite": false,
    "max_adults": 9
  },
};

export const authInfo = {
  server: {
    "id": 1,
    "email": `mail@gmail.com`,
    "name": `alex`,
    "avatar_url": `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
    "is_pro": false
  },
  adapted: {
    id: 1,
    email: `mail@gmail.com`,
    name: `alex`,
    avatarUrl: `https://assets.htmlacademy.ru/intensives/javascript-3/avatar/3.jpg`,
    isPro: false
  }
};
