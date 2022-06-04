import React from 'react';
import style from './index.module.scss';
import DropDown from "../../DropDown";
import {motion} from "framer-motion";
import Link from "next/link";

type ICard = {
    data: {
        id: number,
        name: string,
    },
    path: string,
    type: 'MINDMAP' | "KANBAN"
}


const Card: React.FC<ICard> = (
    {
        data,
        type,
        path
    }) => {

    const {id, name} = data;

    return (
        <div className={style.block}>
            <motion.div
                whileHover={{scale: 1.1, transformOrigin: 'left top'}}
                className={style.banner}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <motion.img whileHover={{scale: 1.05}} src={'/profile/user-banner.jpg'} alt=""/>
            </motion.div>
            <div className={style.title}>
                <Link href={`${path}${type === 'KANBAN' ? `/kanban/${id}` : `/mindmap/${id}`}`}>
                    <a><span className={`text-black`}>{name}</span></a>
                </Link>
            </div>
            <div className={style.control}>
                <DropDown>
                    <ul>
                        <li>
                            <Link href={`${path}${type === 'KANBAN' ? `/kanban/${id}` : `/mindmap/${id}`}`}>
                                <a>
                                    Открыть
                                </a>
                            </Link>
                        </li>
                        <li>Удалить</li>
                    </ul>
                </DropDown>
            </div>
        </div>
    );
};

export default Card;