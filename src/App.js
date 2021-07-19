import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import cls from './App.module.css'
import { useEffect } from "react"

const App = () => {
    useEffect(() => {
        fetch('https://news-ea06e-default-rtdb.asia-southeast1.firebasedatabase.app/news.json' , {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(r => console.log(r))
    }, [])

    return (
        <section className={cls.body}>
            <Header/>
            <Main/>
            <Footer/>
        </section>
    )   
}

export default App