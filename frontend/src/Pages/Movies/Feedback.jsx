
import { useState } from "react";
import { reviews } from "../../assets/data/reviews";
import Reviews from "./Reviews.jsx";
import FeedBackForm from "./FeedBackForm.jsx";

const Feedback = ({ movie }) => {
  const [feedbackForm, setFeedbackForm] = useState(false);

  return (
    <div>
      <div className="mb-[50px] bg-black">
        <h4 className="text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] ">
          All review ({movie.totalRating})
        </h4>

        {reviews.map((items, index) => (
          <Reviews key={index} items={items} />
        ))}
      </div>
      <div>
        {!feedbackForm && (
          <div className="text-center pb-6">
            <button onClick={() => setFeedbackForm(true)} className="btn">
              Give Feedback{" "}
            </button>{" "}
          </div>
        )}

        {feedbackForm && <FeedBackForm />}
      </div>
    </div>
  );
};

export default Feedback;
