function verificarObjetivoReps(ejercicio, repsRealizadas, repsObjetivo) {
    if (repsRealizadas >= repsObjetivo) {
        return `¡Felicidades! Has alcanzado tu objetivo de ${repsObjetivo} repeticiones en ${ejercicio}.`;
    } else {
        return `Te faltan ${repsObjetivo - repsRealizadas} repeticiones para alcanzar tu objetivo en ${ejercicio}. ¡Sigue así!`;
    }
}


const ejerciciosDisponibles = ["sentadillas", "press de banca", "peso muerto", "dominadas"];


let ejercicioSeleccionado = prompt("¿Qué ejercicio realizaste hoy? (sentadillas, press de banca, peso muerto, dominadas)");


let repsRealizadas = parseInt(prompt("¿Cuántas repeticiones hiciste?"));


let repsObjetivo = 0; 
for (let i = 0; i < ejerciciosDisponibles.length; i++) {
    if (ejercicioSeleccionado === ejerciciosDisponibles[i]) {
        
        if (ejercicioSeleccionado === "sentadillas") {
            repsObjetivo = 50;
        } else if (ejercicioSeleccionado === "press de banca") {
            repsObjetivo = 40;
        } else if (ejercicioSeleccionado === "peso muerto") {
            repsObjetivo = 30;
        } else if (ejercicioSeleccionado === "dominadas") {
            repsObjetivo = 20;
        }
        break; 
    }
}


if (repsObjetivo > 0) {
    let resultado = verificarObjetivoReps(ejercicioSeleccionado, repsRealizadas, repsObjetivo);
    console.log(resultado);
} else {
    console.log("Musculos trabajados del dia");
}
