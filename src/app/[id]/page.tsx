import { axios  } from '@/utils/geral'
import Link from 'next/link'
import { notFound } from 'next/navigation'

type Produto = {
    seq: number,
    opt_cod_cliente: number,
    cod_produto : string,
    grupo: string
}
type Grupo = {
    opt_cod_cliente: number
    grupo: string
}

export default async function Conteudo(props: {
    params: {id: string}
}) {
    const ProdutosRequest = await axios<Produto[]>(
        `/Produtos/${props.params.id}`
    );
    const GrupoRequest = await axios<Grupo[]>(
        `/GruposProd/${props.params.id}`
    );
    const Produtos = ProdutosRequest.data;
    const Grupos = GrupoRequest.data;
    if (!(Produtos && Grupos)) return notFound();
    return <div className="flex items-center pt-10 size-full flex-col gap-4">
        {Grupos.map((grupo, index) => {
            return <Link href={`#${grupo.grupo}`} className="w-1/4 bg-botao p-4 hover:scale-110 transition-all duration-200 rounded-md" key={index}>
                {grupo.grupo}
            </Link>
        })}
    </div>
}