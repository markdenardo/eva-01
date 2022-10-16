let x = 1
let f = ()=> Math.sin(time*3) * (Math.random() < 0.06 ? (x^=1) : x)
s0.initImage('https://raw.githubusercontent.com/markdenardo/eva-01/main/angels(0)_0.png')
src(s0).out(o0)
osc(10,0.1,10).modulate(osc(f,f,f),0.5).out(o1)
src(o1).blend(o0,()=>Math.PI).pixelate(100,100).out(o2)
render(o2)
