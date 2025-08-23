"use server";

import { addTodo, deleteTodo, editTodo, toggleTodo } from "@/lib/mock-db";
import { revalidatePath } from "next/cache";

export async function handleAddTodo(formData: FormData) {
  const title = formData.get("title") as string;
  if (!title) return;
  //   console.log(title);
  addTodo(title);
  revalidatePath("/todos");
}
export async function handleToggleTodo(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) return;
  //   console.log(title);
  toggleTodo(id);
  revalidatePath("/todos");
}
export async function handleEditTodo(formData: FormData) {
  const id = formData.get("id") as string;
  const newTitle = formData.get("newTitle") as string;
  if (!id) return;
  editTodo(id, newTitle);
  revalidatePath("/todos");
}
export async function handelDeleteTodo(formData: FormData) {
  const id = formData.get("id") as string;
  if (!id) return;
  deleteTodo(id);
  revalidatePath("/todos");
}
