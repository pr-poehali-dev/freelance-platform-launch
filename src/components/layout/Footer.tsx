
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
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
  );
};

export default Footer;
