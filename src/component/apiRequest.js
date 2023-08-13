
const apiRequest = async (url='', option=null, err=null) => {
    try {
        const response = await fetch(url, option)
        if (!response.ok) throw Error("Pls reload the app")
        
    } catch (error) {
        err=error.Message;
    }
}

export default apiRequest   