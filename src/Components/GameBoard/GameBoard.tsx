import React,{useEffect, useRef, useState} from 'react'
import "./GameBoard.css"
import Pieces from '../GamePieces/Pieces'
import {  useDispatch, useSelector } from 'react-redux'


//GAME MAIN BOARD
const GameBoard:React.FC = () => {
   
    const dispatch=useDispatch()
    const selector=useSelector(((state:any)=>state.chessGameReducer))
    const ref=useRef<any>()

    const [arr] = useState<string[][]>(selector.chessBoard)

    const disableAvailableMoves=()=>{

        dispatch({type:"disableAvailableMoves"})
        
    }

    const switchBoard=()=>{
        if(selector.gameSettings.myPieceColor==="white"){
            ref.current.style.transform="rotateZ(180deg)"
        }
    }

    useEffect(()=>{
        switchBoard()
    },[])

  return (
   
   <div className='chess-board-parent' onClick={disableAvailableMoves}>

    <div ref={ref} className='chess-board' onDragOver={(e)=>{e.preventDefault()}}>
       
        {arr.map((item,index)=>(
            
            <div className='chess-board-row'>
            <b style={{color:"white"}}></b>
                {arr[index].map((item,index2)=>(
                    <Squares name={item} row={index} column={index2}/>            
                ))
            }
            </div>
            ))
        }
      
    </div>
        
   </div> 
  )
}



// CHESS BOARDS SQUARES
interface SquaresProps{
    name:string
    row:number,
    column:number
}

const Squares:React.FC<SquaresProps>=(props)=>{

    const dispatch=useDispatch()
    const selector=useSelector((state:any)=>state.chessGameReducer)
    const ref=useRef<any>()

    const [squareColor, setsquareColor] = useState<string>("None")
    const [HighlightAvailableMoves, setHighlightAvailableMoves] = useState(false)

    


    const moveThePiece=()=>{
        
        if(HighlightAvailableMoves===true){
            
            let options={moveTo:[props.row,props.column],pieceName:selector.availableMoves.pieceName}
            dispatch({type:"moveThePiece",payload:options})
            dispatch({type:"disableAvailableMoves"})
        }
    }

    const setColors=()=>{
        let sum=props.row+props.column;
        if(sum%2==0){
            setsquareColor("light")
        }else{
            setsquareColor("dark")
        }
    }

    const switchBoard=()=>{
        if(selector.gameSettings.myPieceColor==="white"){
            ref.current.style.transform="rotateZ(180deg)"
        }
    }

    useEffect(()=>{
        setColors()
        switchBoard()
    },[])

    useEffect(()=>{
        if(selector.availableMoves.showAvailableMovesToggle===true){
            let currenPosition:number[]=[props.row,props.column];
            let location=selector.availableMoves.availableMovesLocations
       
            for(let i=0;i<location.length;i++){
                // console.log(location[i],location[i],currenPosition[0],currenPosition[1])
                if(currenPosition[0]===location[i][0] && currenPosition[1]===location[i][1]){
                    setHighlightAvailableMoves(true)
                }
             }
            
        }else{
            setHighlightAvailableMoves(false)
        }
    },[selector.availableMoves.showAvailableMovesToggle])

    return(
        <>
            <div ref={ref} className={squareColor==="light"?'chess-board-squares light-square':'chess-board-squares dark-square'}>
                    <Pieces pieceName={props.name} row={props.row} column={props.column}/>
                    {/* <b>{props.row}{props.column}</b> */}
                    {HighlightAvailableMoves&&
                        <div className='dot-highlights-parent' onClick={moveThePiece}>

                            <div className='dot-highlights'></div>
                        </div>
                    }
            </div>
        </>
    )
}



export default GameBoard