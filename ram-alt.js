
//MDN eva set
bpm=333
shape(3).modulate(o0,0.5).repeat(()=>time,1).modulatePixelate(osc(1,1,1)).repeat(Math.PI,time*4).out(o0)
render(o0)
//
src(o0).add(noise(1,1,1),1).out(o1)
render(o1)
//
src(o1).color(10,10,100).modulate(o3).out(o2)
render(o2)
//
shape(3).rotate(()=>Math.sin(time)).repeat(()=>time,1).out(o3)
render(o3)
render(o2)
voronoi(1,1,1).modulate(o0,0.5).repeat(()=>time,1).modulatePixelate(osc(1,1,1)).repeat(Math.PI,time*4).out(o3)
render(o2)
