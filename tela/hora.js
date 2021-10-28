let hora = document.getElementById("horario");
    function horaUpdate() {
    let valHora = new Date();
    let h=valHora.getHours();
    let m=valHora.getMinutes();
    let s=valHora.getSeconds();
    hora.innerHTML = h + ":" + m;
    setTimeout('horaUpdate()',500);
    }
    
    horaUpdate();