/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- SVG Icons ---
const ICONS = {
    cases: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V7.125C4.5 6.504 5.004 6 5.625 6H9" /></svg>`,
    feedback: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>`,
    documentation: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75c0-.231-.035-.454-.1-.664M6.75 7.5h1.5M6.75 12h1.5m-1.5 3h1.5M4.5 5.654A2.25 2.25 0 016.75 3.4h10.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25H6.75a2.25 2.25 0 01-2.25-2.25V5.654z" /></svg>`,
    play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.647c1.295.742 1.295 2.545 0 3.286L7.279 20.99c-1.25.717-2.779-.217-2.779-1.643V5.653z" clip-rule="evenodd" /></svg>`,
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>`,
    chevronLeft: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>`,
    chevronRight: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>`,
    plus: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>`,
    check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clip-rule="evenodd" /></svg>`,
    linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-1.2-2.5-2.5-2.5S11 12.85 11 14.25V19h-3v-9h2.9v1.3a3.11 3.11 0 012.6-1.3c2.5 0 4.5 2 4.5 5.75z"></path></svg>`,
    twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>`,
    youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186A2.5 2.5 0 0019.5 5.5H4.5A2.5 2.5 0 002 8v8a2.5 2.5 0 002.5 2.5h15A2.5 2.5 0 0022 16V8a2.5 2.5 0 00-.418-1.814zM10 14.5v-5l4.5 2.5-4.5 2.5z"></path></svg>`,
    dna: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" /></svg>`,
    molecule: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 3v2.25m0 16.5V19.5m0-16.5a9 9 0 015.657 2.343m-11.314 0A9 9 0 0112 3m-5.657 16.657A9 9 0 0112 21m5.657-2.343A9 9 0 0112 21m0-18a9 9 0 00-5.657 2.343m11.314 0A9 9 0 0012 3m5.657 16.657l-3.34-3.34m-7.974 0l-3.34 3.34" /></svg>`,
    heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`,
};

const MEDANNA_APP_LINK = "https://medanna-ai-sim.vercel.app/";
const DOCTOR_AI_LINK = "https://doctor-ai-companion.vercel.app/";

function createElement<
    K extends keyof (HTMLElementTagNameMap & Pick<SVGElementTagNameMap, 'svg' | 'path'>)
>(
    tag: K,
    props: { [key: string]: any } = {},
    children: (Node | string)[] = []
): (HTMLElementTagNameMap & Pick<SVGElementTagNameMap, 'svg' | 'path'>)[K] {
    const isSvgTag = tag === 'svg' || tag === 'path';
    const element = isSvgTag
        ? document.createElementNS('http://www.w3.org/2000/svg', tag as 'svg' | 'path')
        : document.createElement(tag as keyof HTMLElementTagNameMap);

    for (const key in props) {
        if (key === 'className') {
            element.setAttribute('class', props[key]);
        } else if (key === 'innerHTML') {
            if (!isSvgTag) {
                (element as HTMLElement).innerHTML = props[key];
            }
        } else {
            element.setAttribute(key, props[key]);
        }
    }
    for (const child of children) {
        if (typeof child === 'string') {
            element.appendChild(document.createTextNode(child));
        } else if (child) {
            element.appendChild(child);
        }
    }
    return element as (HTMLElementTagNameMap & Pick<SVGElementTagNameMap, 'svg' | 'path'>)[K];
}

function Header(): HTMLElement {
    const navLinks = createElement('nav', { className: 'nav-links' }, [
        createElement('a', { href: DOCTOR_AI_LINK, target: '_blank' }, ['Doctor AI']),
        createElement('a', { href: MEDANNA_APP_LINK, target: '_blank' }, ['MedAnna Sim']),
        createElement('div', { className: 'nav-links-cta' }, [
            createElement('a', { href: MEDANNA_APP_LINK, target: '_blank', className: 'btn btn-primary' }, ['Start Free Trial'])
        ])
    ]);

    const hamburgerBtn = createElement('button', {
        className: 'hamburger', 'aria-label': 'Toggle menu', 'aria-expanded': 'false',
    }, [
        createElement('span', { className: 'hamburger-box' }, [
            createElement('span', { className: 'hamburger-inner' })
        ])
    ]);

    const header = createElement('header', { className: 'header' }, [
        createElement('div', { className: 'container' }, [
            createElement('a', { href: '#', className: 'logo' }, [
                createElement('img', { src: 'https://raw.githubusercontent.com/akashmanjunath2505/aivana/main/favicon.png', alt: 'Aivana Logo' }),
                'Aivana'
            ]),
            navLinks,
            hamburgerBtn,
        ]),
    ]);

    hamburgerBtn.addEventListener('click', () => {
        const isOpened = document.body.classList.toggle('nav-open');
        header.classList.toggle('nav-open', isOpened);
        hamburgerBtn.setAttribute('aria-expanded', String(isOpened));
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    return header;
}

function HeroSection(): HTMLElement {
    const videoId = 'ccbKv0WWVCA';
    return createElement('section', { className: 'hero' }, [
        createElement('div', { className: 'container' }, [
            createElement('div', { className: 'hero-content' }, [
                createElement('h1', { innerHTML: 'Stop Memorizing.<br>Start Diagnosing.' }),
                createElement('p', { className: 'subheadline' }, ['Aivana Health offers AI-powered OSCE simulations for faster, deeper clinical mastery. Practice unlimited cases, get instant feedback, and sharpen your diagnostic skills for exam and real-world success.']),
                createElement('div', { className: 'hero-cta' }, [
                    createElement('a', { href: MEDANNA_APP_LINK, target: '_blank', className: 'btn btn-primary' }, ['Get Started Free']),
                    createElement('a', {
                        href: `https://www.youtube.com/watch?v=${videoId}`,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        className: 'btn btn-secondary'
                    }, [
                        createElement('span', { innerHTML: ICONS.play }),
                        'Watch Demo'
                    ]),
                ]),
            ]),
        ]),
    ]);
}

