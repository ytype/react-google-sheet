# react-google-sheet

select, insert google sheet with axios 



## SELECT

`spreed sheet key` : https://docs.google.com/spreadsheets/d/`{key}`/edit

`query`? : must be url encoded (use [UrlEncode](https://www.convertstring.com/en/EncodeDecode/UrlEncode)) 

no query => select *

`raw query` :

``` sql
SELECT A WHERE A LIKE '[END]%'
```

`encoded query` :

``` 
SELECT+A+WHERE+A+LIKE+%27%5bEND%5d%25%27
```

## INSERT

copy `src/share.gs` code and paste google sheet Tools > Script editor

![](https://www.benlcollins.com/wp-content/uploads/2016/04/script_editor_menu-1.jpg)

and Publish > Deploy as web app

![](https://developers.google.com/apps-script/images/deploy_web_app.png)

set `Who has access to the app` to `Anyone, even anonymous`

`script key` : https://script.google.com/macros/s/`{key}`/exec 

