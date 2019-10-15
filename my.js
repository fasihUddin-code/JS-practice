var myObj = {
    firstName: "fasih",
    lastName: "uddin",
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

document.getElementById("demo").innerHTML = myObj.fullName();