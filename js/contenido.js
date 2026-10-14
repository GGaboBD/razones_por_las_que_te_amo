
const frasesDeAnimo = [
    "Si alguna vez sientes que el día pesa o dudas de tu fuerza, recuerda esto: eres la persona más maravillosa que conozco, admiro cada paso que das y mi corazón siempre será tu refugio. Nunca te rindas, mi niña.",
    "Cada vez que mires esta pantalla, recuerda que tu sonrisa tiene el poder de iluminar mi mundo y que todo tu esfuerzo vale la pena. Eres inteligente, fuerte y única. Estoy profundamente orgulloso de ti, mi preciosa.",
    "No importa cuán difícil parezca el camino hoy, recuerda que no tienes que enfrentar nada sola. Admiro tu fortaleza, tu ternura y tus metas. Respira hondo y sigue adelante: lo vas a lograr, mi bonita.",
    "Para la niña más hermosa que han visto mis ojos: tu luz es inagotable y tu corazón es un remanso de paz. Que nunca se te olvide lo increíble que eres y cuánto te adoro en cada una de tus versiones, mi solecito.",
    "Si hoy necesitas un respiro en medio del cansancio, aquí tienes mi abrazo sincero y la certeza de que eres lo más valioso de mi vida. Confía en ti tanto como yo confío en ti, mi lucecita.",
    "Los días difíciles no definen tu camino; tu constancia, tu dulzura y tu corazón noble sí lo hacen. Eres mi mayor orgullo y el motivo por el que creo en lo extraordinario. No te rindas jamás, mi luz.",
    "Pase lo que pase, ten siempre presente que eres mi lugar favorito en el mundo. Creo en ti con toda mi alma, admiro cada meta que persigues y siempre estaré a tu lado para celebrar tus triunfos, mi preciosa.",
    "Cuando sientas que la rutina o el estudio pesan demasiado, haz una pausa y respira con calma. Eres brillante, dedicada y capaz de superar cualquier reto que se ponga enfrente, mi bonita.",
    "Si en algún momento dudas de lo lejos que puedes llegar, mírate a través de mis ojos: eres tenaz, valiente y admirable en todo sentido. Jamás olvides el poder que tienes, mi solecito.",
    "No tienes que resolverlo todo en un solo día ni exigirte la perfección; avanzar paso a pasito también cuenta. Estoy inmensamente orgulloso de tu perseverancia, mi niña.",
    "Que el cansancio de hoy no opaque la grandeza de todo lo que estás construyendo. Todo tu esfuerzo rendirá frutos y yo estaré siempre aquí para aplaudir cada uno de tus logros, mi lucecita.",
    "Tu dedicación es inspiradora y tu mente es maravillosa. Cuando sientas que las fuerzas escasean, apóyate en mí y recuerda que eres infinitamente más fuerte de lo que crees, mi preciosa.",
    "Incluso en las jornadas más pesadas o grises, tu nobleza y tu esencia siguen intactas. Eres la persona más talentosa que conozco; confía en tu proceso, mi luz.",
    "Recuerda que pase lo que pase afuera, conmigo siempre tendrás un espacio de calma, comprensión y abrazos infinitos. Lo estás haciendo excelente, mi bonita.",
    "Tu esfuerzo silencioso de cada día tiene un valor incalculable. Nunca dejes que un momento difícil te haga olvidar lo extraordinaria y capaz que eres, mi niña.",
    "Para esa personita que ilumina mis días con solo existir: levanta la mirada, confía en tu preparación y sigue adelante con paso firme. Nada puede detenerte, mi solecito.",
    "Sé cuánto le entregas a tus metas y lo duro que trabajas por lo que quieres. Eres mi mayor inspiración y no tengo duda alguna de que vas a triunfar, mi preciosa.",
    "En los días en que el camino se sienta empinado, recuerda que no caminas sola; aquí estoy para sostenerte la mano y recordarte siempre de qué estás hecha, mi lucecita.",
    "Tu inteligencia, tu disciplina y tu ternura son una combinación imparable. Respira profundo, toma un momento para ti y sigue conquistando tus sueños, mi luz.",
];

