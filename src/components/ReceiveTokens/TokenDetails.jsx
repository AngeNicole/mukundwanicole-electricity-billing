import * as actions from "../actions/ActionTypes"


let usertokens = [
    {
        id: 1,
        meter: 28932455,
        amount: 40000,
        status: 0
    },
    {
        id: 2,
        meter: 43748328,
        amount: 43000,
        status: 0
    }
]

export default function TokenDetails(stateToken = usertokens, action) {
    switch (action.type) {
        case actions.RESET_TOKEN_STORAGE:
            return action.payload
        case actions.ADD_TOKEN:
            return [
                ...stateToken,
                {
                    id: Math.floor((Math.random() * 1000) + 1),
                    meter: action.payload.tokenMeter,
                    amount: action.payload.tokenAmount,
                    status: 0
                }
            ]
            break
        case actions.GET_ALL_TOKENS:
            return stateToken.map(tokens => {
                return {
                    id: tokens.id,
                    meter: tokens.meter,
                    amount: tokens.amount,
                    status: tokens.status
                }
            })
            break
        case actions.GET_TOKEN:
            return stateToken.filter(token => token.id === action.payload.id)
            break
        case actions.UPDATE_TOKEN:
            return stateToken.map(tokens => {
                if (tokems.id === action.payload.id) {
                    return {
                        id: tokens.id,
                        meter: tokens.payload.meter,
                        amount: tokens.payload.amount,
                        status: 1
                    }
                }

                return tokens
            })
            break
        case actions.DELETE_TOKEN:
            return stateToken.filter(tokens => tokens.id !== action.payload.id)
            break
    
        default:
            return stateToken
    }
}
