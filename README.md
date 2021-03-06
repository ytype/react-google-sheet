# react-google-sheet

select, insert google sheet with axios 

## Usage 

``` js
import sheetApi from "./google-sheet-api"
```

## SELECT

`spread sheet key` : `https://docs.google.com/spreadsheets/d/{key}/edit`

`query`? : must be url encoded (use [UrlEncode](https://www.convertstring.com/en/EncodeDecode/UrlEncode)) 

`raw query` :

``` sql
SELECT A WHERE A LIKE '[END]%'
```

`encoded query` :

``` 
SELECT+A+WHERE+A+LIKE+%27%5bEND%5d%25%27
```

return Json Object

### Usage

use with query

``` js
const key = "YOUR_SPREAD_SHEET_KEY"
const QUERY = "URL_ENCODED_QUERY"
await sheetApi.select(key, query)
```

or select all

``` js
const key = "YOUR_SPREAD_SHEET_KEY"
await sheetApi.select(key)
```

Example : `src/App.tsx` google sheet data to table

![](https://user-images.githubusercontent.com/59418226/93743116-6580fe80-fc2a-11ea-9caa-ee43a2718ce3.png)

![](https://user-images.githubusercontent.com/59418226/93743149-76317480-fc2a-11ea-9211-b2c59d041f62.png)


## INSERT

copy `src/share.gs` code and paste google sheet Tools > Script editor

![](https://www.benlcollins.com/wp-content/uploads/2016/04/script_editor_menu-1.jpg)

and Publish > Deploy as web app

![](https://developers.google.com/apps-script/images/deploy_web_app.png)

set `Who has access to the app` to `Anyone, even anonymous`

`script key` : `https://script.google.com/macros/s/{key}/exec `

