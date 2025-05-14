
import { Category } from "@/types";
import Icon from "@/components/ui/icon";

interface CategoriesSectionProps {
  categories: Category[];
}

const CategoriesSection = ({ categories }: CategoriesSectionProps) => {
  return (
    <section className="py-16 container mx-auto px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Популярные категории</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
};

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <div 
      className="bg-white rounded-xl p-4 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow cursor-pointer hover:-translate-y-1 transition-transform duration-200"
    >
      <div className="w-12 h-12 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center mb-3">
        <Icon name={category.icon} className="w-6 h-6 text-[#8B5CF6]" />
      </div>
      <span className="font-medium">{category.name}</span>
    </div>
  );
};

export default CategoriesSection;
