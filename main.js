// (function (){
//     console.log("function Run")
// })();


function message(age, callBack){
    if(age > 20 && age < 50){
        callBack(true)
    }else{
        callBack(false);
    }
}

message(21, function(check){
    if(check){
        console.log("You Are Allowed!!");
    }else{
        console.log("You Are Not Allowed!!");
    }

})