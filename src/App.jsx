import {useState} from 'react'
import NavBar from "./components/NavBar.jsx";
import Banner from "./components/Banner.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <div id="App">
            <NavBar/>
            <Banner/>
        </div>
    )
}

export default App
