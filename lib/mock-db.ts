export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
export let todos: Todo[] = []; // Initialize an empty array to store todos
export function getTodos(): Todo[] {
  return todos;
}
export function addTodo(title: string): void {
  todos.push({ id: crypto.randomUUID(), title, completed: false });
}
export function toggleTodo(id: string): void {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}
export function editTodo(id: string, newTitle: string): void {
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, title: newTitle } : todo
  );
}
export function deleteTodo(id: string): void {
  todos = todos.filter((todo) => todo.id !== id);
}
