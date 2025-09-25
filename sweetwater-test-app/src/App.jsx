import './styles.css'
import ReviewCard from './components/ReviewCard'
import ReviewSubmitForm from './components/ReviewSubmitForm'

function App() {

  return (
    <>
      <div className="row">
        <div className="col submit-form-col">
          <ReviewSubmitForm />
        </div>
        <div className="col card-col">
          <ReviewCard />
        </div>
      </div>
    </>
  )
}

export default App
