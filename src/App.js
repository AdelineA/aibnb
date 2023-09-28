import Nav from "./components/Nav";
import Main from "./components/Main";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Nav/>
      <Main/>
      <div className="container grid grid-cols-3">
      <Card
        img='/images/Boy.png' 
        subtitle1='5.0'
        subtitle2='(6)'
        subtitle3='.USA'
        title1= 'Life lessons with KatieZaferes'
        subtitle4 ='From $136'
        title2= '/ person'
      />
       <Card
        img='/images/Girl.png' 
        subtitle2='5.0'
        title= 'Life lessons with KatieZaferes'
        subtitle4 ='From $136'
      />
       <Card
        img='/images/Bike.png' 
        subtitle2='5.0'
        title= 'Life lessons with KatieZaferes'
        subtitle4 ='From $136'
      />
      </div>
    </div>
  );
}

export default App;
