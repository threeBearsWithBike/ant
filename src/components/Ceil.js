import { useContext } from "react";
import { Context } from "../context";
import Ant from "./Ant";

const Ceil = ({value, isAnt}) => {
    const {ant} = useContext(Context);

    return (
        <div style={{border: '1px solid black', backgroundColor: value ? 'gray' : 'none'}}>
            {isAnt && <Ant />}
        </div>
    )
}

export default Ceil;