import type { ReactNode } from "react";
import type { PerfilCardapio } from "@/types";
import { notFound } from "next/navigation";
import { axios } from "@/utils/geral";
import ProvedorDeTema from "@/components/ConfiguradorDeTema";
import Fundo from "@/components/Fundo";
import { URL_DA_API } from "@/utils/variaveis";

type Props = {
    params: { id: string };
    grupos: ReactNode;
    produtos: ReactNode;
    capa: ReactNode;
    saida: ReactNode;
};

export default async function LayoutPrincipal({
    params: parms,
    capa,
    grupos,
    produtos,
    saida,
}: Props) {
    const params = await parms;
    if (params.id == "favicon.ico") {
        return <></>;
    }
    const perfilRequest = await axios<PerfilCardapio>(
        `${URL_DA_API}/PerfilCardapio/${params.id}`
    ).catch((err) => {
        console.error(err);
        return notFound();
    });
    if (!perfilRequest.data) {
        console.error("Nenhuma informação sobre ele encontrada.")
        return notFound();
    }
    const perfil: PerfilCardapio = perfilRequest.data;
    return (
        <ProvedorDeTema perfil={perfil}>
            <Fundo />
            {capa}
            {grupos}
            {produtos}
            {saida}
        </ProvedorDeTema>
    );
}

export const revalidate = 3600; // Revalida a cada hora
