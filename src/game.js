var can = document.getElementById("game");
var con = can.getContext("2d");

can.width = can.height * (can.clientWidth / can.clientHeight);

var ar = [];
var an = 0;
var vl = 0;

for (var i = 0; i < 50; i++) {
  an = Math.random() * 2 * Math.PI;
  vl = Math.random() * 3 - 1;
  vl = vl * 0.1;
  ar.push({
    x_: Math.random() * can.width,
    y_: Math.random() * can.height,
    dx: vl * Math.cos(an),
    dy: vl * Math.sin(an),
    vl: vl,
    an: an,
    cl: "#" + Math.floor(Math.random() * 16777215).toString(16)
  });
}

function draw() {
  con.clearRect(0, 0, can.width, can.height);

  for (var i = 0; i < ar.length; i++) {
    ar[i].an = ar[i].an + (Math.random() - 0.5) * 0.1 * Math.PI;
    //ar[i].vl = ar[i].vl * (1 + Math.random() - 0.5) * 0.1;
    ar[i].dx = ar[i].vl * Math.cos(ar[i].an);
    ar[i].dy = ar[i].vl * Math.sin(ar[i].an);

    ar[i].x_ = (ar[i].x_ + ar[i].dx) % can.width;
    ar[i].y_ = (ar[i].y_ + ar[i].dy) % can.height;

    //calcola la forza di tutti su ciascuno
    //for(var i=0;i<ar.length;i++)
    //  for(var j=0,var ar[i].fx=0;j<ar.length;j++)
    //    if(i!=j) {
    //      ar[i].fx =+ Math.cos(ang(i,j)) *  k / dst(i,j);
    //      ar[i].fy =+ Math.sin(ang(i,j)) *  k / dst(i,j);k / dist(i,j);
    //    }


    con.beginPath();
    con.arc(ar[i].x_, ar[i].y_, 1, 0, 2 * Math.PI);
    con.fillStyle = ar[i].cl;
    con.fill();
  }
  requestAnimationFrame(draw);
}

draw();
