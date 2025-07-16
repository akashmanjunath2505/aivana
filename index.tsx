
(() => {
    // --- MOBILE NAVIGATION TOGGLE ---
    const navToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.querySelector('body');

    if (navToggle && mainNav && body) {
        navToggle.addEventListener('click', () => {
            const isVisible = mainNav.getAttribute('data-visible') === 'true';
            if (isVisible) {
                mainNav.setAttribute('data-visible', 'false');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.innerHTML = '&#9776;';
                body.classList.remove('nav-open');
            } else {
                mainNav.setAttribute('data-visible', 'true');
                navToggle.setAttribute('aria-expanded', 'true');
                navToggle.innerHTML = '&times;';
                body.classList.add('nav-open');
            }
        });
    }

    // --- INTERSECTION OBSERVER FOR SCROLL ANIMATIONS ---
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Optional: unobserve after animation
                // observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the element is visible
    });

    animatedElements.forEach(el => observer.observe(el));


    // --- TESTIMONIAL CAROUSEL ---
    const carousel = document.querySelector('.testimonial-carousel');
    const slides = document.querySelectorAll('.testimonial-slide');
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    let currentSlide = 0;
    let autoPlayInterval: ReturnType<typeof setInterval> | undefined;

    function showSlide(index: number) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }
    
    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 7000);
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    if(carousel && nextBtn && prevBtn && slides.length > 0) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetAutoPlay();
        });
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetAutoPlay();
        });

        carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        carousel.addEventListener('mouseleave', () => resetAutoPlay());

        showSlide(currentSlide); // Show initial slide
        resetAutoPlay(); // Start auto-play
    }


    // --- PARTICLE BACKGROUND ANIMATION ---
    const canvas = document.getElementById('particle-canvas') as HTMLCanvasElement;
    
    if (canvas) {
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particlesArray: Particle[] = [];

        class Particle {
            x: number;
            y: number;
            directionX: number;
            directionY: number;
            size: number;
            color: string;

            constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                if(!ctx) return;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                if (this.x > canvas.width || this.x < 0) {
                    this.directionX = -this.directionX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.directionY = -this.directionY;
                }
                this.x += this.directionX;
                this.y += this.directionY;
                this.draw();
            }
        }

        const initParticles = () => {
            particlesArray = [];
            const numberOfParticles = (canvas.height * canvas.width) / 9000;
            for (let i = 0; i < numberOfParticles; i++) {
                const size = (Math.random() * 1.5) + 0.5;
                const x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
                const y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
                const directionX = (Math.random() * 0.4) - 0.2;
                const directionY = (Math.random() * 0.4) - 0.2;
                const color = 'rgba(0, 123, 255, 0.4)';
                particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        const connectParticles = () => {
            if(!ctx) return;
            let opacityValue = 1;
            for (let a = 0; a < particlesArray.length; a++) {
                for (let b = a; b < particlesArray.length; b++) {
                    const distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x)) +
                                   ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
                    if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                        opacityValue = 1 - (distance / 20000);
                        ctx.strokeStyle = `rgba(0, 123, 255, ${opacityValue})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                        ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                        ctx.stroke();
                    }
                }
            }
        }

        const animateParticles = () => {
            if(!ctx) return;
            requestAnimationFrame(animateParticles);
            ctx.clearRect(0, 0, innerWidth, innerHeight);

            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update();
            }
            connectParticles();
        }

        window.addEventListener('resize', () => {
            canvas.width = innerWidth;
            canvas.height = innerHeight;
            initParticles();
        });

        initParticles();
        animateParticles();
    }
})();
