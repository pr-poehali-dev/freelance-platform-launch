
import { Category, Freelancer } from "@/types";

export const categories: Category[] = [
  { id: 1, name: "Разработка сайтов", icon: "Code2" },
  { id: 2, name: "Дизайн", icon: "Paintbrush" },
  { id: 3, name: "Маркетинг", icon: "BarChart" },
  { id: 4, name: "Тексты", icon: "FileText" },
  { id: 5, name: "SEO", icon: "Search" },
  { id: 6, name: "Видео", icon: "Video" },
  { id: 7, name: "Аудио", icon: "Music" },
  { id: 8, name: "Переводы", icon: "Languages" },
];

export const freelancers: Freelancer[] = [
  {
    id: 1,
    name: "Анна М.",
    specialty: "UX/UI Дизайнер",
    rating: 4.9,
    orders: 154,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2, 
    name: "Максим К.",
    specialty: "Веб-разработчик",
    rating: 4.8,
    orders: 127,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Елена С.",
    specialty: "Копирайтер",
    rating: 4.7,
    orders: 98,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Артём В.",
    specialty: "SMM специалист",
    rating: 4.8,
    orders: 112,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
];
