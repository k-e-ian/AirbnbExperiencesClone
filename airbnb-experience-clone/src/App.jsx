//import logo from './logo.svg';


import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Card from './components/Card';
import data_exp from './data'



function App() {
const dataExp = data_exp.map((data) => {
    return (
      <Card
        key={data.id}
        data={data}
      />
    )
}) 

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
