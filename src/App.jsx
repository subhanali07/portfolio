import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
function App() {

  return (
    <>
      <main className="bg-[#FFFBEF]">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
        
      </main>
    </>
  )
}
 
export default App
