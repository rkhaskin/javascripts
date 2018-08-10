var pets = {
    names: ['Baron', 'Chief', 'Axel'],
    owner: 'Jason',
    description: function(){
      // save "this" into another variable and use another variable to reference pets object
      var self = this;
      return this.names.map(function(pet){
        // "self" points to pets object
        return `${self.owner} knows an awesome dog named ${pet}.`
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
