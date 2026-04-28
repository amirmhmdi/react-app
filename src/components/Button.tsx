interface probs
{
    children: string;
    color?: "primary" | "secondary";
    onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: probs) =>
{
    return <div className={"btn btn-" + color} onClick={onClick}>{children}</div>;
};

export default Button;
