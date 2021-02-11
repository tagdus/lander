var can = document.getElementById("game");
var con = can.getContext("2d");

can.width = can.height * (can.clientWidth / can.clientHeight);

var arr = [];
var a = 0;
var v = 0;

for (var i = 0; i < 50; i++) {
  a = Math.random() * 2 * Math.PI;
  v = Math.random() * 3 - 1;
  v = v * 0.1;
  arr.push({
    x: Math.random() * can.width,
    y: Math.random() * can.height,
    dx: v * Math.cos(a),
    dy: v * Math.sin(a),
    v: v,
    a: a,
    c: "#" + Math.floor(Math.random() * 16777215).toString(16)
  });
}

function draw() {
  con.clearRect(0, 0, can.width, can.height);

  // drawing a circle
  for (var i = 0; i < arr.length; i++) {
    arr[i].a = arr[i].a + (Math.random() - 0.5) * 0.1 * Math.PI;
    //arr[i].v = arr[i].v * (1 + Math.random() - 0.5) * 0.1;
    arr[i].dx = arr[i].v * Math.cos(arr[i].a);
    arr[i].dy = arr[i].v * Math.sin(arr[i].a);

    arr[i].x = (arr[i].x + arr[i].dx) % can.width;
    arr[i].y = (arr[i].y + arr[i].dy) % can.height;

    con.beginPath();
    con.arc(arr[i].x, arr[i].y, 1, 0, 2 * Math.PI);
    con.fillStyle = arr[i].c;
    con.fill();
  }
  requestAnimationFrame(draw);
}

draw();
