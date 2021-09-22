import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';

const Main = () => {
    const [deve, setDeve] = useState([])
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        fetch('/DeveData.json')
        .then(res => res.json())
        .then(data => setDeve(data))
    }, [])
    return (
        <div className="container">
            <h2>We are Developer</h2>
            <div className="row">
                <div className="col-8 row">
                    {
                        deve.map(dev => <Developer dev={dev} key={dev.id} 
                        handleIncrease={handleIncrease}></Developer>)
                    }
                </div>
                <div className="col-3"><Cart count={count}></Cart></div>
            </div>
            
        </div>
    );
};

export default Main;