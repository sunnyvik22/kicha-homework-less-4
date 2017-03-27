
//--------------------------------------------------------------------------
//домашний питомец



class Animal {
   constructor() {
   	  this.paw=4;
   	  }
    eats(){
    	console.log ("Животное питается регулярно");
    }
}

class Cats extends Animal {
    constructor(cover){
    	super ();
    	this.cover =cover;  
    }
    jumps() {
    	console.log ("Любитель запрыгнуть на стол");
    }
    sleep(){
    	console.log ("Спят на всех теплых местах");
    }
}

class MyPets extends Cats {
   constructor(name,color,cover) {
   	 super (cover);
     this.name=name;
     this.color=color;
    }
    play () {
    	console.log (`${this.name} любит играть с клубком`);
    }
}


let pet = new MyPets("Пушок", "рыжий","комочек шерсти");

// вопросы:
// не ясно как передать аргументы в прототипы, что бы не было undefined 
// не получилось в кострукторе Cats создавать еще св-во, без передачи аргумента