function TrustBarSection(): HTMLElement {
    const logos = ['AIIMS', 'JIPMER', 'MAMC', 'AFMC', 'UCMS', 'KGMU', 'VMMC', 'CMC Vellore'];
    const repeatedLogos = [...logos, ...logos]; // Repeat for seamless loop
    return createElement('section', { className: 'trust-bar' }, [
        createElement('div', { className: 'container' }, [
            createElement('h3', {}, ['Used by students at 50+ top medical schools in India']),
            createElement('div', { className: 'logos-container' }, [
                createElement('div', { className: 'logos-slide' },
                    repeatedLogos.map(logo => createElement('div', { className: 'logo-item' }, [logo]))
                )
            ])
        ]),
    ]);
}

function ChallengeSection(): HTMLElement {
    const challenges = [
        { icon: ICONS.documentation, title: 'Rote Memorization', frustration: '“I spend weeks memorizing textbook lists, but freeze when a real patient doesn’t fit the perfect description.”' },
        { icon: ICONS.feedback, title: 'Lack of Practice', frustration: '“I rarely get to lead a patient interview. I need more hands-on experience before my practical exams.”' },
        { icon: ICONS.cases, title: 'Fear of Mistakes', frustration: '“I’m scared of making a mistake with a real patient. This fear holds me back from thinking critically.”' }
    ];

    return createElement('section', { className: 'challenge animated-section' }, [
        createElement('div', { className: 'container' }, [
            createElement('div', { className: 'section-intro' }, [
                createElement('h2', {}, ['The Old Way Isn’t Working']),
                createElement('p', {}, ['Traditional medical education is built on memorization, not clinical reasoning. This leaves you unprepared for the complexities of real-world diagnosis.'])
            ]),
            createElement('div', { className: 'challenge-grid' },
                challenges.map(c =>
                    createElement('div', { className: 'challenge-card' }, [
                        createElement('div', { className: 'icon', innerHTML: c.icon }),
                        createElement('h3', {}, [c.title]),
                        createElement('p', { className: 'frustration' }, [c.frustration])
                    ])
                )
            )
        ])
    ]);
}

