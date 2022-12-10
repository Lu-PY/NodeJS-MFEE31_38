
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
async function doJob(){
    console.log('等等會暫停一下')
    let result1= await doWorkPromise("刷牙",3000);
    console.log('這是await的結果',result1);
    let result2= await doWorkPromise("吃飯",5000);
    console.log('這是await的結果',result2);
    let result3= await doWorkPromise("睡搞搞",8000);
    console.log('這是await的結果',result3);
}
doJob();
console.log("有個東西被暫停了")
