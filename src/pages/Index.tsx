
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = [
    { id: 1, name: "Разработка сайтов", icon: "Code2" },
    { id: 2, name: "Дизайн", icon: "Paintbrush" },
    { id: 3, name: "Маркетинг", icon: "BarChart" },
    { id: 4, name: "Тексты", icon: "FileText" },
    { id: 5, name: "SEO", icon: "Search" },
    { id: 6, name: "Видео", icon: "Video" },
    { id: 7, name: "Аудио", icon: "Music" },
    { id: 8, name: "Переводы", icon: "Languages" },
  ];

  const freelancers = [
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

  return (
    <div className={`min-h-screen font-rubik bg-[#F1F0FB] transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Хедер */}
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Workflow" className="w-8 h-8 text-[#8B5CF6]" />
            <span className="font-bold text-xl text-gray-900">ФриланСити</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">Главная</a>
            <a href="#" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">Найти исполнителя</a>
            <a href="#" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">Проекты</a>
            <a href="#" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">О нас</a>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="hidden sm:flex">Войти</Button>
            <Button className="bg-[#8B5CF6] hover:bg-[#7C3AED]">Регистрация</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </header>

      {/* Блок с заголовком */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-white to-[#F1F0FB]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Найдите лучших <span className="text-[#8B5CF6]">фрилансеров</span> для вашего проекта
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
            Реализуйте ваши идеи с помощью профессионалов. Быстро, качественно и по доступной цене.
          </p>
          
          <div className="bg-white p-4 rounded-xl shadow-lg max-w-3xl mx-auto flex flex-col md:flex-row gap-4">
            <Input 
              placeholder="Что нужно сделать?" 
              className="md:flex-grow"
            />
            <Button className="bg-[#F97316] hover:bg-[#EA580C] h-12">
              <Icon name="Search" className="mr-2 h-4 w-4" />
              Найти исполнителя
            </Button>
          </div>
        </div>
      </section>

      {/* Категории */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Популярные категории</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map(category => (
            <div 
              key={category.id} 
              className="bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center mb-3">
                <Icon name={category.icon} className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <span className="font-medium">{category.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Популярные фрилансеры */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Топовые фрилансеры</h2>
          <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
            Наши лучшие специалисты с высоким рейтингом и большим опытом выполнения заказов
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freelancers.map(freelancer => (
              <Card key={freelancer.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative pb-[70%] overflow-hidden">
                    <img 
                      src={freelancer.image} 
                      alt={freelancer.name} 
                      className="absolute w-full h-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{freelancer.name}</h3>
                      <Badge className="bg-[#8B5CF6]">
                        <Icon name="Star" className="w-3 h-3 mr-1 fill-current" />
                        {freelancer.rating}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-3">{freelancer.specialty}</p>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">{freelancer.orders} заказов</span>
                      <Button variant="ghost" size="sm" className="text-[#8B5CF6] hover:text-[#7C3AED] p-0">
                        Профиль
                        <Icon name="ChevronRight" className="ml-1 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button variant="outline" className="min-w-40">
              Показать больше
              <Icon name="ChevronDown" className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Как это работает</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#F97316]/10 flex items-center justify-center mb-4">
              <Icon name="Search" className="w-8 h-8 text-[#F97316]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Найдите специалиста</h3>
            <p className="text-gray-600">Выберите подходящего исполнителя из каталога или разместите проект</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center mb-4">
              <Icon name="MessageSquare" className="w-8 h-8 text-[#8B5CF6]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Обсудите детали</h3>
            <p className="text-gray-600">Согласуйте сроки, объем работы и стоимость через защищенный чат</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#10B981]/10 flex items-center justify-center mb-4">
              <Icon name="CheckCircle" className="w-8 h-8 text-[#10B981]" />
            </div>
            <h3 className="text-xl font-bold mb-2">Получите результат</h3>
            <p className="text-gray-600">Оплата переводится исполнителю только после вашего подтверждения</p>
          </div>
        </div>
      </section>

      {/* Призыв к действию */}
      <section className="py-16 bg-[#8B5CF6]">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-white/90">
            Присоединяйтесь к тысячам заказчиков и фрилансеров уже сегодня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#8B5CF6] hover:bg-gray-100">Я ищу исполнителя</Button>
            <Button className="bg-[#F97316] hover:bg-[#EA580C] border-none">Я фрилансер</Button>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Workflow" className="w-6 h-6 text-[#8B5CF6]" />
                <span className="font-bold text-lg">ФриланСити</span>
              </div>
              <p className="text-gray-400 text-sm">
                Платформа для поиска исполнителей и заказов для фрилансеров
              </p>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Заказчикам</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Как разместить заказ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Безопасная сделка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Рейтинг исполнителей</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Исполнителям</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Как найти заказ</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Повышение рейтинга</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вывод средств</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" className="w-4 h-4" />
                  <a href="mailto:info@freelanscity.ru" className="hover:text-white transition-colors">info@freelanscity.ru</a>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" className="w-4 h-4" />
                  <a href="tel:+79123456789" className="hover:text-white transition-colors">+7 (912) 345-67-89</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 ФриланСити. Все права защищены.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Icon name="Telegram" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
