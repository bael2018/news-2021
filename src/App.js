import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import cls from './App.module.css'

const App = () => {
    return (
        <section className={cls.body}>
            <Header/>
            <Main/>
            <Footer/>
        </section>
    )   
}

export default App