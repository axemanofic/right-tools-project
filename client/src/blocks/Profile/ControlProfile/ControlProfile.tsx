import React, {FormEvent, useEffect, useState} from 'react';
import Modal from "../../../components/Modal";
import {IModal} from "../../../types/IModal";
import {IUser} from "../../../types/IUser";
import FormFile from "../../../components/Form/FormFile";
import {motion} from "framer-motion";
import {genId} from "../../../helpers/functions";
import {XIcon} from "@heroicons/react/outline";
import FormInput from "../../../components/Form/FormInput/FormInput";
import FormTextarea from "../../../components/Form/FormTextarea";

interface IControlProfile {
    data: IUser | null,
    onProfile: (data: IUser, photo:any, banner:any) => void,
    modal: IModal,
    setModal: (id:string) => void
}

const ControlProfile: React.FC<IControlProfile> = (
    {data, onProfile, modal, setModal}) => {

    const {id, isOpen} = modal;

    const [state, setState] = useState<IUser | null>(null);
    const [photo, setPhoto] = useState<any | null>(null)
    const [banner, setBanner] = useState<any | null>(null)

    const handleOnModal = (id: string) => setModal(id);

    const handleOnSubmit = (event: FormEvent) => {
        event.preventDefault();
        state && onProfile(state as IUser, photo, banner);
        setModal(id);
    }

    const handleOnFile = (data: any, name: string) => {
        switch (name) {
            case 'photo' : {
                setPhoto(data.file);
                break;
            }
            case 'banner' :{
                setBanner(data.file);
                break;
            }
            default : {
                break;
            }
        }
    }
    const handleSetValue = (value: string, name: string) => {
        setState((state:any) => ({
            ...state,
            [name]: value
        }))
    }
    useEffect(() => {
        if(modal.isOpen) {
            setState(data);
        }
    }, [modal])


    return (
        <Modal modal={modal} onClose={handleOnModal} title={"Изменить"}>
            {
                state && (
                    <form onSubmit={event => handleOnSubmit(event)}>
                        <div className="row gx-3">
                            <div className="col-12">
                                <FormFile
                                    onFile={handleOnFile}
                                    //value={state.banner}
                                    // value={'/profile/user-banner.jpg'}
                                    value={state.banner ? state.banner : '/profile/user-banner.jpg'}
                                    name={'banner'}/>
                            </div>
                            <div className={['col-12', 'mx-4', 'mb-3'].join(" ")} style={{"marginTop": "-3rem"}}>
                                <FormFile
                                    rounded={true}
                                    value={state.photo ? state.photo : '/profile/default-profile.png'}
                                    name={'photo'}
                                    onFile={handleOnFile}/>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="f-7 mb-2 fw-bold">Фамилия</div>
                                <FormInput
                                    name={'last_name'}
                                    type={'text'}
                                    value={state.last_name}
                                    setValue={handleSetValue}
                                    placeholder={'Введите фамилия'}
                                />
                            </div>
                            <div className="col-6 mb-3">
                                <div className="f-7 mb-2 fw-bold">Имя</div>
                                <FormInput
                                    name={'first_name'}
                                    type={'text'}
                                    value={state.first_name}
                                    setValue={handleSetValue}
                                    placeholder={'Введите фамилия'}
                                />
                            </div>
                            {/*<div className="col-12 mb-3">*/}
                            {/*    <div className="f-7 mb-2 fw-bold">Статус</div>*/}
                            {/*    <FormInput*/}
                            {/*        name={'status'}*/}
                            {/*        type={'text'}*/}
                            {/*        value={state.status}*/}
                            {/*        setValue={handleSetValue}*/}
                            {/*        placeholder={'Введите статус'}*/}
                            {/*    />*/}
                            {/*</div>*/}
                            <div className="col-6 mb-4">
                                <div className="f-7 mb-2 fw-bold">Телефон</div>
                                <FormInput
                                    name={'phone'}
                                    type={'tel'}
                                    value={state.phone}
                                    setValue={handleSetValue}
                                    placeholder={'Введите фамилия'}
                                />
                            </div>
                            <div className="col-6 mb-4">
                                <div className="f-7 mb-2 fw-bold">Email</div>
                                <FormInput
                                    name={'email'}
                                    placeholder={'Введите почту'}
                                    type={'email'}
                                    value={state.email}
                                    setValue={handleSetValue}
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <div className="f-7 mb-2 fw-bold">Описание</div>
                                <FormTextarea
                                    placeholder={'Введите описание'}
                                    value={state.description}
                                    rows={5}
                                    name={'description'}
                                    maxLength={150}
                                    setValue={handleSetValue}/>
                            </div>
                            <div className="col-12 mt-5">
                                <div className="d-flex justify-content-end">
                                    <button type={'submit'} className={'btn btn-wood'}>
                                        Отправить
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                )
            }
        </Modal>
    );
};

export default ControlProfile;