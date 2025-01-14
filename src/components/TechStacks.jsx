export default function TechStacks() {
  const techs = [
    {
      name: "Vite",
      icon: "/vite.svg",
    },
    {
      name: "React",
      icon: "/react.svg",
    },
    {
      name: "React Router",
      icon: "/react-router.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "/tailwind-css.svg",
    },
  ];

  return (
    <header className="space-y-4">
      <div className="flex gap-x-4">
        {techs.map((tech) => (
          <Image key={tech.name} {...tech} />
        ))}
      </div>
    </header>
  );
}

function Image({ name, icon }) {
  return <img src={icon} alt={`${name} icon`} className="w-12" />;
}