const razonesDeAmor = [
    "Porque eres la niña más preciosa que han visto mis ojos.",
    "Porque tu sonrisa tiene el poder de cambiar por completo mi día.",
    "Porque tus mejillas llenan de ternura mi corazón.",
    "Porque tus ojos tienen un brillo único que me enamora cada vez que te veo.",
    "Porque me fascina la forma en que sonríes cuando te sientes verdaderamente feliz.",
    "Porque tu mirada transmite una paz inmensa sin necesidad de pronunciar una sola palabra.",
    "Porque verte reír es uno de los mayores regalos de mi vida.",
    "Porque tu risa es contagiosa, espontánea y mi sonido favorito en el mundo.",
    "Porque incluso cuando me hablas de tus estudios y no entienda nada, me pareces la mujer más hermosa y admirable.",
    "Porque posees una belleza auténtica que no se compara con nada en la historia ni en el mundo.",
    "Porque eres infinitamente hermosa, incluso en esos días en los que tú dudas de serlo.",
    "Porque adoro cada facción y cada detalle de tu rostro.",
    "Porque tus expresiones al hablar son tiernas, memorables y llenas de vida.",
    "Porque haces que quiera mirarte durante horas, días, meses, años y toda mi vida.",
    "Porque cada vez que te veo pienso en lo inmensamente afortunado y feliz que soy a tu lado.",
    "Porque tu sonrisa tiene la capacidad de iluminar todo a tu alrededor.",
    "Porque me encantan tus gestos cotidianos y la delicadeza de tus reacciones.",
    "Porque me cautiva verte alegre, radiante y llena de energía.",
    "Porque incluso cuando estás seria me pareces preciosa, y siempre velaré por tu tranquilidad.",
    "Porque para mí no existe una versión de ti que no sea hermosa; te amo en cada una de tus formas.",
    "Porque admiro la elegancia natural de tu forma de caminar.",
    "Porque me encanta contemplarte cuando te concentras profundamente en lo que haces.",
    "Porque me fascina verte arreglada con tanto esmero para nuestras citas, aun en planes sencillos.",
    "Porque también me encantas en tus momentos más relajados y al natural.",
    "Porque cualquier ropa que uses termina viéndose perfecta en ti y siempre logras sonrojarme.",
    "Porque tienes una belleza interior que supera con creces cualquier aspecto superficial.",
    "Porque tu voz es mi música predilecta; con solo escucharla ya soy la persona más feliz.",
    "Porque podría escucharte hablar durante horas enteras y siempre seguiré emocionado.",
    "Porque me llena de ternura ver cómo te brillan los ojos cuando me cuentas algo con ilusión.",
    "Porque hasta tus pequeñas manías y detalles únicos me parecen encantadores.",
    "Porque te ríes con dulzura de mis tonterías y llenas de calidez mis jornadas.",
    "Porque tienes el don de hacerme reír y calmar cualquier inquietud.",
    "Porque posees una forma muy tuya de hacerme sentir la persona más especial del planeta.",
    "Porque a tu lado no tengo que fingir nada; contigo puedo ser completamente yo.",
    "Porque me brindas la seguridad y la libertad de mostrarme vulnerable y sincero.",
    "Porque me haces sentir querido y cuidado en cada pequeño instante.",
    "Porque me haces sentir valorado, importante y escuchado.",
    "Porque contigo experimento una paz que no encuentro en ningún otro lugar.",
    "Porque estar a tu lado se siente exactamente como llegar a casa.",
    "Porque contigo me siento el ser más amado del universo.",
    "Porque tus abrazos transmiten el alivio y la calidez de un chocolate caliente en una noche de invierno.",
    "Porque me hace inmensamente feliz la simple cercanía de tu compañía.",
    "Porque compartir el tiempo contigo hace que cualquier momento valga la pena.",
    "Porque no necesitamos planes extraordinarios para crear instantes inolvidables.",
    "Porque hasta una tarde tranquila contigo se transforma en un recuerdo precioso.",
    "Porque tienes el don de convertir los días comunes en momentos mágicos.",
    "Porque despiertas en mí el anhelo de vivir millones de nuevas experiencias juntos.",
    "Porque quiero recorrer los lugares más hermosos del mundo de tu mano.",
    "Porque anhelo llenar una vida entera de memorias a tu lado y solo contigo.",
    "Porque disfruto seguir descubriendo facetas y detalles nuevos de ti cada día.",
    "Porque admiro profundamente a la personita noble, sensible y dedicada que eres.",
    "Porque tienes un corazón generoso, compasivo y dulce.",
    "Porque tu afecto es genuino, leal y reconfortante.",
    "Porque tu lucidez y tu inteligencia me asombran día con día.",
    "Porque eres especial de una manera que las palabras difícilmente logran abarcar.",
    "Porque eres única en el mundo y nadie se compara a ti.",
    "Porque tu personalidad tiene una gracia que me cautiva en todo momento.",
    "Porque posees una manera muy particular y sensible de comprender las cosas del mundo.",
    "Porque valoro y disfruto escuchar tus opiniones e ideas.",
    "Porque todo aquello que cruza por tu mente me resulta importante e interesante.",
    "Porque tu bienestar y tus sentimientos son una prioridad constante en mi vida.",
    "Porque conocer lo que alegra tu corazón es una de mis mayores satisfacciones.",
    "Porque me emociona conocer cada uno de tus anhelos y proyectos personales.",
    "Porque deseo con todo mi ser verte triunfar y ver cumplido cada uno de tus sueños.",
    "Porque me encanta observar la pasión con la que defiendes las cosas que amas.",
    "Porque tus metas reflejan tu perseverancia y tu nobleza.",
    "Porque reconozco y admiro el esfuerzo silencioso que entregas a diario.",
    "Porque me llena de orgullo todo lo que has construido con dedicación.",
    "Porque eres infinitamente más fuerte y capaz de lo que muchas veces crees.",
    "Porque sigues adelante con valentía incluso cuando las cosas se complican.",
    "Porque tu entereza ante los desafíos es digna de admiración.",
    "Porque me inspiras a ser una versión más atenta, madura y bondadosa de mí mismo.",
    "Porque tu presencia me motiva a crecer y soñar en grande a tu lado.",
    "Porque aprendo de tu sensibilidad y prudencia cada día.",
    "Porque me importas en cada mínimo detalle de tu bienestar.",
    "Porque admiro la tenacidad con la que buscas alcanzar lo que te propones.",
    "Porque me entusiasma verte avanzar con determinación hacia tu vocación.",
    "Porque quiero estar en primera fila para aplaudir y celebrar cada uno de tus logros.",
    "Porque en los días en que las cosas no salgan como planeabas, seré tu mayor apoyo.",
    "Porque aspiro a ser la persona en cuyos brazos siempre encuentres seguridad y aliento.",
    "Porque quiero recordarte que jamás tendrás que afrontar las dificultades sola.",
    "Porque cuidar de ti es un compromiso que nace de lo más profundo de mi ser.",
    "Porque me nace preguntarte cómo estás y escucharte con atención sincera.",
    "Porque me importa que descanses plenamente y que duermas bien.",
    "Porque me importa que te alimentes con calma y te cuides con cariño.",
    "Porque me encanta saber cómo se desarrolló tu día, de inicio a fin.",
    "Porque disfruto recordarte constantemente lo especial y amada que eres.",
    "Porque pensar en pequeños detalles para sorprenderte alegra mi corazón.",
    "Porque siempre busco la manera de arrancarte una sonrisa espontánea.",
    "Porque a lo largo del día cualquier detalle me recuerda inmediatamente a ti.",
    "Porque no necesito un motivo extraordinario para tenerte presente en mis pensamientos.",
    "Porque hay melodías cuyas notas parecen escritas para evocar tu recuerdo.",
    "Porque los lugares que compartimos quedan impregnados de tu calidez.",
    "Porque el aroma de las flores frescas me recuerda la pureza de tu presencia.",
    "Porque ante cada noticia bonita en mi vida, la primera persona a quien quiero contarle eres tú.",
    "Porque cuando veo algo que te ilusionaría, de inmediato dibujo una sonrisa pensándote.",
    "Porque atesoro cada momento compartido como un regalo invaluable.",
    "Porque cada memoria a tu lado ocupa un rincón sagrado en mi alma.",
    "Porque los instantes más sencillos adquieren un significado inmenso si estás tú.",
    "Porque me conmueve recordar el camino que hemos recorrido hasta encontrarnos.",
    "Porque quiero seguir escribiendo capítulos hermosos a tu lado.",
    "Porque escuchar que me amas renueva mi serenidad y mi gratitud.",
    "Porque recibir un mensaje tuyo en medio de una rutina pesada me alegra el día.",
    "Porque me llena de ternura la sinceridad de tus muestras de cariño.",
    "Porque valoro cuando te tomas el tiempo de contarme tus impresiones cotidianas.",
    "Porque me agrada profundamente que busques conversar y compartir conmigo.",
    "Porque me haces sentir correspondido, valorado y seguro en este vínculo.",
    "Porque me compartes tus pensamientos más honestos y sinceros.",
    "Porque confías en mí y esa confianza es un lazo que protejo con devoción.",
    "Porque me permites conocer la intimidad y nobleza de tu interior.",
    "Porque esa complicidad sincera entre los dos es mi mayor tesoro.",
    "Porque quiero ser esa persona con quien siempre puedas comunicarte sin reservas.",
    "Porque cualquier historia que me relates, por pequeña que sea, merece mi atención.",
    "Porque me importan tus preocupaciones y deseo ayudarte a aligerarlas.",
    "Porque tus alegrías se convierten al instante en mis propias celebraciones.",
    "Porque en tus momentos de tristeza estaré ahí con paciencia y ternura.",
    "Porque tus miedos no me distancian; al contrario, deseo tenderte la mano para superarlos.",
    "Porque tus sueños son el motor de un futuro que quiero respaldar siempre.",
    "Porque te quiero de verdad en todas tus emociones, facetas y etapas.",
    "Porque mi intención no es solo acompañarte cuando todo marcha bien, sino sobre todo cuando la vida sea difícil.",
    "Porque tu lado tierno me conmueve y despierta mi mayor delicadeza.",
    "Porque me encanta cuando buscas un abrazo sincero y te refugias en mí.",
    "Porque tus expresiones espontáneas de cariño son irreemplazables.",
    "Porque tu ilusión genuina ante las cosas sencillas llena de luz todo el ambiente.",
    "Porque logras despertar al niño alegre y despreocupado que hay en mí.",
    "Porque verte entusiasmada por algo que te apasiona me causa una alegría profunda.",
    "Porque tu bienestar es un pilar fundamental en mi vida diaria.",
    "Porque tu sonrisa tiene el efecto inmediato de hacerme sonreír a mí también.",
    "Porque cuando estás en paz y contenta, siento que el mundo está en equilibrio.",
    "Porque quiero brindarte razones constantes para mantener encendida esa alegría.",
    "Porque proteger tu felicidad y tu serenidad es mi propósito diario.",
    "Porque anhelo ser testigo de tus mayores hitos y celebrarlos con orgullo.",
    "Porque quiero acompañarte en cada fecha trascendente de tu vida.",
    "Porque sueño con abrazarte fuerte cuando digas con satisfacción: 'lo conseguí'.",
    "Porque me enorgullece verte perseverar y cosechar los frutos de tu dedicación.",
    "Porque deseo que mires hacia atrás en el futuro y reconozcas mi apoyo incondicional.",
    "Porque quiero formar parte de las páginas más nobles de tu historia.",
    "Porque me siento honrado de que seas la protagonista de la mía.",
    "Porque nuestras conversaciones pueden prolongarse durante horas sin agotarse.",
    "Porque nos divertimos cambiando de tema con naturalidad y complicidad.",
    "Porque compartimos un sentido del humor que nos pertenece solo a nosotros.",
    "Porque puedo ser totalmente auténtico y sentirme querido sin juicios.",
    "Porque nos entendemos con una simple mirada en medio de cualquier lugar.",
    "Porque hemos edificado un lenguaje propio lleno de cariño y recuerdos compartidos.",
    "Porque la confianza mutua que hemos forjado es sólida y transparente.",
    "Porque decirte que te amo cientos de veces nunca se siente suficiente para lo que experimento.",
    "Porque expresar el cariño que siento por ti jamás me resulta excesivo ni rutinario.",
    "Porque cada jornada me obsequia un motivo nuevo para agradecer que existas.",
    "Porque encuentro en tu personalidad un sinfín de virtudes por admirar.",
    "Porque siento que una vida entera no alcanzará para terminar de fascinarme contigo.",
    "Porque quiero ver florecer y consolidarse nuestro amor con el paso del tiempo.",
    "Porque deseo crecer como ser humano a la par de tu camino.",
    "Porque cuando cierro los ojos e imagino mi porvenir, siempre estás tú a mi lado.",
    "Porque en cada plan a futuro tu presencia es mi mayor anhelo y certeza.",
    "Porque me llena de ilusión planear aventuras y viajes que aún nos aguardan.",
    "Porque quiero admirar amaneceres y atardeceres a tu lado en lugares lejanos.",
    "Porque quiero recorrer montañas, senderos y horizontes abiertos con tu mano en la mía.",
    "Porque deseo conocer ciudades nuevas sintiendo la calidez de tu compañía.",
    "Porque quiero atesorar incontables recuerdos fotográficos de nuestras vivencias.",
    "Porque deseo que tengamos mil anécdotas que recordar con ternura con el paso de los años.",
    "Porque anhelo compartir no solo los momentos extraordinarios, sino la simpleza de los días comunes.",
    "Porque un café o un descanso sencillo se vuelve el mejor de los planes si estás tú.",
    "Porque festejar tu cumpleaños será siempre una de las fechas más importantes de mi año.",
    "Porque quiero conmemorar nuestros logros y aniversarios renovando esta elección.",
    "Porque después de haberte perdido y vuelto a encontrar, entiendo que no quiero volver a soltarte jamás.",
    "Porque eres, sin titubeos, mi persona predilecta en el mundo.",
    "Porque tu compañía es mi sitio de descanso y mi refugio seguro.",
    "Porque eres una de las bendiciones y alegrías más auténticas de mi existencia.",
    "Porque proteger tu tranquilidad es un compromiso sincero que asumo con devoción.",
    "Porque quiero ser ese oído atento que jamás juzga y siempre comprende.",
    "Porque me esfuerzo con constancia por ofrecerte la versión más sensata y noble de mí.",
    "Porque mereces ser tratada con absoluto respeto, devoción y ternura.",
    "Porque deseo acompañarte con lealtad mientras nuestras vidas se transforman y maduran.",
    "Porque no busco amarte solo en una etapa, sino enamorarme de ti en cada capítulo que venga.",
    "Porque quiero conocer y respaldar cada versión que los años vayan forjando en ti.",
    "Porque anhelo que miremos hacia atrás y sonriamos al ver todo lo que construimos juntos.",
    "Porque entre millones de personas en este planeta, mis ojos solo te eligen a ti.",
    "Porque entre tantos destinos posibles, mi lugar preferido siempre será a tu lado.",
    "Porque ante mis ojos no hay belleza que se equipare a la pureza y sencillez de la tuya.",
    "Porque si tuviera que elegir de nuevo entre mil caminos, volvería a elegirte a ti siempre.",
    "Porque estar a tu lado transmite la calma y pureza de respirar el aire fresco de la montaña.",
    "Porque anhelo el momento de dar el paso y unir mi vida en matrimonio contigo.",
    "Porque estrecharte entre mis brazos disuelve el cansancio y me devuelve la serenidad.",
    "Porque cada muestra de cariño tuya colma de propósito y luz mis días.",
    "Porque tu nobleza me recuerda el valor de las personas bondadosas y leales.",
    "Porque tu paciencia me enseña a ser más comprensivo y agradecido.",
    "Porque en las jornadas desafiantes, tu voz es la razón más firme para no darme por vencido.",
    "Porque admiro el temple con el que cumples tus responsabilidades y aspiraciones.",
    "Porque tu entereza interior es capaz de iluminar hasta el día más nublado.",
    "Porque de todas las razones que podría escribir en esta vida, la más esencial es que te amo, Andreita.",
    "Porque te amo con el alma entera, con el corazón en calma y para toda la eternidad.",
];

