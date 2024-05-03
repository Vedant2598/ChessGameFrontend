import React from 'react'
import "./Pieces.css"
import { useDispatch } from 'react-redux'
import { FaChessBishop } from "react-icons/fa6";
import { FaChessRook } from "react-icons/fa6";
import { FaChessQueen } from "react-icons/fa6";
import { FaChessKing } from "react-icons/fa6";
import { FaChessKnight } from "react-icons/fa";
import { FaChessPawn } from "react-icons/fa";


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



//  FOR CONFUSION X = Y AND Y=X


// PIECES LISTS
interface IndividualPieceProps{
    color:string,
    row:number,
    column:number,
    name:string
}

const Queen:React.FC<IndividualPieceProps>=(props)=>{
    const dispatch=useDispatch()

    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})

        setTimeout(() => {
        
        let availableMoves:number[][]=[]
        let current=[props.row,props.column]
        //BISHOP MOVEMENT FOR QUEEN
        //++
        for(let i=1;i<=7;i++){
            let x=current[0]+i
            let y=current[1]+i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //-+
        for(let i=1;i<=7;i++){
            let x=current[0]-i
            let y=current[1]+i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //--
        for(let i=1;i<=7;i++){
            let x=current[0]-i
            let y=current[1]-i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //+-
        for(let i=1;i<=7;i++){
            let x=current[0]+i
            let y=current[1]-i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //ROOK MOVEMENT FOR QUEEN
        //+ RIGHT
        for(let i=1;i<=7;i++){
            let x=current[0]+i
            let y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //- LEFT
        for(let i=1;i<=7;i++){
            let x=current[0]-i
            let y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //- DOWNWARD
        for(let i=1;i<=7;i++){
            let x=current[0]
            let y=current[1]-i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //+ UPWARD
        for(let i=1;i<=7;i++){
            let x=current[0]
            let y=current[1]+i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        let options={showAvailableMovesToggle:true,availableMovesLocations:availableMoves,availableMovesFor:[props.row,props.column],pieceName:props.name}

        dispatch({type:"availableMoves",payload:options})
    }, 100);
    }

    return(
        <>
        <div className='piece' onClick={showAvailableMoves}>
            <span className={props.color==="white"?"white-piece":"black-piece"}>
                <FaChessQueen />
            </span>
        </div>
        </>
    )
}

const King:React.FC<IndividualPieceProps>=(props)=>{

    const dispatch=useDispatch()
    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})

        setTimeout(() => {
        
        let availableMoves:number[][]=[]
        let current=[props.row,props.column]

            let x=current[0]+1
            let y=current[1]+1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        

        //-+
    
            x=current[0]-1
            y=current[1]+1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        

        //--
     
            x=current[0]-1
            y=current[1]-1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        

        //+-

            x=current[0]+1
            y=current[1]-1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
            
            x=current[0]+1
            y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }

            x=current[0]-1
            y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }

            x=current[0]
            y=current[1]+1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }

            x=current[0]
            y=current[1]-1
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }

        let options={showAvailableMovesToggle:true,availableMovesLocations:availableMoves,availableMovesFor:[props.row,props.column],pieceName:props.name}

        dispatch({type:"availableMoves",payload:options})
    }, 100);
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




//BISHOP
const Bishop:React.FC<IndividualPieceProps>=(props)=>{
    
    const dispatch=useDispatch()

    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})

        setTimeout(() => {
        
        let availableMoves:number[][]=[]
        let current=[props.row,props.column]

        //++
        for(let i=1;i<=7;i++){
            let x=current[0]+i
            let y=current[1]+i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //-+
        for(let i=1;i<=7;i++){
            let x=current[0]-i
            let y=current[1]+i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //--
        for(let i=1;i<=7;i++){
            let x=current[0]-i
            let y=current[1]-i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //+-
        for(let i=1;i<=7;i++){
            let x=current[0]+i
            let y=current[1]-i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        let options={showAvailableMovesToggle:true,availableMovesLocations:availableMoves,availableMovesFor:[props.row,props.column],pieceName:props.name}

        dispatch({type:"availableMoves",payload:options})
    }, 100);
    }

    

    return(
        <>
        <div className='piece' onClick={showAvailableMoves} >
        <span className={props.color==="white"?"white-piece":"black-piece"}>
                <FaChessBishop />
            </span>
        </div>
        </>
    )
}






const Knight:React.FC<IndividualPieceProps>=(props)=>{

    const dispatch=useDispatch()

    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})

        setTimeout(() => {
        
        let availableMoves:number[][]=[]
        let current=[props.row,props.column]

        // RIGHT
        let x=current[0]-1
        let y=current[1]+2
        if((x<=7 && x>=0) && (y<=7 && y>=0)){
            availableMoves.push([x,y])
        }

        x=current[0]+1
        y=current[1]+2
        if((x<=7 && x>=0) && (y<=7 && y>=0)){
            availableMoves.push([x,y])
        }

        // BOTTOM

        x=current[0]+2
        y=current[1]+1
        if((x<=7 && x>=0) && (y<=7 && y>=0)){
            availableMoves.push([x,y])
        }
        
        x=current[0]+2
        y=current[1]-1
        if((x<=7 && x>=0) && (y<=7 && y>=0)){
            availableMoves.push([x,y])
        }


        // TOP
        x=current[0]-2
        y=current[1]+1
        if((x<=7 && x>=0) && (y<=7 && y>=0)){
            availableMoves.push([x,y])
        }
        
        x=current[0]-2
        y=current[1]-1
        if((x<=7 && x>=0) && (y<=7 && y>=0)){
            availableMoves.push([x,y])
        }

        // LEFT
        x=current[0]+1
        y=current[1]-2
        if((x<=7 && x>=0) && (y<=7 && y>=0)){
            availableMoves.push([x,y])
        }
        
        x=current[0]-1
        y=current[1]-2
        if((x<=7 && x>=0) && (y<=7 && y>=0)){
            availableMoves.push([x,y])
        }

        




        let options={showAvailableMovesToggle:true,availableMovesLocations:availableMoves,availableMovesFor:[props.row,props.column],pieceName:props.name}

        dispatch({type:"availableMoves",payload:options})
    }, 100);
    }

    return(
        <>
            <div className='piece' onClick={showAvailableMoves}>
                <span className={props.color==="white"?"white-piece":"black-piece"}>
                    <FaChessKnight />
                </span>
            </div>
        </>
    )
}





