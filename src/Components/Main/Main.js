import { Route , Switch , Redirect } from 'react-router-dom'
import cls from './Main.module.css'
import General from '../pages/General'
import { useEffect, useState } from 'react'
import { getNews } from '../../Api'
import { arrayfunc } from '../ShortedFunc'
import NewPage from '../pages/NewPage'

const Main = () => {
    const [early , setEarly] = useState([])
    useEffect(() => {
        getNews('news.json' , '')
        .then(res => res.json())
        .then(r => {
            const data = arrayfunc(r)
            const filterArray = data.filter(item => item.view === 'before')
            const clicedArray = filterArray.slice(0. , 4)
            setEarly(clicedArray)
        })
    } , [])

    return (
        <section className={cls.container}>
            <Switch>
                <Route exact path='/' component={General}></Route>
                <Route path='/category/:id' component={NewPage}/>
                <Route path='/single/:cat' component={NewPage}/>
                <Route path="/category/:id">
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
                                    {item.view}
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