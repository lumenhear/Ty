// --- 1. Content Database ---
const contentData = {
    'home': `
        <section class="hero">
            <div class="container hero-content">
                <div class="hero-badges">
                    <div class="badge"><i class="fas fa-map-marker-alt"></i> Chandigarh</div>
                    <div class="badge"><i class="fas fa-map-marker-alt"></i> Delhi</div>
                </div>
                <h1>Empowering Communication.<br><span>Enhancing Lives.</span></h1>
                <p>Expert Speech Therapy & Hearing Care across North India. We help children and adults connect with the world confidently.</p>
                <div style="margin-top:30px;">
                    <a href="#contact" class="btn" onclick="route('contact')">Book Appointment</a>
                    <a href="#services" class="btn btn-secondary" onclick="route('services')" style="margin-left:10px;">Our Services</a>
                </div>
            </div>
        </section>

        <section class="section reveal" id="services">
            <div class="container">
                <h2 class="section-title">Comprehensive <span>Services</span></h2>
                <div class="grid-3">
                    <div class="card" onclick="route('speech-disorders')">
                        <div class="card-icon"><i class="fas fa-comments"></i></div>
                        <h3>Speech Therapy</h3>
                        <p>Evidence-based therapy for Speech Delay, Stuttering, and Articulation issues.</p>
                    </div>
                    <div class="card" onclick="route('hearing-disorders')">
                        <div class="card-icon"><i class="fas fa-ear-listen"></i></div>
                        <h3>Hearing Care</h3>
                        <p>Advanced Audiometry (PTA), Tympanometry, and Digital Hearing Aids.</p>
                    </div>
                    <div class="card" onclick="route('autism-asd')">
                        <div class="card-icon"><i class="fas fa-puzzle-piece"></i></div>
                        <h3>Autism Program</h3>
                        <p>Specialized early intervention focusing on social communication and behavior.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-light reveal">
            <div class="container">
                <h2 class="section-title">Conditions We <span>Treat</span></h2>
                <div class="grid-4">
                    <a href="#speech-delay" class="card" onclick="route('speech-delay')">
                        <i class="fas fa-child card-icon" style="font-size:2rem; width:60px; height:60px; line-height:60px;"></i>
                        <h3>Speech Delay</h3>
                    </a>
                    <a href="#autism-asd" class="card" onclick="route('autism-asd')">
                        <i class="fas fa-shapes card-icon" style="font-size:2rem; width:60px; height:60px; line-height:60px;"></i>
                        <h3>Autism (ASD)</h3>
                    </a>
                    <a href="#aphasia" class="card" onclick="route('aphasia')">
                        <i class="fas fa-brain card-icon" style="font-size:2rem; width:60px; height:60px; line-height:60px;"></i>
                        <h3>Stroke / Aphasia</h3>
                    </a>
                    <a href="#stuttering" class="card" onclick="route('stuttering')">
                        <i class="fas fa-microphone-slash card-icon" style="font-size:2rem; width:60px; height:60px; line-height:60px;"></i>
                        <h3>Stuttering</h3>
                    </a>
                </div>
                <div style="text-align:center; margin-top:40px;">
                    <a href="#services" class="btn btn-secondary" onclick="route('services')">View All Disorders</a>
                </div>
            </div>
        </section>

        <section class="section reveal">
            <div class="container">
                <h2 class="section-title">Why Families Trust <span>LUMEN</span></h2>
                <div class="grid-3">
                    <div class="card" style="border:none; box-shadow:none; text-align:left;">
                        <i class="fas fa-user-md fa-2x" style="color:var(--primary); margin-bottom:15px;"></i>
                        <h3>Certified Clinicians</h3>
                        <p>Our team consists of RCI-registered Audiologists and Speech-Language Pathologists.</p>
                    </div>
                    <div class="card" style="border:none; box-shadow:none; text-align:left;">
                        <i class="fas fa-home fa-2x" style="color:var(--primary); margin-bottom:15px;"></i>
                        <h3>Home Visits Available</h3>
                        <p>We bring care to your doorstep in Chandigarh, Mohali, and Panchkula for elderly and bedridden patients.</p>
                    </div>
                    <div class="card" style="border:none; box-shadow:none; text-align:left;">
                        <i class="fas fa-heart fa-2x" style="color:var(--primary); margin-bottom:15px;"></i>
                        <h3>Child-Friendly</h3>
                        <p>Our therapy rooms are designed to look like play areas, making therapy fun for kids.</p>
                    </div>
                </div>
            </div>
        </section>
    `,

    'autism-asd': `
        <div class="internal-hero">
            <div class="container">
                <div class="breadcrumb">Home <span>/</span> Services <span>/</span> Autism</div>
                <h1>Autism Spectrum Disorder (ASD)</h1>
                <p>Helping children connect, communicate, and thrive through play-based therapy.</p>
            </div>
        </div>
        <div class="container disorder-layout">
            <div class="main-content">
                <div class="content-block">
                    <h2><i class="fas fa-info-circle"></i> Understanding ASD</h2>
                    <p>Autism Spectrum Disorder (ASD) is a developmental condition that involves persistent challenges in social interaction, speech and nonverbal communication, and restricted/repetitive behaviors.</p>
                    <div class="highlight-box">
                        <strong>LUMEN's Philosophy:</strong> We don't try to "fix" the child. We try to unlock their potential to communicate their wants, needs, and feelings effectively.
                    </div>
                </div>
                
                <div class="content-block">
                    <h2><i class="fas fa-exclamation-triangle"></i> Red Flags to Watch</h2>
                    <ul>
                        <li>Does not respond to name by 12 months.</li>
                        <li>Avoids eye contact and prefers to be alone.</li>
                        <li>Delayed speech and language skills.</li>
                        <li>Repeats words or phrases over and over (Echolalia).</li>
                        <li>Flaps hands, rocks body, or spins in circles.</li>
                    </ul>
                </div>

                <div class="content-block">
                    <h2><i class="fas fa-user-md"></i> Our Therapy Approach</h2>
                    <p>We use a multidisciplinary approach tailored to your child:</p>
                    <ul>
                        <li><strong>Sensory Integration:</strong> Helping the child process sensory information.</li>
                        <li><strong>Social Thinking:</strong> Teaching how to interact with peers.</li>
                        <li><strong>AAC:</strong> Using picture cards or devices if speech is limited.</li>
                    </ul>
                </div>
                <div style="margin-top:40px;">
                    <a href="#contact" class="btn" onclick="route('contact')">Schedule an Assessment</a>
                </div>
            </div>
            
            <aside>
                <div class="sidebar-card">
                    <h3>Related Services</h3>
                    <div class="sidebar-links">
                        <a href="#speech-delay" onclick="route('speech-delay')">Speech Delay <i class="fas fa-chevron-right"></i></a>
                        <a href="#hearing-disorders" onclick="route('hearing-disorders')">Hearing Test <i class="fas fa-chevron-right"></i></a>
                    </div>
                    <br>
                    <h3>Need Help?</h3>
                    <p style="font-size:0.9rem; color:#666;">Call us for a free consultation.</p>
                    <a href="tel:9350158754" style="color:var(--primary); font-weight:bold;">+91 93501 58754</a>
                </div>
            </aside>
        </div>
    `,

    'speech-delay': `
        <div class="internal-hero">
            <div class="container">
                <div class="breadcrumb">Home <span>/</span> Services <span>/</span> Speech Delay</div>
                <h1>Speech & Language Delay</h1>
                <p>Is your child not speaking yet? Early intervention makes all the difference.</p>
            </div>
        </div>
        <div class="container disorder-layout">
            <div class="main-content">
                <div class="content-block">
                    <h2><i class="fas fa-baby"></i> What is a Speech Delay?</h2>
                    <p>A speech delay is when a child isn't developing speech and language at an expected rate. It is a common developmental problem that affects up to 10% of preschool children.</p>
                </div>
                
                <div class="content-block">
                    <h2><i class="fas fa-list-check"></i> Age Milestones</h2>
                    <p>If your child misses these, consider an assessment:</p>
                    <ul>
                        <li><strong>12 Months:</strong> Uses gestures (waving), says "mama/dada".</li>
                        <li><strong>18 Months:</strong> Says several single words.</li>
                        <li><strong>2 Years:</strong> Puts two words together ("more juice", "car go").</li>
                        <li><strong>3 Years:</strong> Strangers can understand about 75% of their speech.</li>
                    </ul>
                </div>

                <div class="content-block">
                    <h2><i class="fas fa-comments"></i> How We Help</h2>
                    <div class="highlight-box">
                        We use <strong>Play-Based Therapy</strong>. Children learn best when they are having fun. We create language opportunities during games, making the child <em>want</em> to speak.
                    </div>
                    <ul>
                        <li>Expanding vocabulary.</li>
                        <li>Improving sentence structure.</li>
                        <li>Parent Training (Hanen approach) to continue therapy at home.</li>
                    </ul>
                </div>
                <a href="#contact" class="btn" onclick="route('contact')">Book Consultation</a>
            </div>
            
            <aside>
                <div class="sidebar-card">
                    <h3>Quick Links</h3>
                    <div class="sidebar-links">
                        <a href="#autism-asd" onclick="route('autism-asd')">Autism Check <i class="fas fa-chevron-right"></i></a>
                        <a href="#contact" onclick="route('contact')">Locations <i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </aside>
        </div>
    `,

    'hearing-disorders': `
        <div class="internal-hero">
            <div class="container">
                <div class="breadcrumb">Home <span>/</span> Services <span>/</span> Hearing</div>
                <h1>Hearing Care & Audiology</h1>
                <p>Comprehensive diagnostic hearing tests and digital hearing aid fitting.</p>
            </div>
        </div>
        <div class="container disorder-layout">
            <div class="main-content">
                <div class="content-block">
                    <h2><i class="fas fa-stethoscope"></i> Diagnostic Services</h2>
                    <p>We use state-of-the-art equipment to assess hearing health.</p>
                    <ul>
                        <li><strong>Pure Tone Audiometry (PTA):</strong> Determines the degree of hearing loss.</li>
                        <li><strong>Tympanometry:</strong> Checks the condition of the middle ear and mobility of the eardrum.</li>
                        <li><strong>OAE (Otoacoustic Emissions):</strong> Newborn hearing screening.</li>
                        <li><strong>BERA/ABR:</strong> Objective hearing test for infants and difficult-to-test populations.</li>
                    </ul>
                </div>

                <div class="content-block">
                    <h2><i class="fas fa-ear-deaf"></i> Hearing Aids</h2>
                    <p>We dispense the latest digital hearing aids from top brands (Phonak, Signia, Resound, Widex). Styles available:</p>
                    <ul>
                        <li><strong>BTE (Behind The Ear):</strong> Powerful and durable.</li>
                        <li><strong>RIC (Receiver In Canal):</strong> Discrete and natural sound.</li>
                        <li><strong>CIC/IIC (Invisible):</strong> Custom-made to fit deep in the ear.</li>
                    </ul>
                    <div class="highlight-box">
                        <strong>Trial Available:</strong> We offer a trial period for hearing aids so you can experience the difference in your daily life before purchasing.
                    </div>
                </div>
                <a href="#contact" class="btn" onclick="route('contact')">Book Hearing Test</a>
            </div>
            
             <aside>
                <div class="sidebar-card">
                    <h3>Need Assistance?</h3>
                    <p style="font-size:0.9rem; color:#666;">Not sure which hearing aid is right for you? Call our audiologist.</p>
                    <a href="tel:9350158754" style="color:var(--primary); font-weight:bold;">+91 93501 58754</a>
                </div>
            </aside>
        </div>
    `,

    'stuttering': `
         <div class="internal-hero">
            <div class="container">
                <div class="breadcrumb">Home <span>/</span> Services <span>/</span> Stuttering</div>
                <h1>Stuttering (Stammering)</h1>
                <p>Regain confidence and flow in your speech.</p>
            </div>
        </div>
        <div class="container disorder-layout">
            <div class="main-content">
                <div class="content-block">
                    <h2><i class="fas fa-question-circle"></i> What is Stuttering?</h2>
                    <p>Stuttering disrupts the normal flow of speech. It can manifest as repetitions (b-b-ball), prolongations (mmmm-milk), or blocks (silence when trying to speak).</p>
                </div>
                 <div class="content-block">
                    <h2><i class="fas fa-clipboard-list"></i> Our Approach</h2>
                    <p>We treat both children and adults using specialized techniques:</p>
                    <ul>
                        <li><strong>Fluency Shaping:</strong> Techniques like "easy onset" and "light contact" to smooth out speech.</li>
                        <li><strong>Stuttering Modification:</strong> Learning to stutter with less tension and struggle.</li>
                        <li><strong>Counseling:</strong> Addressing the fear and anxiety associated with speaking.</li>
                    </ul>
                </div>
                <a href="#contact" class="btn" onclick="route('contact')">Start Therapy</a>
            </div>
             <aside>
                <div class="sidebar-card">
                    <h3>Book Now</h3>
                    <div class="sidebar-links">
                        <a href="#contact" onclick="route('contact')">Book Appointment <i class="fas fa-chevron-right"></i></a>
                    </div>
                </div>
            </aside>
        </div>
    `,

     'aphasia': `
         <div class="internal-hero">
            <div class="container">
                <div class="breadcrumb">Home <span>/</span> Services <span>/</span> Aphasia</div>
                <h1>Aphasia & Stroke Rehab</h1>
                <p>Rebuilding language pathways after a brain injury.</p>
            </div>
        </div>
        <div class="container disorder-layout">
            <div class="main-content">
                <div class="content-block">
                    <h2><i class="fas fa-brain"></i> Understanding Aphasia</h2>
                    <p>Aphasia is an impairment of language, affecting the production or comprehension of speech and the ability to read or write. It is always due to injury to the brain-most commonly from a stroke.</p>
                </div>
                 <div class="content-block">
                    <h2><i class="fas fa-user-check"></i> Therapy Goals</h2>
                    <ul>
                        <li>Restoring as much language as possible (Neuroplasticity).</li>
                        <li>Learning compensatory strategies (gestures, drawing).</li>
                        <li>Family training to improve communication at home.</li>
                    </ul>
                </div>
                <a href="#contact" class="btn" onclick="route('contact')">Enquire Now</a>
            </div>
        </div>
    `,

    'contact': `
        <div class="internal-hero">
            <div class="container">
                <h1>Contact Us</h1>
                <p>Visit us in Chandigarh, Mohali, Panchkula, or Delhi.</p>
            </div>
        </div>
        <div class="container section">
            <div class="location-grid">
                <div class="location-card">
                    <i class="fas fa-map-marker-alt"></i>
                    <h4>Chandigarh</h4>
                    <p>Sector 32 & 46</p>
                </div>
                <div class="location-card">
                    <i class="fas fa-map-marker-alt"></i>
                    <h4>Mohali</h4>
                    <p>Phase 7 & Phase 10</p>
                </div>
                <div class="location-card">
                    <i class="fas fa-map-marker-alt"></i>
                    <h4>Panchkula</h4>
                    <p>Sector 11</p>
                </div>
                <div class="location-card">
                    <i class="fas fa-map-marker-alt"></i>
                    <h4>Delhi</h4>
                    <p>South Extension</p>
                </div>
            </div>

            <div class="disorder-layout" style="margin-top:0;">
                <div style="background:var(--light-bg); padding:40px; border-radius:12px;">
                    <h2 style="margin-bottom:20px;">Get in Touch</h2>
                    <p style="margin-bottom:30px;">Call us or fill out the form for an appointment.</p>
                    
                    <div class="contact-link"><i class="fas fa-phone"></i> <strong>+91 93501 58754</strong></div>
                    <div class="contact-link"><i class="fas fa-envelope"></i> lumenhearingcare@gmail.com</div>
                    <div class="contact-link"><i class="fab fa-instagram"></i> @lumenhearingcare</div>

                    <div style="margin-top:30px;">
                        <a href="https://wa.me/919350158754" target="_blank" class="btn" style="background:#25d366; border-color:#25d366;">
                            <i class="fab fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                    </div>
                </div>

                <div>
                    <form style="background:var(--white); padding:30px; border-radius:12px; box-shadow:var(--shadow);">
                        <h3 style="margin-bottom:20px;">Request Callback</h3>
                        <input type="text" placeholder="Patient Name" style="width:100%; padding:15px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                        <input type="tel" placeholder="Phone Number" style="width:100%; padding:15px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                        <select style="width:100%; padding:15px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                            <option>Select Location</option>
                            <option>Chandigarh</option>
                            <option>Mohali</option>
                            <option>Panchkula</option>
                            <option>Delhi</option>
                        </select>
                        <button class="btn" type="button" onclick="alert('Thank you! We will call you shortly on 9350158754.')">Submit Request</button>
                    </form>
                </div>
            </div>
        </div>
    `
};

// --- 2. Router Logic ---
function route(pageName) {
    const app = document.getElementById('app');
    
    // Default to home if page doesn't exist, handle 'services' route
    if (pageName === 'services') pageName = 'home'; // Simplified for this demo
    if (!contentData[pageName]) pageName = 'home';
    
    window.scrollTo(0, 0);
    app.innerHTML = contentData[pageName];

    // Close mobile menu if open
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }

    initAnimations();
}

// --- 3. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Hide Loader
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 1000);

    const initialPage = location.hash.replace('#', '') || 'home';
    route(initialPage);

    // Mobile Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Animations
function initAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach((reveal) => observer.observe(reveal));
}

window.addEventListener('popstate', () => {
    const page = location.hash.replace('#', '') || 'home';
    route(page);
});
