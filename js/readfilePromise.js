const fs = require('fs');

let p= new Promise((resolve,reject)=>{
  fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
      
      reject(err)
      // console.error('發生錯誤了', err);
    } else {
      // console.log('成功讀到資料:', data);
      resolve(data)
    }
  });
})
p.then((data)=>{
  console.log("then",data);
}).catch((err)=>{
  console.log("error 格式: ",err)
}).finally(()=>{
  console.log("finally:成功與否一定在")
})


