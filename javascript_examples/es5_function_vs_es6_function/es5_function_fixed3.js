var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
      return this.names.map(function(pet){
        return `${this.owner} knows an awesome dog named ${pet}.`
      }, pets); // pass pets as "this" context as an argument to the map function. Tells map() which should the "this" object
    }
  };
  
  var res = pets.description();
  console.log(res);
  /*
-- output 
['Jason knows an awesome dog named Baron.',
  'Jason knows an awesome dog named Chief.',
  'Jason knows an awesome dog named Axel.' ]*/
