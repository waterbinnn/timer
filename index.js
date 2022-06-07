/**
 * 
 * 1. 버튼 클릭했을때 이미지 바뀌게 
2. 00 일때 다죽은 버튼 -> sec 누르게
3. sec누르면 10 올라가고 스타트, 리셋 버튼 살아남 
4. 카운트 세지면 start -> pause 버튼으로 변경되게
5. 0이 되면 버튼 다시 죽고 alert Finish 
 */

const start = document.querySelector("btn-start");
const reset = document.querySelector("btn-reset");
const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

sec.addEventListener("click", () => {
  sec.textContent = "10";
  start.src = "assets/image/start-default.svg";
  reset.src = "assets/image/reset-default.svg";
});
