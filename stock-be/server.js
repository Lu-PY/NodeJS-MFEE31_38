const express =require('express');
const app =express();


require('dotenv').config();
const mysql2=require('mysql2/promise')

let pool = mysql2.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    // 限制 pool 連線數的上限
    connectionLimit: 10,
});

const cors=require('cors')
app.use(cors(
//     {
//     origin:'*',
    // *預設星號是所有來源都開放，真正環境不會使用，只會開放給對接要用的前端
// }
));

// 4.15、6才把中間件挑回來有內建，之前需要自己裝
// 設定express 處理靜態檔案
// ->express 內建 ->不用安裝任何東西
// localhost:3001/
// app.use(express.static('./static'));
// localhost:3001/2048/
// app.use(express.static('./static'))
app.use('/2048', express.static('./static'));

// 中間件
// middlerware=> pipeline pattern
// 要是use沒有next收到往下會卡住，如果有res.send就會停駐
app.use((req,res,next)=>{
    console.log('這裡是中間件1');
    req.mfee31 ='冰淇淋'
    next();
});
// app.use((req,res,next)=>{
//     console.log('這裡是中間件2A');
//     next();
// });
app.use((req,res,next)=>{
    console.log('這裡是中間件B');
    next();
});

// app.[Method]
// get,post,put,patch,delete,option,head
// 路由中間件，會對比網址有才會進去，use就直接進去
app.get('/',(req,res,next)=>{
    console.log('這裡是首頁',req.mfee31)
    // req = request,res = response
    res.send('Hello Express123')
});
app.get('/test',(req,res)=>{
    console.log('這裡是test頁1',req.dt)
    // req = request,res = response
    res.send('Hello test 1')
});
app.get('/api',(req,res,next)=>{
    res.json({
        name: 'John',
        age: 18,
      });
    })
// get api 資料庫的資料
    app.get('/api/stocks', async (req, res, next) => {
        // let results = await connection.query('SELECT * FROM stocks');
        // let data = results[0];
      
        let [data] = await pool.query('SELECT * FROM stocks');
        res.json(data);
      });
      




// 放在所有路由中間件的後面
// 因為前面都比不到就是沒有這個網址
// 因為中間件照程式碼順序而達成的效果
app.use((req,res,next)=>{ 
    console.log('這裡是404')
    // req = request,res = response
    res.send('No website')
});

// port 只要大於20??都行
app.listen(3001,()=>{
    console.log('Server running at port 3001!')
});