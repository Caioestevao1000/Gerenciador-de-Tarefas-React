import { ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tarefas({listaDeTarefas, alterarTarefaConcluida, excluirTarefa}) {

    const navigator = useNavigate();

    function Detalhes(tarefa) {
        const query = new URLSearchParams();
        query.set("title", tarefa.title);
        query.set("description", tarefa.description);
        navigator(`/detalhes-da-tarefa?${query.toString()}`);
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
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${tarefa.isCompleted && "line-through"}`}
                    >
                        {tarefa.title}
                    </button>

                    <button onClick={() => Detalhes(tarefa)} className="bg-slate-400 p-2 rounded-md text-white"> 
                        <ChevronRightIcon />
                    </button>

                    <button onClick={() => excluirTarefa(tarefa.id)}
                     className="bg-slate-400 p-2 rounded-md text-white"> 
                        <Trash2Icon />
                    </button>

                </li>
            ))} 
        </ul>
    );
}

export default Tarefas;
