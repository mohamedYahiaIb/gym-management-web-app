import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";

function LoginForm() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                icon={<Mail size={18} className="mt-1 text-gray-300" />}
            />

            
            <Input
                label="Password"
                value={password}
                type="password"
                onChange={setPassword}
                labelExtra={<a href="#" className="text-orange-400 text-[14px] hover:underline">Forgot password?</a>}
                placeholder="••••••••"
                icon={<Lock size={18} className="text-gray-300" />}
            />

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
