// src/components/PitchDeckGenerator.jsx
const PitchDeckWizard = () => {
  const [slides, setSlides] = useState([]);

  const generateSlide = async (section) => {
    const response = await fetch('/api/generate-slide', {
      method: 'POST',
      body: JSON.stringify({ section })
    });
    const aiContent = await response.json();
    setSlides([...slides, aiContent]);
  };

  return (
    <div className="pitch-lab">
      <div className="slide-canvas">
        {slides.map((slide, i) => (
          <animated.div key={i} className="slide-card">
            <h3>{slide.title}</h3>
            <p>{slide.content}</p>
            <div className="slide-actions">
              <EmojiFeedback onRate={(rating) => updateSlide(i, rating)} />
            </div>
          </animated.div>
        ))}
      </div>
      
      <div className="slide-templates">
        {['Problem', 'Solution', 'Market', 'Traction'].map((section) => (
          <button 
            key={section}
            onClick={() => generateSlide(section)}
            className="template-option"
          >
            {section} Slide 🧙♂️
          </button>
        ))}
      </div>
    </div>
  );
};
