"use client"
import Image from "next/image";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Para a prova de quarta e projetos",
      isCompleted: false,
    }
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id===TaskId) {
        return { ...task, isCompleted: true};
      } 
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#b0d688]">
      <main className="w-full max-w-3xl py-32 px-16">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-xs text-4xl font-semibold leading-10 tracking-tight text-[#d06361]">
            TO-DO LIST
          </h1>
          <Image className="w-40"
            src="/moranguinho-004.png"
            alt="moranguinho"
            width={200}
            height={200}
          />
          <AddTask tasks={tasks} onTaskClick={onTaskClick} />
          <Tasks />
        </div>
      </main>
    </div>
  );
}
