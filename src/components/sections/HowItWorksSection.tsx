
import Icon from "@/components/ui/icon";

interface Step {
  icon: string;
  title: string;
  description: string;
  iconColor: string;
  iconBgColor: string;
}

const HowItWorksSection = () => {
  const steps: Step[] = [
    {
      icon: "Search",
      title: "Найдите специалиста",
      description: "Выберите подходящего исполнителя из каталога или разместите проект",
      iconColor: "#F97316",
      iconBgColor: "#F97316/10"
    },
    {
      icon: "MessageSquare",
      title: "Обсудите детали",
      description: "Согласуйте сроки, объем работы и стоимость через защищенный чат",
      iconColor: "#8B5CF6",
      iconBgColor: "#8B5CF6/10"
    },
    {
      icon: "CheckCircle",
      title: "Получите результат",
      description: "Оплата переводится исполнителю только после вашего подтверждения",
      iconColor: "#10B981",
      iconBgColor: "#10B981/10"
    }
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">Как это работает</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
    </section>
  );
};

const StepCard = ({ step }: { step: Step }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className={`w-16 h-16 rounded-full bg-[${step.iconBgColor}] flex items-center justify-center mb-4`}>
        <Icon name={step.icon} className={`w-8 h-8 text-[${step.iconColor}]`} />
      </div>
      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.description}</p>
    </div>
  );
};

export default HowItWorksSection;
