import RoleCard from "./components/ui/RoleCard";
import { Trophy, ChevronRight } from "lucide-react";



function App() {

  console.log("hello")
  return (
    <>
      <div>
          <RoleCard
            icon={<Trophy size={22} />}
            title="Athlete"
            description="Cogito ergo sum"
            labelExtra={<ChevronRight size={15} />}
          />
      </div>
    </>
  )
}

export default App;