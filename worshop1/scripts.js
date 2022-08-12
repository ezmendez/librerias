/*class Tarea {
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

     
    console.log(tareas)

    localStorage.setItem('tareas', JSON.stringify(tareas))

    formTareas.reset()

    
})
tareas.push(tarea)
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
        
        

        
        
    });*/
const botonArrep = document.getElementById("botonArrep")

botonArrep.addEventListener('click' , () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Estas seguro?',
        text: "Esta acción no se puede revertir!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ok, quiero hacerlo!',
        cancelButtonText: 'No, no quiero hacerlo!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Borrado!',
            'Tus datos fueron borrados.',
            'Realizado'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tus datos se guardaron exitosamente! :)',
            'error'
          )
        }
      })
})

