import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['Anwar', 'jafor', 'alomgir', 'salman','Bappi','shuvo','Sakib k'];

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

        <Counter />
        <Users />

      
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

  // const handleIncrease = () => {
  //   const newCount = count + 1;
  //   setCount(newCount)
  // };

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);

  useEffect(()=>{

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
    
  }, [])

  return (
    <div>
      <h3>Dynamic Users: {users.length} </h3>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
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
