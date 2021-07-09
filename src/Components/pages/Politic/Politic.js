import cls from './Politic.module.css'
import { AiOutlineDown , AiOutlineLike } from 'react-icons/ai'
import { CgCalendarDates } from 'react-icons/cg'
import { FiEye , } from 'react-icons/fi'
import { useState } from 'react'
import './Politic.css'
import { FaComments } from 'react-icons/fa'
import { MdPlaylistAdd } from 'react-icons/md'
import { BiArrowBack , BiSearch} from 'react-icons/bi'

const Politic = () => {
    const [cat , setCat] = useState(false)
    const showCat = () => setCat(!cat)

    const [chat , setChat] = useState(false)
    const showChat = () => setChat(!chat)

    return (
        <div className={cls.component_container}>
            {/* <div className={cls.component_header}>
                <div className={cls.component_title}>
                    <h2>Политика</h2>
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
                                <li>
                                    за год
                                </li>
                            </ul>
                        </div>
                    </span>
                </div>
            </div> */}

            <div className={cls.component_body}>

                {/* <div className={cls.component_child}>
                    <div className={cls.component_child_picture}>
                        <img src='https://ca-times.brightspotcdn.com/dims4/default/6e16b4f/2147483647/strip/true/crop/5713x3809+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F36%2F1f%2F7380b1f549f687a6c28e6a763db7%2Fepa-rex-mask-giveaway-in-hong-kong-amid-10550487f.JPG '/>
                    </div>
                    <div className={cls.component_child_body}>
                        <span><CgCalendarDates/>21:40</span>
                        <h2>
                            Пришельцы напали на планету Землю! Спасайтесь
                        </h2>
                        <p>
                            Решение о возобновлении авиасообщения с Турцией было принято в конце прошлой недели оперативным штабом по предупреждению завоза и распространения новой коронавирусной инфекции на территории Российской Федерации.
                        </p>
                    </div>
                    <div className={cls.component_child_footer}>
                        <span><FiEye/> 45</span>
                    </div>     
                </div>

                <div className={cls.component_child}>
                    <div className={cls.component_child_picture}>
                        <img src='https://s.abcnews.com/images/US/new-york-reopening-ap-jt-200608_hpMain_16x9_992.jpg '/>
                    </div>
                    <div className={cls.component_child_body}>
                        <span><CgCalendarDates/>11:40</span>
                        <h2>
                            Пришельцы напали на планету Землю! Спасайтесь
                        </h2>
                        <p>
                            Решение о возобновлении авиасообщения с Турцией было принято в конце  распространения новой коронавирусной инфекции на территории Российской Федерации.
                        </p>
                    </div>
                    <div className={cls.component_child_footer}>
                        <span><FiEye/> 345</span>
                    </div> 
                </div>

                <div className={cls.component_child}>
                    <div className={cls.component_child_picture}>
                        <img src='https://ca-times.brightspotcdn.com/dims4/default/6e16b4f/2147483647/strip/true/crop/5713x3809+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F36%2F1f%2F7380b1f549f687a6c28e6a763db7%2Fepa-rex-mask-giveaway-in-hong-kong-amid-10550487f.JPG '/>
                    </div>
                    <div className={cls.component_child_body}>
                        <span><CgCalendarDates/>21:40</span>
                        <h2>
                            Пришельцы напали на планету Землю! Спасайтесь
                        </h2>
                        <p>
                            Решение о возобновлении авиасообщения с Турцией было принято в конце прошлой недели оперативным штабом по предупреждению завоза и распространения новой коронавирусной инфекции на территории Российской Федерации.
                        </p>
                    </div>
                    <div className={cls.component_child_footer}>
                        <span><FiEye/> 5</span>
                    </div>     
                </div>

                <div className={cls.component_child}>
                    <div className={cls.component_child_picture}>
                        <img src='https://ca-times.brightspotcdn.com/dims4/default/6e16b4f/2147483647/strip/true/crop/5713x3809+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F36%2F1f%2F7380b1f549f687a6c28e6a763db7%2Fepa-rex-mask-giveaway-in-hong-kong-amid-10550487f.JPG '/>
                    </div>
                    <div className={cls.component_child_body}>
                        <span><CgCalendarDates/>21:40</span>
                        <h2>
                            Пришельцы напали на планету Землю! Спасайтесь
                        </h2>
                        <p>
                            Решение о возобновлении авиасообщения с Турцией было принято в конце прошлой недели оперативным штабом по предупреждению завоза и распространения новой коронавирусной инфекции на территории Российской Федерации.
                        </p>
                    </div>
                    <div className={cls.component_child_footer}>
                        <span><FiEye/> 5</span>
                    </div>     
                </div> */}

                <div className={cls.single_card}>
                    <div className={cls.single_card_left}>
                        <img className={cls.single_card_left_picture} src='https://d2v9ipibika81v.cloudfront.net/uploads/sites/46/61233006_2295748420679598_5816438780340469760_n-960x684.jpg'/>
                        <div className={cls.single_card_left_body}>
                            <span><CgCalendarDates/>21:40</span>
                            <h2>Учащиеся 10-11 классов поедут в Америку</h2>
                            <p>
                                Решение о возобновлении авиасообщения с Турцией было принято в конце прошлой недели оперативным штабом по предупреждению завоза и распространения новой коронавирусной инфекции на территории Российской Федерации.
                                Решение о возобновлении авиасообщения с Турцией было принято в конце прошлой недели оперативным штабом по предупреждению завоза и распространения новой коронавирусной инфекции на территории Российской Федерации.
                                Решение о возобновлении авиасообщения с Турцией было принято в конце прошлой недели оперативным штабом по предупреждению завоза и распространения новой коронавирусной инфекции на территории Российской Федерации.
                                Решение о возобновлении авиасообщения с Турцией было принято в конце прошлой недели оперативным штабом по предупреждению завоза и распространения новой коронавирусной инфекции на территории Российской Федерации.
                                Решение о возобновлении авиасообщения с Турцией было принято в конце прошлой недели оперативным штабом по предупреждению завоза и распространения новой коронавирусной инфекции на территории Российской Федерации.
                            </p>
                        </div>
                        <div className={cls.single_card_left_footer}>
                            <div>
                                <span>
                                    45
                                    <AiOutlineLike/>
                                </span>
                                |
                                <span>
                                    <MdPlaylistAdd/>
                                </span>
                            </div>

                            <span onClick={showChat} className={cls.single_card_left_footer_chat}>
                                Комментарии
                                <span>45</span>
                                <FaComments/>
                            </span>
                        </div>
                    </div>

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
            </div>

            <div className={cls.component_footer}>
                
            </div>
        </div>
    )
}

export default Politic