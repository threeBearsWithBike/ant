import { useContext } from "react";
import { Context } from "../context";
import RowField from "./RowField";
import '../css/field.css';

const Field = () => {
    const {state} = useContext(Context);
    return (
        <div className="Field-10">
            {state.field.map((row, idx) => <RowField row={row} isRowAnt={idx === state.ant[0]} />)
            }
        </div>
    )
}

export default Field;