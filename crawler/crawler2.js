// 1. 安裝 npm i axios
// 2. 引用 require
// 3. 去讀官方文件
const axios = require('axios');

// http://54.71.133.152:3000/stocks?stockNo=2618&date=202211
(async()=>{
   let response= await axios
  .get('http://54.71.133.152:3000/stocks?stockNo=2618&date=202211')
  
  console.log(response.data)
  
} )();