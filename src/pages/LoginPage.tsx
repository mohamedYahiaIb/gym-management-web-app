import LoginForm from "../features/auth/components/LoginForm";
import BrandingPanel from "../features/auth/components/BrandingPanel";

function LoginPage() {
    return (
        <div className="w-full flex flex-row-reverse">
            <div className="w-full lg:w-1/2 flex flex-col px-6 pt-50">
                <p className="text-white font-medium font-sans text-4xl mb-2 pl-34">WELCOME BACK</p>
                <p className="text-gray-500 font-medium font-sans mb-5 pl-34">Sign in to your FitCore Pro</p>
                <LoginForm />
            </div>
            <div className="w-1/2 hidden lg:flex lg:w-1/2">
                <BrandingPanel />
            </div>
        </div>
    )
}

export default LoginPage;