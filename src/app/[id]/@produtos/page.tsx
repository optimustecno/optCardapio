import { axios } from "@/utils/geral";
import clsx from "clsx";
import { notFound } from "next/navigation";
import type { Produto } from "@/types";
import { ProdutoItem } from "@/components/produto";
import { Grupo } from "@/components/grupo";

export default async function Produtos(props: { params: { id: string } }) {
    const ProdutosRequest = await axios<Produto[]>(
        `/ProdutosCardapio/${(await props.params).id}`
    ).catch((err) => {
        console.log("Error")
        console.error(err);
        notFound();
    });
    const Produtos = ProdutosRequest.data;
    if (!Produtos) {
        console.log("Nenhum produto encontrado");
        return notFound()
    };
    const MapaProduto: { [key: string]: Produto[] } = {};
    for (const produto of Produtos) {
        // Mapeia cada produto para um grupo
        // usando um dicionario de listas
        MapaProduto[produto.grupo] = (MapaProduto[produto.grupo] || []).concat([
            produto,
        ]);
    }
    return (
        <div className="flex items-center flex-col min-h-full min-w-full">
            {Object.entries(MapaProduto)
                .map(([grupo, produtos]) => {
                    return (
                        <Grupo grupo={grupo} key={grupo}>
                            {produtos.map((produto) => {
                                return (
                                    <ProdutoItem
                                        produto={produto}
                                        key={+produto.ordem}
                                    />
                                );
                            })}
                        </Grupo>
                    );
                })}
        </div>
    );
}
