
import type React from "react";
import { useState } from "react";


interface InputProps {
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    labelExtra?: React.ReactNode;
    icon?: React.ReactNode;
}

function Input({ label, type = "text", value, onChange, placeholder, labelExtra, icon }: InputProps) {
    
    const [showPassword, setShowPassword] = useState(false);
    const actualType = showPassword ? "text" : type;


    return (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <label className="block text-sm font font-medium text-gray-200 mb-1">{label}</label>
                {labelExtra}
            </div>

            <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2">
                    {icon}
                </span>

                <input
                    type={actualType}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    className="w-full pl-10 px-3 py-2 bg-[#13131c] text-gray-200 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300"
                />
            </div>

        </div>
    )
}

export default Input;