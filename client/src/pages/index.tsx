import type {NextPage} from 'next'
import Head from 'next/head'
import style from '../styles/home/Home.module.scss'
import Link from "next/link";
import React from "react";
import {motion} from 'framer-motion'
import {fadeIn, fadeUp, fadeUpRotateRight, leftIn, PageTransition} from "../motion";
import NavBar from "../blocks/Home/NavBar";


const Home: NextPage = () => {


    return (
        <>
            <Head>
                <title>Right Tools</title>
            </Head>
            <motion.div
                variants={PageTransition}
                initial={'initial'}
                animate={`animate`}
            >
                <NavBar/>
                <div className={style.header}>
                    <div className={`container-fluid`}>
                        <div className={`d-flex flex-column align-items-center`}>
                            <div className={style.header__title}>
                                <h1>
                                    <motion.span
                                        variants={fadeIn}
                                        initial={'initial'}
                                        animate={`animate`}
                                        custom={5}>Управляйте разработкой вашего <br/>проекта вместе с <br/>Right
                                    </motion.span>
                                    <motion.span
                                        variants={fadeIn}
                                        initial={'initial'}
                                        animate={`animate`}
                                        custom={10}
                                        className={`text-green`}> Tools
                                    </motion.span>
                                </h1>
                                <p className={`mx-auto mt-5`}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad atque
                                    corporis
                                    distinctio dolorum facilis incidunt libero, magnam magni nisi officiis optio quasi
                                    quisquam reiciendis sit tempora tempore tenetur voluptate.
                                </p>
                                <Link href={`/profile`}>
                                    <a className={`btn btn-green mt-4 rounded-pill`}>
                                        Начать использовать
                                    </a>
                                </Link>
                            </div>
                            <div className={style.header__banners}>
                                <motion.div
                                    variants={fadeUp}
                                    initial={`initial`}
                                    whileInView={`animate`}
                                    custom={3}
                                    viewport={{once: true}}
                                    whileHover={{
                                        scale: 1.1,
                                    }}
                                    className={`${style.header__banner} ${style.header__banner_side} ${style.header__banner_side__left}`}>
                                    <img src="/test/bg2.png" alt=""/>
                                </motion.div>
                                <motion.div
                                    variants={fadeUp}
                                    initial={`initial`}
                                    whileInView={`animate`}
                                    custom={10}
                                    viewport={{once: true}}
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                    className={`${style.header__banner} ${style.header__banner_main}`}>
                                    <img src="/test/bg1.jpg" alt=""/>
                                </motion.div>
                                <motion.div
                                    variants={fadeUp}
                                    initial={`initial`}
                                    whileInView={`animate`}
                                    custom={7}
                                    viewport={{once: true}}
                                    whileHover={{
                                        scale: 1.1
                                    }}
                                    className={`${style.header__banner} ${style.header__banner_side} ${style.header__banner_side__right}`}>
                                    <img src="/test/bg2.png" alt=""/>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={`container-xl`}>
                        <motion.div
                            variants={fadeUp}
                            initial={`initial`}
                            whileInView={`animate`}
                            custom={5}
                            viewport={{once: true}}
                            className={style.section__title}>
                            <h2>
                                Стало интересно<span className={`text-green`}>?</span><br/>
                                Немного о нашем проекте<span className={`text-wood`}>.</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            variants={fadeIn}
                            initial={`initial`}
                            whileInView={`animate`}
                            custom={7}
                            viewport={{once: true}}
                            className={style.section__description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet libero pariatur
                            quaerat quam sapiente ut veritatis? A ab adipisci aliquam amet, animi consectetur cumque
                            ducimus
                            eaque excepturi, impedit laboriosam laborum magnam magni maxime nulla pariatur possimus
                            quaerat,
                            quisquam sint tempore tenetur ut veniam? Accusamus adipisci earum exercitationem explicabo?
                        </motion.div>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={`container-xl`}>
                        <div className={`row`}>
                            <div className={`col-12`}>
                                <motion.div
                                    variants={fadeUpRotateRight}
                                    initial={`initial`}
                                    whileInView={`animate`}
                                    custom={5}
                                    viewport={{once: true}}
                                    className={`${style.card} ${style.card_green}`}>
                                    <div className={`row`}>
                                        <div className={`col-5`}>
                                            <div className={style.card__label}>
                                                Главная карта
                                            </div>
                                            <div className={style.card__title}>
                                                <span className={`text-success`}>Поддержка<br/> Mind Map</span><br/>
                                                Удобно.<br/>
                                                Просто и <br/>практично.
                                            </div>
                                            <div className={style.card__description}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet aperiam
                                                assumenda autem consequatur deleniti deserunt dolor magnam nemo non,
                                                odit
                                                quia repellat sequi voluptatem.
                                            </div>
                                        </div>
                                        <div className={`col ${style.card__banner}`}>
                                            <motion.div
                                                variants={fadeUp}
                                                initial={'initial'}
                                                whileHover={{
                                                    scale: 1.1
                                                }}
                                                custom={10}
                                                whileInView={`animate`}
                                                viewport={{once: true}}
                                                className={style.card__img}>
                                                <img src="/test/bg1.jpg" alt=""/>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className={`col-lg-6 mt-4`}>
                                <motion.div
                                    variants={fadeUpRotateRight}
                                    initial={`initial`}
                                    whileInView={`animate`}
                                    custom={5}
                                    viewport={{once: true}}
                                    className={`${style.card} ${style.card_wood}`}>
                                    <div className={`row`}>
                                        <div className={`col-12`}>
                                            <div className={style.card__label}>
                                                Канбан доска
                                            </div>
                                            <div className={style.card__title}>
                                                <span className={`text-wood`}>Поддержка<br/> Kanban board</span>
                                                <br/>
                                                Просто и <br/>практично.
                                            </div>
                                            <div className={style.card__description}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className={`col-lg-6 mt-4`}>
                                <motion.div
                                    variants={fadeUpRotateRight}
                                    initial={`initial`}
                                    whileInView={`animate`}
                                    custom={8}
                                    viewport={{once: true}}
                                    className={`${style.card} ${style.card_dark}`}>
                                    <div className={`row`}>
                                        <div className={`col-12`}>
                                            <div className={style.card__label}>
                                                Твоя команда
                                            </div>
                                            <div className={style.card__title}>
                                                <span className={`text-success`}>Поддержка<br/> Team squad</span>
                                                <br/>
                                                Вся команда - вместе.
                                            </div>
                                            <div className={style.card__description}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={`container-xl`}>
                        <motion.div
                            variants={fadeUp}
                            initial={`initial`}
                            whileInView={`animate`}
                            custom={5}
                            viewport={{once: true}}
                            className={style.section__title}>
                            <h2>
                                Что под капотом<span className={`text-wood`}>?</span><br/>
                                Стек наших технологий<span className={`text-green`}>.</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            variants={fadeIn}
                            initial={`initial`}
                            whileInView={`animate`}
                            custom={7}
                            viewport={{once: true}}
                            className={style.section__description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet libero pariatur
                            quaerat quam sapiente ut veritatis? A ab adipisci aliquam amet, animi consectetur cumque
                            ducimus
                            eaque excepturi, impedit laboriosam laborum magnam magni maxime nulla pariatur possimus
                            quaerat,
                            quisquam sint tempore tenetur ut veniam? Accusamus adipisci earum exercitationem explicabo?
                        </motion.div>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={`container-xl`}>
                        <div className={`row`}>
                            <div className={`col-lg-6 mt-4`}>
                                <motion.div
                                    variants={leftIn}
                                    initial={`initial`}
                                    whileInView={`animate`}
                                    custom={10}
                                    viewport={{once: true}}
                                    className={`${style.card} ${style.card_outline_dark}`}>
                                    <div className={`row`}>
                                        <div className={`col-12`}>
                                            <div className={style.card__label}>
                                                Front-end
                                            </div>
                                            <div className={style.card__title}>
                                                <span className={`text-gray`}>Основа<br/> Next.JS</span>
                                                <br/>
                                                Современно и <br/>надежно.
                                            </div>
                                            <div className={style.card__description}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                            <div className={`col-lg-6 mt-4`}>
                                <motion.div
                                    variants={leftIn}
                                    initial={`initial`}
                                    whileInView={`animate`}
                                    custom={12}
                                    viewport={{once: true}}
                                    className={`${style.card} ${style.card_outline_green}`}>
                                    <div className={`row`}>
                                        <div className={`col-12`}>
                                            <div className={style.card__label}>
                                                Back-end
                                            </div>
                                            <div className={style.card__title}>
                                                <span className={`text-success`}>Основа<br/> Django</span>
                                                <br/>
                                                Строго и практично.
                                            </div>
                                            <div className={style.card__description}>
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.section}>
                    <div className={`container-xl`}>
                        <motion.div
                            variants={fadeUp}
                            initial={`initial`}
                            whileInView={`animate`}
                            custom={5}
                            viewport={{once: true}}
                            className={style.section__title}>
                            <h2>
                                Кто разработал<span className={`text-success`}>?</span><br/>
                                Наша команда <br/>разработчиков<span className={`text-wood`}>.</span>
                            </h2>
                        </motion.div>
                        <motion.div
                            variants={fadeIn}
                            initial={`initial`}
                            whileInView={`animate`}
                            custom={7}
                            viewport={{once: true}}
                            className={style.section__description}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium amet libero pariatur
                            quaerat quam sapiente ut veritatis? A ab adipisci aliquam amet, animi consectetur cumque
                            ducimus
                            eaque excepturi, impedit laboriosam laborum magnam magni maxime nulla pariatur possimus
                            quaerat,
                            quisquam sint tempore tenetur ut veniam? Accusamus adipisci earum exercitationem explicabo?
                        </motion.div>
                    </div>
                </div>
                <div className={style.section}>
                    <motion.div
                        variants={fadeUp}
                        initial={`initial`}
                        whileInView={`animate`}
                        custom={5}
                        viewport={{once: true}}
                        className={`container-xl`}>
                        <div className={style.section__title}>
                            <h2>
                                И самое последнее <br/>о продукте<span className={`text-wood`}>...</span><br/>
                            </h2>
                        </div>
                    </motion.div>
                </div>
                <div className={style.section}>
                    <div className={`container-xl`}>
                        <div className={`row`}>
                            <div className={`col-12`}>
                                <motion.div
                                    variants={fadeUpRotateRight}
                                    initial={`initial`}
                                    whileInView={`animate`}
                                    custom={5}
                                    viewport={{once: true}}
                                    className={`${style.card} ${style.card_img}`}>
                                    <div className={`row justify-content-center`}>
                                        <div className={`col-10`}>
                                            <motion.div
                                                variants={fadeIn}
                                                initial={`initial`}
                                                whileInView={`animate`}
                                                custom={8}
                                                viewport={{once: true}}
                                                className={style.card__title}>
                                                <span>Right Tools</span><br/>
                                                Был разработан
                                                <i className={`text-wood`}> людьми</i> для
                                                <i className={`text-success`}> людей</i>
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className={style.footer}>
                    <div className={`container-xl`}>
                        <div className={`row justify-content-between align-items-center`}>
                            <div className={`col-auto text-gray`}>
                                © Trash Team.
                            </div>
                            <div className={`col-auto`}>
                                <span className={['d-block', 'text-gray', 'fs-7'].join(" ")}>
                                    проект
                                </span>
                                <div className={'text-gray fs-6 fw-bold'}>
                                    NOOSOFT
                                </div>
                                <div className={'text-gray fs-6 fw-bold'}>
                                    БГИТУ
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </motion.div>
        </>
    )
}

export default Home
