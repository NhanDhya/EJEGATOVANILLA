let turno = false;
let victoria = false;
let contador = 0;


const handleClick = (event) => {
 const {id} = event.target;
 const div = document.getElementById(id);


 if(div.innerText === "" && victoria === false ) {
    div.innerText = turno ? "O" : "X";
    verificarVictoria();
    turno = !turno;
   }
};


function verificarVictoria() {
    contador++;
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

    const forma1 = div1.innerText === div2.innerText &&
        div1.innerText === div3.innerText &&
        div1.innerText !== "";

    const forma2 = div4.innerText === div5.innerText &&
        div4.innerText === div6.innerText &&
        div4.innerText !== "";

    const forma3 = div7.innerText === div8.innerText &&
        div7.innerText === div9.innerText &&
        div7.innerText !== "";

    const forma4 = div1.innerText === div4.innerText &&
        div1.innerText === div7.innerText &&
        div1.innerText !== "";

    const forma5 = div2.innerText === div5.innerText &&
        div2.innerText === div8.innerText &&
        div2.innerText !== "";

    const forma6 = div3.innerText === div6.innerText &&
        div3.innerText === div9.innerText &&
        div3.innerText !== "";

    const forma7 = div1.innerText === div5.innerText &&
        div1.innerText === div9.innerText &&
        div1.innerText !== "";

    const forma8 = div3.innerText === div5.innerText &&
        div3.innerText === div7.innerText &&
        div3.innerText !== "";


    if (forma1 ||
        forma2 ||
        forma3 ||
        forma4 ||
        forma5 ||
        forma6 ||
        forma7 ||
        forma8) {
        victoria = true;
        alert("ganó alguien");
    } else {
        if (contador === 9) {
            alert("La partida termino en empate");
        }
    }
}; 




const reload = () => {
    const div1 = document.getElementById(1);
    const div2 = document.getElementById(2);
    const div3 = document.getElementById(3);
    const div4 = document.getElementById(4);
    const div5 = document.getElementById(5);
    const div6 = document.getElementById(6);
    const div7 = document.getElementById(7);
    const div8 = document.getElementById(8);
    const div9 = document.getElementById(9);

   div1.innerText ="";
   div2.innerText ="";
   div3.innerText ="";
   div4.innerText ="";
   div5.innerText ="";
   div6.innerText ="";
   div7.innerText ="";
   div8.innerText ="";
   div9.innerText ="";
   
   
    turno = false;
   victoria = false;
    contador = 0;
}

function nuevapartida(event) {
    const { id } = event.target;
    const div = document.getElementById(id);
    const t = turno;
    if (t) {
        document.getElementById("x").innerText = "Turno jugador X";
        document.getElementById("x").className = "activo";
        document.getElementById("o").innerText = "Jugador O";
        document.getElementById("o").className = "noActivo";
    } else {
        document.getElementById("o").innerText = "Turno jugador O";
        document.getElementById("o").className = "activo";
        document.getElementById("x").innerText = "Jugador X";
        document.getElementById("x").className = "noActivo";
    }
    if (div.innerText == "" && gan == false) {
        div.innerText = turno ? "O" : "X";
        cont++;
        ganador();
        turno = !turno;


    }
}


window.onload = () => {
    turnoJugador()
}

const turnoJugador = () => {
    const Jugador1 = document.getElementById("Jugador1");
    const Jugador2 = document.getElementById("Jugador2");

if (turno === false && victoria === false) {
    Jugador1.style.border = "7px solid #000c";
    Jugador1.style.boxShadow = "rgb:238, 54, 133, 0.6";
    Jugador2.style.border = "7px";
    Jugador2.style.boxShadow = "rgb:238, 54, 133, 0.6";
}else if (turno === true && victoria === false) {
    Jugador1.style.border = "0px solid #00c";
    Jugador1.style.boxShadow = "0 0 00px #00c";
    Jugador2.style.border = "0px";
    Jugador2.style.boxShadow = "0 0 0px #00c";
}else {
    Jugador1.style.border = "0px";
    Jugador1.style.boxShadow = "0 0 0px #00c";
    Jugador2.style.border = "0px";
    Jugador2.style.boxShadow = "0 0 0px #00c"
}
}



