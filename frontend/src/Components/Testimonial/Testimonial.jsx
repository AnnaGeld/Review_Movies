import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import user from "../../assets/images/user.png";
import { HiStar } from "react-icons/hi";
const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={user} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Yugesh Mandal
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, nostrum veniam ex esse facilis possimus iusto nisi eligendi modi. Dolor?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={user} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Tenzing
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, iure. Beatae adipisci recusandae architecto voluptas aut deserunt cumque asperiores veritatis.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={user} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Lovepreet
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto ex tempore error harum rerum neque tenetur assumenda blanditiis numquam.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={user} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Harshit
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem tempore dolorum, optio ullam nobis numquam quaerat minus libero. Distinctio, velit?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-[13px]">
            <div className="flex items-center gap-[13px]">
              <img src={user} alt="" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Saksham
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                  <HiStar className="text-yellowColor w-[18px] h-5" />
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis deleniti alias consequuntur unde, libero perspiciatis voluptatem ad quos a totam!
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
