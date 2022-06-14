
//4
// var arr=["Nokia","Samsung","Apple","Sony","Huawei"];
//  for (let i = 0; i < arr.length; i++) {
    
//     document.write(arr[i]+"<br>");
    // document.getElementById("demo").textContent=arr.join(" ");

//  }

 //5
 
// var fruits=["apple","banana","mango","orange","strawberry"];
// for (let i = 0; i < fruits.length; i++) {
    
//    document.write(fruits[i]+"<br>");
   // document.getElementById("demo").textContent=arr.join(" ");

// }
document.write("<br>");

//6
// var size=prompt("Enter Number of items.(1,2,3..");

// var usr=[];
// for(var j=0;j<=size;j++){
//    usr[j]=prompt("Enter value at index "+j);
// }
// document.write("Number of items:"+size+"<br>");

// for (let k = 0; k <usr.length; k++) {
    
//    document.write(usr[k]+"<br>");
   

// }

//7
// document.write("Counting <br>");
// for(var i=0;i<16;i++){
//    document.write(i+",");
// }

// document.write(" Reverse Counting <br>");
// for(var j=10;j>=1;j--){
//    document.write(j+",");
// }

// document.write("Even <br>");
// for(var k=0;k<=20;k+2){
//    document.write(k);
// }

// document.write("Odd <br>");
// for(var k=1;k<=20;k+2){
//    document.write(k);
// }

//8
// var items=["cake","applepie","cookie"," chips","patties"];
// var bake=prompt("What do you want to order ?");
// bake=bake.toLocaleLowerCase();
// var res=parseInt(items.indexOf(bake));
// if(items.indexOf(bake)>=0){
//          document.write(bake+" is available at index:"+res);
// }

// else{
     
//          document.write("Not available");
   
// }

//9
// var lr=[24,53,78,91,12];
// var lar=lr[0];

// for(var i=0;i<lr.length;i++){

//     if(lar<lr[i]){
//         lar=lr[i];
//     }
// }

// document.write("Largest number is: "+lar);

//10
// var sl=[24,53,78,91,12];
// var small=sl[0];

// for(var i=0;i<sl.length;i++){

//     if(small>sl[i]){
//         small=sl[i];
//     }
// }
// document.write("Smallest number is: "+small);

//12
// var num=5;
// for(var p=1;p<=20;p++){

//     document.write(5*p+",");
// }

//13


// let mount=[
//   {Students:"Ali",Score:1658},
//   {Students:"Sami",Score:1212},
//   {Students:"Taha",Score:5455},
//   {Students:"Inam",Score:7455}
// ];

// function generateTableHead(table,data){
//   let thead = table.createTHead();
//   let row = thead.insertRow();
//   for (let key of data) {
//     let th = document.createElement("th");
//     let text = document.createTextNode(key);
//     th.appendChild(text);
//     row.appendChild(th);
// }}

// function generateTable(table, data) {
//   for (let element of data) {
//     let row = table.insertRow();
//     for (key in element) {
//       let cell = row.insertCell();
//       let text = document.createTextNode(element[key]);
//       cell.appendChild(text);
//     }
//   }
// }

// let table = document.querySelector("table");
// let data = Object.keys(mount[0]);
// generateTableHead(table, data);
// generateTable(table, mount);

//14
// var sc=[12,45,3,22,34,50];
// var stop=prompt("At which value you want to stop?");
// var temp=[];
// for(var i=0;i<sc.length;i++){
//   temp.push(sc[i]);
//   if(stop==sc[i]){

//     break;

//    }
//   }

//   for(var j=0;j<temp.length;j++){

//     document.write(temp[j]+" ");
//   }

//15
// var nest=[[1,2,3] , [4,5,6] , [7,8,9]];
// for(var i=0;i<3;i++){
//   for(var j=0;j<3;j++){
//     document.write(nest[i][j]+" ");
//   }
//   document.write("<br>");
// }

//16
// var dec=parseFloat(prompt("Enter a number:"));
// for(;dec>=0;dec-=0.5){
//   document.write(dec+" ");
// }
