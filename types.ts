export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  image?: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  rating: number;
}