import "../styles/country.css";
import { country } from "../country";

export const Country = () => {
  return (
    <div className="my-10 mx-2  md:drop-shadow-2xl lg:drop-shadow-2xl w-full flex justify-between mobileView">
      {country.map((e) => (
          
          <figure className="relative">
              <img className="imgDiv displayImage child  transform transition duration-300 hover:scale-75" src={e.img} alt="country" />
              <figcaption className="displayName">usa</figcaption>
          </figure>
          // <div>
          // <img className="imgDiv displayImage child  transform transition duration-300 hover:scale-75" src={e.img} alt="country" />
          // <p className="displayName">usa</p>
          // </div>
      ))}
      
    </div>
  );
};
