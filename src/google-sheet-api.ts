import axios from 'axios'

type table = {
    cols: any[],
    parsedNumHeaders: number
    rows: any[] 
}

type jsonData = {
    reqId: string,
    sig: string,
    status: string,
    table: table,
    version: string
}

const sheetApi = {
    async select(key:string, query?:string):Promise<jsonData> {
        if(!key){
            throw new Error('Missing value of key')
        }
        
        let url
        if(query) {
            url = `https://docs.google.com/spreadsheets/d/${key}/gviz/tq?tq=${query}` 
        } else {
            url = `https://docs.google.com/spreadsheets/d/${key}/gviz/tq` 
        }
         
        let response
        try {
            response = await axios.get(url)
        } catch (error) {
            return error
        }
        const jsonData:jsonData = JSON.parse(response.data.substring(response.data.indexOf("setResponse")+1 + "setResponse".length, response.data.length-2)) //remove comment and parse json
        return jsonData
    }
}

export default sheetApi