function WorkflowSection(): HTMLElement {
    const steps = [
        { number: '01', title: 'Start a Case', description: 'Choose from a vast library of common and rare clinical scenarios.' },
        { number: '02', title: 'Interview the AI', description: 'Interact with a realistic patient, ask questions, and gather information.' },
        { number: '03', title: 'Formulate Diagnosis', description: 'Analyze the data, form your differential diagnosis, and propose a plan.' },
        { number: '04', title: 'Get Instant Feedback', description: 'Receive a detailed breakdown of your performance and areas for improvement.' },
    ];

    return createElement('section', { className: 'workflow animated-section' }, [
        createElement('div', { className: 'container' }, [
            createElement('div', { className: 'section-intro' }, [
                createElement('h2', {}, ['Your Path to Clinical Excellence']),
                createElement('p', {}, ['Four simple steps to transform your diagnostic skills from theoretical to practical.'])
            ]),
            createElement('div', { className: 'workflow-timeline-wrapper' }, [
                createElement('ul', { className: 'workflow-timeline' },
                    steps.map(step =>
                        createElement('li', { className: 'workflow-step' }, [
                            createElement('div', { className: 'step-number' }, [step.number]),
                            createElement('h4', {}, [step.title]),
                            createElement('p', {}, [step.description]),
                        ])
                    )
                )
            ])
        ])
    ]);
}

function FeaturesSection(): HTMLElement {
    const tabsData = [
        { id: 'cases', icon: ICONS.cases, label: 'Unlimited Cases', content: 'Practice with an endless variety of patient scenarios, from classic textbook cases to rare and complex presentations. Our AI ensures no two encounters are ever the same, just like in a real clinic.' },
        { id: 'feedback', icon: ICONS.feedback, label: 'Instant Feedback', content: 'Receive immediate, actionable feedback on your history taking, diagnostic reasoning, and communication skills. Pinpoint your weak spots and track your improvement over time.' },
        { id: 'documentation', icon: ICONS.documentation, label: 'Realistic Simulation', content: 'Our AI patient remembers case details, shows emotion, and responds realistically to your questions. This isn’t a chatbot—it’s a high-fidelity clinical training partner.' },
    ];

    const tabButtons = createElement('div', { className: 'tab-buttons' });
    const tabContents = createElement('div', { className: 'tabs-content-wrapper' });

    tabsData.forEach((tab, index) => {
        const button = createElement('button', {
            className: `tab-button ${index === 0 ? 'active' : ''}`,
            'data-tab': tab.id,
            'role': 'tab',
            'aria-selected': index === 0 ? 'true' : 'false',
        }, [
            createElement('span', { className: 'icon', innerHTML: tab.icon }),
            tab.label
        ]);

        const content = createElement('div', {
            id: `tab-content-${tab.id}`,
            className: `tab-content ${index === 0 ? 'active' : ''}`,
            role: 'tabpanel',
        }, [
            createElement('div', { className: 'feature-content-card' }, [
                createElement('p', {}, [tab.content])
            ])
        ]);

        tabButtons.appendChild(button);
        tabContents.appendChild(content);
    });

    tabButtons.addEventListener('click', (e) => {
        const targetButton = (e.target as HTMLElement).closest('.tab-button');
        if (!targetButton) return;

        const tabId = targetButton.getAttribute('data-tab');
        if (!tabId) return;

        tabButtons.querySelectorAll('.tab-button').forEach(btn => {
            const isSelected = btn === targetButton;
            btn.classList.toggle('active', isSelected);
            btn.setAttribute('aria-selected', String(isSelected));
        });

        tabContents.querySelectorAll('.tab-content').forEach(content => {
            content.classList.toggle('active', content.id === `tab-content-${tabId}`);
        });
    });

    return createElement('section', { className: 'features animated-section' }, [
        createElement('div', { className: 'container' }, [
            createElement('div', { className: 'section-intro' }, [
                createElement('h2', {}, ['The Aivana Advantage']),
                createElement('p', {}, ["A powerful suite of tools designed to build clinical intuition, not just knowledge."])
            ]),
            createElement('div', { className: 'tabs-container' }, [
                tabButtons,
                tabContents
            ])
        ])
    ]);
}

