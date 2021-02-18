const Person = require("../model/person");

module.exports.FindByName = (req, res) => {
  Person.find({name: req.body.name})
      .then(person => res.send(person))
      .catch(err => res.send(err));
}

module.exports.ListPerson = (req, res) => {
  Person.find()
    .then((persons) => res.send(persons))
    .catch((err) => res.send("[]"));
};

module.exports.AddPerson = (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const foods = req.body.foods;

  const person = new Person();
  person.name = name;
  person.age = age;
  person.favoriteFoods = foods;
  person
    .save()
    .then((r) => res.send("L'utilisateur a été ajouté avec succés"))
    .catch((err) => res.send("Il y'a un problème, l'utilisateur n'a pas été ajouté")
    );
};
const validate =(req)=>{
  if (!req.body.name || req.body.length > 20) {
    return 'Name is\'t valid'    
  }
  if (req.body.foods && req.body.foods.length > 5) {
    return 'You couldn\'t put more than 5'
  }
  if (req.body.age && req.body.age < 10 || req.body.age >100) {
    return 'Age must be between 11 and 99!'
  }
  return '';
}