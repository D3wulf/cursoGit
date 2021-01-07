function Persona(){

    this.nombre = "Mario";
    this.apellido = "Sanchez";
    
}


Persona.prototype.datos= function(){


    console.log ("el señor se llama " + this.nombre + " " + this.apellido);
}

var nene = new Persona();

//console.log(nene);
//console.log(nene.datos());

//funcion anonima
(function(){

var a = 3
function encapsula(){

    a +=20 ;
    
}
encapsula();
console.log( a );


//cuidado que hay un parentesis al final.
})();
//otro tipo de funcion anonima

function ejecutarFuncion (fn){
    fn();

    return true;
}
ejecutarFuncion( function(){

    console.log("funcion anonima ejecutada");
    return 1;
});

//uso de typeof, identifica el tipo de parametro.
//instanceof es para comparar, si x es de tipo y
//se pueden mandar primitivos, objetos o funciones
function identifica (param){
    if (typeof param == "function"){
        param();
    }else{
        console.log(param);

    }
    //devolvera booleano si param es de tipo persona, como le hemos mandado un objeto, retorna false.
    console.log(param instanceof Persona);
    
}

identifica(function(){    console.log(" Soy una funcion!"); });