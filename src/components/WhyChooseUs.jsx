import './WhyChooseUs.css'; 

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <div className="text-section">
        <h2>POR QUE DEBES ELEGIRNOS</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
        Lorem ipsum dolor sit amet  consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
        Lorem ipsum dolor sit amet  consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo
        Lorem ipsum dolor sit amet  consectetur adipiscing elit  .</p>
        <div className="features">
          <ul>
            <li>
            <img className='checked' src="../../src/assets/icons/checked.png" />
            Flexible Time
            </li> 
            <li><img className='checked' src="../../src/assets/icons/checked.png" />
            Flexible Time</li>
            <li><img className='checked' src="../../src/assets/icons/checked.png" />
            Flexible Time</li>
          </ul>
          <ul>
            <li><img className='checked' src="../../src/assets/icons/checked.png" />
            Flexible Time</li>
            <li><img className='checked' src="../../src/assets/icons/checked.png" />
            Flexible Time</li>
            <li><img className='checked' src="../../src/assets/icons/checked.png" />
            Flexible Time</li>
          </ul>
        </div>
      </div>
      <div className="image-section">
        <img src="../../src/assets/image.jpeg" alt="Worker fixing a bike" />
      </div>
    </div>
  );
};

export default WhyChooseUs;
