import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Title from "./components/Title";
import { useState, useEffect } from "react";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    //CHAMAR API
    // const fetchTasks = async () => {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos?_limit=10",
    //     {
    //       method: "GET",
    //     },
    //   );
    //   //PEGAR DADOS DELA
    //   const data = await response.json();
    //   //ARMAZENAR/PERSISTIR ESSES DADOS NO STATE
    //   setTasks(data);
    // };
    //SE QUISER CHAMAR A API
    // fetchTasks();
  }, []);

  function onAddTask(title, desc) {
    const newTask = {
      id: v4(),
      title: title,
      desc: desc,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      //PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  return (
    <div className="w-screen min-h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <Title>
          Gerenciador de Tarefas
        </Title>
        <AddTask onAddTask={onAddTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
