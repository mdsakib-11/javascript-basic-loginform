function dataFunc(){

    var userName = document.querySelector("#username").value;
    var userPassword =document.querySelector("#password").value;


  if (userName === "mdsakib" && userPassword === "1253") {
    	alert("Wellcome! You Are Loged In Sucesfully.");
  }

  else if (userName === "mdsakib" && userPassword === "") {
    	alert("Please Input Your Password!");
  }

  else if (userName === "" && userPassword === "1253") {
    	alert("Please Input Your UserName!");
  }


  else if (userName !== "mdsakib" && userPassword === "1253") {
    	alert("Your UserName Is Incorrect!")
  }

  else if (userName === "mdsakib" && userPassword !== "1253") {
    	alert("Your Password Is Incorrect!")
  }

  else if (userName === "" && userPassword === "") {
    	alert("Please Input Your UserName & Password!");
  }

  else{
  		alert("Pls Go Back Your Home! You are not registered!");
  }


}
   