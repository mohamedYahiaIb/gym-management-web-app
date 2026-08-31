interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
}

function Button({ children, onClick, type = "button", variant = "primary" }: ButtonProps) {

    const buttonClasses = variant === "primary" ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-gray-200 text-gray-800 hover:bg-gray-300";

    return (
        
        <button
            type={type}
            onClick={onClick}
            className={buttonClasses}
        >
            {children}
        </button>
        
    )
}

export default Button;