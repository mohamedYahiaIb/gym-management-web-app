interface InputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

function Input({ label, type = "text", value, onChange, placeholder }: InputProps) {
    return (
        <div className="mb-4">
            <label className="block text-sm font font-medium text-gray-200 mb-1">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full px-3 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-300"
            />
        </div>
    )
}

export default Input;