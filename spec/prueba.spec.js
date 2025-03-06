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


describe('Activity',() => {
  it('deberia crear una actividad con los atributos', () => {
    const activity = new Activity(0, "Arboles", "I like three", "https://sooluciona.com/wp-content/uploads/2019/01/Diferencias-entre-JPEG-y-JPG.jpg")
 
    expect(activity.id).toBe(0);
    expect(activity.title).toBe("Arboles")
    expect(activity.descripcion).toBe("I like three");
    expect(activity.imgUrl).toBe("https://sooluciona.com/wp-content/uploads/2019/01/Diferencias-entre-JPEG-y-JPG.jpg");
  })

it("deberia ser una clase", () => {
  expect(typeof Activity.prototype.constructor).toBe("function")
  expect(typeof newActivity).toBe("object");
  expect(typeof Activity).toBe("function")
;})
});

describe('Repository', () => {
  let newRepo;
  beforeEach(() => {
    newRepo = new Repository();
  });

it("deberia iniciar con una lista vacia de actividades", () => {
    expect(typeof Repository).toBe("object");
      expect(newRepo.getAllActivities).toBeDefined();
      expect(typeof newRepo.getAllActivities).toBe("function");
      expect(typeof newRepo.createActivity).toBe("function");
      expect(typeof newRepo.deleteActivity).toBe("function");
});

it("deberia iniciar con una lista vacia de actividades", () => {
    expect(newRepo.getAllActivities().length).toBe(0);
  })
});

it("deberia iniciar con una lista vacia de actividades", () => {
  expect(newRepo.getAllActivities().length).toBe(0);
})