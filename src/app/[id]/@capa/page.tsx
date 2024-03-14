import Image from "next/image";
export default function Capa(props: { params: { id: string } }) {
    return (
        <div className="flex items-center justify-center size-full" id="inicio">
            <div className="w-[50vw] h-[50vh] relative">
                <Image src={`/Logos/${props.params.id}.svg`} alt="" fill />
            </div>
        </div>
    );
}
