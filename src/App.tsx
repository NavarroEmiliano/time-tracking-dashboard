import './App.css'

function App() {

  return (
    <main className="main-container">

    <div className="user-box">
      <div className="user-box__info">
{/*         <img className="user-box__image" src="/images/image-jeremy.png" alt="Image of Jeremy Robson" >*/}
        <div className="user-box__details">
          <p className="user-box__report">Report for</p>
          <p className="user-box__name">Jeremy Robson</p>
        </div>
      </div>

      <div className="user-box__actions">
        <button className="user-box__button user-box__button--daily active">Daily</button>
        <button className="user-box__button user-box__button--weekly">Weekly</button>
        <button className="user-box__button user-box__button--monthly">Monthly</button>
      </div>
    </div>

  </main>
  )
}

export default App
