export default function TelasTemplate(props: React.PropsWithChildren) {
    return <div className="min-w-full min-h-full">
        {props.children}
    </div>
}