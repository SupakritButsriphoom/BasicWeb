const headline = document.getElementsByTagName("h1");
console.log(headline, typeof headline);
headline[3].innerText = "u dead bro?";
const getByclass = document.getElementsByName("font-thai");
console.log(getByclass);
/*const isBreak = window.confirm("you dead man matafakka");
if (isBreak) {
  alert("No, you are not dead yet");
} else {
  alert("yes, you are dead");
}
const c = window.confirm("เปิดลิงค์ไปที่หน้าแรกของเว็บนี้หรือไม่?");
if (c) {
  window.alert(window.location.href);
}*/
const c = window.confirm("กลับบ่");
if (c) {
  window.alert("usser agent: " + screen.width);
}
