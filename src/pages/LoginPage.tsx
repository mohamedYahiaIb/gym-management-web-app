import LoginForm from "../features/auth/components/LoginForm";
import BrandingPanel from "../features/auth/components/BrandingPanel";

function LoginPage() {
    return (
        <div className="w-full flex flex-row-reverse">
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
                <LoginForm />
            </div>
            <div className="w-1/2 hidden lg:flex lg:w-1/2">
                <BrandingPanel />
            </div>
        </div>
    )
}

export default LoginPage;