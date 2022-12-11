// 1. 安裝 npm i axios
// 2. 引用 require
// 3. 去讀官方文件
const axios = require('axios');
const fs = require('fs/promises');
// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211
(async()=>{
    try{
        let data = await fs.readFile('stack.txt', 'utf-8');
        
        let stockNo = data;
        let date = '20221111';
        let response = await axios.get(`http://54.71.133.152:3000/stocks`, {
          params: {
            stockNo,
            date,
          },
        });
    
        console.log('await', response.data);
    }catch(e){
        console.log(e);
    };
   
  
} )();