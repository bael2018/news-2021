import Footer from "./Components/Footer/Footer"
import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import cls from './App.module.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import { fire } from './Components/admin/firebase'

const App = () => {
    const [user , loading] = useAuthState(fire.auth());

    return (
        <section className={cls.body}>
            <Header/>
            <Main/>
            <Footer/>
        </section>
    )   
}

export default App