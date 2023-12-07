import {Button} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from 'react';

export const Times = () => {
const [one, setOne] = useState(0);
const [two, setTwo] = useState(0);
const handleOne = () => setOne(1 + Number(one));
const handleOneMinus = (event) => {
    one >= 1 ? setOne(Number(one) - 1) : setOne(one);
    event.stopPropagation();
}
const handleTwo = () => setTwo(1+Number(two));
const handleTwoMinus = (e) => {
    two >= 1 ? setTwo(Number(two) - 1) : setTwo(two);
    e.stopPropagation();

}

    return(
        <div className="w-full h-screen bg-bg-200 text-white grid grid-col-1 gap-1" style={{fontFamily: "Nanum Gothic"}}>
            <div onClick={handleOne} className='p-3 h-full text-3xl flex justify-center items-center'>
                <div className='grid grid-col-1 gap-1'>
                <p className='text-center'>Player 1</p>
                <div className=''><p className='text-center text-9xl p-5'>{one}</p></div>
                <div className='flex justify-around'><Button variant="text"><AddCircleIcon sx={{ fontSize: 40 }} color='error'></AddCircleIcon></Button><Button onClick={event => handleOneMinus(event)} variant="text"><RemoveCircleIcon sx={{ fontSize: 40 }} color='error'></RemoveCircleIcon></Button></div>
                </div>
            </div>
            <div onClick={handleTwo} className='p-3 h-full bg-bg-900 text-3xl flex justify-center items-center'>
                <div className='grid grid-col-1 gap-1'>
                <p className='text-center'>Player 2</p>
                <div className=''><p className='text-center text-9xl p-5'>{two}</p></div>
                <div className='flex justify-around'><Button variant="text"><AddCircleIcon sx={{ fontSize: 40 }} color='info'></AddCircleIcon></Button><Button onClick={e => handleTwoMinus(e)} variant="text"><RemoveCircleIcon sx={{ fontSize: 40 }} color='info'></RemoveCircleIcon></Button></div>
                </div>
            </div>
        </div>
    )
}