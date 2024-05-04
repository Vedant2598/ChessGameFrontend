import React from 'react'
import "../Pieces.css"
import { useDispatch,useSelector } from 'react-redux'
import { FaChessKing } from 'react-icons/fa6'
import { LegalMoves } from '../_Methods/LegalMoves'

interface IndividualPieceProps{
    color:string,
    row:number,
    column:number,
    name:string
}

const King:React.FC<IndividualPieceProps>=(props)=>{

    const dispatch=useDispatch()
    const selector=useSelector((state:any)=>state.chessGameReducer)

    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})
        if(selector.gameSettings.myPieceColor===props.color){

        setTimeout(() => {
        
        let availableMoves:number[][]=[]
        let current=[props.row,props.column]

            let x=current[0]+1
            let y=current[1]+1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
                    
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
                }
            }
        

        //-+
    
            x=current[0]-1
            y=current[1]+1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
                   
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
            
                }
            }
        

        //--
     
            x=current[0]-1
            y=current[1]-1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
               
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
      
                }
            }
        

        //+-

            x=current[0]+1
            y=current[1]-1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
         
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
       
                }
            }
            
            x=current[0]+1
            y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
               
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
             
                }
            }

            x=current[0]-1
            y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
          
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
   
                }
            }

            x=current[0]
            y=current[1]+1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
           
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
        
                }
            }

            x=current[0]
            y=current[1]-1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
                
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
             
                }
            }

        let options={showAvailableMovesToggle:true,availableMovesLocations:availableMoves,availableMovesFor:[props.row,props.column],pieceName:props.name}

        dispatch({type:"availableMoves",payload:options})
    }, 100);
    }
    }
    return(
        <>
        <div className='piece' onClick={showAvailableMoves}>
        <span className={props.color==="white"?"white-piece":"black-piece"}>
            <FaChessKing />
        </span>
        </div>
        </>
    )
}

export default King