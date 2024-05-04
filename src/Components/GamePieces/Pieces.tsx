import React from 'react'
import "./Pieces.css"
import King from './King/King'
import Queen from './Queen/Queen'
import Knight from './Knight/Knight'
import Pawn from './Pawn/Pawn'
import Bishop from './Bishop/Bishop'
import Rook from './Rook/Rook'

interface PiecesProps{
    pieceName:string,
    row:number,
    column:number
}

const Pieces:React.FC<PiecesProps>= (props) => {
  return (
    <>
        {
        // PAWN
        props.pieceName==="P"?
            <Pawn color="white" name={props.pieceName} row={props.row} column={props.column}/>
        :props.pieceName==="p"?
            <Pawn color='black' name={props.pieceName} row={props.row} column={props.column}/>

        //BISHOP 
        :props.pieceName==="B"?
            <Bishop color="white" name={props.pieceName} row={props.row} column={props.column}/>
        :props.pieceName==="b"?
            <Bishop color='black' name={props.pieceName} row={props.row} column={props.column}/>
        
        // ROOK
        : props.pieceName==="R"?
            <Rook color="white" name={props.pieceName} row={props.row} column={props.column}/>
        :props.pieceName==="r"?
            <Rook color='black' name={props.pieceName} row={props.row} column={props.column}/>
        
         //KNIGHT
        :props.pieceName==="N"?
            <Knight color="white" name={props.pieceName} row={props.row} column={props.column}/>
        :props.pieceName==="n"?
            <Knight color='black' name={props.pieceName} row={props.row} column={props.column}/>

        // QUEEN
        :props.pieceName==="Q"?
            <Queen color="white" name={props.pieceName} row={props.row} column={props.column}/>
        :props.pieceName==="q"?
            <Queen color='black' name={props.pieceName} row={props.row} column={props.column}/>

        // KING
        :props.pieceName==="K"?
            <King color="white" name={props.pieceName} row={props.row} column={props.column}/>
        :props.pieceName==="k"&&
            <King color='black' name={props.pieceName} row={props.row} column={props.column}/>
        }
    </>
  )
}




export default Pieces