/* =========================================================================
       3. LÓGICA DE CONTROL Y ALEATORIEDAD SIN REPETICIÓN
       ========================================================================= */
const welcomeQuoteEl = document.getElementById("welcomeQuote");
const reasonBtn = document.getElementById("reasonBtn");
const reasonDisplay = document.getElementById("reasonDisplay");
const reasonTextEl = document.getElementById("reasonText");
const reasonCounterEl = document.getElementById("reasonCounter");

// Inicializar frase de ánimo al cargar
function mostrarFraseDeAnimoInicial() {
    const indiceAleatorio = Math.floor(Math.random() * frasesDeAnimo.length);
    welcomeQuoteEl.textContent = `\u201C${frasesDeAnimo[indiceAleatorio]}\u201D`;
}

// Pila de índices barajados para evitar repeticiones de las 200 razones
let bolsaIndices = [];
let razonesMostradasTotal = 0;

function barajarIndices() {
    bolsaIndices = Array.from({ length: razonesDeAmor.length }, (_, i) => i);
    // Algoritmo Fisher-Yates
    for (let i = bolsaIndices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [bolsaIndices[i], bolsaIndices[j]] = [bolsaIndices[j], bolsaIndices[i]];
    }
}

function obtenerSiguienteRazon() {
    // Si ya se mostraron las 200 sin repetir, se reinicia la baraja suavemente
    if (bolsaIndices.length === 0) {
        barajarIndices();
        razonesMostradasTotal = 0;
    }
    razonesMostradasTotal++;
    const indice = bolsaIndices.pop();
    return {
        texto: razonesDeAmor[indice],
        numeroOrden: razonesMostradasTotal,
    };
}

