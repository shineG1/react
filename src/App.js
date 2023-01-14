import logo from './logo.svg';
import './App.css';     //css 파일경로


function App() {

  let post = '강남 우동 맛집';
  //document.querySelector('h4').innerHTML = post; //자바스크립트문법

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '32px'}}>블로그임</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
