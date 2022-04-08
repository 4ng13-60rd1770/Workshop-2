


export const show = async (url) =>{

    let data = await fetch(url)
    let res = await data.json()
    return res


}
