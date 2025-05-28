console.log(Math.random())
console.log(Math.random()*10)
console.log(Math.round(Math.random()*10))

var li = ['Grras',"John","Mike","Malti","Merry","Suresh"];

var index = Math.round(Math.random()*(li.length-1))

console.log(li[index]);

var otp = '' ;
for(i=0;i<6;i++){
    otp += Math.round(Math.random()*9)
    console.log(otp)
}
console.log(otp);