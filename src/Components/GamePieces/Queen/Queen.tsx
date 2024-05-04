import "../Pieces.css"
import { useDispatch,useSelector } from 'react-redux'
import { FaChessQueen} from 'react-icons/fa6'
import { LegalMoves } from '../_Methods/LegalMoves'

interface IndividualPieceProps{
    color:string,
    row:number,
    column:number,
    name:string
}

const Queen:React.FC<IndividualPieceProps>=(props)=>{
    const dispatch=useDispatch()
    const selector=useSelector((state:any)=>state.chessGameReducer)

    const showAvailableMoves=()=>{
        dispatch({type:"disableAvailableMoves"})
        if(selector.gameSettings.myPieceColor===props.color && selector.gameSettings.myTurn===true){
        
        setTimeout(() => {

        let availableMoves:number[][]=[]
        let current=[props.row,props.column]
        //BISHOP MOVEMENT FOR QUEEN
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

        //ROOK MOVEMENT FOR QUEEN
        //+ RIGHT
        for(let i=1;i<=7;i++){
            let x=current[0]+i
            let y=current[1]
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

        //- LEFT
        for(let i=1;i<=7;i++){
            let x=current[0]-i
            let y=current[1]
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

        //- DOWNWARD
        for(let i=1;i<=7;i++){
            let x=current[0]
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

        //+ UPWARD
        for(let i=1;i<=7;i++){
            let x=current[0]
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


        let options={showAvailableMovesToggle:true,availableMovesLocations:availableMoves,availableMovesFor:[props.row,props.column],pieceName:props.name}

        dispatch({type:"availableMoves",payload:options})
    }, 100);
    }
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
export default Queen