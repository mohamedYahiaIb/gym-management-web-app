import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Check } from "lucide-react";

function LoginForm() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(email, password);
    } 


    return (
        <form onSubmit={handleSubmit}>
            <Input
                label="Email address"
                value={email}
                type="email"
                onChange={setEmail}
                placeholder="you@fitcorepro.com"
                icon={<Mail size={18} className="mt-1 text-gray-600" />}
            />
            
            <Input
                label="Password"
                value={password}
                type="password"
                onChange={setPassword}
                labelExtra={<a href="#" className="text-orange-400 text-[14px] hover:underline">Forgot password?</a>}
                placeholder="••••••••"
                icon={<Lock size={18} className="text-gray-600" />}
            />

            <div className="flex items-center gap-2 mb-3">
                <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className={`ml-1 w-4 h-4 appearance-none bg-gray-800 border border-gray-700 rounded checked:bg-gray-800 checked:border-orange-500 checked:bg-[${<Check />}] checked:bg-no-repeat checked:bg-center cursor-pointer`}
                />
                <label className="text-white pb-0.5">Remember me</label>
            </div>

            <Button
                type="submit"
                variant="primary"
            >
                Sign In
            </Button>
        </form>
    )
}

export default LoginForm;
