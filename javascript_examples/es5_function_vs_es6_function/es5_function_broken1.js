var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
      return this.names.map(function(pet){
        // "this" refers to the function instead of the pets object.
        return `${this.owner} knows an awesome dog named ${pet}.`
      });
    }
  };
  
  var res = pets.description();
  console.log(res);
  /*
  -- output [ 'undefined knows an awesome dog named Baron.',
  'undefined knows an awesome dog named Chief.',
  'undefined knows an awesome dog named Axel.' ]
*/
