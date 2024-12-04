import Image from "next/image";

export default async function Capa(props: { params: { id: string } }) {
    return (
        <div className="flex items-center justify-center size-full" id="inicio">
            <div className="w-[50vw] h-[50vh] relative mt-48">
                <Image src={`/Logos/${(await props.params).id}.svg`} alt="" fill />
            </div>
        </div>
    );
}
