import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Portfolio from "./components/Portfolio"
import Services from "./components/Services"
import { ToastContainer } from 'react-toastify';


const App = () => {

  return (

    <div className="min-h-screen w-[80%] mx-auto">
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>

  )
}

export default App