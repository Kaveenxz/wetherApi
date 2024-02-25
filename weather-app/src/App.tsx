
import './App.css'
import './Other.css'
import sunImage from './assets/sun (1).png';
import searchimg from './assets/search.png'


function App() {
  
  return (
    <div className='container row full'>
     <div className="col-8">
     <div className='l-side'>
            <h4 className='title'>The Weather</h4>

            <div className="content">
                <h4 id='temp'>Temp:</h4>
                <div className="countr">
                    <h4 id='country'>Country:</h4>
                    <h4 id='date'>Date</h4>
                </div>
                <div className="img">
                    <img src={sunImage} alt="img" id='weather-img'/>
                    <h4 id='weather'>Weather:</h4>
                </div>
            </div>
        </div>
     </div>
     <div className="col-4">
     <div className='r-side'>
           <div className="search">
           <input type="search" placeholder='Enter Location' />
            <img src={searchimg} alt="" />
           </div>

           <div className="weather-details">
            <h4>Weather Details</h4>
           </div>

        </div>
     </div>
    </div>
  )
}

export default App
