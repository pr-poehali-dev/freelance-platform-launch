
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
