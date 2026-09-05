import { Dumbbell } from "lucide-react";
import StatCard from "../../../components/ui/StatCard";

function BrandingPanel() {

    return(
        <div
            className="w-full flex flex-col gap-2 p-12 h-screen bg-linear-to-br from-orange-950/40 via-gray-900 to-gray-950"
        >
            <div className="flex flex-row items-center gap-2">

                <div className="bg-orange-500 p-2 rounded-lg">
                    <Dumbbell className="text-white -scale-x-100" size={20} />
                </div>

                <p className="text-white font-medium font-sans ">FitCore Pro</p>
            </div>

            <div className="mb-5">
                <p className="text-white font-medium text-[33px] mb-5">MANAGE YOUR GYM WITH CONFIDENCE.</p>
                <p className="text-gray-500 text-justify">Everything you need to run a professional gym members, trainers, attendance, and revenue in one place.</p>
            </div>

            <div className="w-full flex flex-row gap-4 mb-4">
                <StatCard value="+152" label="Active members" />
                <StatCard value="+50,000 DZD" label="Monthly revenue" />
                <StatCard value="+52" label="Daily check-ins" />
            </div>

            <div className="w-3/4 bg-gray-800/20 border border-gray-600 rounded-lg p-6">
                <p className="text-gray-400 mb-4">"FitCore Pro transformed how we manage our gym. Member retention is up 22% and our staff saves hours every week."</p>
                <div className="flex flex-row items-center gap-2">
                    <div className="flex items-center justify-center bg-orange-500 w-8 h-8 rounded-full text-white font-medium text-[14px]">JM</div>
                    <div>
                        <p className="text-white text-[15px] font-medium">James Mitchell</p>
                        <p className="text-gray-400 font-light text-[14px]">Owner, Iron Peak Fitness</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BrandingPanel;