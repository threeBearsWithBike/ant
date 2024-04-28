import { useContext } from "react";
import { Context } from "../context";
import Ceil from "./Ceil";

const RowField = ({row, isRowAnt}) => {
    const {state} = useContext(Context);

    return row.map((ceil, idx) => <Ceil value={ceil} isAnt={isRowAnt && idx === state.ant[1]} />)    
}

export default RowField;