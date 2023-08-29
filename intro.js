var i=5
document.write("hello world"+"<br>")
console.log(i)
//alert("504:ERROR THIS PAGE HAS ERROR!")
var name='sri '
name+='ram'
name+=' kushal'
document.write("This is "+name+"<br>")
// document.write(name.length)
var a=10.5
var a='DELL'
var k=false
document.write(a)
document.write(typeof(a)+"<br>")
document.write(typeof(k))
var ar=['Ram','shiva','sasi','alisha','karthik']
document.write("<br>"+ar)
document.write("<br>"+"Datatype of array:"+ typeof(ar))
document.write("<br>"+"The length of the array is:"+ar.length)
document.write("<br>"+"To access particular element in array:"+ar[0])
document.write("<br>"+"To access particular elements in array:"+ar[2]+","+ar[4])
var obj={
	'name':'Ram',
	'rollno':'1266',
	'branch':'IT'
}
console.log(obj.name,obj.rollno)
console.log(obj)
// document.write("<br>"+obj.name )
// document.write("<br>"+obj)
var arr=[{
	'name':'sriRam',
	'rollno':'66',
	'branch':'IT'
},
{
	'name':'bharath',
	'rollno':'1238',
	'branch':'IT'
},
{
	'name':'sasi',
	'rollno':'1221',
	'branch':'IT'
},
{
	'name':'surya',
	'rollno':'0554',
	'branch':'cse'
},
{
	'name':'alisha',
	'rollno':'0563',
	'branch':'cse'
}
]
console.log(arr[0])
console.log(arr[0].name)
console.log(arr[0].rollno)
// console.log(arr[1])
for(var i=0;i<arr.length;i++){
	console.log(i+1,arr[i])
}
for(var i=0;i<arr.length;i++){
	console.log(i+1,arr[i].name)
}
document.write("<br>")
// for(var i=0;i<arr.length;i++){
// 	document.write(i+1,arr[i])
// }
for(var i=0;i<arr.length;i++){
	document.write("<br>",arr[i].name)
}