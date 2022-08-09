class Tarea {
    constructor (nombre, descripcion){
        this.nombre= nombre
        this.descripcion= descripcion
        this.estado= "No finalizado"
    }
}

let tareas = []

if(localStorage.getItem('tareas')){
    tareas = JSON.parse(localStorage.getItem('tareas'))
} else {
    localStorage.setItem('tareas', JSON.stringify('tareas'))
}

const formTareas = document.getElementById("formTareas")
const divTareas = document.getElementById("divTareas")
const botonTareas = document.getElementById("botonTareas")

formTareas.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    let datForm = new FormData(e.target)

    let tarea =new Tarea(datForm.get('nombre'), datForm.get('descripcion'))

    tareas.push(tarea)

    console.log(tareas)

    localStorage.setItem('tareas', JSON.stringify(tareas))

    formTareas.reset()

    
})
botonTareas.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('tareas'))

    arrayStorag.forEach((tarea, indice) => {
        divTareas.innerHTML += `
        <div class="card text-white bg-dark mb-3" id = "tarea${indice}" style="max-width: 20rem;" margin = 4px;" >
            <div class="card-header">${tarea.nombre}</div>
            <div class="card-body">
                <h4 class="card-title">${tarea.descripcion}</h4>
                <button class = "btn btn-danger">Eliminar Tarea</button>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        `
        
        

        
        
    });
})