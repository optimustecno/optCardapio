export type PerfilCardapio = {
    seq: number;
    opt_cod_cliente: number;
    cor_primaria: string;
    cor_secundaria: string;
    cor_destaque_prod: string;
    cor_fonte: string;
    cor_botao: string;
    logo_svg: null;
};

export type Produto = {
    seq: number,
    opt_cod_cliente: number
    cod_produto : string
    grupo : string
    produto : string
    descricao: string | null
    destaque : "0" | "1"
    valor : string
    ordem: string
}
export type Grupo = {
    opt_cod_cliente: number
    grupo: string
}