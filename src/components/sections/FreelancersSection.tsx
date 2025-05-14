
import { Freelancer } from "@/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface FreelancersSectionProps {
  freelancers: Freelancer[];
}

const FreelancersSection = ({ freelancers }: FreelancersSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">Топовые фрилансеры</h2>
        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Наши лучшие специалисты с высоким рейтингом и большим опытом выполнения заказов
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {freelancers.map(freelancer => (
            <FreelancerCard key={freelancer.id} freelancer={freelancer} />
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
  );
};

const FreelancerCard = ({ freelancer }: { freelancer: Freelancer }) => {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
  );
};

export default FreelancersSection;
