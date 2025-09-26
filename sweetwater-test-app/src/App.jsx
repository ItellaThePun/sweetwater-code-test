import './styles.css'
import ReviewCard from './components/ReviewCard'
import ReviewSubmitForm from './components/ReviewSubmitForm'
import reviews from './data/reviews'

function App() {

  return (
    <>
      <div className="row">
        <div className="col submit-form-col">
          <ReviewSubmitForm />
        </div>
        <div className="col card-col">
          {reviews.map((r, i) => (
          <ReviewCard 
            key={i}
            title={r.title}
            description={r.description}
            starRating={r.starRating}
            user={r.user}
            image={r.imageUrl}
          />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
