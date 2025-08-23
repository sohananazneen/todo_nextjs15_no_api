import { todos } from "@/lib/mock-db";
import {
  handelDeleteTodo,
  handleAddTodo,
  handleEditTodo,
  handleToggleTodo,
} from "./actions";
export default function TodosPage() {
  return (
    <main className="max-w-6xl mx-auto p-2 space-y-4 text-white">
      {/*heading*/}
      <h1 className="text-2xl font-extrabold text-center text-cyan-400">
        📋 Todo list
      </h1>
      <h6 className="text-1xl font-bold text-center text-amber-400">
        with server actions no api routes
      </h6>
      {/*Summary*/}
      <div className="space-y-2 p-5 bg-gray-900 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-white">Summary</h2>
        <ul className="text-gray-300 text-lg space-y-1">
          <li>
            📋 Total Task:
            <span className="text-white font-semibold px-2">
              {todos.length}
            </span>
          </li>
          <li>
            ✅ Completed:
            <span className="text-green-400 font-semibold px-2">
              {todos.filter((todo) => todo.completed).length}
            </span>
          </li>
          <li>
            ⌛ Pendings:
            <span className="text-yellow-400 font-semibold px-2">
              {todos.filter((todo) => !todo.completed).length}
            </span>
          </li>
          <li>
            📘 Title with spaces:
            <span className="text-blue-400 font-semibold px-2">
              {todos.filter((todo) => todo.title.includes(" ")).length}
            </span>
          </li>
        </ul>
      </div>
      {/* create a new todo list */}
      <form
        action={handleAddTodo}
        className="flex flex-col sm:flex-row gap-3 bg-gray-900 p-4 rounded-xl shadow-lg"
      >
        <input
          type="text"
          name="title"
          placeholder="Enter a new task"
          className="flex-1 bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-2 focus:ring focus:ring-amber-500"
          required
        />
        <button className="bg-cyan-600 hover:bg-cyan-700 transition text-white px-4 py-2 rounded-lg font-semibold">
          ➕ Add new task
        </button>
      </form>
      {/* todo list in grid format */}
      <section>
        <h2 className="text-xl font-semibold text-gray-300 mb-4">🗂 Tasks</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {todos.map((todo) => (
            <div
              key={todo.id}
              className="bg-gray-900 rounded-xl shadow-lg p-4 space-y-4"
            >
              {/* show title and toggle completion state  */}
              <form action={handleToggleTodo}>
                <input type="hidden" value={todo.id} name="id" />
                <button>✅</button>
              </form>
              <span
                className={`text-base font-medium ${
                  todo.completed ? "line-through text-gray-500" : "text-white"
                }`}
              >
                {todo.title}
              </span>
              {todo.completed && (
                <div className="text-sm text-green-400 font-semibold">
                  (completed)
                </div>
              )}
              {!todo.completed && (
                <div className="text-sm text-gray-400 font-semibold">
                  (Mark as complete)
                </div>
              )}
              {/* editing a task */}
              <form action={handleEditTodo}>
                <input type="hidden" value={todo.id} name="id" />
                <input
                  name="newTitle"
                  defaultValue={todo.title}
                  className="flex-1 bg-gray-800 text-white border border-gray-700 rounded px-2 py-1 text-sm focus:outline"
                  required
                />
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-1 my-2 rounded text-sm font-semibold">
                  🖋 Edit
                </button>
              </form>
              {/* deleting a task */}
              <form action={handelDeleteTodo}>
                <input type="hidden" value={todo.id} name="id" />
                <button className="text-red-400 hover:text-red-500 transition text-sm">
                  🗑 Delete
                </button>
              </form>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
