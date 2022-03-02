import study from "../Images/study.svg";
import uninow from "../Images/uninow.svg";
import "../styles/Header.css";

export const Header = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-full uninowMobileView">
          <img className="h-20 pl-9 py-3 inline " src={uninow} alt="uninow" />
          <img
            className="h-20 py-3 mt-3 mr-14 inline float-right applyMobileView"
            src={study}
            alt="applynow"
          />
          <div className="clear"></div>
        </div>
        <div className="w-full  border-4 border-x-0 border-gray-600 py-1 ">
          <p className="text-white py-2 flex justify-center bg-slider slider">
            we are almost there - WEB APP & MOBILE APP launching soon
          </p>
        </div>
        <div className="w-full mt-2 sm:hidden">
          <p className=" text-center ">55000+ Courses 10 Study Destinations</p>
        </div>
      </div>
    </>
  );
};
