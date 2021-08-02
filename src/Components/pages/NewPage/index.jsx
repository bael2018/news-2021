import cls from './NewPage.module.css'
import { AiOutlineDown , AiOutlineLike } from 'react-icons/ai'
import { CgCalendarDates } from 'react-icons/cg'
import { useEffect, useState } from 'react'
import './NewPage.css'
import { FaComments } from 'react-icons/fa'
import { MdPlaylistAdd } from 'react-icons/md'
import { BiArrowBack , BiSearch} from 'react-icons/bi'
import { getNews } from '../../../Api'
import Loader from '../../Loader'
import { useParams } from 'react-router-dom'

const NewPage = () => {
    const [cat , setCat] = useState(false)
    const showCat = () => setCat(!cat)
    const [chat , setChat] = useState(false)
    const showChat = () => setChat(!chat)
    const [singleNew , setSingleNew] = useState(false)
    const changePageToSingle = () => setSingleNew(!singleNew)
    const [arr , setArr] = useState([])
    const [singleArr , setSingleArr] = useState([])
    const [loading , setLoading] = useState(false)

    const {id} = useParams()
    
    const singleCard = e => {
        console.log(e);
        getNews(`news.json` , ``)
        .then(res => res.json() , setLoading(true))
        .then(r => {
            setLoading(false)
            const singleData = Object.values(r)
            const singleNew = singleData.filter(item => item.id === e)
            setSingleArr(singleNew)
        })
        changePageToSingle()
    }

    useEffect(() => {
        getNews(`news.json` , '' , '')
        .then(res => res.json() , setLoading(true))
        .then(r => {
            setLoading(false)
            if(r !== null){
                const data = Object.entries(r).map(item => {
                    const id = item[0];
                    return {
                        ...item[1],
                        accept: id
                    }
                })
                const filteredArray = data.filter(item => item.view === id)
                console.log(filteredArray);
                setArr(filteredArray)
            }else{
                return
            }
        })
    }, [id])
    
    const heartBtn = e => {
        console.log(e);
    }

    return (
        <div className={cls.component_container}>
            <div className={cls.component_body}>
                {
                    !singleNew ? (
                        <div className={cls.component_header}>
                            <div className={cls.component_title}>
                                <h2>{id}</h2>
                            </div>
                            <div className={cls.component_filter}>
                                <span onClick={showCat}>
                                    Недавние
                                    <AiOutlineDown/>
        
                                    <div className={cat ? 'activecat' : null}>
                                        <ul>
                                            <li>
                                                за неделю
                                            </li>
                                            <li>
                                                за месяц
                                            </li>
                                        </ul>
                                    </div>
                                </span>
                            </div>
                        </div>
                    ) : (
                        null
                    )
                }
                {
                    !singleNew ? (
                       loading ? <Loader/> : (
                        arr.map(item => {
                            return (
                                item.info.length > 250 ? (
                                    <div key={item.id} className={cls.component_child}>
                                        <div className={cls.component_child_picture}>
                                            <img src={item.img}/>
                                        </div>
                                        <div className={cls.component_child_body , cls.component_child_body_active}>
                                            <span><CgCalendarDates/>{item.hour}:{item.minuts}</span>
                                            <h2 id={item.id} onClick={() => singleCard(item.id)}>
                                                {item.title}
                                            </h2>
                                            <p className={cls.component_child_body_p}>
                                                {item.info}
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div key={item.id} className={cls.component_child}>
                                        <div className={cls.component_child_picture}>
                                            <img src={item.img}/>
                                        </div>
                                        <div className={cls.component_child_body}>
                                            <span><CgCalendarDates/>{item.hour}:{item.minuts}</span>
                                            <h2 id={item.id} onClick={() => singleCard(item.id)}>
                                                {item.title}
                                            </h2>
                                            <p>
                                                {item.info}
                                            </p>
                                        </div>
                                    </div>
                                )
                            )
                        })
                       )
                    ) : (
                        <>
                            <div className={cls.single_card}>
                                {
                                   loading ? (
                                        <Loader/>
                                   ) : (
                                        singleArr.map(item => 
                                            <div key={item.id} className={cls.single_card_left}>
                                                <img className={cls.single_card_left_picture} src={item.img}/>
                                                <div className={cls.single_card_left_body}>
                                                    <span><CgCalendarDates/>{item.hour}:{item.minuts}</span>
                                                    <h2>{item.title}</h2>
                                                    <p>
                                                        {item.info}
                                                    </p>
                                                </div>
                                                <div className={cls.single_card_left_footer}>
                                                    <div>
                                                        <span>
                                                            {item.isLiked}
                                                            <AiOutlineLike onClick={() => heartBtn(item.accept)} />
                                                        </span>
                                                        |
                                                        <span>
                                                            <MdPlaylistAdd/>
                                                        </span>
                                                    </div>
                        
                                                    <span onClick={showChat} className={cls.single_card_left_footer_chat}>
                                                        Комментарии
                                                        <FaComments/>
                                                    </span>
                                                </div>
                                            </div>
                                        )
                                   )
                                }
                                <div className={cls.single_card_right}>
                                    <h3>Рекомендуем</h3>
        
                                    <div className={cls.single_card_right_content}>
                                        <div className={cls.single_card_right_content_inner}>
                                            <img src='https://cdn24.img.ria.ru/images/07e5/06/10/1737247644_0:0:2928:1648_1920x0_80_0_0_ca605f6f7907e9bfa16667a78a722d74.jpg'/>
                                            <h3>Путин стал президетом мира</h3>
                                        </div>
                                        <div className={cls.single_card_right_content_inner}>
                                            <img src='https://triplook.me/media/resorts/photo/8/d/377.jpg'/>
                                            <h3>Путин стал президетом мира</h3>
                                        </div>
                                        <div className={cls.single_card_right_content_inner}>
                                            <img src='https://errin.eu/sites/default/files/2020-04/Demand-driven%20ePitching%20session%20facilitated%20by%20the%20EIC%20to%20fight%20COVID-19_2020-04-06_4883.png'/>
                                            <h3>Путин стал президетом мира</h3>
                                        </div>
                                        <div className={cls.single_card_right_content_inner}>
                                            <img src='https://static.dw.com/image/52699780_401.jpg'/>
                                            <h3>Путин стал президетом мира</h3>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                            <div className={chat ? 'chat activeChat' : 'chat'}>
                                <div className={cls.comment}>
                                <div className={cls.comment_header}>
                                    <span onClick={showChat}>
                                        <BiArrowBack/>
                                    </span>
                                    <div>
                                        Учащиеся 10-11 классов поедут в Америку !
                                    </div>
                                </div>
                                <div className={cls.comment_body}>
                            
                                <div className={cls.comment_body_unknown}>
                                        <div className={cls.comment_body_unknown_header}>
                                            <img src='https://dz9yg0snnohlc.cloudfront.net/cro-spotting-a-duchenne-smile-how-to-identify-a-genuine-smile-1.jpg'/>
                                            <h3>Jane Foster</h3>
                                        </div>
                                        <div className={cls.comment_body_unknown_body}>
                                            <p>
                                                Флагманский сайт медиагруппы "Россия сегодня" — Ria.ru — стал первым из новостных ресурсов рунета, вошедших в топ-20 интернет-проектов декабря согласно данным компании Mediascope*. Помимо новостных интернет-порталов, по данным Mediascope, пользователи Рунета чаще всего посещают поисковые ресурсы, социальные сети и онлайн-магазины. В первой пятерке находятся неизменные лидеры рейтинга — Google, Яндекс, YouTube, ВКонтакте и Mail.ru. Флагман РИА Новости сохранил статус самого посещаемого среди россиян новостного СМИ, обогнав Rbc.ru почти на 350 тысяч и Kp.ru на 550 тысяч посетителей. Ранее, в ноябре.
                                            </p>
                                            <span>22:46</span>
                                        </div>
                                    </div>

                                    <div className={cls.comment_body_known}>
                                            <div className={cls.comment_body_known_header}>
                                                    <h3>Nicole Kidman</h3>
                                                    <img src='https://k6a4u2u9.rocketcdn.me/wp-content/uploads/2017/12/woman-smiling-face-with-curly-hair_1139-582-1030x686.jpg'/>
                                                </div>
                                                <div className={cls.comment_body_known_body}>
                                                    <p>
                                                        Флагманский сайт медиагруппы "Россия сегодня" — Ria.ru — стал первым из новостных ресурсов рунета, вошедших в топ-20 интернет-проектов декабря согласно данным компании Mediascope*. Помимо новостных интернет-порталов, по данным Mediascope, пользователи Рунета чаще всего посещают поисковые ресурсы, социальные сети и онлайн-магазины. В первой пятерке находятся неизменные лидеры рейтинга — Google, Яндекс, YouTube, ВКонтакте и Mail.ru. Флагман РИА Новости сохранил статус самого посещаемого среди россиян новостного СМИ, обогнав Rbc.ru почти на 350 тысяч и Kp.ru на 550 тысяч посетителей. Ранее, в ноябре.
                                                    </p>
                                                    <span>22:46</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cls.comment_footer}>
                                            <input type='text' placeholder='Комментарий'/>
                                            <BiSearch/>
                                        </div>
                                    </div>
                                </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default NewPage