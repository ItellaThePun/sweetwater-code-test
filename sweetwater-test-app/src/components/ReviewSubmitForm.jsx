import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useState } from "react";

function ReviewSubmitForm () {
    const [rating, setRating] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // prevent page reload

        const reviewData = {
            rating,
            title,
            description
        };

        console.log("Review Submitted", reviewData);
    }

    return (
        <>
            <form className="form surface" onSubmit={handleSubmit}>
                <h3>Submit Your Review</h3>

                <Box>
                    <Rating 
                        name="starRating"
                        value={rating}
                        precision={0.5}
                        onChange={(e, newValue) => setRating(newValue)}
                    />
                </Box>
                
                <div className="form-group">
                    <label htmlFor="reviewTitle">Review Title<span className="required">*</span></label>
                    <input 
                        type="text" 
                        id="reviewTitle" 
                        title="Review Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="reviewDescription">Review<span className="required">*</span></label>
                    <textarea 
                        id="reviewDescription" 
                        title="Review" 
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required 
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="selectFile">Add image<small>(optional)</small></label>
                    <input 
                        id="selectFile" 
                        type="file" 
                        accept="image/*" 
                    />
                </div>

                <button title="Submit Review" type="submit" className="btn">Submit Review</button>
            </form>
        </>
    )
}

export default ReviewSubmitForm;