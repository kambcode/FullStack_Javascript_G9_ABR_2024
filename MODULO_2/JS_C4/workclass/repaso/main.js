const diaDeSemana = prompt("Digita un dia de la semana");
const hora = Number(prompt("Digita una hora, hora militar"));

if((diaDeSemana === "lunes" || diaDeSemana === "martes" || diaDeSemana === "miercoles" || diaDeSemana === "jueves" ||
    diaDeSemana === "viernes") && (hora >= 9 && hora <= 17)){
        document.write("La tienda esta abierta")
    } else {
        document.write("La tienda esta cerrada")
    }