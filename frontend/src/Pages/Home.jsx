/*import { Link } from "react-router-dom";*/
import heroImg01 from "../assets/images/barbie.png";
import heroImg02 from "../assets/images/wakanda.png";
import heroImg03 from "../assets/images/heimer.png";





import DoctorsList from "./Doctors/DoctorsList";

import Testimonial from "../Components/Testimonial/Testimonial";
import useTitle from "../Hooks/useTitle";
const Home = () => {
  useTitle("Home");
  return (
    <>
      <section className="  hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  Find And Rate Your Favourite Movies!
                </h1>
                <p className="text_para">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer non accumsan sem. Aenean imperdiet erat eu nisi
                  ultricies facilisis. Etiam ut velit dolor. Quisque lobortis
                  nisl a vestibulum aliquet.
                </p>
                <button className="btn">Find Movies</button>
              </div>
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">country Avialable</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    1000+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Movies</p>
                </div>
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text_para">Free</p>
                </div>
              </div>
            </div>
            <div className="flex gap-[10px]  justify-start">
              <div>
                <img src={heroImg01} alt=" " className="w-full rounded p-[10px] " />
              </div>
              <div className="mt-[0px] ">
                <img src={heroImg02} alt=" " className="w-full mb-[10px] rounded" />
                <img src={heroImg03} alt=" " className="w-full mb-[10px] rounded" />
                <img src={heroImg03} alt=" " className="w-full rounded " />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section End */}

     

      

      

     

    
     

      {/* Movies Section */}
      <section className="bg-black ">
        <div className="bg-black container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center pt-6">Popular Movies</h2>
            
          </div>
          <DoctorsList />
        </div>
      </section>

      {/* FAQ SECTION */}

    
      <section className="mt-8">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center text-black">What reviews say </h2>
           
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Home;
