import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { useState } from "react";

function ReviewCard ({ title, description, starRating, image, user }) {
    const [expanded, setExpanded] = useState(false);
    const cutoff = 300; // characters before Read More cutoff kicks in

    const displayText = expanded ? description : description.slice(0, cutoff);

    return (
        <>
            <div className="card surface">
                <h3>{title}</h3>
                <Box>
                    <Rating 
                        readOnly
                        value={starRating}
                    />
                </Box>
                <p>
                    {displayText}
                    {!expanded && description.length > cutoff && "..."}
                    {description.length > cutoff && (
                            <button className="read-more-button" onClick={() => setExpanded(!expanded)}>
                            {expanded ? "Read Less" : "Read More"}
                            </button>
                        )
                    }
                </p>
                <small>by {user}</small>
                <img 
                    className="card-image"
                    src={image}
                    alt="Photo of product"
                />
            </div>
        </>
    );
}

export default ReviewCard;