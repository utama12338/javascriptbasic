
function tocelsius (){

  let fahrenhait = parseFloat(document.getElementById("inputc").value)
  let celsuis = 0
  celsuis = celsuis+(fahrenhait -32)*5/9

  console.log(celsuis)
  document.getElementById("foutput").innerHTML = celsuis+"C"
}





        
// let rount = prompt ("จะเล่นกี่รอบ")
// document.getElementById("rount").innerHTML="จำนวนรอบที่เล่น = "+rount

// for (let i =1; i<=rount; i++){
//    let user = prompt("Heat and tail")
   
//    let cheke =""
 
//    if(Math.floor(Math.random() * 10) <=4 ){
//     cheke ="Head"
//     ///Heat
//    }else{
//     //tail
//     cheke ="tail"
//    }
//    if(user == cheke){
//     alert("ตอบถูก")
//    }else{
//     alert("ตอบผิด")
//    }
//    document.getElementById("answer").innerHTML+=`คำตอบเรารอบที่ ${i} = ${user} คำตอบที่ถูกต้อง = ${cheke}<br>`
  
// } 





// // let heatandtail = ["Head","tial"] 
// // let result = Math.floor(Math.random() * heatandtail.length )
// // console.log(result)

// // let result1 = heatandtail[result]

// // console.log(result1)



// // let words = ["หัว", "ก้อย"];

// // // สุ่มตำแหน่งของคำ
// // let randomIndex = Math.floor(Math.random() * words.length);

// // // คำที่สุ่มได้
// // let randomWord = words[randomIndex];

// // // พิมพ์คำที่สุ่มได้
// // console.log(randomWord);






// // let age = 0
// // //  age = prompt("กรุณากรอกชื่อและที่อยู่");

// // if (age <= 12 && age >= 1) {
// //   let age = document.getElementById("age");
// //   age.innerHTML = "ดูไม่ได้ อายุไม่ถึง 13";
// // } else if (age >= 13 && age <= 99) {
// //   let age = document.getElementById("age");
// //   age.innerHTML = "นายดูคริปโป๊ได้ อายุเกิน 13";
// // } else if (age >= 100) {
// //   let age = document.getElementById("age");
// //   age.innerHTML = "อายุแก่สัสๆ";
// // } else {
// //   let age = document.getElementById("age");
// //   age.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/sgQiJ-8Ra8c?si=h0gfMRjhZM-mYHbQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>";
// // }

// // // เลือก element ที่ต้องการแสดงข้อมูลและเปลี่ยนเนื้อหา
// // let ma = Math.floor(Math.random() * 100000);
// // ma += infoputUser;
// // console.log(ma);

// // document.getElementById("numberbuy").innerText=("เลขที่คุณซื้อ" + infoputUser)

// // const me = document.getElementById("info").innerText=Math.floor(Math.random() * 100000,"asdas")
