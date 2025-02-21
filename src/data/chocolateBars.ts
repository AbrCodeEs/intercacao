import chuao from '@/images/chuao/chuao-web.webp';
import carupano from '@/images/carupano/carupano-pintao-web.webp';
import porcelana from '@/images/porcelana/porcelana-web.webp';
import tesoro from '@/images/tesoro/tesoro-web.webp';

export interface ChocolateBar {
  id: string;
  name: string;
  image: string;
  rating: number;
  fermented: number;
  certified: number;
  awarded: number;
  creole: number;
  flavors: string[];
  country: string;
  ingredients: {
    [key: string]: number;
  };
}

export const chocolateBars: ChocolateBar[] = [
  {
    id: '1',
    name: 'Chuao',
    image: chuao.src,
    rating: 5,
    fermented: 90,
    certified: 1,
    awarded: 0,
    creole: 22,
    flavors: ['Fruity Sweet', 'Fruity Citrus', 'Flower', 'Creole', 'Cocoa'],
    country: 'Venezuela',
    ingredients: {
      fruity_sweet: 2.5,
      fruity_citrus: 4,
      flowers: 0.5,
      creole: 3.4,
      cocoa: 3.6,
      wood: 0,
      spices: 0,
    },
  },
  {
    id: '2',
    name: 'Porcelana',
    image: porcelana.src,
    rating: 4.2,
    fermented: 96,
    certified: 3,
    awarded: 2,
    creole: 22,
    flavors: ['Fruity Sweet', 'Fruity Citrus', 'Flower', 'Creole', 'Cocoa'],
    country: 'Peru',
    ingredients: {
      fruity_sweet: 2.3,
      fruity_citrus: 2.4,
      flowers: 1.4,
      creole: 2.2,
      cocoa: 3.6,
      wood: 0,
      spices: 0,
    },
  },
  {
    id: '3',
    name: 'Carupano pintao',
    image: carupano.src,
    rating: 5,
    fermented: 90,
    certified: 2,
    awarded: 0,
    creole: 14,
    flavors: ['Fruity Sweet', 'Fruity Citrus', 'Flower', 'Creole', 'Cocoa', 'Wood', 'Spices'],
    country: 'Venezuela',
    ingredients: {
      fruity_sweet: 2.5,
      fruity_citrus: 2.9,
      flowers: 0.6,
      creole: 3.0,
      cocoa: 3.6,
      wood: 1.4,
      spices: 1.1,
    },
  },
  {
    id: '4',
    name: 'El tesoro',
    image: tesoro.src,
    rating: 4.3,
    fermented: 88,
    certified: 1,
    awarded: 0,
    creole: 18,
    flavors: ['Fruity Sweet', 'Fruity Citrus', 'Flower', 'Creole', 'Cocoa', 'Wood', 'Spices'],
    country: 'Venezuela',
    ingredients: {
      fruity_sweet: 2.5,
      fruity_citrus: 2.8,
      flowers: 3.0,
      creole: 3.0,
      cocoa: 3.6,
      wood: 1.4,
      spices: 1.1,
    },
  },
  // {
  //   id: "5",
  //   name: "Citrus Burst",
  //   image: chuao.src,
  //   rating: 4.6,
  //   fermented: true,
  //   certified: true,
  //   awarded: true,
  //   flavors: ["Fruity Citrus"],
  //   country: "Colombia",
  //   ingredients: {
  //     cocoa: 60,
  //     sugar: 30,
  //     citrus: 10,
  //   },
  // },
  // {
  //   id: "6",
  //   name: "Nutty Crunch",
  //   image: chuao.src,
  //   rating: 4.4,
  //   fermented: true,
  //   certified: true,
  //   awarded: false,
  //   flavors: ["Wood", "Cocoa"],
  //   country: "Peru",
  //   ingredients: {
  //     cocoa: 70,
  //     sugar: 20,
  //     nuts: 10,
  //   },
  // },
  // {
  //   id: "7",
  //   name: "Caramel Dream",
  //   image: chuao.src,
  //   rating: 4.8,
  //   fermented: true,
  //   certified: false,
  //   awarded: true,
  //   flavors: ["Fruity Sweet", "Cocoa"],
  //   country: "Colombia",
  //   ingredients: {
  //     cocoa: 55,
  //     sugar: 35,
  //     caramel: 10,
  //   },
  // },
  // {
  //   id: "8",
  //   name: "Minty Fresh",
  //   image: chuao.src,
  //   rating: 4.1,
  //   fermented: false,
  //   certified: true,
  //   awarded: false,
  //   flavors: ["Floral", "Spices"],
  //   country: "Peru",
  //   ingredients: {
  //     cocoa: 65,
  //     sugar: 25,
  //     mint: 10,
  //   },
  // },
  // {
  //   id: "9",
  //   name: "Berry Bliss",
  //   image: chuao.src,
  //   rating: 4.9,
  //   fermented: true,
  //   certified: true,
  //   awarded: true,
  //   flavors: ["Fruity Sweet", "Floral"],
  //   country: "Venezuela",
  //   ingredients: {
  //     cocoa: 60,
  //     sugar: 25,
  //     berries: 15,
  //   },
  // },
  // {
  //   id: "10",
  //   name: "Coffee Infusion",
  //   image: chuao.src,
  //   rating: 4.7,
  //   fermented: true,
  //   certified: true,
  //   awarded: true,
  //   flavors: ["Wood", "Spices"],
  //   country: "Colombia",
  //   ingredients: {
  //     cocoa: 70,
  //     sugar: 20,
  //     coffee: 10,
  //   },
  // },
  // {
  //   id: "11",
  //   name: "Coconut Paradise",
  //   image: chuao.src,
  //   rating: 4.3,
  //   fermented: false,
  //   certified: true,
  //   awarded: false,
  //   flavors: ["Fruity Sweet", "Wood"],
  //   country: "Peru",
  //   ingredients: {
  //     cocoa: 65,
  //     sugar: 25,
  //     coconut: 10,
  //   },
  // },
  // {
  //   id: "12",
  //   name: "Chili Chocolate",
  //   image: chuao.src,
  //   rating: 4.5,
  //   fermented: true,
  //   certified: false,
  //   awarded: true,
  //   flavors: ["Spices", "Cocoa"],
  //   country: "Venezuela",
  //   ingredients: {
  //     cocoa: 75,
  //     sugar: 20,
  //     chili: 5,
  //   },
  // },
];
