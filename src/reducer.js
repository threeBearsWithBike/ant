import { initialState } from "./components/Layout";

export function reducer(state, action) {
    
    const currentWay = () => {
        for (let key in state.way) {
            if (state.way[key]) {
                return key;
            }
        }
    }

    const getPositionAnt = (ant) => {
        const [row, col] = ant;
        let maxRow = state.field.length - 1;
        let maxCol = state.field[0].length - 1;

        if (row <= maxRow && row >= 0 && col <= maxCol && col >= 0) {
            return ant;
        }
        if (row > maxRow && col <= maxCol) {
            return [0, col];
        }
        if (row < 0 && col <= maxCol) {
            return [maxRow, col];
        }
        if (col > maxCol && row <= maxRow) {
            return [row, 0];
        }
        if (col < 0 && row <=maxRow) {
            return [row, maxCol];
        }
    }

    switch(action.type) {

        case 'reset':
            return initialState;

        case 'choiceOfSpeed':
            return {...state, speed: action.payload}


        case 'changeStatusCell':
            
            const newField = state.field.map((row, idx) => {
                if (idx === state.ant[0]) {
                    return row.map((cell, idx) => {
                        if (idx === state.ant[1]) {
                            if (cell === 0) {
                                return 1;
                            }
                            return 0;
                        }
                        return cell;
                    })
                }
                return row;
            });

            return {...state, field: newField}

        case 'moveAnt':
            if (state.field[state.ant[0]][state.ant[1]] === 0) {

                switch(currentWay()) {

                    case 'north':
                        return {
                            field: state.field,
                            way: {
                                north: false,
                                east: false,
                                south: false,
                                west: true
                            },
                            ant: getPositionAnt([state.ant[0], state.ant[1] - 1]),
                            startGame: state.startGame,
                            speed: state.speed
                        };

                    case 'east':
                        return {
                            field: state.field,
                            way: {
                                north: true,
                                east: false,
                                south: false,
                                west: false
                            },
                            ant: getPositionAnt([state.ant[0] - 1, state.ant[1]]),
                            startGame: state.startGame,
                            speed: state.speed
                        };

                    case 'south':
                        return {
                            field: state.field,
                            way: {
                                north: false,
                                east: true,
                                south: false,
                                west: false
                            },
                            ant: getPositionAnt([state.ant[0], state.ant[1] + 1]),
                            startGame: state.startGame,
                            speed: state.speed
                        };

                    case 'west':
                        return {
                            field: state.field,
                            way: {
                                north: false,
                                east: false,
                                south: true,
                                west: false
                            },
                            ant: getPositionAnt([state.ant[0] + 1, state.ant[1]]),
                            startGame: state.startGame,
                            speed: state.speed  
                        };                    
                }

            }
                       
            if (state.field[state.ant[0]][state.ant[1]] === 1) {

                switch(currentWay()) {

                    case 'north':
                        return {
                            field: state.field,
                            way: {
                                north: false,
                                east: true,
                                south: false,
                                west: false
                            },
                            ant: getPositionAnt([state.ant[0], state.ant[1] + 1]),
                            startGame: state.startGame,
                            speed: state.speed
                        };

                    case 'east':
                        return {
                            field: state.field,
                            way: {
                                north: false,
                                east: false,
                                south: true,
                                west: false
                            },
                            ant: getPositionAnt([state.ant[0] + 1, state.ant[1]]),
                            startGame: state.startGame,
                            speed: state.speed
                        };

                    case 'south':
                        return {
                            field: state.field,
                            way: {
                                north: false,
                                east: false,
                                south: false,
                                west: true
                            },
                            ant: getPositionAnt([state.ant[0], state.ant[1] - 1]),
                            startGame: state.startGame,
                            speed: state.speed
                        };

                    case 'west':
                        return {
                            field: state.field,
                            way: {
                                north: true,
                                east: false,
                                south: false,
                                west: false
                            },
                            ant: getPositionAnt([state.ant[0] - 1, state.ant[1]]),
                            startGame: state.startGame,
                            speed: state.speed  
                        };  
                }
            }

        case 'game':
            return {...state, startGame: !state.startGame};
       
        default:
            return {...state};
    }
}