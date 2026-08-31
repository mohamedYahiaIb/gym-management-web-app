import Input from "../../../components/ui/Input";
import Button from "../../../components/ui/Button";
import React, { useState } from "react";

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
                label="Email"
                value={email}
                type="email"
                onChange={setEmail}
                placeholder="you@fitcorepro.com"
            />

            <Input
                label="Password"
                value={password}
                type="password"
                onChange={setPassword}
                placeholder="••••••••"
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

