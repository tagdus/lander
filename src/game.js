var can = document.getElementById("game");
var con = can.getContext("2d");

can.width = can.height * (can.clientWidth / can.clientHeight);

var ar = [];
var dt = 1;

for (var i = 0; i < 1000; i++) {
  ar.push({
    x_: Math.random() * can.width,
    y_: Math.random() * can.height,
    vm: Math.random() * 0.1,
    va: Math.random() * 2 * Math.PI,
    cl: "#" + Math.floor(Math.random() * 16777215).toString(16)
  });
}

function draw() {
  con.clearRect(0, 0, can.width, can.height);

  for (var i = 0; i < ar.length; i++) {
    ar[i].va = ar[i].va + (Math.random() - 0.5) * Math.PI * 0.1;
    ar[i].vm = ar[i].vm + (Math.random() - 0.5) * 0.01;

    ar[i].x_ = (ar[i].x_ + ar[i].vm * Math.cos(ar[i].va) + can.width ) % can.width;
    ar[i].y_ = (ar[i].y_ + ar[i].vm * Math.sin(ar[i].va) + can.height) % can.height;

    //calcola la forza di tutti su ciascuno
    //for(var i = 0; i < ar.length; i++)
    //  for(var j = 0; j < i)
    //    if(i != j)
    //      fm=k*d(i,j)
    //      ar[i].ax=+fm*cos(fa)
    //      ar[i].ay=+fm*sin(fa)
    //      ar[j].ax=-fm*cos(fa)
    //      ar[j].ay=-fm*sin(fa)
    //
    //      //ff=k*m1*m2/dd
    //      //aa=ff/mm
    //      //dv=aa*dt
    //      //dx=(1/2)*dv*dt+vv*dt=(1/2)*aa*dt^2+vv*dt
    //
    //      ar[i].vx=+ar[i].ax*cos(fa)
    //      ar[i].vy=+ar[i].ay*sin(fa)
    //      ar[j].vx=-ar[j].ax*cos(fa)
    //      ar[j].vy=-ar[j].ay*sin(fa)




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
