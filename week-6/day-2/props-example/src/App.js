import Car from './components/Car';
import CarWithDesProps from './components/CarWithDesProps';
import User from './components/User';
import Person from './components/Person';

function App() {
  return (
    <>
      <h1>This is from the main component</h1>
      {/*<Car carName="BMW"></Car>
      <CarWithDesProps carName="Tesla"></CarWithDesProps>
       <Car carName="Nissan"></Car>
      <Car carName="Toyato"></Car>
      <Car carName="Tesla"></Car>
      <Car carName="Mazda"></Car> 
      <br />
      <User></User>
      <br />*/}
      <Person name="Sebin" age="25"></Person>
      <Person name="Jay" age="20"></Person>
      <Person name="Don" age="200"></Person>
    </>
  );
}

export default App;
