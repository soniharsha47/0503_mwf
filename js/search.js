var emaill = '@grrasg.com';

var checkvalid = emaill.search("@");
console.log(checkvalid);

var preindex = emaill.search("@")-1
var postindex = emaill.search("@")+1

if(checkvalid<0){
    console.log("Please use valid email with @")
}
else if(emaill[preindex]==undefined){
    console.log('Not valid')
}
else if(emaill[postindex]==undefined){
    console.log("Not valid")
}

// telephone & url