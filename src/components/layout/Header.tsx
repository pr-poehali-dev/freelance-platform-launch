
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
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
  );
};

export default Header;
