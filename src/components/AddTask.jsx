import { useState } from "react";
import Input from "./Input";

function AddTask({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={desc}
        onChange={(event) => setDesc(event.target.value)}
      />
      <button
        className="bg-slate-500 text-white px-4 py-2 rounded-md"
        onClick={() => {
          //Verificar se está vazio
          if (!title.trim() || !desc.trim()) {
            return alert("Preencha todos os campos!!");
          }
          onAddTask(title, desc);
          setTitle("");
          setDesc("");
        }}
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