function TestimonialsSection(): HTMLElement {
    const testimonials = [
        {
            quote: "Aivana has completely transformed how I prepare for OSCEs. The AI patient is unbelievably realistic, and the instant, detailed feedback helped me pinpoint my weaknesses and improve faster than I ever thought possible.",
            author: "Priya Sharma",
            title: "4th Year MBBS, AIIMS Delhi",
            avatar: "https://images.unsplash.com/photo-1542596594-649ed6e6b342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80"
        },
        {
            quote: "I used to dread practical exams, but Aivana made me confident. Running through dozens of cases, from common to rare, meant I was prepared for anything. This is a must-have tool for every Indian medical student.",
            author: "Arjun Reddy",
            title: "Final Year MBBS, JIPMER",
            avatar: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80"
        },
        {
            quote: "The best part is the flexibility. I can practice a quick 5-minute case between lectures or do a deep dive for hours on a weekend. The feedback on my communication skills was a game-changer for my clinical postings.",
            author: "Ananya Desai",
            title: "3rd Year MBBS, MAMC",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80"
        },
        {
            quote: "As an intern, time is precious. Aivana helps me stay sharp on my diagnostic skills. It’s like having a senior resident available 24/7 to quiz me. I feel much more prepared for my post-graduate entrance exams.",
            author: "Vikram Singh",
            title: "Intern, CMC Vellore",
            avatar: "https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80"
        }
    ];

    let currentIndex = 0;

    const wrapper = createElement('div', { className: 'testimonial-carousel-wrapper' },
        testimonials.map(t =>
            createElement('div', { className: 'testimonial-slide' }, [
                createElement('div', { className: 'testimonial-card' }, [
                    createElement('blockquote', {}, [`“${t.quote}”`]),
                    createElement('div', { className: 'testimonial-author' }, [
                        createElement('img', { src: t.avatar, alt: `Avatar of ${t.author}` }),
                        createElement('div', { className: 'author-info' }, [
                            createElement('cite', {}, [t.author]),
                            createElement('span', {}, [t.title])
                        ])
                    ])
                ])
            ])
        )
    );

    const updateCarousel = () => {
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const prevButton = createElement('button', { className: 'carousel-btn', 'aria-label': 'Previous testimonial' }, [
        createElement('span', { innerHTML: ICONS.chevronLeft })
    ]);
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateCarousel();
    });

    const nextButton = createElement('button', { className: 'carousel-btn', 'aria-label': 'Next testimonial' }, [
        createElement('span', { innerHTML: ICONS.chevronRight })
    ]);
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateCarousel();
    });

    return createElement('section', { className: 'testimonials animated-section' }, [
        createElement('div', { className: 'container' }, [
            createElement('div', { className: 'section-intro' }, [
                createElement('h2', {}, ['Don’t Just Take Our Word For It']),
                createElement('p', {}, ["Hear from students who've aced their exams and boosted their clinical confidence with Aivana."])
            ]),
            createElement('div', { className: 'testimonial-carousel-container' }, [
                wrapper
            ]),
            createElement('div', { className: 'carousel-buttons' }, [
                prevButton,
                nextButton
            ])
        ])
    ]);
}

