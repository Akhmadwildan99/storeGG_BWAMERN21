interface ButtonProps { 
    title: string;
}
export default function Button(props : ButtonProps) {
    const { title } = props
    return (
        <a className="btn btn-get text-lg text-white rounded-pill" href="#feature" role="button">
            {title}
        </a>
    );
}
