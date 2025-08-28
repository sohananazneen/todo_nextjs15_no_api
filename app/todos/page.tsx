import { todos } from "@/lib/mock-db";
import {
  handelDeleteTodo,
  handleAddTodo,
  handleEditTodo,
  handleToggleTodo,
} from "./actions";

export default function TodosPage() {
  const completedCount = todos.filter((todo) => todo.completed).length;
  const pendingCount = todos.filter((todo) => !todo.completed).length;
  const progressPercentage = todos.length > 0 ? (completedCount / todos.length) * 100 : 0;

  return (
    <main className="space-y-8 animate-fade-in">
      {/* Statistics Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Total Tasks</p>
              <p className="text-3xl font-bold text-white">{todos.length}</p>
            </div>
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Completed</p>
              <p className="text-3xl font-bold text-emerald-400">{completedCount}</p>
            </div>
            <div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Pending</p>
              <p className="text-3xl font-bold text-amber-400">{pendingCount}</p>
            </div>
            <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/70 text-sm font-medium">Progress</p>
              <p className="text-3xl font-bold text-purple-400">{Math.round(progressPercentage)}%</p>
            </div>
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
          <div className="mt-3 w-full bg-white/10 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Add New Task Form */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-xl">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
          <span className="w-8 h-8 bg-indigo-500/20 rounded-lg flex items-center justify-center">
            ➕
          </span>
          Add New Task
        </h2>
        <form action={handleAddTodo} className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="title"
            placeholder="What needs to be done?"
            className="flex-1 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent placeholder-white/50 text-lg"
            required
          />
          <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg">
            Add Task
          </button>
        </form>
      </div>

      {/* Tasks Grid */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-3">
          <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
            📝
          </span>
          Your Tasks
        </h2>
        
        {todos.length === 0 ? (
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-white mb-2">No tasks yet!</h3>
            <p className="text-white/60">Add your first task above to get started.</p>
          </div>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {todos.map((todo, index) => (
              <div
                key={todo.id}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Task Header */}
                <div className="flex items-start justify-between mb-4">
                  <form action={handleToggleTodo} className="flex-shrink-0">
                    <input type="hidden" value={todo.id} name="id" />
                    <button className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                      todo.completed 
                        ? 'bg-emerald-500 border-emerald-500 text-white' 
                        : 'border-white/30 hover:border-emerald-400'
                    }`}>
                      {todo.completed && <span className="text-sm">✓</span>}
                    </button>
                  </form>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    todo.completed 
                      ? 'bg-emerald-500/20 text-emerald-300' 
                      : 'bg-amber-500/20 text-amber-300'
                  }`}>
                    {todo.completed ? 'Completed' : 'Pending'}
                  </div>
                </div>

                {/* Task Title */}
                <h3 className={`text-lg font-semibold mb-4 ${
                  todo.completed 
                    ? 'line-through text-white/50' 
                    : 'text-white'
                }`}>
                  {todo.title}
                </h3>

                {/* Edit Form */}
                <form action={handleEditTodo} className="mb-4">
                  <input type="hidden" value={todo.id} name="id" />
                  <div className="flex gap-2">
                    <input
                      name="newTitle"
                      defaultValue={todo.title}
                      className="flex-1 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/50"
                      required
                    />
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                      Save
                    </button>
                  </div>
                </form>

                {/* Delete Button */}
                <form action={handelDeleteTodo}>
                  <input type="hidden" value={todo.id} name="id" />
                  <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-300 hover:text-red-200 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border border-red-500/30">
                    🗑️ Delete Task
                  </button>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
