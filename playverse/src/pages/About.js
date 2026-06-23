import './About.css'
import story from '../assets/story.jpg'

function About() {
  return (
    <div className="about-page">

      {/*hero*/}
      <section className="about-hero">
        <div className="container">
          <span className="section-eyebrow">About PlayVerse</span>
          <h1>Where gaming meets anime culture.</h1>
          <p>
            We started PlayVerse because we couldn't find a single place that took both
            gaming and anime seriously. So we built it ourselves.
          </p>
        </div>
      </section>

      {/*story*/}
      <section className="about-section">
        <div className="container">
          <div className="story-grid">
            <div>
              <span className="section-eyebrow">Our story</span>
              <h2>Built by fans, for fans.</h2>
              <p>
                PlayVerse started as a passion project between gamers and anime
                enthusiasts who were tired of jumping between sketchy stores and
                overpriced retailers to find the gear they actually wanted.
              </p>
              <p>
                Today, we work directly with brands, studios, and artists to bring
                you the most authentic gaming gear and officially licensed anime
                collectibles—at prices that don't make you cry.
              </p>
            </div>
            <div className="story-image">
              <img src={story} alt="Gaming and anime" />
            </div>
          </div>
        </div>
      </section>

      {/*values*/}
      <section className="about-section section-alt">
        <div className="container">
          <span className="section-eyebrow">Our values</span>
          <h2 className="section-title">What we stand for</h2>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✓</div>
              <h3>Authentic only</h3>
              <p>Every product is officially licensed or from verified brands. No fakes, ever.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Fast shipping</h3>
              <p>Most orders ship within 24 hours. Free shipping on orders over $75.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">★</div>
              <h3>Community first</h3>
              <p>Built for the culture. We listen to our community and bring you what you actually want.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">♥</div>
              <h3>Quality guaranteed</h3>
              <p>30-day returns, no questions asked. We stand behind everything we sell.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default About
