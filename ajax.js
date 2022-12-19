function getHome(){
    var xmlhttp = new XMLHttpRequest();// creating object of XMLHttpRequest class,where xmlhttp is object name
    // XMLHttpRequest is name of a class used to communicate backend to frontend

    xmlhttp.open("GET","home.html");// generating url based on get method
    xmlhttp.send();// it is sending a request to above generated url

    xmlhttp.onreadystatechange = function() { // keep calling itself and checking wheather request send or not
      if (this.readyState == 4 && this.status == 200) { // 4 means request is dispatched,200 means,server received your request
        document.getElementById("container").innerHTML = this.responseText;// data from backend
      }
    };
    
}

function getAbout(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("container").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","about.html");
    xmlhttp.send();
}

function getContact(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("container").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","contact.html");
    xmlhttp.send();
}

function getService(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("container").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","sevice.html");
    xmlhttp.send();
}

function getProduct(){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("container").innerHTML = this.responseText;
      }
    };
    xmlhttp.open("GET","product.html");
    xmlhttp.send();
}

function printData(data){
    document.getElementById("container").innerHTML=data;
}

function getItem(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var itemArray =JSON.parse(this.responseText);//json to array
      var data = "<h1>Item List </h1>";
      itemArray.map((name,index)=>{
        data = data + "<p class='item'>" + name + "</p>";
    })
    document.getElementById("container").innerHTML=data;
    }
  };
  xmlhttp.open("GET","item.json");
  xmlhttp.send();
}

function getCompany(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var itemArray =JSON.parse(this.responseText);//json to array
      var data = "<h1>Company List </h1>";
      itemArray.map((name,index)=>{
        data = data + "<p class='item'>" + name + "</p>";
    })
    document.getElementById("container").innerHTML=data;
    }
  };
  xmlhttp.open("GET","company.json");
  xmlhttp.send();
}

function getComment(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var itemArray =JSON.parse(this.responseText);//json to array
      var data = "<h1>CommentList </h1>";
      itemArray.map((comment,index)=>{
        data = data + "<p>" + comment.body + "</p>";
    })
    document.getElementById("container").innerHTML=data;
    }
   };
      
      
  xmlhttp.open("GET","https://jsonplaceholder.typicode.com/comments");

  xmlhttp.send();
}