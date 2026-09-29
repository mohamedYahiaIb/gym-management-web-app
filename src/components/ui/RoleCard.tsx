import { Link } from "react-router-dom";

interface RoleCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
    labelExtra?: React.ReactNode;
}

function RoleCard ({ title, description, icon, labelExtra }: RoleCardProps) {
    return (
        
            <div className="min-w-auto flex border border-gray-700 rounded-lg p-4 m-1">

                <div className="m-2 bg-amber-600/60 rounded-lg p-3">
                    {icon}
                </div>

                <div>
                    <div className="text-white pt-1">
                        {title}
                    </div>
                    <div className="text-gray-500">
                        {description}
                    </div>
                </div>
                {labelExtra}

            </div>
        
    )
}

export default RoleCard;