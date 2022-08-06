function ElectricGadget(){
    this.volt = 220;
}
  
ElectricGadget.prototype.plugIn = function(){
    console.log("Прибор включен")
}
  
ElectricGadget.prototype.plugOut = function(){
    console.log("Прибор выключен")
}
  
function Desklamp(brand, color, amps){
    this.name = 'Desklamp';
    this.brand = brand;
    this.color = color;
    this.amps = amps;
    this.getWatt = function(){
      console.log(`Потребляемая мощность ${amps*this.volt} Вт`)
    }
}
    
function Laptop(brand, os, amps){
    this.name = 'laptop';
    this.brand = brand;
    this.os = os;
    this.amps = amps;
    this.getWatt = function(){
      console.log(`Потребляемая мощность ${amps*this.volt} Вт`)
    }
}
    
Desklamp.prototype = new ElectricGadget()
Laptop.prototype = new ElectricGadget()
  
const venera = new Desklamp('venera', 'red', 2)
venera.plugIn()
venera.getWatt()
console.log(venera)
  
const lenovo = new Laptop('lenovo', 'linux', 3)
lenovo.plugOut()
console.log(lenovo)
