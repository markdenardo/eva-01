bpm=2
let x = 1
let f = ()=> Math.sin(time*3) * (Math.random() < 0.06 ? (x^=1) : x)
s0.initImage('https://raw.githubusercontent.com/markdenardo/eva-01/main/angel_(0)_7.png')
src(s0).modulateScrollY(o0,f.smooth()).scale(0.5,0.5).out(o0)
src(s0).blend(o0,0.1).out(o1)
render(o1)
