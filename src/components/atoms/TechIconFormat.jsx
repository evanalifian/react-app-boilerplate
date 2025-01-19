export default function TechIconFormat({ icon, name }) {
  return (
    <img
      src={icon}
      alt={`${name} icon`}
      className="w-5"
      title={`${name} icon`}
    />
  );
}
