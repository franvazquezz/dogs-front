
const initialState = {
    allDogs: [],
    allDogsFiltered: [],
    dogFinder: [],
    allTemperaments: [],
    details: [],
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'GET_DOGS':
            return {
                ...state, 
                allDogs: action.payload,
                allDogsFiltered: action.payload
            }
        case 'GET_TEMPERAMENTS':
            return {
                ...state,
                allTemperaments: action.payload}
        case 'POST_DOGS':
            return {
                ...state,
                allDogs: [...state.allDogs, action.payload],
                allDogsFiltered: [...state.allDogsFiltered, action.payload]
            }
        case 'GET_BY_NAME':
            return {
                ...state,
                dogFinder:[...action.payload]
            }
            case 'REMOVE_FINDER':
                return{
                    ...state,
                    dogFinder: []
                }
        case 'GET_BY_ID':
            return{
                ...state,
                details: action.payload
            }
        case "REMOVE_DETAILS":
            return{
                ...state,
                details: []
            }
        case 'FILTER':
            state.allDogs = state.allDogsFiltered
            let filtered = []
            if(action.payload === 'Any') return {...state}
            state.allDogs.forEach(perro => {
                if(perro.createdInDb){
                    if(perro.temperaments?.find(temp => temp.name === action.payload)){
                        filtered.push(perro)
                    }
                }
                if(perro.temperaments?.includes(action.payload)){
                    filtered.push(perro)
                }
            })
            return {
                ...state,
                allDogs: filtered
            }
        case'FILTER_ORIGIN':
            state.allDogs = state.allDogsFiltered;
            let orderOrigin = state.allDogs
            const origen = () => {
                if(action.payload === 'Any' ) {
                    return orderOrigin
                } else if(action.payload === 'DataBase') {
                    return orderOrigin.filter(dog => dog.createdInDb)
                } else if(action.payload === 'Api') {
                    return orderOrigin.filter(dog => !dog.createdInDb)
                } else {
                    return orderOrigin
                }
            }
            return {
                ...state, 
                allDogs: origen()
            }
        case 'ORDER_BY_NAME':
            const allDogsOrderedName = [...state.allDogs]
            return {
                 ...state, allDogs: action.payload === "A" ? 
                allDogsOrderedName.sort((a, b) => {return a.name > b.name ? 1 : a.name < b.name ? -1: 0}) : 
                allDogsOrderedName.sort((a, b) => {return a.name < b.name ? 1 : a.name > b.name ? -1: 0})
                 
                }
        case 'ORDER_BY_WEIGHT':
            const allDogsOrderedWeight = [...state.allDogs]
            return { 
                ...state, allDogs: action.payload === "A" ?
            allDogsOrderedWeight.sort((a, b) => a.weight_min - b.weight_min) :
            allDogsOrderedWeight.sort((a, b) => b.weight_min - a.weight_min)
        }
        default:
            return state
    }
}
 export default reducer