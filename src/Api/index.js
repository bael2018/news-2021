import { API } from './api'

export const getNews = (cat , id) => {
    return API.get(cat , id)
}
