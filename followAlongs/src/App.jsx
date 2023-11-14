
import './App.css'

function App() {
  const arto = {
    name: "Arto Hellas",
    age: 35,
    education: 'PhD',
    greet: function(){
      console.log('hello, my name is ' + this.name)
    }
  }
  arto.greet()
  arto.growOlder = function(){
    this.age +=1
  }
  console.log(arto.age);
  arto.growOlder();
  console.log(arto.age);
}


export default App
