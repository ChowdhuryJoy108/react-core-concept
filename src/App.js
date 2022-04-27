import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [nayoks3 , SetNayoks] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res =>res.json())
    .then(data =>SetNayoks(data));
  }, [])



  const nayoks = ['Anwar', 'jafor', 'alomgir', 'salman','Bappi','shuvo','Sakib k'];

  const nayoks2 =[
    {name:'jasim', age: 56},
    {name:'sakib k', age: 39},
    {name:'deepjol', age:55}
  ];

  const products = [
    {name:'photoshop', price:'$90.99', id:102},
    {name:'illustrator', price:'$9.99', id:101},
    {name:'illustrator premium', price:'$119.99', id:111}
  ]

 const nayokNames = nayoks.map(nayok => nayok);
 console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <p>I m  a react person</p>

        {
          nayoks3.map(nayok => <Nayok3 name={nayok.name} key={nayok.id} email={nayok.email} ></Nayok3>)
        }

        {
          nayoks2.map(nayok => <Nayok2 name={nayok.name} age={nayok.age}></Nayok2>)
        }

        
        
        <MovieCounter />

      {
        nayoks.map(nayok => <Nayok name={nayok} />)
      }



        {/* <Nayok name={nayoks2[0]} age='56 '/>
        <Nayok name={nayoks2[1]}  />
        <Nayok name='Bappi'/>
        <Nayok name='Bappa R' /> */}
        <Shiva name="Shiva" say="Om Namay Shiva" />

        <Counter />
        <Albums />

      
        <ul>
          {
            nayoks.map(nayok => <li>{nayok}</li> )
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(product => <Person product={product} />)
        }
        {/* <Product products={products[0]} /> 
        <Product products={products[1]} /> */}



        <Person name="munna" job="footballing" fan={nayoks[0]} />
        <Person name="masum" job="Dorshok" fan={nayoks[1]}/>
        <HareKrishna namKrirtan="hare krishna hare krishna krishna krishna hare hare, hare ram hare ram ram ram hare hare ." />
        <Wow song="lalalalalal-llalalal" />

       
      </header>
     
    </div>
  );
}

function Counter(){

  const [count, setCount] = useState(0);

  // const handleIncrease = ()=>{
  //   const newCount = count + 1;
  //   setCount(newCount);
  // }

  return(
    <div>
      <h1>Count : {count} </h1>
      <button onClick={()=>setCount(count + 1)}>increase</button>
      <button onClick={()=>setCount(count - 1)}>decrease</button>
    </div>
  )
}

function Albums(){

  const liStyle ={
    backgroundColor:'lightgray',
    color:'black'
  }
  const[albums , setAlbum] = useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(data => setAlbum(data));
  })
  return(
    <div>
        <h3 style={liStyle}>Album :{albums.length}</h3>

<ul>
  {
    albums.map(album => <li style={{border:'1px solid red',listStyle:'none'}}>{album.title}</li>)
  }
</ul>
    </div>
  
  )
}

function Shiva(props){
  return (
    <div>
      <h1>lord {props.name} </h1>

      <p> {props.say} </p>

    </div>
  )
}





function MovieCounter(){

  const [count, setCount] = useState(0);
  return(
    <div>
      <button onClick={()=>setCount(count + 1)}>add movie</button>
      <h5>Number of movies : {count} </h5>
      <MovieDisplay movies={count}/>
      <MovieDisplay movies={count + 2} />
      <MovieDisplay movies={count + 5}/>
      <MovieDisplay movies={count + 10}/>
    </div>
  )
}

function MovieDisplay(props){

  return <h4> Movies I hacve acted : {props.movies} </h4>
}




function Nayok (props){
 
  
  return(
    <div style={{border:'1px solid red', width:'200px',margin:'10px'}}>
      <h2>Ami Nayok- {props.name}</h2>
      <p>I have done 5 movies in {props.age || 30} years</p>
    </div>
  )
}


function Nayok2 (props){
  return (
    <div style={{border:'2px solid yellow', width:'200px', height:'200px', margin:'10px', padding:'10px'}}>
      <h2>Ami Nayok - {props.name}</h2>
      <p>I have complete {props.age} years in industry!</p>
    </div>
  )
}

function Nayok3(props){
  return(
    <div style={{border:'2px solid yellow', width:'280px', height:'280px', margin:'10px', padding:'10px', fontSize:"16px"}}>
      <h1>Nayok - {props.name} </h1>
      <p>Contract - {props.email} </p>
    </div>
  )
}





function Person(props){
  return (
    <div style={{border:'2px solid gold', width:'400px',margin:'10px' }}>
      <h3>My Name : {props.name} </h3>
      <p>My Profession: {props.job} </p>
      <p>Fan of Nayok {props.fan}</p>
    </div>
  )
}

function HareKrishna(props){
  return(
    <div style={{border:'2px solid green', width:'400px', margin:'10px'}}>
      <h1>BHAGWAN SRI KRISHNA</h1>
      <p>{props.namKrirtan}</p>
    </div>
  )
}
const Wow = props => { 
  return(
    <div style={{border:'2px solid green', width:'400px'}}>
      <p>{props.song}</p>
    </div>
  )
}


const Product = (props) =>{
  const productStyle = {
    border:'1px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    Float:'left'
  }
  const {name,price} = props.product//destructuring
  
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  )
}
  

export default App;
