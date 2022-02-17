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

export default function Token(state = usertokens, action) {
    switch (action.type) {
        
    }
    return state
}

export default function testimonialReducer(state = initialState, action) {
    switch (action.type) {
        case actions.RESET_TESTIMONIAL_STORAGE:
            return action.payload
        case actions.ADD_TESTIMONIAL:
            return [
                ...state,
                {
                    id: Math.floor((Math.random() * 1000) + 1),
                    date: Date.now(),
                    OwnerFullName: action.payload.OwnerFullName,
                    OwnerId: action.payload.OwnerId,
                    testimonialType: action.payload.testimonialType,
                    testimonialTitle: action.payload.testimonialTitle,
                    testimonialBody: action.payload.testimonialBody,
                    views: 1,
                    likes: 0,
                    dislikes: 0
                }
            ]
            break
        case actions.GET_ALL_TESTIMONIALS:
            return state.map(testimonials => {
                return {
                    id: testimonials.id,
                    date: testimonials.date,
                    OwnerFullName: testimonials.OwnerFullName,
                    OwnerId: testimonials.OwnerId,
                    testimonialType: testimonials.testimonialType,
                    testimonialTitle: testimonials.testimonialTitle,
                    testimonialBody: testimonials.testimonialBody,
                    views: testimonials.views + 1,
                    likes: testimonials.likes,
                    dislikes: testimonials.dislikes
                }
            })
            break
        case actions.GET_TESTIMONIALS:
            return state.filter(testimonial => testimonial.id === action.payload.id)
            break
        case actions.UPDATE_TESTIMONIAL:
            return state.map(testimonials => {
                if (testimonials.id === action.payload.id) {
                    return {
                        id: testimonials.id,
                        date: testimonials.date,
                        OwnerFullName: action.payload.OwnerFullName,
                        OwnerId: testimonials.OwnerId,
                        testimonialType: action.payload.testimonialType,
                        testimonialTitle: action.payload.testimonialTitle,
                        testimonialBody: action.payload.testimonialBody,
                        views: testimonials.views,
                        likes: testimonials.likes,
                        dislikes: testimonials.dislikes
                    }
                }

                return testimonials
            })
            break
        case actions.DELETE_TESTIMONIAL:
            return state.filter(testimonials => testimonials.id !== action.payload.id)
            break
        case actions.LIKE_TESTIMONIAL:
            return state.map(testimonials => {
                if (testimonials.id === action.payload.id && testimonials.OwnerId === action.payload.OwnerId) {
                    return {
                        id: testimonials.id,
                        date: testimonials.date,
                        OwnerFullName: testimonials.OwnerFullName,
                        OwnerId: testimonials.OwnerId,
                        testimonialType: testimonials.testimonialType,
                        testimonialTitle: testimonials.testimonialTitle,
                        testimonialBody: testimonials.testimonialBody,
                        views: testimonials.views,
                        likes: testimonials.likes + 1,
                        dislikes: testimonials.dislikes
                    }
                }
                return testimonials
            })
            break;

        case actions.DISLIKE_TESTIMONIAL:
            return state.map(testimonials => {
                if (testimonials.id === action.payload.id && testimonials.OwnerId === action.payload.OwnerId) {
                    if (testimonials.likes > 0) {
                        return {
                            id: testimonials.id,
                            date: testimonials.date,
                            OwnerFullName: testimonials.OwnerFullName,
                            OwnerId: testimonials.OwnerId,
                            testimonialType: testimonials.testimonialType,
                            testimonialTitle: testimonials.testimonialTitle,
                            testimonialBody: testimonials.testimonialBody,
                            views: testimonials.views,
                            likes: testimonials.likes - 1,
                            dislikes: testimonials.dislikes + 1
                        }
                    }
                    else {
                        return {
                            id: testimonials.id,
                            date: testimonials.date,
                            OwnerFullName: testimonials.OwnerFullName,
                            OwnerId: testimonials.OwnerId,
                            testimonialType: testimonials.testimonialType,
                            testimonialTitle: testimonials.testimonialTitle,
                            testimonialBody: testimonials.testimonialBody,
                            views: testimonials.views,
                            likes: 0,
                            dislikes: testimonials.dislikes + 1
                        }
                    }
                }
                return testimonials
            })
            break
        case actions.TESTIMONIAL_VIEWS:
            return state.map(testimonials => {
                return {
                    id: testimonials.id,
                    date: testimonials.date,
                    OwnerFullName: testimonials.OwnerFullName,
                    OwnerId: testimonials.OwnerId,
                    testimonialType: testimonials.testimonialType,
                    testimonialTitle: testimonials.testimonialTitle,
                    testimonialBody: testimonials.testimonialBody,
                    views: testimonials.views + 1,
                    likes: testimonials.likes,
                    dislikes: testimonials.dislikes
                }
            })

        default:
            return state
    }
}