const Pawn:React.FC<IndividualPieceProps>=(props)=>{

    const dispatch=useDispatch()
    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})

        setTimeout(() => {
        
        let availableMoves:number[][]=[]
        let current=[props.row,props.column]
        
        if(props.color==="white"){

            let x=current[0]+1
            let y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }else{
            let x=current[0]-1
            let y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }
        

        let options={showAvailableMovesToggle:true,availableMovesLocations:availableMoves,availableMovesFor:[props.row,props.column],pieceName:props.name}

        dispatch({type:"availableMoves",payload:options})
    }, 100);
    }
    return(
        <>
            <div className='piece' onClick={showAvailableMoves}>
                <span className={props.color==="white"?"white-piece":"black-piece"}>
                    <FaChessPawn />
                </span>
            </div>
        </>
    )
}






//ROOK
const Rook:React.FC<IndividualPieceProps>=(props)=>{

    const dispatch=useDispatch()

    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})
        setTimeout(() => {
            
      
        let availableMoves:number[][]=[]
        let current=[props.row,props.column]

        //+ RIGHT
        for(let i=1;i<=7;i++){
            let x=current[0]+i
            let y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //- LEFT
        for(let i=1;i<=7;i++){
            let x=current[0]-i
            let y=current[1]
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //- DOWNWARD
        for(let i=1;i<=7;i++){
            let x=current[0]
            let y=current[1]-i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        //+ UPWARD
        for(let i=1;i<=7;i++){
            let x=current[0]
            let y=current[1]+i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                availableMoves.push([x,y])
            }
        }

        let options={showAvailableMovesToggle:true,availableMovesLocations:availableMoves,availableMovesFor:[props.row,props.column],pieceName:props.name}

        dispatch({type:"availableMoves",payload:options})
    }, 100);
    }

  

    return(
        <>
            <div className='piece' onClick={showAvailableMoves}>
            <span className={props.color==="white"?"white-piece":"black-piece"}>
                <FaChessRook />
            </span>
            </div>
        </>
    )
}

export default Pieces