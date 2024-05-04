import React from 'react'
import "../Pieces.css"
import { useDispatch,useSelector } from 'react-redux'
import { FaChessPawn} from 'react-icons/fa6'
// import { LegalMoves } from '../_Methods/LegalMoves'

interface IndividualPieceProps{
    color:string,
    row:number,
    column:number,
    name:string
}

const Pawn:React.FC<IndividualPieceProps>=(props)=>{

    
    const dispatch=useDispatch()
    const selector=useSelector((state:any)=>state.chessGameReducer)

    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})
        if(selector.gameSettings.myPieceColor===props.color){
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

export default Pawn