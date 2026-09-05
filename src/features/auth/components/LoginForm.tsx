import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import React, { useState } from "react";
import { Mail, Lock, Check } from "lucide-react";

function LoginForm() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        console.log(email, password);
    } 

    return (
        <div className="w-2/3 mx-auto p-20 m-5">
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
                    <div className="relative w-4 h-4">
                    <input
                        type="checkbox"
                        checked={rememberMe}
                        onChange={() => setRememberMe(!rememberMe)}
                        className={`w-4 h-4 appearance-none bg-gray-800 border border-gray-700 rounded checked:bg-gray-800 checked:border-orange-500  checked:bg-no-repeat checked:bg-center cursor-pointer`}
                    />
                    
                        { rememberMe && (
                            <Check 
                                size={16}
                                strokeWidth={3}
                                className="absolute top-0.75 text-orange-500 pointer-events-none" 
                            />
                        )}
                    </div>
                    <label className="text-white pt-0.75">Keep me logged in</label>
                </div>

                <Button
                    type="submit"
                    variant="primary"
                >
                    Sign In
                </Button>
            </form>
            <hr className="border-t border-gray-800 w-full mx-auto my-7 " />
            <p className="text-white text-center">Don't have an account? <a href="#" className="text-orange-500 hover:underline">Create one</a></p>
        </div>
    )
}

export default LoginForm;
