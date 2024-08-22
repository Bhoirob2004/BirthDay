const a= document.getElementById('home');
a.addEventListener('click',function(){
    a.src='home.jpg';
    confetti({
        particleCount: 400,
        spread: 60,
        origin: { x: 0.8 },
      });
      confetti({
        particleCount: 400,
        spread: 70,
        origin: { x: 0.1 },
      });
      confetti({
        particleCount: 400,
        spread: 70,
        origin: { y: 0.6 },
      });
      
      
})
const b= document.getElementById('resturant');
b.addEventListener('click',function(){
    b.src='res.jpg';
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      confetti({
        particleCount: 400,
        spread: 60,
        origin: { x: 0.8 },
      });
      confetti({
        particleCount: 400,
        spread: 70,
        origin: { x: 0.1 },
      });
})
const c= document.getElementById('burger');
c.addEventListener('click',function(){
    c.src='burger.avif';
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      confetti({
        particleCount: 400,
        spread: 60,
        origin: { x: 0.8 },
      });
      confetti({
        particleCount: 400,
        spread: 70,
        origin: { x: 0.1 },
      });
})
const d= document.getElementById('pizza');
d.addEventListener('click',function(){
    d.src='pizza.jpg';
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      confetti({
        particleCount: 400,
        spread: 60,
        origin: { x: 0.8 },
      });
      confetti({
        particleCount: 400,
        spread: 70,
        origin: { x: 0.1 },
      });
})
const e= document.getElementById('wine');
e.addEventListener('click',function(){
    e.src='wine.jpg';
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      confetti({
        particleCount: 400,
        spread: 60,
        origin: { x: 0.8 },
      });
      confetti({
        particleCount: 400,
        spread: 70,
        origin: { x: 0.1 },
      });
})
const f= document.getElementById('coke');
f.addEventListener('click',function(){
    f.src='coke.jpg';
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      confetti({
        particleCount: 400,
        spread: 60,
        origin: { x: 0.8 },
      });
      confetti({
        particleCount: 400,
        spread: 70,
        origin: { x: 0.1 },
      });
})
const g= document.getElementById('phone');
g.addEventListener('click',function(){
    g.src='phone.jpg';
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      confetti({
        particleCount: 400,
        spread: 60,
        origin: { x: 0.8 },
      });
      confetti({
        particleCount: 400,
        spread: 70,
        origin: { x: 0.1 },
      });
})
const h= document.getElementById('car');
h.addEventListener('click',function(){
    h.src='car.jpg';
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      confetti({
        particleCount: 400,
        spread: 60,
        origin: { x: 0.8 },
      });
      confetti({
        particleCount: 400,
        spread: 70,
        origin: { x: 0.1 },
      });
      console.log('button')
})
const btn= document.getElementById("message");
btn.addEventListener('click',function(){
    const end = Date.now() + 15 * 1000;

// go Buckeyes!
const colors = ["#bb0000", "#ffffff"];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();
})