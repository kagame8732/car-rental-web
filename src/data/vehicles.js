import coasterInside1 from "./images/Cars/Coaster/insidecoaster1.jpg";
import coasterOut1 from "./images/Cars/Coaster/outcoaster1.jpg";
import coasterOut2 from "./images/Cars/Coaster/outcoaster2.jpg";
import sonataInside1 from "./images/Cars/Huyandai Sonata/insidehyund1.jpg";
import sonataInside2 from "./images/Cars/Huyandai Sonata/insidehyund2.jpg";
import sonataOut1 from "./images/Cars/Huyandai Sonata/outhyund1.jpg";
import sonataOut2 from "./images/Cars/Huyandai Sonata/outhyund2.jpg";
import camryInside1 from "./images/Cars/Toyota Camri/insidecamr1.jpg";
import camryInside2 from "./images/Cars/Toyota Camri/insidecamr2.jpg";
import camryInside3 from "./images/Cars/Toyota Camri/insidecamr3.jpg";
import camryOut1 from "./images/Cars/Toyota Camri/outcamr1.jpg";
import camryOut2 from "./images/Cars/Toyota Camri/outcamr2.jpg";
import hiluxOut1 from "./images/Cars/Toyota Hilix/outhilix1.jpg";
import hiluxOut2 from "./images/Cars/Toyota Hilix/outhilix2.jpg";
import landCruiserInside1 from "./images/Cars/Toyota landcruiser/insidelandcru1.jpg";
import landCruiserOut1 from "./images/Cars/Toyota landcruiser/outlandcru1.jpg";
import landCruiserOut2 from "./images/Cars/Toyota landcruiser/outlandcru2.jpg";
import landCruiserOut3 from "./images/Cars/Toyota landcruiser/outlandcru3.jpg";
import landCruiserOut4 from "./images/Cars/Toyota landcruiser/outlandcru4.jpg";
import priusInside1 from "./images/Cars/toyota prius/insideprius1.jpg";
import priusOut1 from "./images/Cars/toyota prius/outprius1.jpg";
import priusOut2 from "./images/Cars/toyota prius/outprius2.jpg";

export const vehicles = [
  {
    slug: "toyota-prius",
    name: "Toyota Prius",
    year: 2021,
    transmission: "Automatic",
    fuel: "Hybrid",
    seats: 5,
    price: 45000,
    type: "Hybrid Sedan",
    image: priusOut1,
    gallery: [priusOut1, priusOut2, priusInside1],
    features: [
      "Fuel efficient hybrid",
      "Automatic transmission",
      "Comfortable city driving",
      "Air conditioning",
    ],
  },
  {
    slug: "hyundai-sonata",
    name: "Hyundai Sonata",
    year: 2021,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    price: 45000,
    type: "Executive Sedan",
    featured: true,
    image: sonataOut1,
    gallery: [sonataOut1, sonataOut2, sonataInside1, sonataInside2],
    features: [
      "Spacious cabin",
      "Smooth highway comfort",
      "Bluetooth audio",
      "Business travel ready",
    ],
  },
  {
    slug: "toyota-camry",
    name: "Toyota Camry",
    year: 2021,
    transmission: "Automatic",
    fuel: "Petrol",
    seats: 5,
    price: 65000,
    type: "Premium Sedan",
    featured: true,
    image: camryOut1,
    gallery: [camryOut1, camryOut2, camryInside1, camryInside2, camryInside3],
    features: [
      "Premium comfort",
      "Large luggage space",
      "Quiet interior",
      "Airport transfer ready",
    ],
  },
  {
    slug: "toyota-hilux",
    name: "Toyota Hilux",
    year: 2021,
    transmission: "Manual",
    fuel: "Diesel",
    seats: 5,
    price: 100000,
    type: "Pickup 4x4",
    image: hiluxOut1,
    gallery: [hiluxOut1, hiluxOut2],
    features: [
      "Strong pickup body",
      "High ground clearance",
      "Diesel efficiency",
      "Ideal for rugged routes",
    ],
  },
  {
    slug: "toyota-land-cruiser",
    name: "Toyota Land Cruiser",
    year: 2021,
    transmission: "Automatic",
    fuel: "Diesel",
    seats: 7,
    price: 130000,
    type: "Luxury 4x4 SUV",
    featured: true,
    image: landCruiserOut1,
    gallery: [
      landCruiserOut1,
      landCruiserOut2,
      landCruiserOut3,
      landCruiserOut4,
      landCruiserInside1,
    ],
    features: [
      "4x4 drive",
      "Seven seats",
      "Premium interior",
      "Ideal for long-distance trips",
    ],
  },
  {
    slug: "toyota-coaster",
    name: "Toyota Coaster",
    year: 2020,
    transmission: "Manual",
    fuel: "Diesel",
    seats: 29,
    price: 180000,
    type: "Group Bus",
    image: coasterOut1,
    gallery: [coasterOut1, coasterOut2, coasterInside1],
    features: [
      "Group transport",
      "Large passenger capacity",
      "Comfortable seating",
      "Event and tour ready",
    ],
  },
];
