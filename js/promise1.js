
// return new Promise(executor);
// executor:function(resolve,reject){}

let doWorkPromise = function (job, timer) {
    // 1. 物件->new
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let now = new Date();
            resolve(`完成工作 ${job} at ${now.toISOString()}`);
        }, timer);
    });

};

let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);
// 刷牙 3 秒鐘 -> 吃早餐 5 秒鐘 -> 寫功課 3 秒鐘
let brushPromise=doWorkPromise("刷牙",3000);
brushPromise.then((data)=>{
    console.log(data)
    return doWorkPromise("吃早餐",5000);
    // 使用return 來呼叫下一個非同步
}).then((data)=>{
    console.log(data)
    return doWorkPromise("做功課",3000);
    // 使用return 來呼叫下一個非同步
}).then((data)=>{
    console.log(data)
    
    // 使用return 來呼叫下一個非同步
}).catch((error)=>{
    console.log(error)
})

