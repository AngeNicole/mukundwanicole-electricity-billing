import { act } from "react-dom/test-utils"
import * as actions from "../actions/ActionTypes"

let usertokens = [
    {
        id: 1,
        meter: 28932455,
        amount: 40000
    },
    {
        id: 2,
        meter: 43748328,
        amount: 43000
    }
]

export default function TokenDetails(state = usertokens, action) {
    switch (action.type) {
        case actions.RESET_TOKEN_STORAGE:
            return action.payload
        case actions.ADD_TOKEN:
            return [
                ...state,
                {
                    id: Math.floor((Math.random() * 1000) + 1),
                    meter: action.payload.tokenMeter,
                    amount: action.payload.tokenAmount
                }
            ]
            break
        case actions.GET_ALL_TOKENS:
            return state.map(tokens => {
                return {
                    id: tokens.id,
                    meter: tokens.meter,
                    amount: tokens.amount
                }
            })
            break
        case actions.GET_TOKEN:
            return state.filter(token => token.id === action.payload.id)
            break
        case actions.UPDATE_TOKEN:
            return state.map(tokens => {
                if (tokems.id === action.payload.id) {
                    return {
                        id: tokens.id,
                        meter: tokens.payload.meter,
                        amount: tokens.payload.amount
                    }
                }

                return tokens
            })
            break
        case actions.DELETE_TOKEN:
            return state.filter(tokens => tokens.id !== action.payload.id)
            break
    
        default:
            return state
    }
}
