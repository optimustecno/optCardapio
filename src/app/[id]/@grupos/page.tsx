import { Grupo } from "@/types";
import { axios } from "@/utils/geral";
import { notFound } from "next/navigation";

export default async function Grupos(props: { params: { id: string } }) {
    const GrupoRequest = await axios<Grupo[]>(
        `/GruposProd/${(await props.params).id}`
    ).catch((err) => {
        console.log("Error");
        console.error(err);
        notFound();
    });
    const grupos = GrupoRequest.data;
    if (!grupos) {
        console.log("Nenhum grupo encontrado");
        return notFound();
    }
    return (
        <div
            className="flex items-center pt-10 min-w-full min-h-full flex-col gap-5"
            id="grupos"
        >
            {grupos.map((grupo, index) => {
                return (
                    <a
                        href={`#${grupo.grupo}`}
                        className="w-[70vw] max-w-64 bg-botao p-4 hover:scale-110 transition-all duration-200 rounded-md"
                        key={index}
                    >
                        {grupo.grupo}
                    </a>
                );
            })}
        </div>
    );
}
