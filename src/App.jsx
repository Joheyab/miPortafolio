import { NavBar } from "./Components/NavBar"
import { PortafolioLayout } from "./Components/PortafolioLayout"
function App() {

  return (
    <div className="App h-full w-full bg-black flex flex-col">
      <NavBar/>
      <PortafolioLayout/>
      <footer>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, officia. Impedit perferendis praesentium tempore repellat, fugiat facilis iusto repudiandae, aperiam illum laborum quos porro quidem repellendus debitis recusandae quasi ipsam?</p>
      </footer>
    </div>
  )
}

export default App
