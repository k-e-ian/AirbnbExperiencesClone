//import logo from './logo.svg';
import profilePhoto0 from "./assets/katie-zaferes.png"
import profilePhoto1 from "./assets/mountain-bike.png"
import profilePhoto2 from "./assets/wedding-photography.png"

import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data_exp from './data'

const coverImgToProfilePhoto = {
  "katie-zaferes.png": profilePhoto0,
  "mountain-bike.png": profilePhoto1,
  "wedding-photography.png": profilePhoto2,
};

function App() {
const dataExp = data_exp.map((data) => {

    const selectedProfilePhoto = coverImgToProfilePhoto[data.coverImg]

    return (
      <Card
        key={data.id}
        data={data}
      />
    )
}) 

console.log(dataExp)

  return (
    <div>
      <NavBar />
      <Hero/>
      <section className="cards-list">
          {dataExp}
      </section>
    </div>

  )
}

export default App;
