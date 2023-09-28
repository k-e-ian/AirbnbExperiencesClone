//import logo from './logo.svg';
import profilePhoto from "./assets/katie-zaferes.png"
import './App.css';
import NavBar from './components/NavBar';
//import Hero from './components/Hero';
import Card from './components/Card';
import data_exp from './data'

function App() {
const dataExp = data_exp.map((data) => {
    return (
      <Card
        key={data.id}
        img={profilePhoto}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price} 
        openSpots={data.openSpots}
      />
    )
}) 

console.log(dataExp)

  return (
    <>
      <NavBar />
      <section classname="cards-list">
          {dataExp}
      </section>
      
      
     

    </>

  )
}

export default App;
