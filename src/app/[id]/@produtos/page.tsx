import { axios } from "@/utils/geral";
import clsx from "clsx";
import { notFound } from "next/navigation";
import type { Produto } from "@/types";
import { ProdutoItem } from "@/components/produto";
import { Grupo } from "@/components/grupo";

export default async function Produtos(props: { params: { id: string } }) {
    const ProdutosRequest = await axios<Produto[]>(
        `/Produtos/${props.params.id}`
    );
    const Produtos = ProdutosRequest.data;
    if (!Produtos) return notFound();
    const MapaProduto: { [key: string]: Produto[] } = {};
    for (const produto of Produtos) {
        // Mapeia cada produto para um grupo
        // usando um dicionario de listas
        MapaProduto[produto.grupo] = (
            MapaProduto[produto.grupo] || []
        ).concat([produto]);
    }
    return (
        <div className="flex items-center flex-col">
            {Object.entries(MapaProduto)
                .sort()
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
