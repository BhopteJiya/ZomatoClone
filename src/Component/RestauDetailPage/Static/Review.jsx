import StarIcon from "@mui/icons-material/Star";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { review } from "../../../assets/assets";
import BottomContent from "./Overview/BottomContent";
import Footer from "../../Footer/Footer";

const Review = () => {
  return (
    <section id="reviews" >

    <div className="mt-10">
      <h2 className="text-3xl font-semibold mb-6">
        Reviews
      </h2>

      <div className="space-y-6">
        {review.map((review) => (
            <div
            key={review.id}
            className="border-b pb-6"
            >
            {/* USER INFO */}
            <div className="flex items-center gap-3 mb-2">
              <AccountCircleIcon sx={{ fontSize: 36, color: "#6b7280" }} />
              <div>
                <p className="font-medium">{review.name}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-1 mb-2">
              <span className="bg-green-700 text-white text-sm px-2 py-1 rounded flex items-center gap-1">
                {review.rating}
                <StarIcon sx={{ fontSize: 14 }} />
              </span>
            </div>

            {/* COMMENT */}
            <p className="text-gray-700 leading-relaxed">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
    <BottomContent>
    </BottomContent>
    <Footer></Footer>
              </section>
  );
};

export default Review;
