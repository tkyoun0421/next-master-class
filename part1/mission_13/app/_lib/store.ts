export interface Watch {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  image: string;
}

export const WATCH_DATA: Watch[] = [
  {
    id: "w1",
    name: "Royal Oak Selfwinding",
    brand: "Audemars Piguet",
    price: 25000,
    description: "The classic Royal Oak design with a tapisserie dial and integrated steel bracelet.",
    image: "/watches/royal-oak.png"
  },
  {
    id: "w2",
    name: "Nautilus",
    brand: "Patek Philippe",
    price: 35000,
    description: "Iconic porthole-shaped case design with a horizontally embossed dial.",
    image: "/watches/nautilus.png"
  },
  {
    id: "w3",
    name: "Submariner Date",
    brand: "Rolex",
    price: 10500,
    description: "The archetypal diver's watch featuring a unidirectional rotatable bezel and solid-link Oyster bracelet.",
    image: "/watches/submariner.png"
  }
];
