// for(i=0;i<10;i++){
//     console.log(i)
// }

var data = [
    {name:"John",Age:25,Location:"Ahmedabad",Gender:"Male"},
    {name:"Malti",Age:27,Location:"Jaipur",Gender:"Female"},
    {name:"Nick",Age:45,Location:"Mumbai",Gender:"Male"},
]

var choice  = "Male"
for(i=0;i<data.length;i++){
    // console.log(data[i])
    if(data[i]['name']==choice | data[i]['age']==choice | data[i]['Location']==choice | data[i]['Gender']==choice ){
        console.log(data[i])
    }
}