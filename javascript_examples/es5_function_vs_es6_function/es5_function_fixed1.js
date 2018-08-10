var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
      return this.names.map(function(pet){
        // bind "this" to the description function, which belongs to pets object execution context
        return `${this.owner} knows an awesome dog named ${pet}.`
      }.bind(this));
    }
  };
  
  var res = pets.description();
  console.log(res);
  /*
-- output 
['Jason knows an awesome dog named Baron.',
  'Jason knows an awesome dog named Chief.',
  'Jason knows an awesome dog named Axel.' ]*/
