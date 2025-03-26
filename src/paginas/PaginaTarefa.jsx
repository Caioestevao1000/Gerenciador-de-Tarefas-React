import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeftIcon} from "lucide-react";

function PaginaTarefa() {
    const navigate = useNavigate();
    const [SearchParams] = useSearchParams();
    const title = SearchParams.get("title")
    const description = SearchParams.get("description")

    return (<div className="h-screen w-screen bg-slate-500 p-6">

                <div className="w-500px space-y-4">
                    <div className="flex justify-center relative mb-6">
                        <h1 className="text-3xl text-slate-100 font-bold text-center pb-2">Detalhes de Tarefas</h1>
                        <button onClick={() => navigate(-1)} className=" text-white absolute left-0 top-0 bottom-0"> 
                            <ChevronLeftIcon /> </button>
                    </div>

                    <div className="bg-slate-200 p-4 rounded-md">

                        <h2 className="text-xl font-bold text-slate-600">{title}</h2>
                        <p className="text-slate-600">{description}</p>

                    </div>

                </div>
            </div>
    );
}

export default PaginaTarefa;