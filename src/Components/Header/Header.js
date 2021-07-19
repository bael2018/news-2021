import { NavLink } from "react-router-dom"
import cls from './Header.module.css'
import { FaSearch , FaBars } from 'react-icons/fa'
import {useState } from "react"
import { BiArrowBack , BiSearch , BiUserCircle} from 'react-icons/bi'
import './Anim.css'
import {fire , provider} from '../admin/firebase'
import { getNews } from "../../Api"
import {useAuthState} from 'react-firebase-hooks/auth'

const Header = () => {   
    const [search , setSearch] = useState('')
    const [searchArray , setSearchArray] = useState([])
    const showSearchBlock = e => {
        e.preventDefault()
    }

    const searchBTN = e => {
        e.preventDefault()
        getNews(`.json` , '')
        .then(res => res.json())
        .then(r => {
            const result =  Object.values(r).map(item => {
                return Object.values(item)
            })
            const el = []
            for(let i = 0; i < result.length; i++){
                for(let j = 0; j < result[i].length; j++){
                    el.push(result[i][j])
                }
            }
            const newEl = []
            const str = search.toUpperCase()
            for(let i = 1; i < el.length; i++){
                if(el[i].title.toUpperCase().includes(str)){
                    newEl.push(el[i])
                }
            }
            setSearchArray(newEl)
            setSearch('')
        })
    }
    const [el , setEl] = useState(false)
    const showEl = () => setEl(!el)
    const [pro , setPro] = useState(false)
    const showPro = () => setPro(!pro)
    const [user] = useAuthState(fire.auth());
    const signIn = e => {
        e.preventDefault()

        fire.auth().signInWithPopup(provider)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <>
            <section className={pro ? 'profile activeProfile' : 'profile'}>
                <div className={cls.profile_container}>
                    <div className={cls.profile_body}>
                        <div className={cls.profile_body_header}>
                            <span onClick={showPro} className={cls.profile_closed}>
                                <BiArrowBack/>
                            </span>
                        </div>

                        <div className={cls.profile_body_content}>
                            {
                                user ? (
                                    <div>
                                        
                                    </div>
                                ) : (
                                    <div className={cls.succssed}>
                                        <h3>Войти</h3>
                                        <img onClick={signIn} src="http://pngimg.com/uploads/google/google_PNG19644.png"/>
                                    </div>
                                )
                            }
                        </div>  
                    </div>
                </div>
            </section>
            <section className={el ? 'search active' : 'search'}>
                <div className={cls.search_block}>
                    <div className={cls.search_header}>
                        <input value={search} onChange={e => {
                            setSearch(e.target.value)
                        }} type='text' placeholder="Поиск"/>
                        <span onClick={searchBTN} className={cls.search_button}><BiSearch/></span>
                        <div onClick={showEl} className={cls.search_close}>x</div>
                    </div>

                    <div className={cls.search_body}>
                        {
                            searchArray.length !== 0 ? (
                                searchArray.map(item => {
                                    return (
                                    <div onClick={showSearchBlock} key={item.id} className={cls.search_body_inner}>
                                        <div>
                                            {item.hour}:{item.minuts}
                                        </div>
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>{item.info}</p>
                                        </div>
                                    </div>
                                    )
                                })
                            ) : (
                                <h2 className={cls.search_item}>
                                    Не найдено
                                </h2>
                            )
                        }
                    </div>
                </div>
            </section>
            <section className={cls.nav}>
                <div className={cls.nav_inner , cls.nav_inner_upper}>
                    <div>
                        <ul>
                            <li className={cls.nav_logo}>
                                <NavLink className={cls.nav_logo_icon} to='/'>
                                    NEWS
                                </NavLink>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <FaSearch onClick={showEl}/>
                            </li>
                            <li>
                                <BiUserCircle onClick={showPro}/>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={cls.nav_inner , cls.nav_inner_lower}>
                    <div>
                        <ul>
                            <li>
                                <NavLink exact activeClassName={cls.active} to='/politic'>
                                    Политика
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName={cls.active} to='/ecology'>
                                    Экономика
                                </NavLink>      
                            </li>
                            <li>
                                <NavLink exact activeClassName={cls.active} to='/public'>
                                    Общество
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName={cls.active} to='/tourism'>
                                    Туризм
                                </NavLink> 
                            </li>
                            <li>
                                <NavLink exact activeClassName={cls.active} to='/world'>
                                    Мир
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName={cls.active} to='/science'>
                                    События
                                </NavLink>
                            </li>
                            <li>
                                <NavLink exact activeClassName={cls.active} to='/sport'>
                                    Спорт
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Header