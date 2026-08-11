document.addEventListener("DOMContentLoaded", function () {
    if (typeof Fancybox !== "undefined") {
        Fancybox.bind("[data-fancybox]", {});
    }

    if (typeof gsap !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
    }

    const burger = document.getElementById('burgerBtn');
    const menu = document.getElementById('mobileMenu');
    const close = document.querySelector('.m-close');
    const body = document.body;

    if (burger && menu && close) {
        burger.addEventListener('click', () => {
            burger.classList.add('active');
            menu.classList.add('active');
            body.classList.add('no-scroll');
        });
        close.addEventListener('click', () => {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('no-scroll');
        });

        document.querySelectorAll('[data-bs-toggle="modal"]').forEach(btn => {
            btn.addEventListener('click', () => {
                menu.classList.remove('active');
                burger.classList.remove('active');
                body.classList.remove('no-scroll');
            });
        });
    }

    if (document.querySelector('.hand')) {

        const observer = new IntersectionObserver((entries) => {
    
            entries.forEach(entry => {
    
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
    
            });
    
        }, {
            threshold: 0,
            rootMargin: '0px 0px -33% 0px'
        });
    
        document.querySelectorAll('.hand-card').forEach(card => {
            observer.observe(card);
        });
    
    }

    if (document.querySelector('.privel')) {
        const privelSlider = new Swiper('.privel-slider', {
            slidesPerView: 3,
            spaceBetween: 15,
            speed: 900,
            pagination: {
                el: '.privel-pagination',
                clickable: true,
                dynamicBullets: true, 
                dynamicMainBullets: 3, 
            },
        
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
        
                550: {
                    slidesPerView: 2,
                },
        
                992: {
                    slidesPerView: 3,
                },
        
                // 1200: {
                //     slidesPerView: 4,
                // }
            }
        });
    }

    if (document.querySelector('.arsenal')) {
        const slider = document.querySelector('.arsenal-scroll');
        
        if (slider) {
            let isDown = false;
            let startX;
            let scrollLeft;
        
            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.style.scrollBehavior = 'auto'; 
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                slider.style.cursor = 'grabbing';
            });
        
            window.addEventListener('mouseup', () => {
                if (!isDown) return;
                isDown = false;
                slider.style.cursor = 'grab';
                slider.style.scrollBehavior = 'smooth'; 
            });
        
            window.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault(); 
                
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1.5; 
                slider.scrollLeft = scrollLeft - walk;
            });
        }
    }

    if (
        window.innerWidth > 1200 &&
        typeof gsap !== "undefined" &&
        typeof ScrollTrigger !== "undefined" &&
        document.querySelector('.laws')
    ) {
    
        gsap.registerPlugin(ScrollTrigger);
    
        // =====================================================
        // PIN SECTION
        // =====================================================
    
        ScrollTrigger.create({
            trigger: ".laws",
            start: "top top",
            end: "+=3000",
            pin: true,
            scrub: 1
        });
    
    
        // =====================================================
        // TITLE PARALLAX
        // =====================================================
    
        gsap.to(".laws-title", {
    
            y: -300,
            opacity: 0.15,
    
            ease: "none",
    
            scrollTrigger: {
                trigger: ".laws",
                start: "top top",
                end: "+=2500",
    
                scrub: 2
            }
    
        });
    
    
        gsap.fromTo(".law-card-left",

        {
            y: 900,
            opacity: 0
        },

        {
            y: 0,
            opacity: 1,

            ease: "none",

            scrollTrigger: {
                trigger: ".laws",
                start: "top center",
                end: "+=2200",

                scrub: 4
            }

        });
        
        
        gsap.fromTo(".law-card-center",

        {
            y: 1200,
            opacity: 0
        },

        {
            y: 0,
            opacity: 1,

            ease: "none",

            scrollTrigger: {
                trigger: ".laws",
                start: "top center",
                end: "+=2600",

                scrub: 5
            }

        });
        
        gsap.fromTo(".law-card-right",

        {
            y: 700,
            opacity: 0
        },

        {
            y: 0,
            opacity: 1,

            ease: "none",

            scrollTrigger: {
                trigger: ".laws",
                start: "top center",
                end: "+=2000",

                scrub: 3
            }

        });
    
    }

    if (document.querySelector('.kings')) {
        const doctors = document.querySelectorAll('.kings-person');
        const cards = document.querySelectorAll('.kings-card');

        doctors.forEach(doctor => {

            doctor.addEventListener('click', () => {

                const id = doctor.dataset.doctor;

                // reset
                doctors.forEach(item => {
                    item.classList.remove('active');
                });

                cards.forEach(card => {
                    card.classList.remove('active');
                });

                // active doctor
                doctor.classList.add('active');

                // active card
                document
                    .querySelector(`.kings-card[data-card="${id}"]`)
                    .classList.add('active');

            });

        });
    }

    if (document.querySelector('.chronics-slider')) {

        const chronicsSlider = new Swiper('.chronics-slider', {
    
            loop: true,
            centeredSlides: true,
    
            slidesPerView: 'auto',
            spaceBetween: 42,
    
            speed: 900,
    
            pagination: {
                el: '.chronics-pagination',
                clickable: true,
                dynamicBullets: true, 
                dynamicMainBullets: 2, 
            },
    
            breakpoints: {
                
                576: {
                    spaceBetween: 74, 
                },
    
                
                992: {
                    spaceBetween: 98, 
                }
            }
    
        });
    
    }

    
    const kingsSliders = document.querySelectorAll('.kings-slider');

    if (kingsSliders.length > 0) {
        kingsSliders.forEach((sliderEl) => {
            
            const parentSection = sliderEl.closest('section');
            
            
            const prevBtn = parentSection ? parentSection.querySelector('.kings-prev') : null;
            const nextBtn = parentSection ? parentSection.querySelector('.kings-next') : null;

            
            new Swiper(sliderEl, {
                slidesPerView: 1,  
                spaceBetween: 15,      
                grabCursor: true,  
                speed: 900,
                navigation: {
                    nextEl: nextBtn, 
                    prevEl: prevBtn, 
                },    
                breakpoints: {
                    550: {
                        slidesPerView: 'auto',
                    }
                }
            });
        });
    }

    const initHeroBrandsMarquee = () => {
        document.querySelectorAll('.hero-brands').forEach((root) => {
            const track = root.querySelector('.hero-brands-track');
            const firstGroup = root.querySelector('.hero-brands-group');
            if (!track || !firstGroup) return;

            const fillTrack = () => {
                track.querySelectorAll('.hero-brands-group').forEach((group, index) => {
                    if (index > 0) group.remove();
                });

                const groupWidth = firstGroup.getBoundingClientRect().width;
                if (!groupWidth) return;

                const needWidth = Math.max(root.offsetWidth, window.innerWidth) * 2;
                let totalWidth = groupWidth;

                while (totalWidth < needWidth) {
                    const clone = firstGroup.cloneNode(true);
                    clone.setAttribute('aria-hidden', 'true');
                    track.appendChild(clone);
                    totalWidth += groupWidth;
                }

                const clone = firstGroup.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true');
                track.appendChild(clone);

                track.style.setProperty('--marquee-shift', `${groupWidth}px`);
                track.style.animationDuration = `${Math.max(20, Math.round(groupWidth / 40))}s`;
                track.style.animationName = 'none';
                void track.offsetWidth;
                track.style.animationName = '';
            };

            fillTrack();

            if (!root.dataset.marqueeReady) {
                root.dataset.marqueeReady = '1';
                let resizeTimer;
                window.addEventListener('resize', () => {
                    clearTimeout(resizeTimer);
                    resizeTimer = setTimeout(fillTrack, 150);
                });
            }
        });
    };

    initHeroBrandsMarquee();
    window.addEventListener('load', initHeroBrandsMarquee);

    if (document.querySelector('.calc')) {
        
        
        const customSelects = document.querySelectorAll('.custom-select');

        customSelects.forEach(select => {
            const trigger = select.querySelector('.custom-select-trigger');
            const optionsContainer = select.querySelector('.custom-options');
            const options = select.querySelectorAll('.custom-option');
            const hiddenInput = select.querySelector('.calc-select-value');

            
            trigger.addEventListener('click', function (e) {
                e.stopPropagation();
                
                customSelects.forEach(otherSelect => {
                    if (otherSelect !== select) {
                        otherSelect.classList.remove('open');
                    }
                });
                select.classList.toggle('open');
            });

            
            options.forEach(option => {
                option.addEventListener('click', function (e) {
                    e.stopPropagation();

                    const value = this.getAttribute('data-value');
                    const content = this.innerHTML; 

                    
                    options.forEach(opt => opt.classList.remove('selected'));
                    this.classList.add('selected');

                    
                    hiddenInput.value = value;

                    
                    trigger.innerHTML = `<span>${content}</span>`;
                    
                    
                    select.classList.remove('open');

                    
                    calculateTabTotal(select.closest('.tab-pane'));
                });
            });
        });

        
        document.addEventListener('click', function () {
            customSelects.forEach(select => select.classList.remove('open'));
        });

        
        function calculateTabTotal(pane) {
            if (!pane) return;

            const hiddenInputs = pane.querySelectorAll('.calc-select-value');
            const priceValueSpan = pane.querySelector('.price-value');
            let total = 0;

            hiddenInputs.forEach(input => {
                total += parseInt(input.value) || 0;
            });

            
            if (total > 0) {
                priceValueSpan.textContent = total.toLocaleString('ru-RU') + '\u00A0₽';
            } else {
                priceValueSpan.textContent = '0 ₽';
            }
        }
    }

    if (document.querySelector('[data-quiz]')) {
        const quiz = document.querySelector('[data-quiz]');
        const steps = Array.from(quiz.querySelectorAll('.quiz-step'));
        const total = steps.length;
        const stepLabel = quiz.querySelector('[data-quiz-step-label]');
        const prevBtn = quiz.querySelector('[data-quiz-prev]');
        const nextBtn = quiz.querySelector('[data-quiz-next]');
        const submitBtn = quiz.querySelector('[data-quiz-submit]');
        const consent = quiz.querySelector('[data-quiz-consent]');
        const sideText = quiz.querySelector('[data-quiz-side-text]');
        let current = 1;

        function showStep(step) {
            current = step;

            steps.forEach((el) => {
                el.classList.toggle('active', Number(el.dataset.step) === current);
            });

            if (stepLabel) {
                stepLabel.textContent = String(current);
            }

            const isFirst = current === 1;
            const isLast = current === total;

            if (prevBtn) prevBtn.hidden = isFirst;
            if (nextBtn) nextBtn.hidden = isLast;
            if (submitBtn) submitBtn.hidden = !isLast;
            if (consent) consent.hidden = !isLast;

            if (sideText) {
                const text = isLast
                    ? sideText.getAttribute('data-text-final')
                    : sideText.getAttribute('data-text-default');
                if (text) sideText.innerHTML = text;
            }
        }

        quiz.querySelectorAll('.quiz-option').forEach((btn) => {
            btn.addEventListener('click', () => {
                const stepEl = btn.closest('.quiz-step');
                if (!stepEl) return;

                stepEl.querySelectorAll('.quiz-option').forEach((item) => {
                    item.classList.remove('active');
                });
                btn.classList.add('active');
            });
        });

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                if (current < total) showStep(current + 1);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                if (current > 1) showStep(current - 1);
            });
        }

        showStep(1);
    }

    const doctorGallery = document.querySelector('.doctor-gallery');

    if (doctorGallery) {
        const tabs = doctorGallery.querySelectorAll('.doctor-gallery-tab');
        const panels = doctorGallery.querySelectorAll('.doctor-gallery-panel');
        const prevBtn = doctorGallery.querySelector('.doctor-gallery-prev');
        const nextBtn = doctorGallery.querySelector('.doctor-gallery-next');
        let activeIndex = 0;

        const swipers = Array.from(doctorGallery.querySelectorAll('.doctor-gallery-slider')).map((el) => {
            const perView = Number(el.dataset.perView) || 3;

            return new Swiper(el, {
                slidesPerView: 1,
                spaceBetween: 16,
                speed: 700,
                watchOverflow: true,
                breakpoints: {
                    576: {
                        slidesPerView: Math.min(2, perView),
                        spaceBetween: 16,
                    },
                    992: {
                        slidesPerView: perView,
                        spaceBetween: 20,
                    },
                },
            });
        });

        const activateTab = (index) => {
            activeIndex = index;

            tabs.forEach((tab, i) => {
                const on = i === index;
                tab.classList.toggle('active', on);
                tab.setAttribute('aria-selected', on ? 'true' : 'false');
            });

            panels.forEach((panel, i) => {
                const on = i === index;
                panel.classList.toggle('active', on);
                panel.hidden = !on;
            });

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    const swiper = swipers[index];
                    if (!swiper) return;
                    swiper.update();
                    swiper.slideTo(0, 0);
                });
            });
        };

        tabs.forEach((tab) => {
            tab.addEventListener('click', () => {
                activateTab(Number(tab.dataset.tab));
            });
        });

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                swipers[activeIndex]?.slidePrev();
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                swipers[activeIndex]?.slideNext();
            });
        }
    }

});