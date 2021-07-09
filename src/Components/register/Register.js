import cls from './Register.module.css'

const Register = () => {
    const [register , setRegister] = useState(false)
    const changeRegister = () => setRegister(!register)

    return (
        <>
            {
                register ? (
                    <div className={cls.register_container}>
                    <h3>Регистрация</h3>
                    <form action='address'>
                        <div>
                            <input placeholder='Имя пользователя' type='email'/>
                        </div>
                        <div>
                            <input placeholder='Электронная почта' type='email'/>
                        </div>
                        <div>
                            <input placeholder='Пароль' type='password'/>
                        </div>
                        <input className={cls.profile_submitBtn} value='Подтвердить' type='submit'/>
                    </form>
                    <div className={cls.register_footer}>
                        <div>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/600px-Instagram_logo_2016.svg.png'/>
                            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'/>
                            <img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'/>
                        </div>
                        <p>Уже есть аккунт? - <span onClick={changeRegister}>Войти</span></p>
                    </div>
                </div>
                ) : (
                <div className={cls.profile_body_content_child}>
                    <h3>Войти</h3>
                    <form action='address'>
                        <div>
                            <input placeholder='Электронная почта или имя пользователя' type='email'/>
                        </div>
                        <div>
                            <input placeholder='Пароль' type='password'/>
                        </div>
                        <input className={cls.profile_submitBtn} value='Подтвердить' type='submit'/>
                    </form>
                    <div className={cls.profile_body_content_child_div}>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/600px-Instagram_logo_2016.svg.png'/>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png'/>
                        <img src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png'/>
                    </div>
                    <div className={cls.profile_body_content_child_footer}>
                        <p>Все еще не зарегистрировались?</p>
                        <span onClick={changeRegister}>Регистрация</span>
                    </div>
                </div> 
                )
            } 
        </>
    )
}


export default Register