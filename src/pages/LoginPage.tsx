import LoginForm from "../features/auth/components/LoginForm";
import BrandingPanel from "../features/auth/components/BrandingPanel";

function LoginPage() {
    return (
        <div className="flex flex-row-reverse">
                
            <LoginForm />
            
            <BrandingPanel />
        </div>
    )
}

export default LoginPage;