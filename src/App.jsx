import {useState} from 'react'
import NavBar from "./components/NavBar.jsx";
import Banner from "./components/Banner.jsx";
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

function App() {
    const [count, setCount] = useState(0)

    return (
        <div id="App">
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default App