function mostrarSiguienteRazonConAnimacion() {
    const siguiente = obtenerSiguienteRazon();

    // Si es el primer clic, se despliega la sección
    if (!reasonDisplay.classList.contains("visible")) {
        reasonDisplay.classList.add("visible");
        setTimeout(() => reasonDisplay.classList.add("active"), 20);
        reasonBtn.textContent = "Ver otra razón";
    }

    // Animación fluida de salida y entrada para el texto
    reasonTextEl.classList.add("content-fade-out");

    setTimeout(() => {
        reasonCounterEl.textContent = `Razón ${siguiente.numeroOrden} de ${razonesDeAmor.length}`;
        reasonTextEl.textContent = siguiente.texto;
        reasonTextEl.classList.remove("content-fade-out");
        reasonTextEl.classList.add("content-fade-in");

        setTimeout(() => {
            reasonTextEl.classList.remove("content-fade-in");
        }, 350);
    }, 250);
}

// Eventos
window.addEventListener("DOMContentLoaded", () => {
    mostrarFraseDeAnimoInicial();
    barajarIndices();
});

reasonBtn.addEventListener("click", mostrarSiguienteRazonConAnimacion);

/* =========================================================================
       4. AMBIENTE VISUAL FLUIDO Y SUAVE (CANVAS DE PARTÍCULAS LUMINOSAS)
       ========================================================================= */
const canvas = document.getElementById("ambientCanvas");
const ctx = canvas.getContext("2d");
let width, height;
let particles = [];

function resizeCanvas() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 3.2 + 1.2;
        this.speedY = Math.random() * 0.35 + 0.1;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.alpha = Math.random() * 0.4 + 0.15;
        this.fadeSpeed = Math.random() * 0.003 + 0.002;
        this.increasing = Math.random() > 0.5;
    }

    update() {
        this.y -= this.speedY;
        this.x += this.speedX;

        if (this.increasing) {
            this.alpha += this.fadeSpeed;
            if (this.alpha >= 0.5) this.increasing = false;
        } else {
            this.alpha -= this.fadeSpeed;
            if (this.alpha <= 0.1) this.increasing = true;
        }

        if (this.y < -10 || this.x < -10 || this.x > width + 10) {
            this.reset();
            this.y = height + 10;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 110, 145, ${this.alpha})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(180, 110, 145, 0.35)";
        ctx.fill();
    }
}

// Crear partículas con densidad moderada
const particleCount = Math.min(Math.floor(window.innerWidth / 30), 40);
for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
}

function renderAmbient() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
        p.update();
        p.draw();
    }
    requestAnimationFrame(renderAmbient);
}

renderAmbient();
