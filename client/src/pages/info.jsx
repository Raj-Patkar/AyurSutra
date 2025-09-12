import "./info.css";
import logo from "../assets/Ayurlogo.png";
import hero from "../assets/about.png";
import { Link } from "react-router-dom";

function Info() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="AyurSutra Logo" />
          <h1></h1>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <button><Link to="/login" className="login-btn">Login</Link></button>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h2>
            Ayur<span className="highlight">Sutra</span>
          </h2>
          <p>
            AyurSutra is your gateway to holistic healing. We combine the timeless wisdom 
            of Ayurveda with modern care to offer personalized therapies, diet 
            recommendations, and lifestyle guidance that detoxify the body, calm 
            the mind, and rejuvenate the spirit.          </p>
          {/* <div className="hero-buttons">
            <button><Link to="/signup" className="btn">Get Started</Link></button>
            
          </div> */}
        </div>
        <div className="hero-image">
          <img src={hero} alt="Ayurvedic items" />
        </div>
      </section>

      

      {/* Services */}
      <section className="services">
        {/* <h3>OUR SERVICES</h3> */}
        <br/>
        <h2>Who Are We?</h2>
        <p>At AyurSutra, we are more than just a wellness platform – we are a bridge 
between ancient Ayurvedic wisdom and modern science.<br/> Our journey began 
with a simple vision: to make natural healing accessible, personalized, 
and effective for everyone, regardless of age or lifestyle.  
<br/><br />
We work with a dedicated team of Ayurvedic doctors, nutritionists, and 
wellness practitioners who design therapies, diet plans, and lifestyle<br />
recommendations tailored specifically to your health profile.  
From preventive care to chronic condition management, our mission is to 
guide you on a path<br/> of self-healing, inner balance, and sustainable 
well-being.
</p>
<br/>
        <h2>AyurSutra Philosophy</h2>
        <p>The foundation of AyurSutra lies in the timeless principles of Ayurveda, 
the "Science of Life."<br/> Ayurveda teaches that true health is not just the 
absence of disease but a state of harmony between body, mind, and spirit.  <br />

We believe that every individual is unique, and so is their path to 
healing. Our philosophy is rooted in three core principles: <br /><br /> 

1️⃣ Balance of Doshas (Vata, Pitta, Kapha): Every therapy and 
recommendation is customized to balance your natural <br />constitution.  
<br /><br />
2️⃣ Prevention Over Cure: By adopting Ayurvedic lifestyle practices, 
we help prevent health issues before they arise.  
<br /><br />
3️⃣ Mind-Body-Spirit Connection: Healing is not complete unless 
the mind is calm and the spirit is nourished. That is <br />why our 
programs integrate detox, nutrition, mindfulness, and stress 
management.  
<br /><br />
Through AyurSutra, we bring Ayurveda into modern living – simple, 
practical, and deeply transformative.
</p>
        <br/>
        <h2>Why Choose AyurSutra</h2>
        <div className="service-cards">
          <div className="card">
            <div className="card-icon">🌿</div>
            <h4>Personalized Care</h4>
            <p>Each therapy and recommendation is designed uniquely for your dosha and health profile.</p>
          </div>
          <div className="card highlight-card">
            <div className="card-icon">🧘</div>
            <h4>Mind-Body Balance</h4>
            <p>We combine detox, diet, and mindfulness to ensure holistic healing beyond physical symptoms.</p>
          </div>
          <div className="card">
            <div className="card-icon">⚕️</div>
            <h4>Expert Practitioners</h4>
            <p>Our certified Ayurvedic doctors and therapists bring years of expertise into your healing journey.</p>
          </div>
          {/* <div className="card">
            <div className="card-icon">💊</div>
            <h4>Symptom Based Therapy Suggestion</h4>
            <p>Right Therapies Recommended For Your Health Needs.</p>
          </div> */}
        </div>
      </section>
      {/* Offers */}
      <section className="offers">
        <span>Core Values:</span>
        <button>🌱 Natural Healing</button>
        <button>🤝 Compassionate Care</button>
        <button>⚖️ Balance & Harmony</button>
        <button>💡 Knowledge Sharing</button>
        <button>🔍 Transparency</button>
      </section>

      
      {/* Team */}
      <section className="team">
        {/* <h3>OUR TEAM</h3> */}
        <section className="videos">
        <h2>Learn More With Our Videos</h2>
        <div className="video-grid">
          <div className="video-card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/XozF9VBLEfU?si=lDCvpqUJiIz70gZV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>🌿 Introduction to Ayurveda</p>
          </div>
          <div className="video-card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ft_apyhzpS4?si=ftVdjdeGvahwjaxU" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
            <p>🍵 Ayurvedic Detox Practices</p>
          </div>
          <div className="video-card">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YwxabXeE-hY?si=Ci-0lBJvo4NzM851" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p>🧘 Ayurvedic Daliy Routine</p>
          </div>
        </div>
      </section>
      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To make Ayurveda accessible to everyone and empower people to take 
            charge of their health through natural, preventive, and holistic care.
          </p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            A healthier world where modern living and ancient Ayurveda coexist 
            harmoniously to enhance physical, mental, and emotional well-being.
          </p>
        </div>
      </section>

{/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="card-grid">
          <div className="card">
            <p>
              “AyurSutra therapies helped me reduce stress and feel more energized. 
              The diet plan was simple yet effective.”  
            </p>
            <h4>- Anjali</h4>
          </div>
          <div className="card">
            <p>
              “I had digestion issues for years. After following the recommendations, 
              I feel light and healthier than ever.”  
            </p>
            <h4>- Rohit</h4>
          </div>
          <div className="card">
            <p>
              “The personalized care I received felt truly unique. Ayurveda with 
              modern tech — the perfect blend.”  
            </p>
            <h4>- Meera</h4>
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}

export default Info;