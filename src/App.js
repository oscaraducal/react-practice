
import './css/App.css';
import Navbar from './Page/Navbar';
import Home from './Page/Home';
import Second from './Page/Second';

function App() {

  const title = 'Welcome to the new world';
  const likes = 50;

  // const person = { name: 'oscar', age: 18};
  const link = "http://www.google.com";
  return (
    <div className="App">
      <script src="http://localhost:8097"></script>
      <div className="content">
        <Navbar />

<div className="content">
  <Home />
</div>
<div>
  <Second />
</div>
    <h1 className="text-5xl font-bold underline">
      Hello world!
    </h1>
        <h1>{title}</h1>
        <p>liked: {likes} times</p>

        <p>{'gross'}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() * 10}</p>

        <a href={link}>Hello google</a>
        <br />
      </div>
    </div>
  );
}

export default App;
