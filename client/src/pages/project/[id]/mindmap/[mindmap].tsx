import React, {ReactElement, useCallback, useState} from 'react';
import MindMapBoard from '../../../../containers/MindMap';
import LayoutPanel from "../../../../layout/LayoutPanel";
import {motion} from "framer-motion";
import {PageTransition} from "../../../../motion";
import { ToastContainer } from 'react-toastify';

const MindMap = () => {

    return (
        <>
            <motion.div
                variants={PageTransition}
                initial={`initial`}
                animate={`animate`}
                className={`flex-grow-1 d-flex flex-column`}>
                <MindMapBoard/>
            </motion.div>
            <ToastContainer theme={'colored'} position={'bottom-right'}/>
        </>
    );
};

MindMap.getLayout = function getLayout(page: ReactElement) {
    return (
        <LayoutPanel title={'Right Tools | Mind Map'}>
            {page}
        </LayoutPanel>
    )
}

MindMap.auth = true;


export default MindMap;