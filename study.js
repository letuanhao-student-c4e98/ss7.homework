//  bai 1.


//1.d
//2.a
//3.c
//4.b

 // bai 2.
 
const time = setInterval(myTime, 5000);

//bai 3 

// 3.1. no
// 3.2. yes

// bai4

let li = document.getElementsByTagName("li");
console.log(li[1]);
for (let i = 0; i < lE.length; i++) {
  console.log(li[i]);
}
// bai5
let div = document.getElementsByTagName("div");
console.log(div[2]);

for(let i = 0;i<5;i++){
    console.log(div[i])
}


// bai7

//7.1 event.target se in ra 2 element la <button id ="button1"></button> va <button id ="button2"></button>
//7.2
let inputElement = document.querySelector("input");
inputElement.onkeydown = function (e) {
  console.log(e.key);
}; //  se in ra  thu minh vua nhap vao input

//Bai 8 

function alo(){
    alert(" Hello !!!")
};

alo();

//Bai9

function a(name,wish){
    alert(`My name is ${name}, and i wish ${wish}`)
};

a("Hao", "have a girl friend ");

//Bai10

function b(name, wish) {
  if (wish == undefined) {
    alert("khong co dieu uoc");
  } else {
    alert(`toi ten la ${name} dieu uoc cua toi la ${wish}`);
  }
}
b("Hao");



