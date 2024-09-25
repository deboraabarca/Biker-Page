import '../components/Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>TESTIMONIOS DE NUESTROS CLIENTES</h2>
      <div className="testimonial-card">
      <div>
            <img className="stars" src="../../src/assets/icons/stars.png"  />
          </div>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium
        .</p>
        <div className="reviewer">
          <div className="reviewer-info">
          <img src="../../src/assets/jefe.jpeg" ></img>
            <h3>John</h3>
            <p>Director</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
