import { useContext } from "react";
import { Context } from "../context";
import RowField from "./RowField";
import '../css/field.css';

const Field = () => {
    const {state} = useContext(Context);
    const activClass = state.field.length === 10 ?
    'Field-10' :
    state.field.length === 20 ?
    'Field-20' : 'Field-40';
    return (
        <div className={activClass}>
            {state.field.map((row, idx) => <RowField row={row} isRowAnt={idx === state.ant[0]} />)
            }
        </div>
    )
}

export default Field;