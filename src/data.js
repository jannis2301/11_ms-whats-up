import club from './assets/images/clubs.jpg'
import food from './assets/images/food.jpg'
import events from './assets/images/events.jpg'
import sports from './assets/images/sports.jpg'
import sightseeing from './assets/images/sightseeing.jpg'

export const clubs = [
  {
    id: 1,
    title: 'Hot Jazz Club',
    address: 'Hafenweg 26 B',
    url: 'https://www.hotjazzclub.de/',
    genres: ['Jazz', 'Funk', 'Soul', 'Blues', 'Rock&Pop'],
    categories: {
      entryPrice: '',
      drinkPrice: '',
      age: '',
    },
    desc: '',
    img: club,
  },
  {
    id: 2,
    title: 'Fusion Club',
    address: 'Am Hawerkamp 31',
    url: 'https://www.fusion-club.de/',
    genres: ['electro', 'deephouse', 'techhouse'],
    categories: {
      entryPrice: '',
      drinkPrice: '',
      age: '',
    },
    desc: '',
    img: club,
  },
  {
    id: 3,
    title: 'Club Favela',
    address: 'Am Hawerkamp 31',
    url: 'https://www.clubfavela.de/',
    genres: ['electro', 'deephouse', 'techhouse'],
    categories: {
      entryPrice: '',
      drinkPrice: '',
      age: '',
    },
    desc: '',
    img: club,
  },
  {
    id: 4,
    title: 'Conny Kramer',
    address: 'Am Hawerkamp 31',
    url: 'https://www.connykramer.ms/',
    genres: ['electro', 'deephouse', 'techhouse', 'hip-hop'],
    categories: {
      entryPrice: '',
      drinkPrice: '',
      age: '',
    },
    desc: '',
    img: club,
  },
  {
    id: 5,
    title: 'Sputnikhalle',
    address: 'Am Hawerkamp 31c',
    url: 'https://www.sputnikhalle.de/',
    genres: ['rock', 'metal', 'alternative'],
    categories: {
      entryPrice: '',
      drinkPrice: '',
      age: '',
    },
    desc: '',
    img: club,
  },
]

export const activities = [
  {
    id: 1,
    title: 'clubs & bars',
    link: '/clubs',
    image: club,
  },
  {
    id: 2,
    title: 'food',
    link: '/food',
    image: food,
  },
  {
    id: 3,
    title: 'events',
    link: '/events',
    image: events,
  },
  {
    id: 4,
    title: 'sports',
    link: '/sports',
    image: sports,
  },
  {
    id: 5,
    title: 'sightseeing',
    link: '/sightseeing',
    image: sightseeing,
  },
]
