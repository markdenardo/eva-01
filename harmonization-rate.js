//black rainbow
// MDN

let x = 1
let f = ()=> Math.sin(time*3) * (Math.random() < 0.06 ? (x^=1) : x)
osc(10,0.1,10).modulate(osc(f,f,f),0.5).out(o0)
render(o0)
