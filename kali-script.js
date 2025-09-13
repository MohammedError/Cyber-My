document.addEventListener('DOMContentLoaded', () => {
    const terminalBody = document.getElementById('terminal-body');
    const appContainer = document.getElementById('app-container');
    const typeSound = new Audio('assets/type-sound.mp3');
    const fireworksSound = new Audio('assets/fireworks.mp3');

    const playTypeSound = () => {
        typeSound.currentTime = 0;
        typeSound.play().catch(e => console.error('Sound playback failed:', e));
    };

    const handleDownloadCV = (cvPath) => {
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
        
        fireworksSound.currentTime = 0;
        fireworksSound.play().catch(e => console.error('Sound playback failed:', e));

        setTimeout(() => {
            fireworks.stop();
            fireworksContainer.remove();
            fireworksSound.pause();
        }, 5000);

        const link = document.createElement('a');
        link.href = cvPath;
        link.download = 'CVmohaamed.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const data = {
        profile: `
            <div class="app-content animate__animated animate__fadeIn">
                <h2>> PROFILE.INFO</h2>
                <img src="assets/main.gif" alt="Mohammed Aloufi" class="profile-image">
                <p><strong>Name:</strong> Mohammed Aloufi</p>
                <p><strong>Role:</strong> Cybersecurity Specialist, Database Analyst, Systems Analyst</p>
                <p><strong>Intro:</strong> A passionate Cybersecurity graduate with a robust foundation in IT technical support, driven by a vision to create secure and efficient digital environments. Welcome to my personal portfolio.</p>
            </div>
        `,
        skills: `
            <div class="app-content animate__animated animate__fadeIn">
                <h2>> SKILLS.LIST</h2>
                <ul>
                    <li><span>[+]</span> IT Support</li>
                    <li><span>[+]</span> SOC Analyst</li>
                    <li><span>[+]</span> Network Security</li>
                    <li><span>[+]</span> Cloud Fundamentals</li>
                    <li><span>[+]</span> Web App Hacking</li>
                    <li><span>[+]</span> Digital Forensics</li>
                    <li><span>[+]</span> Oracle Cloud (OCI)</li>
                    <li><span>[+]</span> AWS Educate</li>
                </ul>
            </div>
        `,
        education: `
            <div class="app-content animate__animated animate__fadeIn">
                <h2>> EDUCATION.LOG</h2>
                <ul>
                    <li><span>[+]</span> Bachelor’s degree in Cybersecurity | Technical and Vocational University, Al-Madinah Al-Munawwarah | 2022 - 2025</li>
                    <li><span>[+]</span> Diploma in IT Technical Support | Technical and Vocational Training Corporation, Riyadh | 2020 - 2022</li>
                </ul>
            </div>
        `,
        experience: `
            <div class="app-content animate__animated animate__fadeIn">
                <h2>> EXPERIENCE.LOG</h2>
                <ul>
                    <li><span>[+]</span> IT Support | Al-Awali Municipality (Co-op Training) | 2022</li>
                    <li><span>[+]</span> SOC Analyst & Network Security | Udemy (Internship) | 2024</li>
                </ul>
            </div>
        `,
        certs: `
            <div class="app-content animate__animated animate__fadeIn">
                <h2>> CERTS.LIST</h2>
                <ul>
                    <li><span>[+]</span> <span class="cert-title">eWPT Web Application Penetration Tester</span> <br> <span class="issuer-info">Issuer: INE</span></li>
                    <li><span>[+]</span> <span class="cert-title">Accredited Technical Associate - Cloud V1</span> <br> <span class="issuer-info">Issuer: INE</span></li>
                    <li><span>[+]</span> <span class="cert-title">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</span> <br> <span class="issuer-info">Issuer: Oracle</span></li>
                    <li><span>[+]</span> <span class="cert-title">Oracle Data Platform 2025 Certified Foundations Associate</span> <br> <span class="issuer-info">Issuer: Oracle</span></li>
                    <li><span>[+]</span> <span class="cert-title">Oracle Cloud Infrastructure 2025 Certified Foundations Associate</span> <br> <span class="issuer-info">Issuer: Oracle</span></li>
                    <li><span>[+]</span> <span class="cert-title">AWS Educate Machine Learning Foundations</span> <br> <span class="issuer-info">Issuer: AWS</span></li>
                    <li><span>[+]</span> <span class="cert-title">Introducing Generative AI with AWS</span> <br> <span class="issuer-info">Issuer: Udacity</span></li>
                    <li><span>[+]</span> <span class="cert-title">IT Security Foundations: Network Security</span> <br> <span class="issuer-info">Issuer: LinkedIn</span></li>
                    <li><span>[+]</span> <span class="cert-title">edX Verified Certificate for Esports Management</span> <br> <span class="issuer-info">Issuer: edX</span></li>
                </ul>
            </div>
        `,
        contact: `
            <div class="app-content animate__animated animate__fadeIn">
                <h2>> CONTACT.INFO</h2>
                <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="f0becb6d-64be-41b9-b2b6-84519a22930d">
                    <input type="text" name="name" placeholder="Name" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <textarea name="message" rows="4" placeholder="Message" required></textarea>
                    <button type="submit">SEND MESSAGE</button>
                </form>
                <div class="contact-info">
                    <p><span>Email:</span> <a href="mailto:mohammed.secure@outlook.sa">mohammed.secure@outlook.sa</a></p>
                    <p><span>Phone:</span> <a href="tel:+966590250388">+966590250388</a></p>
                    <div class="social-icons">
                        <a href="https://www.linkedin.com/in/mohammed-ali-s-aloufi-20036b37a/" target="_blank"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://wa.me/966590250388" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
                        <a href="https://github.com/MohammedError" target="_blank"><i class="fa-brands fa-github"></i></a>
                        <a href="https://x.com/mohmmedaa121948" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                    </div>
                </div>
            </div>
        `,
        cv: `
            <div class="app-content animate__animated animate__fadeIn">
                <h2>> CV.DOWNLOAD</h2>
                <p>Accessing secure file server...</p>
                <p>File located. Downloading <a href="assets/CVmohaamed.pdf" class="cv-link download-cv-btn">CVmohaamed.pdf</a>...</p>
            </div>
        `
    };

    function addCommandListeners() {
        document.querySelectorAll('.command').forEach(cmd => {
            cmd.addEventListener('click', () => {
                const appName = cmd.getAttribute('data-app');
                runCommand(appName);
            });
        });
        
        document.querySelectorAll('.download-cv-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const cvPath = e.currentTarget.getAttribute('href');
                handleDownloadCV(cvPath);
            });
        });
    }

    function runCommand(command) {
        const inputLine = document.createElement('p');
        inputLine.innerHTML = `<span class="prompt">guest@kali:~ $</span> ${command}`;
        terminalBody.insertBefore(inputLine, terminalBody.querySelector('.input-line'));
        
        playTypeSound();
        
        appContainer.innerHTML = '';
        
        if (command === 'clear') {
            setTimeout(() => {
                const lines = terminalBody.querySelectorAll('p:not(.input-line), div:not(#app-container)');
                lines.forEach(line => line.remove());
                
                const helpMenu = document.createElement('div');
                helpMenu.id = 'help-menu';
                helpMenu.innerHTML = `
                    <p>Welcome to Mohammed's Digital System. Available commands:</p>
                    <p>· <span class="command" data-app="profile">profile</span> - View Mohammed's personal data</p>
                    <p>· <span class="command" data-app="skills">skills</span> - Display technical skill set</p>
                    <p>· <span class="command" data-app="education">education</span> - Review academic records</p>
                    <p>· <span class="command" data-app="experience">experience</span> - Show work history</p>
                    <p>· <span class="command" data-app="certs">certs</span> - List licenses & certifications</p>
                    <p>· <span class="command" data-app="contact">contact</span> - Get contact information</p>
                    <p>· <span class="command" data-app="cv">cv</span> - Download the full CV</p>
                    <p>· <span class="command" data-app="clear">clear</span> - Clear the terminal</p>
                `;
                terminalBody.insertBefore(helpMenu, terminalBody.querySelector('.input-line'));
                addCommandListeners();
            }, 500);
        } else if (data[command]) {
            setTimeout(() => {
                appContainer.innerHTML = data[command];
                terminalBody.scrollTop = terminalBody.scrollHeight;
                if (command === 'contact') {
                    document.getElementById('contact-form').addEventListener('submit', function(event) {
                        event.preventDefault();
                    });
                }
                addCommandListeners();
            }, 500);
        } else {
            setTimeout(() => {
                const errorLine = document.createElement('p');
                errorLine.innerHTML = `Command not found: ${command}. Type 'help' to see available commands.`;
                terminalBody.insertBefore(errorLine, terminalBody.querySelector('.input-line'));
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }, 500);
        }
    }

    addCommandListeners();
});