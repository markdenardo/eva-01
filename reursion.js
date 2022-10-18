//play w harm.mov from desktop
s0.initScreen()
s1.initImage('https://raw.githubusercontent.com/markdenardo/eva-01/main/eva-02 .png')
src(s0).add(src(s1).scale(()=>Math.random(Math.PI))).out(o0) 
render(o0)
