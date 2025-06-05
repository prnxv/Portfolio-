
        const phrases = ["Developer", "Python data scientist", "UI/UX Designer", "Tech Enthusiast"];
        let i = 0;
        let j = 0;
        let currentPhrase = [];
        let isDeleting = false;
        let isEnd = false;

        function typewriter() {
            isEnd = false;
            const typewriterElement = document.getElementById('typewriter');
            
            if (i < phrases.length) {
                if (!isDeleting && j <= phrases[i].length) {
                    currentPhrase.push(phrases[i][j]);
                    j++;
                    typewriterElement.innerHTML = currentPhrase.join('');
                }

                if (isDeleting && j >= 0) {
                    currentPhrase.pop();
                    j--;
                    typewriterElement.innerHTML = currentPhrase.join('');
                }

                if (j === phrases[i].length) {
                    isEnd = true;
                    isDeleting = true;
                }

                if (isDeleting && j === 0) {
                    currentPhrase = [];
                    isDeleting = false;
                    i++;
                    if (i === phrases.length) i = 0;
                }
            }

            const speedUp = Math.random() * 50 + 50;
            const normalSpeed = Math.random() * 150 + 50;
            const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed;
            setTimeout(typewriter, time);
        }

        document.addEventListener('DOMContentLoaded', () => {
            typewriter();
            
            // Animate skill bars on scroll
            const skillBars = document.querySelectorAll('.skill-progress');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.width = entry.target.getAttribute('data-width');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });

            skillBars.forEach(bar => {
                bar.setAttribute('data-width', bar.style.width);
                bar.style.width = '0';
                observer.observe(bar);
            });
        });