// licensed with CC BY-NC-SA 4.0 https://creativecommons.org/licenses/by-nc-sa/4.0/
// neon genesis kubernetes set
// MDN (@markdenardo)

// black_hole - time_dilation
// MDN (@markdenardo)

let rrand = (min, max) => Math.random() * (max - min) + min;
let clamp = (x) => Math.max(0, Math.min(x, 1));
let either = (x,y,w=0.5) => Math.random() > w ? x : y;

perms = 0;
function cM(){navigator.permissions.query({name: 'microphone'}).then((pS)=>{perms = pS.state !== 'denied';});}
cI = window.cI ? cI : 0;clearInterval(cI);cI = setInterval(cM,3000);if(/iPad|iPhone|iPod/.test(navigator.userAgent)) clearInterval(cI);
let x = 0
let nomic = ()=> x = either(clamp(x += rrand(-.05,.12)) , x *= 0.7 )
let yesmic = ()=> a.fft[0];
let f = ()=> perms ? yesmic() : nomic();

const t =(()=>time)
const pi=(()=>Math.random(Math.PI))
const sh=(s,o,m)=>(shape(s).repeat(t,1).kaleid([1,2,3].fast()).scale(pi).rotate(t,0.1).out(o))
const flt=(i,v,o)=>(src(i).scale(v).out(o))
const flt2=(i,m,v,o)=>(src(i).modulate(m).modulatePixelate(noise(v,0.5),100).out(o))

sh(f,o0,o0)
flt(o0,f,o1)
flt(o0,pi,o2)
flt2(o0,o1,f,o3)
render(o3)
//ramiel
shape(3).modulate(o0,0.5).repeat(()=>time,1).modulatePixelate(osc(1,1,1)).repeat(Math.PI,time*4).out(o0)
//
src(o0).add(noise(1,1,1),1).out(o1)
//
src(o1).color(10,10,100).modulate(o3).out(o2)
//
shape(3).rotate(()=>Math.sin(time)).repeat(()=>time,1).out(o3)
render()
//pt. 2
const arr=[1,2,3]
const arr1=(arr.map(n=>1+n))
console.log('arr1',arr1)
const f1=(()=>a.fft[2])
voronoi(1,1,1).color(f1).modulate(o0,Math.PI).out(o0)
shape(arr1).modulatePixelate(osc(1,1,1)).modulate(o1,0.5).add(o0).out(o1)
render()
//
// harmonization rate
let x = 1
let f = ()=> Math.sin(time*3) * (Math.random() < 0.06 ? (x^=1) : x)
s0.initImage('https://raw.githubusercontent.com/markdenardo/eva-01/main/angels(0)_0.png')
s1.initImage('https://raw.githubusercontent.com/markdenardo/eva-01/main/eva-02.png')
s2.initImage('https://raw.githubusercontent.com/markdenardo/eva-01/main/angel_(0)_7.png')
s3.initImage('https://raw.githubusercontent.com/markdenardo/eva-01/main/angel_(1)_0.png')
src(s0).out(o0)
osc(10,0.1,10).modulate(osc(f,f,f),0.5).out(o1)
src(o1).blend(o0,()=>Math.PI).out(o2)
render(o2)
