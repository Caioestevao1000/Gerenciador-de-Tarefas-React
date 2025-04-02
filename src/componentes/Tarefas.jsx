import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./button";

function Tarefas({listaDeTarefas, alterarTarefaConcluida, excluirTarefa}) {

    const navigator = useNavigate();

    function Detalhes(tarefa) {
        const query = new URLSearchParams();
        query.set("title", tarefa.title);
        query.set("description", tarefa.description);
        navigator(`/detalhes-tarefa?${query.toString()}`);
    }


    /*const navegar = useNavigate();

    function Detalhes(tarefa) {
        navegar(`/detalhes-da-tarefa?title=${tarefa.title}&description=${tarefa.description}`);
    }*/

    return ( 
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {listaDeTarefas.map((tarefa) => (
                <li key={tarefa.id} className="flex gap-2">
                    <button 
                    
                        onClick={() => alterarTarefaConcluida(tarefa.id)}
                        className={`bg-slate-400 text-left flex items-center gap-2 w-full text-white p-2 rounded-md ${tarefa.isCompleted && "line-through"}`}>
                        {tarefa.isCompleted && <CheckIcon />}
                        {tarefa.title}
                    </button>

                    <Button onClick={() => Detalhes(tarefa)} > 
                        <ChevronRightIcon />
                    </Button>

                    <Button onClick={() => excluirTarefa(tarefa.id)} > 
                        <Trash2Icon />
                    </Button>

                </li>
            ))} 
        </ul>
    );
}

export default Tarefas;
