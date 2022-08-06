class ElectricGadget{
    constructor(volt){
        this.volt = volt || 220;
    }
    plugOut(){
        console.log("Прибор выключен")
    }
}
  
class Desklamp extends ElectricGadget{
    constructor(brand, color, amps, volt){
        super(volt);
        this.item = 'desklamp';
        this.brand = brand;
        this.color = color;
        this.amps = amps;
        this.getWatt = amps * this.volt;
    }
    plugIn(){
        console.log(`Прибор включен, потребляемая мощность ${this.getWatt} Вт`)
    }
}
  
const venera = new Desklamp('venera', 'red', 2, 230)
venera.plugIn()
console.log(venera)
  
class Laptop extends ElectricGadget{
    constructor(brand, os, amps, volt){
        super(volt);
        this.item = 'laptop';
        this.brand = brand;
        this.os = os;
        this.amps = amps;
        this.getWatt = amps * this.volt;
    }
    plugIn(){
      console.log(`Прибор включен, потребляемая мощность ${this.getWatt} Вт`)
    }
}
  
const lenovo = new Laptop('lenovo', 'linux', 3)
lenovo.plugOut()
console.log(lenovo)
