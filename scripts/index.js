class Activity {
    constructor(id, title, description, imgUrl) {
       this.id = id;
       this.title = title;
       this.description = description;
       this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor(){
        this.activities = []
        this.id = 0;
    }

    getAllActivities(){
         return this.activities
    }
    createActivity(title, description, imgUrl){
        const activity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(activity);
        this.id++;
    }
    deleteActivity(){
        this.activities = this.activities.filter((activity) => activity.id !== id)
    }
}

const misActividades = new Repository();
misActividades.createActivity(
    "Mi primera actividad",
    "Descripción",
    "./img.png"
);

misActividades.createActivity(
    "Mi segunda actividad",
    "Descripción",
    "./img.png"
) 

const lista = misActividades.getAllActivities();
console.log(lista);

const listaFiltrada = misActividades.deleteActivity(1);
console.log(listaFiltrada)

const lista2 = misActividades.getAllActivities();
console.log(lista2);

let arr = [1,2,3,4]

const nuevaLista = arr.filter((n) => {
    return n * 2;
});
console.log(nuevaLista)
