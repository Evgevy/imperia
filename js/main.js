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

    burger.addEventListener('click', () => {
        burger.classList.add('active');
        menu.classList.add('active');
        body.classList.add('no-scroll');
    });
    close.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('active');
        body.classList.remove('no-scroll');
    })

    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(btn => {

        btn.addEventListener('click', () => {
    
            menu.classList.remove('active');
    
            burger.classList.remove('active');
    
            body.classList.remove('no-scroll');
    
        });
    
    });


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
            if (!slider) return;
        
            let isDown = false;
            let startX;
            let scrollLeft;
        
            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                
                // 1. Временно отключаем плавный скролл CSS, чтобы не было дерганий при перетаскивании
                slider.style.scrollBehavior = 'auto'; 
                
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
                slider.style.cursor = 'grabbing';
            });
        
            // Слушаем отпускание кнопки на ВСЕМ окне браузера (window), чтобы курсор не залипал
            window.addEventListener('mouseup', () => {
                if (!isDown) return;
                isDown = false;
                slider.style.cursor = 'grab';
                
                // Возвращаем плавный скролл CSS обратно для работы стрелок/пагинации
                slider.style.scrollBehavior = 'smooth'; 
            });
        
            // Слушаем движение мыши на ВСЕМ окне браузера
            window.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                
                // Предотвращаем стандартное поведение браузера (выделение текста, синий фон)
                e.preventDefault(); 
                
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 1.5; // Скорость скролла
                slider.scrollLeft = scrollLeft - walk;
            });
        
        
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


    if (document.querySelector('.kings-slider')) {
        const kingsSlider = new Swiper('.kings-slider', {
            
            slidesPerView: 1,  
            spaceBetween: 15,      
            grabCursor: true,  
            speed: 900,
            navigation: {
                nextEl: '.kings-next',
                prevEl: '.kings-prev',
            },    
    
            breakpoints: {
                
                550: {
                    slidesPerView: 'auto',
                }
            }
        });
    }

    
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

});