import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

// export function GrupoAntigo(props: { grupo: string; children: ReactNode }) {
//     return (
//         <div className="p-4 w-3/4" id={props.grupo}>
//             <h2 className="text-lg">.:{props.grupo}:.</h2>
//             <div className="flex flex-col">{props.children}</div>
//         </div>
//     );
// }

function ButtonLink(props: {
    href: string;
    children: ReactNode;
    className?: string;
}) {
    return (
        <Link
            href={props.href}
            className={clsx(
                "py-2 flex items-center rounded-md justify-center content-center bg-botao hover:scale-110 transition-all duration-200 w-52 text-center",
                props.className
            )}
        >
            {props.children}
        </Link>
    );
}

export function Grupo(props: { grupo: string; children: ReactNode }) {
    return (
        <div className="size-full p-[5%]" id={props.grupo}>
            <h2 className="text-lg">.:{props.grupo}:.</h2>
            <div className="flex flex-col w-full h-[50vh]">{props.children}</div>
            <div className="flex justify-between gap-5">
                <ButtonLink href="#grupos">Índice</ButtonLink>
                <ButtonLink href="#0">Fechar Cardápio</ButtonLink>
            </div>
        </div>
    );
}
