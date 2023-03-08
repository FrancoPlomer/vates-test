
const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']

export const formatDatte = ( date ) => {
    const formatter = new Date(date)
    return `${ formatter.getDate() } de ${ months[ formatter.getMonth() ] }, ${ formatter.getFullYear() }`
}

