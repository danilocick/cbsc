import { Routes, Route } from "react-router-dom"

import PreminiA from "./views/PreminiA"
import Main from "./component/Main"

const App = () => {
  return (
 
    <div className="App">
      <Routes>
        <Route path="/cbsc" element={ <Main /> } />
        <Route path="/preminia" element={ < PreminiA/> } />
        // <Route path="/preminib" element={ < /> } />
        // <Route path="/minia" element={ < /> } />
        // <Route path="/minib" element={ < /> } />
        // <Route path="/preinfantil" element={ < /> } />
        // <Route path="/infantilfem" element={ < /> } />
        // <Route path="/infantilmasc" element={ < /> } />
        // <Route path="/cadeteb" element={ < /> } />
        // <Route path="/cadetea" element={ < /> } />
        // <Route path="/juniorb" element={ < /> } />
        // <Route path="/juniora" element={ < /> } />
        // <Route path="/seniorc" element={ < /> } />
        // <Route path="/seniorb" element={ < /> } />
        // <Route path="/seniorvermell" element={ < /> } />
        // <Route path="/seniora" element={ < /> } />
      </Routes>
    </div>
  )
}

export default App