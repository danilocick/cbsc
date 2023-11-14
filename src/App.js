import { Routes, Route } from "react-router-dom"

import Team from "./component/Team"
import Main from "./component/Main"

const App = () => {
  return (
 
    <div className="App">
      <Routes>
        <Route path="/cbsc" element={ <Main /> } />
        <Route path="/team" element={ <Team /> } />
      </Routes>
    </div>
  )
}

export default App