function PricingSection(): HTMLElement {
    const plans = [
        {
            title: 'Monthly',
            price: '₹99',
            term: '/month',
            features: ['Unlimited Case Simulations', 'Comprehensive Performance Analytics', '24/7 Access', 'Email Support'],
            popular: false
        },
        {
            title: 'Annual',
            price: '₹999',
            term: '/year',
            features: ['Unlimited Case Simulations', 'Comprehensive Performance Analytics', '24/7 Access', 'Priority Support', 'Early Access to New Features', 'Saves you ~16%'],
            popular: true
        }
    ];

    const countdownDeadline = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000); // 3 days from now

    const daysEl = createElement('span', {}, ['00']);
    const hoursEl = createElement('span', {}, ['00']);
    const minutesEl = createElement('span', {}, ['00']);
    const secondsEl = createElement('span', {}, ['00']);

    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDeadline.getTime() - now;

        if (distance < 0) {
            clearInterval(timer);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysEl.textContent = String(days).padStart(2, '0');
        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }, 1000);

    return createElement('section', { className: 'pricing animated-section' }, [
        createElement('div', { className: 'container' }, [
            createElement('div', { className: 'section-intro' }, [
                createElement('h2', {}, ['Flexible Plans for Every Student']),
                createElement('p', {}, ['Choose the plan that fits your study schedule and budget. Unlock your full clinical potential today.'])
            ]),
            createElement('div', { className: 'pricing-grid' },
                plans.map(plan =>
                    createElement('div', { className: `pricing-card ${plan.popular ? 'popular' : ''}` }, [
                        plan.popular ? createElement('div', { className: 'popular-badge' }, ['Most Popular']) : null,
                        createElement('h3', {}, [plan.title]),
                        createElement('p', { className: 'price' }, [plan.price, createElement('span', { className: 'term' }, [plan.term])]),
                        createElement('ul', {},
                            plan.features.map(feature =>
                                createElement('li', {}, [
                                    createElement('span', { innerHTML: ICONS.check }),
                                    feature
                                ])
                            )
                        ),
                        createElement('a', { href: MEDANNA_APP_LINK, target: '_blank', className: `btn ${plan.popular ? 'btn-primary' : 'btn-secondary'}` }, ['Choose Plan'])
                    ])
                )
            ),
            createElement('div', { className: 'countdown-container' }, [
                 createElement('div', { className: 'deadline' }, ['Special launch offer ends in:']),
                 createElement('div', { className: 'countdown-timer' }, [
                     createElement('div', {className: 'countdown-item'}, [daysEl, createElement('span', {className: 'label'}, ['Days']) ]),
                     createElement('div', {className: 'countdown-item'}, [hoursEl, createElement('span', {className: 'label'}, ['Hours']) ]),
                     createElement('div', {className: 'countdown-item'}, [minutesEl, createElement('span', {className: 'label'}, ['Minutes']) ]),
                     createElement('div', {className: 'countdown-item'}, [secondsEl, createElement('span', {className: 'label'}, ['Seconds']) ]),
                 ])
            ])
        ])
    ]);
}

function FinalCTASection(): HTMLElement {
    return createElement('section', { className: 'final-cta' }, [
        createElement('div', { className: 'container' }, [
            createElement('h2', {}, ["Ready to Become a Top Clinician?"]),
            createElement('p', {}, ["Stop memorizing, start diagnosing. Transform your clinical skills today with unlimited AI-powered OSCE practice. Your future patients will thank you."]),
            createElement('div', { className: 'cta-buttons' }, [
                createElement('a', { href: MEDANNA_APP_LINK, target: '_blank', className: 'btn btn-primary btn-full-width' }, ['Start Your Free Trial Now']),
            ])
        ])
    ]);
}

