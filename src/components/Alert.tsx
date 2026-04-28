import { ReactNode } from "react";

interface probs
{
    children: ReactNode;
    onClick: () => void;
}

const Alert = ({ children, onClick}: probs) =>
{
    return <div className="alert alert-warning alert-dismissible fade show">
        {children}
        <button className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClick}> </button>
    </div>;
};

export default Alert;
