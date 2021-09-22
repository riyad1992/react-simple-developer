import React, { useState } from 'react';

const Developer = (props) => {
    const {name, img, partner} = props.dev
    const [partners, setPartner] = useState('')
    const showPartner = (p) => {
        setPartner(p)
    }
    return (
        <div className="col-4 g-3">
            <div className='border border-info p-3 rounded-3'>
                <img src={img} alt="" />
                <h5>Namae: {name}</h5>
                <h5>{partners}</h5>
                <button onClick={() => showPartner(partner)} className="btn btn-info mb-2">Show Partner</button><br />
                <button className="btn btn-warning mb-2" onClick={props.handleIncrease}>Add Member</button>
            </div>
        </div>
    );
};

export default Developer;