"use server";
import { todo } from "@prisma/client";
import { prisma } from "../utils/prisma";
function getAllTodos() {
  return prisma.todo.findMany();
}
function upsertTodo(data: todo) {
  return prisma.todo.upsert({
    where: { id: data.id },
    update: data,
    create: data,
  });
}
function deleteTodoById(id: string) {
  return prisma.todo.delete({ where: { id } });
}
