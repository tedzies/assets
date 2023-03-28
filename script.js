// console.log("Hello World");

let data = new Object();

function handleGetFormData(){

    data.nama = document.getElementById("name"),
    data.email = document.getElementById("email"),
    data.city = document.getElementById("city"),
    data.zipCode = document.getElementById("zip-code"),
    data.status = document.getElementById("status")

  return data;
}

function isNumber(strg){
  if(isNaN(strg)){
    return true;
  }
  else{
    return false;
  }
}

function checkBoxIsChecked(){
  let check = handleGetFormData(data.status);
  if(check.checked){
    return true;
  }
  else{
    return false;
  }
}

function validateFormData({objName}){
  if({objName} != null && isNumber(handleGetFormData(data.zipCode)) && checkBoxIsChecked()){
    return true;
  }
  else{
    return false;
  }
}

function submit(){
  let res = validateFormData(handleGetFormData());
  if(res == true){
    document.getElementById("warning").innerHTML = "works";
  }
  else if(res == false){
    document.getElementById("warning").innerHTML = "false";
  }

}
document.getElementById("form1").addEventListener("submit", submit())


console.log(isNumber(handleGetFormData()));