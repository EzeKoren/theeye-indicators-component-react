function Indicadores(){   
      
  this.crearPizza = function(type){
      if (type === "PizzaSuprema") {
          return PizzaSuprema();
      }else if (type === "PizzaVegetariana"){
          return PizzaVegetariana();
      };
  }

  function Pizza(ing,precio){
      this.Ingredientes =ing;
      this.Precio = precio;
  }

  function PizzaSuprema(){
      return new Pizza(["jamon","queso","salsa","carne"],
                  150);
  }

  function PizzaVegetariana(){
      return new Pizza(["tomate","queso","salsa"],
          150);
  }
}
