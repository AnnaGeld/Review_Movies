import React, { useState, useRef, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import { movies } from "../../assets/data/movies.js";
import starIcon from "../../assets/images/Star.png";
import { BASE_URL } from '../../Others/config.js'
import {  ListGroup } from 'reactstrap'
import { AuthContext } from '../../context/AuthContext.jsx'
/*import MoviesAbout from "./MoviesAbout.jsx";
import Feedback from "./Feedback.jsx";*/


const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [tab, setTab] = useState("about");

  const reviewMsgRef = useRef('')
   const { user } = useContext(AuthContext)

  useEffect(() => {
    const selectMovie = movies.find((doc) => doc.id === id);
    setMovie(selectMovie);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>; // Return a loading indicator if data is not yet available
  }

  const {
    name,
    type,
    avgRating,
    totalRating,
    photo,
reviews,
    short,
  } = movie;

  /* !!!!!!!!!!!!!!!!!! */

  const submitHandler = async e => {
      e.preventDefault()
      const reviewText = reviewMsgRef.current.value

      try {
         if (!user || user === undefined || user === null) {
            alert('Please sign in')
         }
         const reviewObj = {
            username: user?.username,
            reviewText,
            
         }

         const res = await fetch(`${BASE_URL}/review/${id}`, {
            method: 'post',
            headers: {
               'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(reviewObj)
         })

         const result = await res.json()
         if (!res.ok) {
            return alert(result.message)
         }
         alert(result.message)
      } catch (error) {
         alert(error.message)
      }
   }

  
  return (
    <section className="bg-black pt-6 ">
      <div className="bg-black max-w-[1170px] px-5 mx-auto ">
        <div className="grid md:grid-cols-3 gap-[50px]">
          <div className="md:col-span-2">
            <div className="flex items-center gap-5">
              <figure>
                <img
                  src={photo}
                  alt={name}
                  className="w-[250px] h-[280px] rounded object-cover"
                />
              </figure>
              <div>
                <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded">
                  {type}
                </span>
                <h3 className="text-headingColor text-[22px] leading-9 mt-3 font-bold">
                  {name}
                </h3>
                <div className="flex items-center gap-[6px]">
                  <span className="flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    <img src={starIcon} alt="star" /> {avgRating}
                  </span>
                  <span className="text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor">
                    ({totalRating})
                  </span>
                </div>
                <p className="text_para text-[14px] leading-5 md:text-[15px] lg:max-w-[390px]">
                  {short}
                </p>
              </div>
            </div>

            <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
              <button
                onClick={() => setTab("about")}
                className={`${
                  tab === "about" && `border-b border-solid border-primaryColor`
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                About
              </button>
              <button
                onClick={() => setTab("feedback")}
                className={`${
                  tab === "feedback" &&
                  `border-b border-solid border-primaryColor`
                } py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold`}
              >
                Feedback
              </button>
            </div>
            {/*<div className="mt-[50px]">
              {tab === "about" && <MoviesAbout movie={movie} />}

              {tab === "feedback" && <Feedback movie={movie} />}
            </div>*/}
          </div>
          
        </div>
      </div>

      {/* @@@@@@@@@@@@@@ABOUT */}
       <div className="bg-bg-black">
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About {" "}
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            {movie.name}
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
          voluptas totam repudiandae eaque commodi, perferendis corrupti quidem
          deleniti quisquam alias earum illum exercitationem corporis in quia
          sit iusto. Iusto, id. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Enim quas eum velit iusto id similique nemo modi, et
          ea minus deserunt ullam quae architecto nulla esse itaque aliquam
          libero eligendi.
        </p>
      </div>

      <div className="mt-12">
       

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col  sm:flex-row sm:justify-between sm;items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {movie.name}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                Genre : {movie.genre}
              </p>
            </div>
            
          </li>
        </ul>
      </div>
    </div>
    {/* @@@@@@@@@@@@@@@@@@FORM */}
    
 <form onSubmit={submitHandler} className="bg-black"  action="">
      <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
        How would you rate the overall experience ?*
      </h3>
      <div className="mt-[30px]">
        <h3 className="text-headingColor text-[16px] leading-6 font-semibold mb-4">
          Share your feedback or suggestion*
        </h3>
        <textarea
          className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
          placeholder="Write your message"
          rows={5}
          ref={reviewMsgRef}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn">
        Submit Feedback
      </button>
    </form>

     <ListGroup className='user__reviews'>
                              {
                                 reviews?.map(review => (
                                    <div className="review__item">
                                       <img src={avatar} alt="" />

                                       <div className="w-100">
                                          <div className="d-flex align-items-center justify-content-between">
                                             <div>
                                                <h5>{review.username}</h5>
                                                <p>{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                                             </div>

                                             <span className='d-flex align-items-center'>
                                                {review.rating}<i class='ri-star-s-fill'></i>
                                             </span>
                                          </div>

                                          <h6>{review.reviewText}</h6>
                                       </div>
                                    </div>
                                 ))
                              }
                           </ListGroup>

    </section>
  );
};

export default MoviesDetails;
