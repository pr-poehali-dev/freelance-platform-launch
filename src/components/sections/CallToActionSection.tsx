
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
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
  );
};

export default CallToActionSection;
