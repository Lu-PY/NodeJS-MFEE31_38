const express =require('express');
const app =express();
// 中間件
// 要是use沒有next收到往下會卡住，如果有res.send就會停駐
app.use((req,res,next)=>{
    console.log('這裡是中間件1');
    next();
});
app.use((req,res,next)=>{
    console.log('這裡是中間件2A');
    next();
});
app.use((req,res,next)=>{
    console.log('這裡是中間件B');
    next();
});

// app.[Method]
// get,post,put,patch,delete,option,head
// 路由中間件，會對比網址有才會進去，use就直接進去
app.get('/',(req,res,next)=>{
    console.log('這裡是首頁')
    // req = request,res = response
    res.send('Hello Express')
});
app.get('/test',(request,response)=>{
    console.log('這裡是test頁1')
    // req = request,res = response
    response.send('Hello test 1')
});
// 放在所有路由中間件的後面
// 因為前面都比不到就是沒有這個網址
// 因為中間件照程式碼順序而達成的效果
app.use((req,res,next)=>{ 
    console.log('這裡是404')
    // req = request,res = response
    response.send('No website')
});

// port 只要大於20??都行
app.listen(3001,()=>{
    console.log('Server running at port 3001!')
});