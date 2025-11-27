// --- 1. Content Database (Simulating Pages) ---
const contentData = {
    'home': `
        <section class="hero">
            <div class="container hero-content">
                <h1>Empowering Communication.<br>Enhancing Lives.</h1>
                <p>Compassionate speech and hearing care for children and adults. We help you connect with the world.</p>
                <a href="#contact" class="btn" onclick="route('contact')">Book Appointment</a>
            </div>
        </section>

        <section class="section reveal" id="services">
            <div class="container">
                <h2 class="section-title">Our Services</h2>
                <div class="grid-3">
                    <div class="card">
                        <i class="fas fa-comments card-icon"></i>
                        <h3>Speech Therapy</h3>
                        <p>Specialized therapy for articulation, fluency, and language delays.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-ear-listen card-icon"></i>
                        <h3>Hearing Assessment</h3>
                        <p>Comprehensive audiological evaluations (PTA, Tympanometry).</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-puzzle-piece card-icon"></i>
                        <h3>Autism Program</h3>
                        <p>Multidisciplinary approach focusing on social communication.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-light reveal">
            <div class="container">
                <h2 class="section-title">Disorders We Treat</h2>
                <div class="grid-4">
                    <a href="#speech-delay" class="card" onclick="route('speech-delay')">
                        <i class="fas fa-clock card-icon"></i>
                        <h3>Speech Delay</h3>
                    </a>
                    <a href="#autism-asd" class="card" onclick="route('autism-asd')">
                        <i class="fas fa-shapes card-icon"></i>
                        <h3>Autism (ASD)</h3>
                    </a>
                    <a href="#hearing-disorders" class="card" onclick="route('hearing-disorders')">
                        <i class="fas fa-deaf card-icon"></i>
                        <h3>Hearing Loss</h3>
                    </a>
                    <a href="#aphasia" class="card" onclick="route('aphasia')">
                        <i class="fas fa-brain card-icon"></i>
                        <h3>Aphasia</h3>
                    </a>
                    <a href="#stuttering" class="card" onclick="route('stuttering')">
                        <i class="fas fa-microphone-slash card-icon"></i>
                        <h3>Stuttering</h3>
                    </a>
                    <a href="#voice-disorders" class="card" onclick="route('voice-disorders')">
                        <i class="fas fa-music card-icon"></i>
                        <h3>Voice Disorders</h3>
                    </a>
                </div>
            </div>
        </section>

        <section class="section reveal">
            <div class="container">
                <h2 class="section-title">Why Choose LUMEN?</h2>
                <div class="grid-3">
                    <div class="card">
                        <i class="fas fa-heart card-icon" style="color:var(--secondary)"></i>
                        <h3>Compassionate Care</h3>
                        <p>We treat every patient like family with a warm, child-friendly approach.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-user-md card-icon" style="color:var(--secondary)"></i>
                        <h3>Experienced Clinicians</h3>
                        <p>Our team consists of certified audiologists and speech-language pathologists.</p>
                    </div>
                    <div class="card">
                        <i class="fas fa-home card-icon" style="color:var(--secondary)"></i>
                        <h3>Home Visits</h3>
                        <p>Available for elderly patients and children with severe mobility issues.</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="section bg-light reveal">
            <div class="container">
                <h2 class="section-title">Testimonials</h2>
                <div class="testimonial-card">
                    <div class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
                    <p>"LUMEN changed our son's life. He went from non-verbal to singing nursery rhymes in 6 months. The therapists are angels."</p>
                    <h4 style="margin-top:20px;">- Sarah J., Parent</h4>
                </div>
            </div>
        </section>
    `,

    'about': `
        <div class="page-header">
            <div class="container">
                <h1>About LUMEN</h1>
                <p>Dedicated to restoring the joy of communication.</p>
            </div>
        </div>
        <div class="container section detail-content">
            <div class="grid-3">
                <div style="grid-column: span 2;">
                    <h2>Our Mission</h2>
                    <p>At LUMEN Speech & Hearing Care, we believe communication is a fundamental human right. Our mission is to provide evidence-based, compassionate care to individuals of all ages facing speech, language, and hearing challenges.</p>
                    <br>
                    <h2>Our Approach</h2>
                    <p>We combine advanced medical technology with a warm, holistic approach. We don't just treat the disorder; we treat the person. Our clinic is designed to be a safe, non-clinical environment where children feel ready to play and adults feel heard.</p>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Clinic Team">
                </div>
            </div>
        </div>
    `,

    'speech-disorders': `
        <div class="page-header"><h1>Speech Disorders</h1></div>
        <div class="container section detail-content">
            <h2>Overview</h2>
            <p>Speech disorders affect a person's ability to produce sounds that create words. We treat a wide range of conditions including Apraxia, Dysarthria, and Articulation disorders.</p>
            <div class="grid-3" style="margin-top:40px;">
                <a href="#aphasia" class="card" onclick="route('aphasia')"><h3>Aphasia</h3></a>
                <a href="#stuttering" class="card" onclick="route('stuttering')"><h3>Stuttering</h3></a>
                <a href="#speech-delay" class="card" onclick="route('speech-delay')"><h3>Speech Delay</h3></a>
            </div>
        </div>
    `,

    'autism-asd': `
        <div class="page-header"><h1>Autism Spectrum Disorder (ASD)</h1></div>
        <div class="container section detail-content">
            <div class="info-box">
                <strong>Definition:</strong> ASD is a developmental disability caused by differences in the brain. People with ASD often have problems with social communication and interaction, and restricted or repetitive behaviors.
            </div>
            <h2>Symptoms in Communication</h2>
            <ul>
                <li>Delayed speech and language skills</li>
                <li>Repeats words or phrases over and over (Echolalia)</li>
                <li>Gives unrelated answers to questions</li>
                <li>Does not point or respond to their name</li>
                <li>Uses few or no gestures (e.g., does not wave goodbye)</li>
            </ul>
            <h2>Our Therapy Plan</h2>
            <p>We use a mix of <strong>Play Therapy</strong> and <strong>Social Thinking</strong> frameworks. We focus on:</p>
            <ol style="margin-left:20px; margin-bottom:20px;">
                <li>Joint Attention (engaging with others)</li>
                <li>Functional Communication (expressing wants/needs)</li>
                <li>Understanding non-verbal cues</li>
            </ol>
            <a href="#contact" class="btn">Book an Assessment</a>
        </div>
    `,

    'speech-delay': `
        <div class="page-header"><h1>Speech Delay</h1></div>
        <div class="container section detail-content">
            <h2>When to Worry?</h2>
            <p>While every child develops at their own pace, a speech delay is when a child isn't meeting typical milestones.</p>
            <h2>Milestones to Watch</h2>
            <ul>
                <li><strong>12 Months:</strong> Should use gestures like waving and saying "mama/dada".</li>
                <li><strong>18 Months:</strong> Should prefer gestures over vocalizations.</li>
                <li><strong>2 Years:</strong> Should combine two words ("more juice").</li>
            </ul>
            <h2>Home Exercises</h2>
            <p>1. <strong>Self-Talk:</strong> Narrate what you are doing. "Mommy is washing the apple."<br>
            2. <strong>Parallel Talk:</strong> Narrate what the child is doing. "You are pushing the car."<br>
            3. <strong>Reading:</strong> Read simple picture books daily.</p>
        </div>
    `,

    'stuttering': `
        <div class="page-header"><h1>Stuttering (Stammering)</h1></div>
        <div class="container section detail-content">
            <p>Stuttering is a speech disorder that involves frequent and significant problems with the normal fluency and flow of speech.</p>
            <h2>Symptoms</h2>
            <ul>
                <li>Repetition of sounds, syllables, or words.</li>
                <li>Prolongation of sounds.</li>
                <li>Blocks (pauses) within a word.</li>
            </ul>
            <h2>Therapy Approach</h2>
            <p>We focus on <strong>Fluency Shaping</strong> (speaking more fluently) and <strong>Stuttering Modification</strong> (stuttering more easily/less tensely). Confidence building is a massive part of our program.</p>
        </div>
    `,

    'aphasia': `
        <div class="page-header"><h1>Aphasia</h1></div>
        <div class="container section detail-content">
            <div class="info-box">
                <strong>Definition:</strong> Aphasia is a language disorder that affects a person's ability to communicate. It can occur suddenly after a stroke or head injury.
            </div>
            <h2>Types</h2>
            <ul>
                <li><strong>Broca's Aphasia:</strong> Trouble speaking fluently but comprehension is preserved.</li>
                <li><strong>Wernicke's Aphasia:</strong> Fluent speech but words lack meaning; trouble understanding.</li>
            </ul>
            <h2>Rehabilitation</h2>
            <p>Our focus is neuroplasticity—retraining the brain. We use Melodic Intonation Therapy (MIT) and Constraint-Induced Language Therapy.</p>
        </div>
    `,

    'hearing-disorders': `
        <div class="page-header"><h1>Hearing Disorders</h1></div>
        <div class="container section detail-content">
            <h2>Hearing Loss</h2>
            <p>We treat Sensorineural, Conductive, and Mixed hearing loss.</p>
            <h2>Services</h2>
            <ul>
                <li><strong>PTA (Pure Tone Audiometry):</strong> To determine the degree of hearing loss.</li>
                <li><strong>Tympanometry:</strong> To check middle ear health.</li>
                <li><strong>Hearing Aid Fitting:</strong> Digital programmable hearing aids.</li>
                <li><strong>Cochlear Implant Rehabilitation:</strong> Post-surgery therapy.</li>
            </ul>
        </div>
    `,

    'voice-disorders': `
        <div class="page-header"><h1>Voice Disorders</h1></div>
        <div class="container section detail-content">
            <p>Issues with pitch, volume, or tone/quality of voice.</p>
            <h2>Common Conditions</h2>
            <ul>
                <li>Vocal Nodules (Teacher's nodules)</li>
                <li>Puberphonia</li>
                <li>Laryngitis</li>
            </ul>
            <h2>Voice Therapy</h2>
            <p>We teach vocal hygiene, breathing techniques, and resonance exercises to restore natural voice.</p>
        </div>
    `,

    'programs': `
        <div class="page-header"><h1>Specialized Programs</h1></div>
        <div class="container section detail-content">
            <div class="grid-3">
                <div class="card">
                    <h3>Early Intervention</h3>
                    <p>For children 0-3 years. Capitalizing on the brain's peak neuroplasticity window.</p>
                </div>
                <div class="card">
                    <h3>School Readiness</h3>
                    <p>Preparing children with speech delays for the social and academic demands of school.</p>
                </div>
                <div class="card">
                    <h3>Parent Training</h3>
                    <p>Hanen-based approaches to teach parents how to be the primary therapist at home.</p>
                </div>
            </div>
        </div>
    `,

    'contact': `
        <div class="page-header"><h1>Contact Us</h1></div>
        <div class="container section">
            <div class="contact-grid">
                <div>
                    <h2>Get in Touch</h2>
                    <p>We are here to answer any questions you may have about our services.</p>
                    <br>
                    <div class="contact-info-item">
                        <div class="contact-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div>
                            <h4>Visit Us</h4>
                            <p>123 Health Valley, Wellness City, India</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-icon"><i class="fas fa-phone"></i></div>
                        <div>
                            <h4>Call Us</h4>
                            <p>+91 98765 43210</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <div class="contact-icon"><i class="fas fa-envelope"></i></div>
                        <div>
                            <h4>Email Us</h4>
                            <p>care@lumenclinic.com</p>
                        </div>
                    </div>
                </div>
                <div>
                    <form style="background:var(--light-bg); padding:30px; border-radius:16px;">
                        <h3 style="margin-bottom:20px;">Book an Appointment</h3>
                        <input type="text" placeholder="Your Name" style="width:100%; padding:15px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                        <input type="tel" placeholder="Phone Number" style="width:100%; padding:15px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px;">
                        <textarea placeholder="How can we help?" style="width:100%; padding:15px; margin-bottom:15px; border:1px solid #ddd; border-radius:8px; height:100px;"></textarea>
                        <button class="btn" type="button" onclick="alert('Thank you! We will call you shortly.')">Submit Request</button>
                    </form>
                </div>
            </div>
            <div style="margin-top:50px;">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.566810235313!2d76.7794179151307!3d30.702402981647696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec05872e4201%3A0xc39f972b2605658e!2sChandigarh%2C%20India!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" width="100%" height="400" style="border:0; border-radius:16px;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    `
};

// --- 2. Router Logic ---
function route(pageName) {
    const app = document.getElementById('app');
    
    // Default to home if page doesn't exist
    if (!contentData[pageName]) pageName = 'home';
    
    // Scroll to top
    window.scrollTo(0, 0);

    // Inject content
    app.innerHTML = contentData[pageName];

    // Re-initialize animations for new content
    initAnimations();

    // Close mobile menu if open
    const navLinks = document.querySelector('.nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
}

// --- 3. Initialization & Animations ---
document.addEventListener('DOMContentLoaded', () => {
    // Hide Loader
    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 500);
    }, 1000);

    // Initial Load based on Hash or Default to Home
    const initialPage = location.hash.replace('#', '') || 'home';
    route(initialPage);

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

// Scroll Reveal Animation Observer
function initAnimations() {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach((reveal) => {
        observer.observe(reveal);
    });
}

// Handle browser Back/Forward buttons
window.addEventListener('popstate', () => {
    const page = location.hash.replace('#', '') || 'home';
    route(page);
});
