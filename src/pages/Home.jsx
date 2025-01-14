import LearnGuide from "../components/LearnGuide";
import TechStacks from "../components/TechStacks";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-xl mx-auto px-6">
        <div className="h-screen flex flex-col justify-center gap-y-6">
          <TechStacks />
          <LearnGuide />
        </div>
      </div>
    </main>
  );
}
