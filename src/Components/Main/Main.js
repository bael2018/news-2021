import { Route , Switch , Redirect } from 'react-router-dom'
import cls from './Main.module.css'
import Politic from '../pages/Politic/Politic'
import Economy from '../pages/Economy/Economy'
import Public from '../pages/People/Public'
import Tourism from '../pages/Tourism/Tourism'
import World from '../pages/World/World'
import Science from '../pages/Science/Science'
import Sport from '../pages/Sport/Sport'
import General from '../pages/General/General'
import { useEffect, useState } from 'react'
import { getNews } from '../../Api'

const Main = () => {
    const [early , setEarly] = useState([])
    useEffect(() => {
        getNews('earlier' , '.json')
        .then(res => res.json())
        .then(r => {
            const data = Object.entries(r).map(item => {
                const id = item[0];
                return {
                    ...item[1],
                    id
                }
            })

            const clicedArray = data.slice(0. , 4)
            setEarly(clicedArray)
        })
    } , [])

    return (
        <section className={cls.container}>
            <Switch>
                <Route exact path='/' component={General}></Route>
                <Route path='/politic' component={Politic}></Route>
                <Route path='/ecology' component={Economy}></Route>
                <Route path='/public' component={Public}></Route>
                <Route path='/tourism' component={Tourism}></Route>
                <Route path='/world' component={World}></Route>
                <Route path='/science' component={Science}></Route>
                <Route path='/sport' component={Sport}></Route>
                <Route path="/error">
                    <h2>Something went wrong Try Later</h2>
                </Route>
                <Redirect to='/error'/>
            </Switch>
            <div className={cls.recent_news}>
                <div className={cls.recent_news_header}>
                    <h1>Ранее</h1>
                </div>
                <div className={cls.recent_news_body}>
                    {
                        early.length !== 0 ? (
                            early.map(item => {
                                return <div key={item.id} className={cls.recent_news_body_child}>
                                <span>
                                    Категория
                                </span>
                                <img src={item.img}/>
                                <h2>{item.title}</h2>
                            </div>
                            })
                        ) : (
                            null
                        )
                    }                            
                </div>
            </div>
        </section>
    )
}

export default Main