import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";
import Title from "../components/Title";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const desc = searchParams.get("desc");
  return (
    <div className="w-screen h-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            className="absolute text-white left-0 top-0 bottom-0"
            onClick={() => navigate(-1)}
          >
            <ChevronLeftIcon />
          </button>
          <Title>
            Detalhes da Tarefa
          </Title>
        </div>
        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
          <p className="text-slate-600">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
