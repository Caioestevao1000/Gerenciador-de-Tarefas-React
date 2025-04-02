import { useEffect, useState } from "react";
import AddTarefas from "./componentes/AddTarefas";
import Tarefas from "./componentes/Tarefas";
import Title from "./componentes/title";

function App() {
  const [listaDeTarefas, setListaDeTarefas] = useState(() => {
    return JSON.parse(localStorage.getItem("tarefaLo")) || [
      {
        id: 1,
        title: "Estudar Programação",
        description: "Estudar para se tornar um desenvolvedor full stack.",
        isCompleted: false
      },
      {
        id: 2,
        title: "Estudar Inglês",
        description: "Melhorar vocabulário e fluência.",
        isCompleted: false
      },
      {
        id: 3,
        title: "Estudar Matemática",
        description: "Revisar conteúdos importantes.",
        isCompleted: false
      },
    ];
  });

  useEffect(()=> {
    localStorage.setItem("tarefaLo", JSON.stringify(listaDeTarefas));
  },[listaDeTarefas]);

  function alterarTarefaConcluida(idTarefa) {
    const novaListaDeTarefas = listaDeTarefas.map((tarefa) => {
      if (tarefa.id === idTarefa) {
        return { ...tarefa, isCompleted: !tarefa.isCompleted };
      }
      return tarefa;
    });
    setListaDeTarefas(novaListaDeTarefas);
  }


  function excluirTarefa(idTarefa) {
    const novaListaDeTarefas = listaDeTarefas.filter(tarefa => tarefa.id !== idTarefa )
    setListaDeTarefas(novaListaDeTarefas);
  }

  function adicionarTarefas(title, description) {
    const novaListaDeTarefas = {
      id: listaDeTarefas.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setListaDeTarefas([...listaDeTarefas, novaListaDeTarefas]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-500px space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        
        <AddTarefas adicionarTarefas={adicionarTarefas}/>

        <Tarefas listaDeTarefas={listaDeTarefas} alterarTarefaConcluida={alterarTarefaConcluida} excluirTarefa={excluirTarefa} />
      </div>
    </div>
  );
}

export default App;