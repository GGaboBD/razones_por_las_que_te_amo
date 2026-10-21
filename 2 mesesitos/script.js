/* ===================================================
   INTERACTIVIDAD: ESTRELLAS, NEBULOSAS Y AUDIO CÓSMICO
   OPTIMIZADO PARA PANTALLAS MÓVILES (TOUCH Y RENDIMIENTO)
   =================================================== */

document.addEventListener('DOMContentLoaded', () => {
    initGalaxyCanvas();
    initAudioSynthesizer();
    initInteractiveLove();
});

/* ----------------------------------------------------
   1. CANVAS DE GALAXIA MORADA & ESTRELLAS TITILANTES
   ---------------------------------------------------- */
function initGalaxyCanvas() {
    const canvas = document.getElementById('galaxy-canvas');
    const ctx = canvas.getContext('2d');

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Ajuste dinámico de tamaño si rota la pantalla del móvil
    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        generateStars();
    });

    const numStars = Math.min(Math.floor((width * height) / 3000), 180);
    let stars = [];

    function generateStars() {
        stars = [];
        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5 + 0.3,
                baseAlpha: Math.random() * 0.7 + 0.3,
                twinkleSpeed: Math.random() * 0.03 + 0.01,
                alphaOffset: Math.random() * Math.PI * 2,
                color: Math.random() > 0.4 ? '#e9d5ff' : '#fde047'
            });
        }
    }

    generateStars();

    // Estrellas fugaces ocasionales
    let shootingStar = null;

    function spawnShootingStar() {
        shootingStar = {
            x: Math.random() * width * 0.8,
            y: Math.random() * height * 0.4,
            length: Math.random() * 80 + 50,
            speed: Math.random() * 8 + 6,
            opacity: 1
        };
    }

    setInterval(() => {
        if (!shootingStar && Math.random() > 0.3) {
            spawnShootingStar();
        }
    }, 4500);

    let time = 0;
    function render() {
        time += 0.02;
        ctx.clearRect(0, 0, width, height);

        // Fondo degradado cósmico profundo
        const bgGrad = ctx.createRadialGradient(
            width * 0.5, height * 0.3, 20,
            width * 0.5, height * 0.5, Math.max(width, height)
        );
        bgGrad.addColorStop(0, '#1d093d');
        bgGrad.addColorStop(0.5, '#0e041e');
        bgGrad.addColorStop(1, '#05020c');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, width, height);

        // Nebulosa morada etérea en movimiento lento
        const nebGrad = ctx.createRadialGradient(
            width * 0.6 + Math.sin(time * 0.5) * 40,
            height * 0.4 + Math.cos(time * 0.5) * 30,
            10,
            width * 0.5,
            height * 0.4,
            width * 0.75
        );
        nebGrad.addColorStop(0, 'rgba(147, 51, 234, 0.16)');
        nebGrad.addColorStop(0.5, 'rgba(107, 33, 168, 0.08)');
        nebGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = nebGrad;
        ctx.fillRect(0, 0, width, height);

        // Dibujar estrellas
        for (let s of stars) {
            const currentAlpha = s.baseAlpha + Math.sin(time * s.twinkleSpeed * 10 + s.alphaOffset) * 0.25;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
            ctx.fillStyle = s.color;
            ctx.globalAlpha = Math.max(0.1, Math.min(1, currentAlpha));
            ctx.fill();
        }

        // Dibujar estrella fugaz si existe
        if (shootingStar) {
            ctx.save();
            ctx.globalAlpha = shootingStar.opacity;
            ctx.strokeStyle = '#f5d0fe';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(shootingStar.x, shootingStar.y);
            ctx.lineTo(shootingStar.x + shootingStar.length, shootingStar.y + shootingStar.length * 0.5);
            ctx.stroke();
            ctx.restore();

            shootingStar.x += shootingStar.speed;
            shootingStar.y += shootingStar.speed * 0.5;
            shootingStar.opacity -= 0.02;

            if (shootingStar.opacity <= 0) {
                shootingStar = null;
            }
        }

        ctx.globalAlpha = 1;
        requestAnimationFrame(render);
    }

    render();
}

/* ----------------------------------------------------
   2. GENERADOR DE MÚSICA AMBIENTAL CÓSMICA (Web Audio API)
   Sin enlaces externos rotos, suena hermoso y relajante
   ---------------------------------------------------- */
function initAudioSynthesizer() {
    const audioBtn = document.getElementById('audio-toggle');
    let audioCtx = null;
    let isPlaying = false;
    let loopTimeout = null;

    // Escala celestial pentatónica relajante (en frecuencias Hz)
    const notes = [261.63, 293.66, 329.63, 392.00, 440.00, 523.25, 587.33, 659.25];

    function playCelestialChord() {
        if (!isPlaying || !audioCtx) return;

        // Seleccionar 2 notas armónicas
        const note1 = notes[Math.floor(Math.random() * notes.length)];
        const note2 = notes[Math.floor(Math.random() * notes.length)] * 0.5;

        playTone(note1, 3.5);
        playTone(note2, 4.0);

        // Programar el siguiente acorde de manera fluida
        const nextTime = Math.random() * 2200 + 1800;
        loopTimeout = setTimeout(playCelestialChord, nextTime);
    }

    function playTone(freq, duration) {
        try {
            const osc = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

            // Ataque suave y desvanecimiento progresivo
            gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 1.2);
            gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

            osc.connect(gainNode);
            gainNode.connect(audioCtx.destination);

            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (e) {
            console.warn(e);
        }
    }

    audioBtn.addEventListener('click', () => {
        if (!audioCtx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            audioCtx = new AudioContext();
        }

        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }

        if (!isPlaying) {
            isPlaying = true;
            audioBtn.classList.add('playing');
            audioBtn.querySelector('.audio-text').textContent = 'Pausar música';
            playCelestialChord();
        } else {
            isPlaying = false;
            audioBtn.classList.remove('playing');
            audioBtn.querySelector('.audio-text').textContent = 'Música cósmica';
            if (loopTimeout) clearTimeout(loopTimeout);
        }
    });
}

/* ----------------------------------------------------
   3. BOTÓN INTERACTIVO Y EFECTO DE CORAZONES
   ---------------------------------------------------- */
function initInteractiveLove() {
    const loveBtn = document.getElementById('love-btn');
    const loveMessage = document.getElementById('love-message');

    loveBtn.addEventListener('click', (e) => {
        loveMessage.classList.remove('hidden');

        // Disparar lluvia de destellos y corazones
        const rect = loveBtn.getBoundingClientRect();
        const startX = rect.left + rect.width / 2;
        const startY = rect.top + rect.height / 2;

        for (let i = 0; i < 18; i++) {
            createFloatingElement(startX, startY);
        }
    });

    function createFloatingElement(x, y) {
        const el = document.createElement('div');
        el.className = 'floating-heart';
        
        const symbols = ['💜', '✨', '💜', '💫', '💜'];
        el.textContent = symbols[Math.floor(Math.random() * symbols.length)];

        // Desplazamiento horizontal aleatorio
        const tx = (Math.random() - 0.5) * 160;
        el.style.setProperty('--tx', `${tx}px`);

        el.style.left = `${x + (Math.random() - 0.5) * 40}px`;
        el.style.top = `${y}px`;
        el.style.fontSize = `${Math.random() * 14 + 18}px`;

        document.body.appendChild(el);

        setTimeout(() => {
            el.remove();
        }, 1800);
    }
}
