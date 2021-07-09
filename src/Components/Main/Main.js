import { Route , Switch , Redirect } from 'react-router-dom'
import cls from './Main.module.css'
import Politic from '../pages/Politic/Politic'
import Economy from '../pages/Economy/Economy'
import Public from '../pages/People/Public'
import Tourism from '../pages/Tourism/Tourism'
import World from '../pages/World/World'
import Science from '../pages/Science/Science'
import Sport from '../pages/Sport/Sport'
import Weather from '../pages/Weather/Weaher'   
import General from '../pages/General/General'

const Main = () => {
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
                <Route path='/weather' component={Weather}></Route>
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
                    <div className={cls.recent_news_body_child}>
                        <span>
                            События
                        </span>
                        <img src='https://www.techrepublic.com/a/hub/i/r/2019/08/06/53468105-5f4b-45dc-b51d-9c901a348849/resize/1200x/11c5f180724798e54b70230c844a129a/istock-1036557452.jpg'/>
                        <h2>Велогонщики массово упали из-за болельщика</h2>
                    </div>
                    <div className={cls.recent_news_body_child}>
                        <span>
                            Экономика
                        </span>
                        <img src='https://st2.depositphotos.com/4296911/9108/i/600/depositphotos_91087856-stock-photo-the-urban-landscape-of-large.jpg'/>
                        <h2>Велогонщики массово упали из-за болельщика</h2>
                    </div>  
                    <div className={cls.recent_news_body_child}>
                        <span>
                            Туризм
                        </span>
                        <img src='https://files.guidedanmark.org/files/483/259449_Tiger_i_Aalborg_Zoo.jpg?width=1024'/>
                        <h2>Велогонщики массово упали из-за болельщика</h2>
                    </div>  
                    <div className={cls.recent_news_body_child}>
                        <span>
                            События
                        </span>
                        <img src='https://www.ctvnews.ca/polopoly_fs/1.4129667.1539264370!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg'/>
                        <h2>Велогонщики массово упали из-за болельщика</h2>
                    </div>  
                </div>
            </div>
        </section>
    )
}

export default Main