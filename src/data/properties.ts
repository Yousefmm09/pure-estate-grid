export interface Property {
  id: number;
  title: string;
  price: number;
  currency: string;
  address: string;
  city: string;
  state: string;
  beds: number;
  baths: number;
  sqft: number;
  type: 'house' | 'apartment' | 'villa' | 'townhouse' | 'condo';
  image: string;
  description: string;
  features: string[];
  yearBuilt: number;
  agentId: number;
  status: 'sale' | 'rent';
}

export interface Agent {
  id: number;
  name: string;
  title: string;
  phone: string;
  email: string;
  photo: string;
  properties: number;
  experience: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 425000,
    currency: "$",
    address: "789 Park Avenue",
    city: "New York",
    state: "NY",
    beds: 2,
    baths: 2,
    sqft: 1250,
    type: "apartment",
    image: "/src/assets/property-1.jpg",
    description: "Beautiful modern apartment in the heart of downtown. Features high ceilings, floor-to-ceiling windows, and premium finishes throughout.",
    features: ["Hardwood Floors", "Granite Countertops", "Stainless Appliances", "In-Unit Laundry", "Parking Included"],
    yearBuilt: 2019,
    agentId: 1,
    status: "sale"
  },
  {
    id: 2,
    title: "Elegant Family Home",
    price: 675000,
    currency: "$",
    address: "456 Oak Street",
    city: "Brooklyn",
    state: "NY",
    beds: 4,
    baths: 3,
    sqft: 2800,
    type: "house",
    image: "/src/assets/property-2.jpg",
    description: "Spacious family home with beautiful landscaping and modern updates. Perfect for growing families with excellent schools nearby.",
    features: ["Large Backyard", "Updated Kitchen", "Master Suite", "Two-Car Garage", "Central Air"],
    yearBuilt: 2015,
    agentId: 2,
    status: "sale"
  },
  {
    id: 3,
    title: "Contemporary Townhouse",
    price: 525000,
    currency: "$",
    address: "321 Main Street",
    city: "Queens",
    state: "NY",
    beds: 3,
    baths: 2.5,
    sqft: 1900,
    type: "townhouse",
    image: "/src/assets/property-3.jpg",
    description: "Stunning townhouse with modern architecture and smart home features. Ideal urban living with private outdoor space.",
    features: ["Smart Home System", "Rooftop Deck", "Open Floor Plan", "Designer Kitchen", "Private Entrance"],
    yearBuilt: 2020,
    agentId: 1,
    status: "sale"
  },
  {
    id: 4,
    title: "Luxury Penthouse Suite",
    price: 1250000,
    currency: "$",
    address: "100 Skyline Plaza",
    city: "Manhattan",
    state: "NY",
    beds: 3,
    baths: 3,
    sqft: 2500,
    type: "condo",
    image: "/src/assets/property-4.jpg",
    description: "Breathtaking penthouse with panoramic city views. Features premium finishes, private elevator access, and luxury amenities.",
    features: ["City Views", "Private Elevator", "Wine Cellar", "Spa Bathroom", "Concierge Service"],
    yearBuilt: 2021,
    agentId: 3,
    status: "sale"
  },
  {
    id: 5,
    title: "Charming Suburban Home",
    price: 485000,
    currency: "$",
    address: "567 Maple Drive",
    city: "Westchester",
    state: "NY",
    beds: 3,
    baths: 2,
    sqft: 2100,
    type: "house",
    image: "/src/assets/property-5.jpg",
    description: "Beautifully maintained home in quiet neighborhood. Features hardwood floors, updated kitchen, and lovely outdoor space.",
    features: ["Hardwood Floors", "Updated Kitchen", "Fenced Yard", "Fireplace", "Finished Basement"],
    yearBuilt: 2010,
    agentId: 2,
    status: "sale"
  },
  {
    id: 6,
    title: "Mediterranean Villa",
    price: 950000,
    currency: "$",
    address: "890 Ocean View Road",
    city: "Long Island",
    state: "NY",
    beds: 5,
    baths: 4,
    sqft: 4200,
    type: "villa",
    image: "/src/assets/property-6.jpg",
    description: "Stunning Mediterranean-style villa with pool and ocean views. Luxurious living with resort-style amenities at home.",
    features: ["Swimming Pool", "Ocean Views", "Wine Cellar", "Home Theater", "Guest House"],
    yearBuilt: 2018,
    agentId: 3,
    status: "sale"
  }
];

export const agents: Agent[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "Senior Real Estate Agent",
    phone: "(123) 456-7890",
    email: "sarah.johnson@premierproperties.com",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    properties: 47,
    experience: "12 years"
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Property Specialist",
    phone: "(123) 456-7891",
    email: "michael.chen@premierproperties.com",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    properties: 38,
    experience: "9 years"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Luxury Property Consultant",
    phone: "(123) 456-7892",
    email: "emily.rodriguez@premierproperties.com",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    properties: 52,
    experience: "15 years"
  }
];
