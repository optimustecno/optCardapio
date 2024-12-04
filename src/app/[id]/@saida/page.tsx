import Image from "next/image";
export default async function Capa(props: { params: { id: string } }) {
    return (
        <div className="flex items-center justify-center size-full" id="saida">
            <div className="w-[60vw] h-[30vh] max-md:min-w-[80%] max-md:min-h-[80%] relative mt-52 flex flex-col gap-8">
                <div className="w-full h-full relative">
                    <Image
                        src={`/Logos/${(await props.params).id}.svg`}
                        alt=""
                        fill
                    />
                </div>
                <a
                    href={"https://www.optimusinttec.com.br/"}
                    target="_blank"
                    className="text-sm text-center text-destaque font-bold "
                >
                    Desenvolvido por
                    <br />
                    Optimus Inteligência & Tecnologia
                </a>
            </div>
        </div>
    );
}
