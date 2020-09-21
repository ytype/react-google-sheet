export type table = {
    cols: any[],
    parsedNumHeaders: number
    rows: any[] 
}

export type jsonData = {
    reqId: string,
    sig: string,
    status: string,
    table: table,
    version: string
}