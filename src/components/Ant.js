import ant from '../assets/img/icons8-ant-3d-fluency-32.png';
import '../css/ant.css';
import { useContext } from 'react';
import { Context } from '../context';

const Ant = () => {
    const {state} = useContext(Context);
    let lookTo;
    for (let key in state.way) {
        if (state.way[key]) {
            lookTo = key;
            break;
        }
    }
    
    return <img src={ant} className={'Ant ' + lookTo} alt='ant' />
}

export default Ant;