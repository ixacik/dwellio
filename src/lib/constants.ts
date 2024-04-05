export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/explore", label: "Explore" },
  { href: "/search", label: "Search" },
  { href: "/create", label: "Bookmarks" },
];

interface Listing {
  image: string;
  title: string;
  location: string;
  price: number;
  rooms: number;
}

export const listings: Listing[] = [
  {
    image: "/listings/1.webp",
    title: "2 room flat in the modern area in Denmark",
    location: "Copenhagen",
    price: 170230.23,
    rooms: 3,
  },
  {
    image: "/listings/1.webp",
    title: "Cozy downtown apartment",
    location: "Copenhagen",
    price: 149999.99,
    rooms: 2,
  },
  {
    image: "/listings/1.webp",
    title: "Spacious suburban house",
    location: "Aarhus",
    price: 249730.45,
    rooms: 4,
  },
  {
    image: "/listings/1.webp",
    title: "Modern studio near the beach",
    location: "Odense",
    price: 99850.37,
    rooms: 1,
  },
  {
    image: "/listings/1.webp",
    title: "Luxurious villa with garden",
    location: "Frederiksberg",
    price: 499999.95,
    rooms: 5,
  },
  {
    image: "/listings/1.webp",
    title: "Affordable student apartment",
    location: "Aalborg",
    price: 80799.88,
    rooms: 1,
  },
  {
    image: "/listings/1.webp",
    title: "Family home in a quiet neighborhood",
    location: "Esbjerg",
    price: 219950.77,
    rooms: 4,
  },
  {
    image: "/listings/1.webp",
    title: "Penthouse with city view",
    location: "Copenhagen",
    price: 599850.63,
    rooms: 3,
  },
  {
    image: "/listings/1.webp",
    title: "Historic townhouse in the old town",
    location: "Ribe",
    price: 299750.99,
    rooms: 3,
  },
  {
    image: "/listings/1.webp",
    title: "Modern apartment with balcony",
    location: "Helsingør",
    price: 200499.49,
    rooms: 2,
  },
  {
    image: "/listings/1.webp",
    title: "Modern apartment with balcony",
    location: "Helsingør",
    price: 200499.49,
    rooms: 2,
  },
];
