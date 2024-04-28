import Ant from "./Ant";

const Ceil = ({value, isAnt}) => {
    return (
        <div style={{overflow: 'hidden', border: '1px solid brown', background: `${value === 1 ? 'gray' : 'none'}`}}>
            {isAnt && <Ant />}
        </div>
    )
}

export default Ceil;