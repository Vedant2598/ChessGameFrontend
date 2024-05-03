let intitialstate={chessBoard:
    [
        ["R","N","B","Q","K","B","N","R"],
        ["P","P","P","P","P","P","P","P"],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["","","","","","","",""],
        ["p","p","p","p","p","p","p","p"],
        ["r","n","b","q","k","b","n","r"],
    ],
    availableMoves:{
        showAvailableMovesToggle:false,
        availableMovesLocations:[],
        availableMovesFor:[],
        pieceName:""
    }
    
    

}

const chessGameReducer=(state=intitialstate,action:any)=>{
    switch(action.type){

        case "availableMoves":
            state={...state,availableMoves:action.payload}
            // console.log(state)
            return state

        case "disableAvailableMoves":
            let available2:any={showAvailableMovesToggle:false,availableMovesLocations:[],availableMovesFor:[]}
            state={...state,availableMoves:available2}
            console.log("Disabled")
            return state

        
        // MOVING LOGIC
        case "moveThePiece":
            if(state.availableMoves.pieceName!==""){

                let piecePreviousMove=state.availableMoves.availableMovesFor
                let newMove=action.payload.moveTo
                
                let board=state.chessBoard
                // console.log("MOVE PIECE ",action.payload.pieceName)
                board[piecePreviousMove[0]][piecePreviousMove[1]]=""
                board[newMove[0]][newMove[1]]=action.payload.pieceName

                state={...state,chessBoard:board}
            }
            return state

        default:
            return state
    }
}

export default chessGameReducer