import React, { useEffect, useState } from 'react'
import sheetApi from "./google-sheet-api"
import {jsonData} from "./types"
import {KEY} from "./key"
const App = () => {
    const [json, setJson] = useState<jsonData | null>(null)

    const selectData = async () => {
        const key = KEY
        return await sheetApi.select(key)
    }

    useEffect(() => {
        async function select(){
            setJson(await selectData())
        }
        select()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const renderTable = () =>{
        console.log("renderTable")
        if(json) {
            console.log(json)
            const arrayTr = [] as string[][]
            json.table.rows.map((data,index) => {
                const arrayTemp = [] as string[]
                const item = data.c
                item.forEach((element:any) => {
                    if(element){
                        arrayTemp.push(element.v)
                    } else {
                        arrayTemp.push("")
                    }
                })
                arrayTr.push(arrayTemp)
            })

            return arrayTr.map((rows:any, index:number)=> {
                const row = rows.map((cell:any, index:number)=><td key={index}>{cell}</td>)
                return <tr key={index}>{row}</tr>
            })
        }
    }

    return (
        <table>
            <tbody>
                {json? renderTable(): null}
            </tbody>
        </table>
    )
}

export default App