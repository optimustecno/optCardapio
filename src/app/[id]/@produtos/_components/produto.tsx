import type { Produto } from "@/types";
import clsx from "clsx";

export function ProdutoItem({ produto }: { produto: Produto }) {
    return (
        <div
            className={clsx("", produto.destaque == "1" && "text-destaque")}
            key={produto.cod_produto}
        >
            <div className="flex flex-row items-center w-full">
                <h3 className="text-lg flex-[3]">{produto.produto}</h3>
                <span className="border-b-1 border-gray border-dotted flex-[2]"></span>
                <div className="text-left flex-1 ml-4">{produto.valor}</div>
            </div>
            <p className="text-sm">{produto.descricao}</p>
        </div>
    );
}
