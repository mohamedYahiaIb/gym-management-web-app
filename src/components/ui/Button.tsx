interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: "button" | "submit";
    variant?: "primary" | "secondary";
}

function Button({ children, onClick, type = "button", variant = "primary" }: ButtonProps) {

    const buttonClasses = variant === "primary" ? "w-full py-2 rounded-md font-semibold bg-orange-400/90 text-black hover:bg-orange-400/75" : "w-full py-2 rounded-md font-semibold bg-gray-200 text-gray-800 hover:bg-gray-300";

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