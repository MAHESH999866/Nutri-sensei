import React, { useEffect } from 'react';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll and animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'all 0.6s ease';
      observer.observe(el);
    });
  }, []);

  const handleClick = () => alert('🚀 Feature coming soon!');

  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="logo">NutriSensei<span>Plus</span></div>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Programs</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
          <button className="btn-primary" onClick={handleClick}>Get Started</button>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <h1>Your Smart Guide to <span className="highlight">Healthy Eating</span></h1>
            <p className="hero-subtitle">Personalized diet plans for diabetes, blood pressure, heart health, and weight management</p>
            <button className="btn-primary btn-large" onClick={handleClick}>Get Started Free →</button>
          </div>
        </section>

        <section className="stats">
          <div className="container">
            {[
              { num: '50,000+', label: 'Users Transformed' },
              { num: '2,500+', label: 'Meal Plans Created' },
              { num: '98%', label: 'Satisfaction Rate' }
            ].map((stat, i) => (
              <div className="stat-item card" key={i}>
                <div className="stat-number">{stat.num}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="features">
          <div className="container">
            <h2 className="section-title">Everything You Need for Healthy Living</h2>
            <div className="features-grid">
              {[
                { title: 'Personalized Plans', desc: 'Get custom meal plans based on your health condition, goals, and preferences' },
                { title: 'Food Library', desc: 'Explore thousands of foods with detailed nutritional information' },
                { title: 'Track Progress', desc: 'Monitor your daily intake, calories, and macro nutrients' },
                { title: 'Consult Experts', desc: 'Connect with nutritionists and doctors for personalized guidance' }
              ].map((feat, i) => (
                <div className="feature-card card" key={i}>
                  <h3>{feat.title}</h3>
                  <p>{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="why-choose">
          <div className="container">
            <h2 className="section-title">Why Choose NutriSensei?</h2>
            <div className="reasons-grid">
              {[
                { title: 'Medically Reviewed', desc: 'All plans reviewed by certified nutritionists' },
                { title: 'Science-Based', desc: 'Evidence-based nutrition recommendations' },
                { title: 'Easy to Follow', desc: 'Simple meal plans with everyday ingredients' },
                { title: '24/7 Support', desc: 'AI chatbot and expert consultations available' }
              ].map((reason, i) => (
                <div className="reason-card card" key={i}>
                  <h3>{reason.title}</h3>
                  <p>{reason.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="exercises">
          <div className="container">
            <h2 className="section-title">Featured Exercise Programs</h2>
            <p className="section-subtitle">Tailored workouts for your health goals</p>
            <div className="exercises-grid">
              {[
                { name: 'Diabetes Management', desc: '10-minute walking workout to help control blood sugar' },
                { name: 'Heart Health', desc: 'Low-impact cardio safe for heart patients' },
                { name: 'Weight Loss', desc: '30-minute fat burning workout for maximum results' }
              ].map((program, i) => (
                <div className="exercise-card card" key={i}>
                  <div className="card-badge"></div>
                  <h3>{program.name}</h3>
                  <p>{program.desc}</p>
                  <button className="btn-outline" onClick={handleClick}>Learn More →</button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-logo">NutriSenseiPlus</div>
          <p>© 2025 NutriSensei Plus. Your smart guide to healthy eating.</p>
          <p className="footer-contact">📧 hello@nutrisensei.com | 📞 +1 (555) 123-4567</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
