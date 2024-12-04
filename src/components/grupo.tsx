import type { ReactNode } from "react";
import clsx from "clsx";

function ButtonLink(props: {
    href: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <a
            href={props.href}
            className={clsx(
                "p-2 flex items-center rounded-md justify-center content-center bg-botao hover:scale-110 transition-all duration-200 w-52 max-sm:w-32 text-center",
                props.className
            )}
        >
            {props.children}
        </a>
    );
}

export function Grupo(props: { grupo: string; children: ReactNode }) {
    return (
        <div className="w-full min-h-full p-[5%]" id={props.grupo}>
            <h2 className="text-lg mb-8">.:{props.grupo}:.</h2>
            <div className="flex flex-col w-full min-h-[50vh]">{props.children}</div>
            <div className="flex justify-between gap-5 max-sm:w-full">
                <ButtonLink href="#grupos">Índice</ButtonLink>
                <ButtonLink href="#inicio">Fechar Cardápio</ButtonLink>
            </div>
        </div>
    );
}
