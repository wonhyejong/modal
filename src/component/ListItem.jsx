import React from 'react';
import './ListItem.css'

const ListItem = (props) =>{
    console.log(props.name)
const {name,expertise,setModalOpen,setModalContents,textContents} = props;
const open = () => {
    setModalOpen(true)
    setModalContents(textContents)

}
    return (
        <div className='listItem' onClick={open}>
            <h2>{name}</h2>
            <h3>{expertise}</h3>
        </div>
    );
};

export default React.memo(ListItem);