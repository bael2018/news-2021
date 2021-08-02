export const arrayfunc = el => {
    return Object.entries(el).map(item => {
        const id = item[0];
        return {
            ...item[1],
            id
        }
    })
}