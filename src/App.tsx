import React from 'react';
import logo from './logo.svg';
import Post from './posts/Post'
import './App.css';
import data from './data/data' 

function App() {
  console.log("hello from jsx")
  return (
    <div className="App">
      <header className="header">
        <div className="logo">My Newspaper</div>
        <div className='login'>
          <a href="#">LogIn</a>
        </div>
      </header>
      <div className='posts'>
        {/* <Post author={data[0].author} title={data[0].title} description={data[0].description} img={data[0].img}/> */}
        {data.map(elem => (
          <Post data={elem} key={elem.id}/>
        ))}        
      </div>
    </div>
  );
  
}

export default App;
