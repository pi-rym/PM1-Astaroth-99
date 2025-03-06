class Activity {
    constructor(id, title, description, imgUrl) {
       this.id = id;
       this.title = title;
       this.description = description;
       this.imgUrl = imgUrl;
    }
}

class Repository {
    constructor() {
        this.activities = [];
        this.id = 0;
    }

    getAllActivities() {
        return this.activities;
    }

    createActivity(title, description, imgUrl) {
        const activity = new Activity(this.id, title, description, imgUrl);
        this.activities.push(activity);
        this.id++;
    }

    deleteActivity(id) {
        this.activities = this.activities.filter((activity) => activity.id !== Number(id));
    }
}

const misActividades = new Repository();

misActividades.createActivity("Mi primera actividad", "Descripción", "./img.png");
misActividades.createActivity("Mi segunda actividad", "Descripción", "./img.png");

const createActivityCard = (activity) => {
    const { id, title, description, imgUrl } = activity;
    
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    const img = document.createElement('img');
    const btn = document.createElement('button');

    div.id = id;
    h3.innerText = title;
    p.innerText = description;
    img.src = imgUrl;
    img.alt = `Imagen de ${title}`;
    btn.innerText = "Eliminar";

    div.classList.add('activity-card'); // Aquí está corregido

    btn.addEventListener("click", () => {
        misActividades.deleteActivity(id);
        renderActivities(misActividades);
    });

    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(img);
    div.appendChild(btn);

    return div;
};

const renderActivities = (repository) => {
    const container = document.getElementById('activities');
    container.innerHTML = "";
    
    const cards = repository.getAllActivities().map(activity => createActivityCard(activity));
    cards.forEach((card) => container.appendChild(card));
};

renderActivities(misActividades);

const form = document.getElementById('activity-form');

const handler = (event) => {
    event.preventDefault();
    
    const title = document.getElementById('title').value.trim();
    const description = document.getElementById('descripcion').value.trim();
    const imgUrl = document.getElementById('urlimg').value.trim();

    if (!title || !description || !imgUrl) {
        alert("Todos los campos son requeridos");
        return;
    }

    misActividades.createActivity(title, description, imgUrl);
    renderActivities(misActividades);

    // Limpiar el formulario después de agregar
    form.reset();
};

form.addEventListener("submit", handler);
