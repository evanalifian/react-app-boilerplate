import VIteIcon from "/vite.svg";
import ReactIcon from "/react.svg";
import ReactRouterIcon from "/react-router.svg";
import TailwindCSSIcon from "/tailwind-css.svg";
import TechIconFormat from "../atoms/TechIconFormat";

export default function TechSection() {
  return (
    <div className="flex gap-x-2">
      <TechIconFormat icon={VIteIcon} name="Vite" />
      <TechIconFormat icon={ReactIcon} name="React" />
      <TechIconFormat icon={ReactRouterIcon} name="React Router" />
      <TechIconFormat icon={TailwindCSSIcon} name="Tailwind CSS" />
    </div>
  );
}
