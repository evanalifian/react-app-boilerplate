export default function MainLayout({ children }) {
  return (
    <main>
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="h-screen flex flex-col justify-between md:justify-center md:gap-y-12">
          {children}
        </div>
      </div>
    </main>
  );
}
