import cls from './Profile.module.css'

const Profile = () => {
    return (
        <div className={cls.ownInfo}>
            <div className={cls.ownInfo_left}>
                <div className={cls.ownInfo_left_img}>
                    <img src='https://media.resources.festicket.com/www/artists/Marshmello_New2.jpg'/>
                </div>
                <h3>Marshmello</h3>
                <ul>
                    <li>
                        <span>Профиль</span>
                    </li>
                    <li>
                        <span>Читать позже</span>
                    </li>
                </ul>
            </div>  
            <div className={cls.ownInfo_right}>
                
            </div>                          
        </div>
    )
}

export default Profile