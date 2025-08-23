import TodosPage from "./todos/page";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-2 space-y-4 text-white">
      <div className="max-w-6xl mx-auto p-2 space-y-4 text-white">
        <h1 className="text-2xl font-extrabold text-center text-pink-400">
          Welcome To My App
        </h1>
        <TodosPage />
      </div>
    </div>
  );
}
