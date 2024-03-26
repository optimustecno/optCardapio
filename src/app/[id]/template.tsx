export default function TelasTemplate(props: React.PropsWithChildren) {
    return <div className="size-full">
        {props.children}
    </div>
}