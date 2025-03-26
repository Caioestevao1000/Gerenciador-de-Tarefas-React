import { useState } from "react";

function addTarefas({adicionarTarefas}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        
          <input type="text" placeholder="Título da Tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 mb-2 rounded-md" 
          value={title} 
          onChange={(event) => setTitle(event.target.value)}/> {/*px=paddi ng horizontal o y=vertical py=*/}
          
          <input type="text" placeholder="Descrição da Tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 mb-2 rounded-md"
           value={description}
           onChange={(event) => setDescription(event.target.value)}/>
        
          <button onClick={() => {
            //verifica os inputs
            if (!title.trim() || !description.trim()){
              return alert("Preencha Todos os Campos!!");
            }
            adicionarTarefas(title, description);
            setTitle("");
            setDescription("");
          }} 
          className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium ">Adicionar</button>
        
        </div>
    );
}

export default addTarefas;