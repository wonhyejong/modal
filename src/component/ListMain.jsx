import React from 'react';
import { useState ,useEffect } from "react";
import Modal from "./Modal"
import ListItem from './ListItem';
import './ListMain.css'
const ListMain = () => {
    const info = [
        {
            id:1,
            name: "김태희",
            expertise: "직무/업무성과 영역",
            textContents: "중점 : 반도체 부문 투자",
        },
        {
            id:2,
            name: "문지연 ",
            expertise: "직무/업무성과 영역",
            textContents:"중점 : 원익투자파트너스",
        },
        {
            id:3,
            name: "이원호",
            expertise: "직무/컨설팅 영역",
            textContents:"중점 : 디지털미디어",
        },
        {
            id:4,
            name: "박현국",
            expertise: "직무/업무성과 영역",
            textContents:"중점 : 미래 모빌리티 ",
        },
        {
            id:5,
            name: "이재영",
            expertise: "직무/업무성과 영역",
            textContents:"중점 : 바이오/헬스케어 부문 투자",
        }
    ]
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContents, setModalContents] = useState('');

    return (
        <div className='listMain'>
            {
              info.map((data) => (
                <ListItem
                  key={data.id}
                  name={data.name}
                  expertise={data.expertise}
                  textContents={data.textContents}
                  setModalOpen={setModalOpen}
                  setModalContents={setModalContents}
                />
              ))
            }

            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} modalContents={modalContents}  />
        </div>
    );
};

export default ListMain;