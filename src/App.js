import anoop from './assets/images/anoop.jpg';
import Navbar from './components/common/Navbar.js';
import Body from './components/common/Body.js';

function App() {
  return (
   <div>
      <Navbar/>
      <div className='image-info'>
        <img src={anoop} alt='Image' />
      </div>
      <Body/>
   </div>
  );
}

export default App;
