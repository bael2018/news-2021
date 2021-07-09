import cls from './Footer.module.css'

const Footer = () => {
    return (
        <section className={cls.footer_container}>
            <div className={cls.footer_body}>
                <div className={cls.footer_child}>
                    <ul>
                        <li>
                            Политика
                        </li>
                        <li>
                            Экономика
                        </li>
                        <li>
                            Общество
                        </li>
                        <li>
                            Туризм
                        </li>
                        <li>
                            Мир
                        </li>
                        <li>
                            События
                        </li>
                        <li>
                            Спорт
                        </li>
                        <li>
                            Погода
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer