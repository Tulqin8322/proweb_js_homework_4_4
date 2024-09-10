var quit = true;
while (quit) {
  var son_t_j = prompt("Juft yoki toq ekanligini aniqlash uchun son kiriting yoki chiqish uchun 'q' bosing");
  if (son_t_j === "q") {
    quit = false;
  } else {
    while (isNaN(son_t_j) || son_t_j == "") {
      son_t_j = +prompt("Iltimos juft yoki toq ekanligini aniqlash uchun son kiriting");
    }
    if (son_t_j % 2 == 1) {
      alert(son_t_j + " toq son");
    } else {
      alert(son_t_j + " juft son");
    }
  }
}

var son_daraja = 1;
var son = +prompt("Darajaga oshiriladigan sonni kiriting");
while (isNaN(son) || son == "") {
  son = +prompt("Iltimos darajaga oshiriladigan sonni kiriting");
}
var daraja = +prompt("Sonning darajasini kiriting");
while (isNaN(daraja) || daraja == "") {
  daraja = +prompt("Iltimos sonning darajasini kiriting");
}
for (let i = 0; i < daraja; i++) {
  son_daraja = son_daraja * son;
}
alert(son + " ning " + daraja + " si " + son_daraja + " ga teng");

var a;
var chessBord = "";
a = +prompt("Kataklar sonini kiriting");
while (isNaN(a) || a == "") {
  a = +prompt("Iltimos kataklar sonini kiriting");
}
for (let i = 0; i < a; i++) {
  for (let j = 0; j < a; j++) {
    if (i == 0 || j == 0 || (i == j) | (i == a - 1) || j == a - 1) {
      chessBord += "⬛";
    } else {
      chessBord += "⬜";
    }
  }
  console.log(chessBord);
  chessBord = "";
}
