function setAlert() {
  let intervalId = 0;
  {
    intervalId = setInterval(function () {
      const isBreak = confirm("พักสายตาสักหน่อยไหม?");
      if (isBreak) {
        clearInterval(intervalId);
        alert("ขอบคุณที่พักสายตา");
      }
    }, 2 * 60 * 1000);
  }
}
