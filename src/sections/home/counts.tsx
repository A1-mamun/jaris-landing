import { CountCard } from "@/components";
import { counts } from "@/data";

const Counts = () => {
  return (
    <div className="relative padding bg-[url('/images/home/_DSC0164-Enhanced-NR.jpg')] bg-cover bg-bottom">
      <div className="absolute inset-0 bg-jaris-blue opacity-75" />
      <div className="flex items-center justify-center gap-14 flex-wrap">
        {counts.map((item: any, index: number) => (
          <CountCard
            key={index}
            title={item.title}
            count={item.count}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Counts;
