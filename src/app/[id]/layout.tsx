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
};

export default async function LayoutPrincipal({
    params,
    capa,
    grupos,
    produtos,
}: Props) {
    const perfilRequest = await axios<PerfilCardapio>(
        `${URL_DA_API}/PerfilCardapio/${params.id}`
    ).catch(() => notFound());
    if (!perfilRequest.data) return notFound();
    const perfil: PerfilCardapio = perfilRequest.data;
    return (
        <ProvedorDeTema perfil={perfil}>
            <Fundo />
            {capa}
            {grupos}
            {produtos}
        </ProvedorDeTema>
    );
}

export const revalidate = 3600; // Revalida a cada hora
