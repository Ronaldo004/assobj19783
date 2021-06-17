// question:1
// var itemsArray=[
//     {name:"juice",price:"50",quantity:"3"}
    
//     ,{name:"cookie",price:"30",quantity:"9"}
//     ,{name:"shirt",price:"880",quantity:"1"}
//     ,{name:"pen",price:"100",quantity:"2"}
    
// ]
// var pricetot= itemsArray.reduce(function(prev,cur)
// {
//     return prev + cur.price;
   

// },0);
// console.log('tot;',pricetot)
//question 2:
// function form(){
//     var name="Rohan"
//     var lastn="Zahid"
//     var password=23;
//     var gender="Male"
//     var password="Gahis"
//     var country="Pakistan"
//     var city="Karahi"
// }
// if(form.country!==null ){
//     console.log("yes")
// }
// else{
//     alert("Enter country plz");
// }
//  if(form.age!==null ){
//     console.log("yes")
// }
// else{
//     alert("Enter age plz");
// }
// if(form.name.charAt(0).toUpperCase())
// {
//     console.log("ok")
// }
// else{
//     alert("Enter first letter must be upercases")
// }
// if(form.lastn.charAt(0).toUpperCase())
// {
//     console.log("ok")
// }
// else{
//     alert("Enter first letter must be upercases")
// }
// question3
function Student(name,fathern,age,Class){
this.name=name;
this.fathern=fathern;
this.age=age;
this.Class=Class;

}
var stu=new Student("Rohan","Zahid hussain",22,8);
var stu1=new Student("jaffar","Amman",20,8);
var stu2=new Student("shery","nipta",22,8);
console.log(stu);
console.log(stu1);
console.log(stu2);
