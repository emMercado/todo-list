import axios from 'axios'

export const getData = async () => {
    try{
        const res = await axios.get('https://api-fake-pilar-tecno.herokuapp.com/db')
        return (res);
    }catch(err){console.error(err)}
}

 /* 
export const postData = async () => {
    const configRequest = {
        method: 'POST',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/countries',
        data: {
            
            name: 'Argentina',
        }
    }
    try {
        const res = await axios(configRequest)
        return (res.data)
    } catch (err) {
        console.error(err)
    }
} 

export const deleteData = async () => {
    const configRequest = {
        method: 'DELETE',
        url: 'https://api-fake-pilar-tecno.herokuapp.com/countries/2',
       
    }
    try {
        const res = await axios(configRequest)
        return (res.data)
    } catch (err) {
        console.error(err)
    }
} 
 */