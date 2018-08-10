var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
      return this.names.map(pet => {   // An arrow function does not have its own this; the this value of the enclosing execution context is used. 
        return `${this.owner} knows an awesome dog named ${pet}.`
      });
    }
  };
  
  var res = pets.description();
  console.log(res);
  /*
-- output 
['Jason knows an awesome dog named Baron.',
  'Jason knows an awesome dog named Chief.',
  'Jason knows an awesome dog named Axel.' ]*/
