import TodosPage from "./todos/page";

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-4">
            TaskFlow
          </h1>
          <p className="text-xl text-white/80 font-light">
            Organize your life with style and simplicity
          </p>
        </header>
        <TodosPage />
      </div>
    </div>
  );
}
