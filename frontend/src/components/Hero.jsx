import { Link } from "react-router-dom";
import "./styles/hero.css";

function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <div className="hero-badge-container left-badge">
                    <span className="hero-badge-label">AI Powered</span>
                    <div className="hero-badge-cursor"></div>
                </div>

                <h1 className="hero-title">
                    <span className="serif-text">Your personal</span> <br />
                    <span className="sans-text">emergency assistant</span>
                </h1>

                <div className="hero-badge-container right-badge">
                    <span className="hero-badge-label">24/7 Support</span>
                    <div className="hero-badge-cursor"></div>
                </div>

                <p className="hero-subtitle">
                    Tairis provides instant, reliable medical guidance and first-aid instructions
                    when you need them most. Built for speed. Ready for emergencies.
                </p>

                <div className="hero-cta-group">
                    <Link to="/get-started" className="hero-btn primary-btn">
                        Get Help Now
                    </Link>
                    <Link to="/about" className="hero-btn secondary-btn">
                        Learn more
                    </Link>
                </div>
            </div>

            {/* Abstract Background Elements */}
            <div className="hero-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </section>
    );
}

export default Hero;
