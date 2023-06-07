(function () {
var custUserId = pageHeaderJsonData.userInfo.id;
var url = "https://pmsalesdemo8.successfactors.com/Login/Authenticate?userId="+custUserId;
var id = null;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      console.log("1"+xhttp.responseText);
      var custResult = xhttp.responseText.substring(xhttp.responseText.split("^"));
      console.log("2"+custResult[0]);
      if(custResult[0]=="S"){
      id = xhttp.responseText.substring(xhttp.responseText.indexOf('S^') + 2, xhttp.responseText.length);
      console.log("3"+id);
window.open(id);
      }   
      if(custResult[0]=="F"){
      alert("You don't have persmission to access the One Time Time Management. Pleases contact the administrator.");
      }
   }
};

xhttp.open("GET", url, true);
xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");
xhttp.send();
})();







var localData = decodeURIComponent(localStorage.getItem("PPmcart"))
var localJsonData = JSON.parse(localData);
var items = localJsonData.value.items;
