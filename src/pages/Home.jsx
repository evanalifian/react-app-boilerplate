import reactIcon from "/react.svg";
import reactRouterIcon from "/react-router.svg";
import tailwindIcon from "/tailwind-css.svg";
import viteIcon from "/vite.svg";

export default function Home() {
  return (
    <main>
      <div className="w-full max-w-xl mx-auto px-6">
        <div className="h-screen flex flex-col justify-center gap-y-6">
          <header className="space-y-4">
            <div className="flex gap-x-4">
              <a href="https://vite.dev/" target="_blank">
                <img src={viteIcon} alt="Vite icon" className="w-12" />
              </a>
              <a href="https://react.dev/" target="_blank">
                <img src={reactIcon} alt="React icon" className="w-12" />
              </a>
              <a
                href="https://reactrouter.com/start/library/routing"
                target="_blank"
              >
                <img
                  src={reactRouterIcon}
                  alt="React Router icon"
                  className="w-12"
                />
              </a>
              <a href="https://tailwindcss.com/" target="_blank">
                <img
                  src={tailwindIcon}
                  alt="Tailwind CSS icon"
                  className="w-12"
                />
              </a>
            </div>
          </header>
          <section>
            <ul className="list-inside list-decimal font-mono space-y-1">
              <li>
                Learn react router (library){" "}
                <a
                  href="https://reactrouter.com/start/library/routing"
                  target="_blank"
                  className="text-blue-700 transition-colors hover:text-blue-500"
                >
                  here
                </a>
                .
              </li>
              <li>
                Read our docs{" "}
                <a
                  href="https://github.com/evanalifian/react-app-boilerplate"
                  target="_blank"
                  className="text-blue-700 transition-colors hover:text-blue-500"
                >
                  here
                </a>
                .
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
