export const baseURL = 'https://news-ea06e-default-rtdb.asia-southeast1.firebasedatabase.app/'

export const API = {
    get: (cat , id) => {
        return fetch(`${baseURL}${cat}/${id}` , {
            method: 'GET'
        })
    },
}

