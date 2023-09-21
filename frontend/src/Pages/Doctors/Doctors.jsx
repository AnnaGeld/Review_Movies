import Testimonial from "../../Components/Testimonial/Testimonial";
import { doctors } from ".././../../data/doctors.js";
import DoctorCard from "./DoctorCard";
const Doctors = () => {
  return (
    <>
      <section className="  bg-black">
        <div className="p-4 container text-center">
          <div>
            <h2 className="heading">Find a Movie</h2>
            <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex item-center justify-between">
              <input
                type="search"
                placeholder="Search Movie"
                className="py-4 pl-4 pr-2 bg-transparent w-full  focus:ouline-none cursor-pointer placeholder:text-textColor"
              />
              <button className="btn mt-0 rounded-[0px] rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="  bg-[#191718]">
        <div className="pt-6 p-6 container">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 flex 
          "
          >
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>

      <section className="pt-4 mt-8 bg-[#191718]">
        <div className="container">
          
            
            <p className="pt-4 text-white text-center">
             Most Recent Top Ratings
            </p>
          
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Doctors;
