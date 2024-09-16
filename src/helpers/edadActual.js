export const edadActual = (fechaActual,fechaNacimiento)=>{
    const horas = Math.floor((fechaActual.getTime() - fechaNacimiento.getTime() )/1000/60/60);
    const diasHoras = ((fechaActual.getTime() - fechaNacimiento.getTime() )/1000/60/60/24).toFixed(2);
    const dias = Math.floor((fechaActual.getTime() - fechaNacimiento.getTime() )/1000/60/60/24);
    const horasRestantes = Math.floor((diasHoras - dias) * 24) ;

    if (horas < 24) {
        return `${horas} hora${horas != 1 ? 's' : ''}`;
    } else if(horas >=24 ){
        return `${dias} dia${dias != 1 ? 's' :  ''}, ${horasRestantes} hora${horasRestantes != 1 ? 's' :  ''}`;
    }
}