function FaqSection(): HTMLElement {
    const faqs = [
        { q: 'Is Aivana suitable for first-year students?', a: 'Absolutely! Aivana is designed for all levels. First-year students can use it to build a strong foundation in clinical history taking, while final-year students and interns can use it to refine their diagnostic skills for exams and residency.' },
        { q: 'How is this different from other question banks?', a: 'Aivana is not a question bank. It’s an interactive simulation. Instead of just reading and memorizing, you actively engage in a realistic conversation with an AI patient, making learning more dynamic and memorable.' },
        { q: 'What kind of feedback will I receive?', a: 'You will get a comprehensive report after each case, analyzing your questions, the order in which you asked them, your diagnostic accuracy, and your communication style. It identifies missed questions and suggests areas for improvement.' },
        { q: 'Can I use this on my mobile phone?', a: 'Yes, Aivana Health is fully responsive and works on all devices including desktops, tablets, and mobile phones, so you can practice anytime, anywhere.' },
        { q: 'Is there a free trial?', a: 'Yes, we offer a free trial that gives you access to a selection of cases so you can experience the platform firsthand. No credit card is required to start the trial.' },
    ];

    const accordion = createElement('div', { className: 'faq-accordion' });

    faqs.forEach(faq => {
        const item = createElement('div', { className: 'faq-item' });
        const button = createElement('button', {
            className: 'faq-question',
            'aria-expanded': 'false',
        }, [
            createElement('span', {}, [faq.q]),
            createElement('span', { className: 'icon', innerHTML: ICONS.plus })
        ]);
        const answerWrapper = createElement('div', { className: 'faq-answer' }, [
            createElement('div', {}, [
                createElement('p', {}, [faq.a])
            ])
        ]);

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!isExpanded));
            if (!isExpanded) {
                answerWrapper.style.gridTemplateRows = '1fr';
            } else {
                answerWrapper.style.gridTemplateRows = '0fr';
            }
        });

        item.append(button, answerWrapper);
        accordion.appendChild(item);
    });

    return createElement('section', { className: 'faq animated-section' }, [
        createElement('div', { className: 'container' }, [
            createElement('div', { className: 'section-intro' }, [
                createElement('h2', {}, ['Frequently Asked Questions']),
            ]),
            accordion
        ])
    ]);
}

function Footer(): HTMLElement {
    return createElement('footer', { className: 'footer' }, [
        createElement('div', { className: 'container' }, [
            createElement('div', { className: 'footer-links-grid' }, [
                createElement('div', {className: 'footer-column'}, [
                    createElement('h4', {}, ['Aivana Health']),
                    createElement('p', {style: 'font-size: 0.9rem; color: var(--text-secondary)'}, ['AI-powered clinical training for the next generation of doctors.']),
                ]),
                createElement('div', {className: 'footer-column'}, [
                    createElement('h4', {}, ['Links']),
                    createElement('ul', {}, [
                         createElement('li', {}, [createElement('a', {href: DOCTOR_AI_LINK, target:'_blank'}, ['Doctor AI'])]),
                         createElement('li', {}, [createElement('a', {href: MEDANNA_APP_LINK, target:'_blank'}, ['MedAnna Sim'])]),
                         createElement('li', {}, [createElement('a', {href: '#'}, ['About Us'])]),
                    ]),
                ]),
                 createElement('div', {className: 'footer-column'}, [
                    createElement('h4', {}, ['Stay Updated']),
                    createElement('p', {style: 'font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 1rem;'}, ['Subscribe to our newsletter for the latest updates.']),
                    createElement('form', { className: 'newsletter-form' }, [
                        createElement('input', { type: 'email', placeholder: 'Enter your email' }),
                        createElement('button', { type: 'submit', 'aria-label': 'Subscribe', innerHTML: ICONS.arrowRight })
                    ])
                ]),
            ]),
            createElement('div', { className: 'footer-bottom' }, [
                createElement('p', {}, [`© ${new Date().getFullYear()} Aivana Health. All rights reserved.`]),
                createElement('div', { className: 'social-links' }, [
                    createElement('a', { href: '#', 'aria-label': 'LinkedIn', innerHTML: ICONS.linkedin }),
                    createElement('a', { href: '#', 'aria-label': 'Twitter', innerHTML: ICONS.twitter }),
                    createElement('a', { href: '#', 'aria-label': 'YouTube', innerHTML: ICONS.youtube }),
                ])
            ])
        ])
    ]);
}


function App() {
    const root = document.getElementById('root');
    if (!root) return;

    root.append(
        Header(),
        HeroSection(),
        TrustBarSection(),
        ChallengeSection(),
        WorkflowSection(),
        FeaturesSection(),
        TestimonialsSection(),
        PricingSection(),
        FinalCTASection(),
        FaqSection(),
        Footer()
    );

    // --- Animations & Interactivity ---

    // Scroll Animations
    const animatedSections = document.querySelectorAll('.animated-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    animatedSections.forEach(section => observer.observe(section));
}

App();