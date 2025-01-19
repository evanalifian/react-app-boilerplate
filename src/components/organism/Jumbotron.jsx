import TechSection from "../molecules/TechSection";
import Welcoming from "../molecules/Welcoming";

export default function Jumbotron() {
  return (
    <div className="h-full flex flex-col justify-center gap-y-4 md:h-auto">
      <TechSection />
      <Welcoming />
    </div>
  );
}
