import * as actions from "./actionTypes";


export const addToken = (addTokenPayload) => {
    return {
        type: actions.ADD_TOKEN,
        payload: addTokenPayload
    }
}

export const getAllTokens = () => {
    return {
        type: actions.GET_ALL_TOKENS
    }
}

export const getToken = (getTokenPayload) => {
    return {
        type: actions.GET_TOKENS,
        payload: getTokenPayload
    }
}

export const updateToken = (updateTokenPayload) => {
    return {
        type: actions.UPDATE_TOKEN,
        payload: updateTokenPayload
    }
}

export const deleteToken = (deleteTokenPayload) => {
    return {
        type: actions.DELETE_TOKEN,
        payload: deleteTokenPayload
    }
}