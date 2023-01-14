import logo from './logo.svg';
import './App.css';     //css 파일경로
import { useState } from 'react';


function App() {

  let post = '울산 우동 맛집';
  //document.querySelector('h4').innerHTML = post; //자바스크립트문법
  let [글제목, b] = useState('여자 코트 추천');

  /*Destructuring 문법*/
  // let num = [1,2];

  // let [a, c] = [1,2];

  // let a = num[0]; //1
  // let c = num[1]; //2

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{color : 'red', fontSize : '32px'}}>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{글제목}</h4>
        <p>1월 15일 발행</p>
      </div>
      <div className='list'>
        <h4>{post}</h4>
        <p>1월 15일 발행</p>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>1월 15일 발행</p>
      </div>
    </div>
  );
}

export default App;
