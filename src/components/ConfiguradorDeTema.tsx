import type { ReactNode } from "react";
import { PerfilCardapio } from "@/types";

export default function ProvedorDeTema({
    perfil,
    children,
}: {
    perfil: PerfilCardapio;
    children: ReactNode;
}) {
    return (
        <>
            <style>
                {`:root{
                    --cor-destaque :#${perfil.cor_destaque_prod};
                    --cor-fonte :#${perfil.cor_fonte};
                    --cor-primaria :#${perfil.cor_primaria};
                    --cor-secundaria:#${perfil.cor_secundaria};
                    --cor-botao : #${perfil.cor_botao}
                }`}
            </style>
            {children}
        </>
    );
}
