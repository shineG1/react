

import './App.css';     //css 파일경로
import { useState } from 'react';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '리액트독학']);
  let [따봉, 따봉변경] = useState(0);

  // function 함수(){
  //   console.log(1);
  // }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
          let copy = [...글제목];
          copy[0] = '여자 코트 추천' ;
          글제목변경(copy)
        }}>글수정</button>

      <div className='list'>
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉+1)}}>💖</span> {따봉} </h4>
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



      {/* <Modal></Modal> */}
      <Modal/> {/*이렇게 써도 된다*/}






    </div>
  );
}


/*컴포넌트*/
/*
1. 반복적인 html 축약할 때
2. 큰 페이지들
3. 자주 변경되는 것들
*/
function Modal(){
  return(
  <>
    <div className='modal'>
    <h4>제목</h4> 
    <p>날짜</p>
    <p>상세내용</p>
    </div>
    <div></div>
  </> 
  )
}

export default App;
