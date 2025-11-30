import { MenuCategory, Testimonial } from './types';

// Data derived from the user provided menu image
export const MENU_DATA: MenuCategory[] = [
  {
    id: 'starters',
    title: 'Starters & Light',
    items: [
      {
        id: 's1',
        name: 'Nachos El Grande',
        description: 'Our original Mexican nachos served with Tex-Mex chili and BEEF.',
        price: 'RM 23.20',
        image: 'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&q=80&w=800',
        featured: true,
      },
      {
        id: 's2',
        name: 'Nachos',
        description: 'Imported corn-chips with tomato-pineapple salsa and melted cheddar cheese.',
        price: 'RM 16.50',
      },
      {
        id: 's3',
        name: 'Belgian Chunky Sweet Potato',
        description: 'Served with parmesan cheese, mayonnaise, chipotle sauce and chilli lime sauce.',
        price: 'RM 14.30',
        image: 'https://images.unsplash.com/photo-1595514578502-9988457c0e63?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 's4',
        name: 'Roast Beef Sandwich',
        description: 'Served on homemade focaccia bread with savory roast beef.',
        price: 'RM 27.60',
      },
      {
        id: 's5',
        name: 'Roast Vegetable Sandwich',
        description: 'Fresh roasted vegetables served on homemade focaccia.',
        price: 'RM 20.60',
      },
      {
        id: 's6',
        name: 'Con Queso',
        description: 'Our very own chilli con carne (BEEF gravy) baked with cheese & served with egg (1) as well as a focaccia slice.',
        price: 'RM 17.10',
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9671c09d?auto=format&fit=crop&q=80&w=800'
      },
      {
        id: 's7',
        name: 'Fries El Grande',
        description: 'Steakhouse cut fries covered in chili con carne (BEEF) & melted cheese.',
        price: 'RM 19.40',
        featured: true,
      },
      {
        id: 's8',
        name: 'Steakhouse Cut Fries',
        description: 'Classic steakhouse cut Idaho potatoes.',
        price: 'RM 13.20',
      }
    ]
  },
  {
    id: 'wings',
    title: 'Buffalo Wings',
    items: [
      {
        id: 'w1',
        name: 'Buffalo Wings Level 1',
        description: 'Fried chicken wings tossed in vinegar and cayenne pepper sauce (Originated from Buffalo, New York).',
        price: 'RM 20.50',
        image: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&q=80&w=800',
        featured: true,
      },
      {
        id: 'w2',
        name: 'Crispy Wings',
        description: 'Deep-fried chicken wings served golden brown.',
        price: 'RM 17.20',
      },
      {
        id: 'w3',
        name: 'BBQ Wings',
        description: 'Barbequed chicken wings marinated with hickory sauce.',
        price: 'RM 20.20',
      }
    ]
  },
  {
    id: 'soup',
    title: 'Soup',
    items: [
      {
        id: 'so1',
        name: 'Homemade Cream of Mushroom Soup',
        description: 'Made fresh daily with a medley of shitake, oyster and snow mushrooms.',
        price: 'RM 17.60',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  {
    id: 'dawg',
    title: 'Jumbo Dawg',
    items: [
      {
        id: 'd1',
        name: 'Classic Jumbo Dawg',
        description: 'Beef or Chicken on Croissant. Served with ketchup, mayonnaise & mustard.',
        price: 'RM 23.70',
      },
      {
        id: 'd2',
        name: 'Coney Island Jumbo Dawg',
        description: 'Beef or Chicken on Croissant. Served with BEEF chili con carne & diced onions.',
        price: 'RM 23.70',
        featured: true,
      },
      {
        id: 'd3',
        name: 'Mad Dawg',
        description: 'Served with cheddar cheese, BEEF chili con carne & cayenne butter on Croissant.',
        price: 'RM 25.70',
        image: 'https://images.unsplash.com/photo-1612531386530-97286d74c2fa?auto=format&fit=crop&q=80&w=800'
      }
    ]
  },
  {
    id: 'breakfast',
    title: 'All Day Breakfast',
    items: [
      {
        id: 'b1',
        name: 'Hungry Jack Hefty Breakfast',
        description: 'Served with egg of your choice, sliced roast beef tenderloin, jumbo chicken sausage, roasted potatoes, smoky baked beans, creamy mushrooms & two (2) focaccia slices.',
        price: 'RM 32.60',
        image: 'https://images.unsplash.com/photo-1533089862017-5614ecb3f256?auto=format&fit=crop&q=80&w=800',
        featured: true,
      }
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah L.",
    text: "The interior is absolutely stunning - love the dark beams and lighting. The Nachos El Grande lives up to its name!",
    rating: 5
  },
  {
    id: 2,
    name: "Aiman H.",
    text: "Best spot in town for a coffee and roast beef sandwich. The staff are incredibly welcoming.",
    rating: 5
  },
  {
    id: 3,
    name: "Jenny K.",
    text: "The fusion of the Tea Room vibe with the C&G menu is perfect. A mark of distinction indeed.",
    rating: 4
  }
];