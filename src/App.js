import { Routes, Route } from "react-router-dom"

import PreminiA from "./views/PreminiA"
import Main from "./component/Main"

const App = () => {
  return (
 
    <div className="App">
      <Routes>
        <Route path="/cbsc" element={ <Main /> } />
        <Route path="/preminia" element={ < PreminiA/> } />
        <Route path="/preminib" element={ < PreminiA/> } />
        <Route path="/minia" element={ < PreminiA/> } />
        <Route path="/minib" element={ < PreminiA/> } />
        <Route path="/preinfantil" element={ < PreminiA/> } />
        <Route path="/infantilfem" element={ < PreminiA/> } />
        <Route path="/infantilmasc" element={ < PreminiA/> } />
        <Route path="/cadeteb" element={ < PreminiA/> } />
        <Route path="/cadetea" element={ < PreminiA/> } />
        <Route path="/juniorb" element={ < PreminiA/> } />
        <Route path="/juniora" element={ < PreminiA/> } />
        <Route path="/seniorc" element={ < PreminiA/> } />
        <Route path="/seniorb" element={ < PreminiA/> } />
        <Route path="/seniorvermell" element={ < PreminiA/> } />
        <Route path="/seniora" element={ < PreminiA/> } />
      </Routes>
    </div>
  )
}

export default App