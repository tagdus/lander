var can = document.getElementById("game");
var con = can.getContext("2d");

can.width = can.height * (can.clientWidth / can.clientHeight);

var ar = [];
var va = 0;
var vm = 0;

for (var i = 0; i < 50; i++) {
  va = Math.random() * 2 * Math.PI;
  vm = Math.random() * 3 - 1;
  vm = vm * 0.1;
  ar.push({
    x_: Math.random() * can.width,
    y_: Math.random() * can.height,
    dx: vm * Math.cos(va),
    dy: vm * Math.sin(va),
    vm: vm,
    va: va,
    cl: "#" + Math.floor(Math.random() * 16777215).toString(16)
  });
}

function draw() {
  con.clearRect(0, 0, can.width, can.height);

  for (var i = 0; i < ar.length; i++) {
    ar[i].va = ar[i].va + (Math.random() - 0.5) * 0.1 * Math.PI;
    //ar[i].vm = ar[i].vm * (1 + Math.random() - 0.5) * 0.1;
    ar[i].dx = ar[i].vm * Math.cos(ar[i].va);
    ar[i].dy = ar[i].vm * Math.sin(ar[i].va);

    ar[i].x_ = (ar[i].x_ + ar[i].dx) % can.width;
    ar[i].y_ = (ar[i].y_ + ar[i].dy) % can.height;

    //calcola la forza di tutti su ciascuno
    //for(var i = 0, var fx = 0, var fy = 0; i < ar.length; i++){
    //  for(var j = 0; j < ar.length; j++)
    //    if(i != j) {
    //      fx =+ Math.cos(ang(i, j)) *  k / dst(i, j);
    //      fy =+ Math.sin(ang(i, j)) *  k / dst(i, j);
    //    }
    //  ar[i].fm = modul(fx,fy);
    //  ar[i].fa = angle(fx,fy);
    //  ar[i].vm = ??;
    //  ar[i].va = ??;
    //  ar[i].dm = ??;
    //  ar[i].da = ??;
    //  ar[i].dx = ar[i].dm * Math.cos(ar[i].da);
    //  ar[i].dy = ar[i].dm * Math.sin(ar[i].da);
    //}


    con.beginPath();
    con.arc(ar[i].x_, ar[i].y_, 1, 0, 2 * Math.PI);
    con.fillStyle = ar[i].cl;
    con.fill();
  }
  requestAnimationFrame(draw);
}

draw();
