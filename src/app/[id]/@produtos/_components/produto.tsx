import type { Produto } from "@/types";
import clsx from "clsx";

export function ProdutoItem({ produto }: { produto: Produto }) {
    return (
        <div
            className={clsx("", produto.destaque == "1" && "text-destaque")}
            key={produto.cod_produto}
        >
            <div className="flex w-full items-center">
                <h3 className="text-lg">{produto.produto}</h3>
                <span className="flex-1 border-b-1 border-gray border-dotted"></span>
                <div className="ml-4">{produto.valor}</div>
            </div>
            <p className="text-sm">{produto.descricao}</p>
        </div>
    );
}
