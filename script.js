document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.getElementById('loading-screen');
    const contentContainer = document.getElementById('content-container');
    const cvDownloadButtons = document.querySelectorAll('.download-cv-btn');
    const fireworksSound = document.getElementById('fireworks-sound');
    
    gsap.to(loadingScreen, {
        opacity: 0,
        duration: 1.5,
        onComplete: () => {
            loadingScreen.style.display = 'none';
            document.body.classList.add('loaded');
        }
    });

    const canvas = document.querySelector('canvas.webgl');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 50;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.05,
        color: 0x00bfff,
        blending: THREE.AdditiveBlending,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    camera.position.z = 5;

    const animate = () => {
        requestAnimationFrame(animate);
        particlesMesh.rotation.x += 0.001;
        particlesMesh.rotation.y += 0.0005;
        renderer.render(scene, camera);
    };
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    const typed = new Typed('.typing-text span', {
        strings: ['Cybersecurity Specialist', 'Database Analyst', 'Systems Analyst'],
        typeSpeed: 70,
        backSpeed: 50,
        loop: true,
        backDelay: 1000,
    });

    const sr = ScrollReveal({
        distance: '80px',
        duration: 2500,
        delay: 200,
        reset: true,
        easing: 'cubic-bezier(0.5, 0, 0, 1)'
    });

    sr.reveal('.home-content, .heading, .about-intro', { origin: 'top', scale: 0.9, opacity: 0 });
    sr.reveal('.home-img, .skills-container, .certifications-container, .about-main', { origin: 'bottom', scale: 0.9, opacity: 0 });
    sr.reveal('.timeline-item', { origin: 'left', interval: 200, opacity: 0, distance: '100px' });
    sr.reveal('.contact-terminal', { origin: 'bottom', scale: 0.9, opacity: 0 });

    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    let targetLink = document.querySelector('header nav a[href*=' + id + ']');
                    if(targetLink) {
                        targetLink.classList.add('active');
                    }
                });
            };
        });
    };

    cvDownloadButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const cvPath = e.currentTarget.getAttribute('href');
            
            const fireworksContainer = document.createElement('div');
            fireworksContainer.id = 'fireworks-container';
            document.body.appendChild(fireworksContainer);

            const fireworks = new Fireworks.default(fireworksContainer, {
                autoresize: true,
                opacity: 0.9,
                acceleration: 1.05,
                friction: 0.97,
                gravity: 1.5,
                particles: 150,
                traceLength: 3,
                traceSpeed: 10,
                flickering: 50,
                explosion: 8,
                hue: { min: 200, max: 250 },
                delay: { min: 30, max: 60 },
                rocketsPoint: { min: 50, max: 50 },
                mouse: { click: true, move: false, max: 1 },
            });

            fireworks.start();
            
            if (fireworksSound) {
                fireworksSound.currentTime = 0;
                fireworksSound.play().catch(e => console.error('Sound playback failed:', e));
            }

            setTimeout(() => {
                fireworks.stop();
                fireworksContainer.remove();
                if (fireworksSound) fireworksSound.pause();
            }, 5000);

            const link = document.createElement('a');
            link.href = cvPath;
            link.download = 'CVmohaamed.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    });
});