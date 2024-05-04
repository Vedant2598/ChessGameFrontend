import React from 'react'
import "../Pieces.css"
import { useDispatch,useSelector } from 'react-redux'
import { FaChessBishop} from 'react-icons/fa6'
import { LegalMoves } from '../_Methods/LegalMoves'

interface IndividualPieceProps{
    color:string,
    row:number,
    column:number,
    name:string
}

const Bishop:React.FC<IndividualPieceProps>=(props)=>{
    
    const dispatch=useDispatch()
    const selector=useSelector((state:any)=>state.chessGameReducer)

    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})
        if(selector.gameSettings.myPieceColor===props.color){

        setTimeout(() => {
        
        let availableMoves:number[][]=[]
        let current=[props.row,props.column]

        //++
        for(let i=1;i<=7;i++){
            let x=current[0]+i
            let y=current[1]+i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
                    break;
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
                    break
                }
            }
        }

        //-+
        for(let i=1;i<=7;i++){
            let x=current[0]-i
            let y=current[1]+i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
                    break;
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
                    break
                }
            }
        }

        //--
        for(let i=1;i<=7;i++){
            let x=current[0]-i
            let y=current[1]-i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
                    break;
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
                    break
                }
            }
        }

        //+-
        for(let i=1;i<=7;i++){
            let x=current[0]+i
            let y=current[1]-i
            if((x<=7 && x>=0) && (y<=7 && y>=0)){
                let movesCheck= LegalMoves(props.color,[x,y],selector.chessBoard)
                if(movesCheck===0){
                    availableMoves.push([x,y])
                }else if(movesCheck===1){
                    break;
                }else if(movesCheck===2){
                    availableMoves.push([x,y])
                    break
                }
            }
        }

        let options={showAvailableMovesToggle:true,availableMovesLocations:availableMoves,availableMovesFor:[props.row,props.column],pieceName:props.name}

        dispatch({type:"availableMoves",payload:options})
    }, 100);
    }
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

export default Bishop