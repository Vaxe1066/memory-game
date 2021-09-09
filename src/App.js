import React, {useState, useEffect} from 'react';
import './style/App.css';
import image1 from './image1.svg';
import image2 from './image2.svg';
import image3 from './image3.svg';
import image4 from './image4.svg';
import image5 from './image5.svg';
import image6 from './image6.svg';
import image7 from './image7.svg';
import image8 from './image8.svg';
function App() {
  const [images, setImages] = useState([
                                        {'one':image1}, 
                                        {'two': image2},
                                        {'three': image3},
                                        {'four': image4},
                                        {'five':image5}, 
                                        {'six': image6},
                                        {'seven': image7},
                                        {'eight': image8},
                                      ]);

  const [clicked, setClicked] = useState([]);

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
                              


  useEffect( () => {
    
    console.log(clicked);
    checkRepeat();
    //setRepeat(checkRepeat());
    

  }, [images]);


  const checkBestScore = () => {
    if(score>bestScore){
      setBestScore(score);
    }
  }

  const checkRepeat = () =>{
    let hold = []
    for(let i=0; i<clicked.length; ++i){
      if( (hold.length===0) || !(hold.includes(clicked[i])) ){
        hold.push(clicked[i]);
        setScore(score + 1);
      }
      else if ( hold.includes(clicked[i]) ) {
        console.log("exit");
        checkBestScore();
        setScore(0);    
        setClicked([]);
        break;      
      }
    }
  }



  const addClick = (event) => {
    let parent = event.target.className;
    let parentDiv = document.querySelector(`.${parent}`);
    let child = parentDiv.firstChild;
    let childName = child.className
    let idxRep = Number(childName.replace(/\D+/g, ''));
    let keyClicked = Object.keys(images[idxRep])[0];
    setClicked([...clicked, keyClicked ]);
    reArange();
    
    


    
  }

  const reArange = () => {
    let shuffled = images.sort(() => Math.random() - 0.5);;
    setImages([...shuffled]);
  
  }

 


  return (
    
    <div className="App">
      <div className="navbar">
          <h1>Memory Game</h1>
      </div>
      <div className="score">
        <p>Current Score: {score} </p>
        <p>Highest Score: {bestScore}</p>
      </div>
          <div className="qt1" onClick={(evt) => addClick(evt)} >
            <img className="i_0" src={images[0][Object.keys(images[0])[0]]} alt="first" />
          </div>
          <div className="qt2" onClick={(evt) => addClick(evt)} >
            <img className="i_1" src={images[1][Object.keys(images[1])[0]]} alt="first"/>
          </div>
          <div className="qt3" onClick={(evt) => addClick(evt)} >
            <img className="i_2" src={images[2][Object.keys(images[2])[0]]} alt="first"/>
          </div>
          <div className="qt4" onClick={(evt) => addClick(evt)} >
            <img className="i_3" src={images[3][Object.keys(images[3])[0]]} alt="first"/>
          </div>

          <div className="qm1" onClick={(evt) => addClick(evt)} >
            <img className="i_2" src={images[2][Object.keys(images[2])[0]]} alt="first"/>
          </div>
          <div className="qm2" onClick={(evt) => addClick(evt)} >
            <img className="i_1" src={images[1][Object.keys(images[1])[0]]} alt="first"/>
          </div>
          <div className="qm3" onClick={(evt) => addClick(evt)} >
            <img className="i_0" src={images[0][Object.keys(images[0])[0]]} alt="first"/>
          </div>
          <div className="qm4" onClick={(evt) => addClick(evt)} >
            <img className="i_3" src={images[3][Object.keys(images[3])[0]]} alt="first"/>
          </div>

          <div className="qb1" onClick={(evt) => addClick(evt)} >
            <img className="i_3" src={images[3][Object.keys(images[3])[0]]} alt="first"/>
          </div>
          <div className="qb2" onClick={(evt) => addClick(evt)} >
            <img className="i_2" src={images[2][Object.keys(images[2])[0]]} alt="first"/>
          </div>
          <div className="qb3" onClick={(evt) => addClick(evt)} >
            <img className="i_1" src={images[1][Object.keys(images[1])[0]]} alt="first"/>
          </div>
          <div className="qb4" onClick={(evt) => addClick(evt)} >
            <img className="i_0" src={images[0][Object.keys(images[0])[0]]} alt="first"/>
          </div>



    </div>
  );
}

export default App;
