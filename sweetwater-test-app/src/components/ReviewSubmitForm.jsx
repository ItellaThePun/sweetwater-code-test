import styles from "./ReviewSubmitForm.module.css"

function ReviewSubmitForm () {
    return (
        <>
            <form className="form surface">
                <h1>Submit Your Review</h1>

                <label htmlFor="reviewTitle">Review Title</label>
                <input type="text" name="reviewTitle" title="Review Title"></input>

                <label htmlFor="reviewDescription">Review</label>
                <textarea name="reviewDescription" title="Review"></textarea>

                <input type="file" accept="image/*"/>

                <button title="Submit Review" className="btn">Submit Review</button>
            </form>
        </>
    )
}

export default ReviewSubmitForm;