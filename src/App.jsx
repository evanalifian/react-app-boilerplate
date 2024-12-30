import reactIcon from "/react.svg";
import reactRouterIcon from "/react-router.svg";
import tailwindIcon from "/tailwind-css.svg";
import viteIcon from "/vite.svg"

export default function App() {
  return (
    <main>
      <div className="w-full w-xl mx-auto px-6">
        <div className="h-screen flex flex-col justify-center">
          <header className="space-y-4">
            <div className="flex justify-center gap-x-4">
              <img src={viteIcon} alt="Vite icon" className="w-12" />
              <img src={reactIcon} alt="React icon" className="w-12" />
              <img
                src={reactRouterIcon}
                alt="React Router icon"
                className="w-12"
              />
              <img
                src={tailwindIcon}
                alt="Tailwind CSS icon"
                className="w-12"
              />
            </div>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-tr from-zinc-900 to-zinc-500 text-2xl text-center font-semibold">
              React app boilerplate
            </h1>
            <div className="flex justify-center gap-x-4">
              <a
                href={"https://react.dev"}
                target="_blank"
                className="block w-max bg-cyan-500 text-zinc-50 text-sm font-medium py-2 p-3 rounded-3xl transition-colors hover:bg-cyan-500/95"
                >
                React docs
              </a>
              <a
                href={"https://reactrouter.com/start/library/navigating"}
                target="_blank"
                className="block w-max bg-zinc-50 text-zinc-700 border border-zinc-300 text-sm font-medium py-2 p-3 rounded-3xl transition-colors hover:bg-zinc-100"
              >
                React Router library
              </a>
            </div>
          </header>
          <section></section>
        </div>
      </div>
    </main>
  );
}
