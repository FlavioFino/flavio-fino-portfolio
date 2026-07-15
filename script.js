/* Signature hero element: a restrained "digital rain" effect. 
Kept subtle (low opacity, slow speed, faded out via CSS mask) so it reads 
as atmosphere rather than a full Matrix-screensaver pastiche. */
(function () {
  const canvas = document.getElementById('rain-canvas');
  const ctx = canvas.getContext('2d');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let columns, drops;
  const fontSize = 15;
  const chars = '01';

  function setup() {
    canvas.width = canvas.offsetWidth * devicePixelRatio;
    canvas.height = canvas.offsetHeight * devicePixelRatio;
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    columns = Math.floor(canvas.offsetWidth / fontSize);
    drops = new Array(columns).fill(0).map(() => Math.random() * -50);
  }

  function draw() {
    ctx.fillStyle = 'rgba(10, 13, 11, 0.08)';
    ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
    ctx.font = fontSize + 'px monospace';

    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      const y = drops[i] * fontSize;
      ctx.fillStyle = 'rgba(53, 214, 124, 0.55)';
      ctx.fillText(char, i * fontSize, y);

      if (y > canvas.offsetHeight && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i] += 0.4;
    }
  }

  window.addEventListener('resize', setup);
  setup();

  if (!reducedMotion) {
    setInterval(draw, 60);
  } else {
    draw();
  }
})();