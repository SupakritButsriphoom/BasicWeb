const Username = window.prompt("คุณชื่ออะไร?");
if (Username !== null || Username == "") {
  document.getElementById("show-name").innerText = "สวัสดี " + Username;
}
function showInfo() {
  const userAgent = navigator.userAgent;
  window.alert("User agent: " + userAgent);
}
function refreshPage() {
  window.location.reload();
}
function openWebsite() {
  const url = "https://www.google.com";
  window.open(url, "_blank");
}
