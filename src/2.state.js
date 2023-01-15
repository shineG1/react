import logo from './logo.svg';
import './App.css';     //css 파일경로
import { useState } from 'react';


function App() {

  let post = '울산 우동 맛집';
  let [글제목, b] = useState(['여자 코트 추천', '강남 우동맛집', '리액트독학']);


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{글제목[0]}</h4>
        <p>1월 15일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[1]}</h4>
        <p>1월 15일 발행</p>
      </div>
      <div className='list'>
        <h4>{글제목[2]}</h4>
        <p>1월 15일 발행</p>
      </div>
    </div>
  );
}

export default App;
