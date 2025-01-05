// Creamos variables:
// 
// - objetivo: distancia en cm que quiero
// - velocidad: velocidad a la que quiero que se mueva
// - error: error entre mi objetivo y la medida del sensor. Al iniciar es 0.
// 
//       error = objetivo - medición
// 
// - corrección: la velocidad que debe corregir cada motor para llegar a la distancia objetivo. Al iniciar es 0.
// - kp: constante que controla la "fuerza" de la corrección. Si es 0 no corrige nada.
// 
//       corrección = kp x error
let objetivo = 20
let velocidad = 25
let error = 0
let correcion = 0
let kp = 1
basic.forever(function () {
    error = objetivo - PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm)
    correcion = kp * error
    neZha.setMotorSpeed(neZha.MotorList.M1, velocidad + correcion)
    neZha.setMotorSpeed(neZha.MotorList.M1, velocidad - correcion)
})
