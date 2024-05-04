export const LegalMoves=(color:string,position:number[],chessBoard:any):any=>{
    const selector=chessBoard
    //   IF THE STATEMENT IS 0 MEANS IT IS AN EMPTY SQUARE
    //   IF THE STATEMENT IS 1 MEANS YOUR PIECE IS PRESENT HENCE BREAK THE LOOP
    //   IF THE STATEMENT IS 2 MEANS OPPONENT PIECE IS THERE ADD THE MOVE AND BREAK THE LOOP
  
    if(color==="black"){
        let pieceCheck=selector[position[0]][position[1]]

        if(pieceCheck!==""){
            pieceCheck=String(pieceCheck).charCodeAt(0)
            if(pieceCheck>=97 && pieceCheck<=122){
                return 1
            }else if(pieceCheck>=65 && pieceCheck<=90){
                return 2
            }
        }
        else{
            return 0
        }
    }else if(color==="white"){
        
        let pieceCheck=selector[position[0]][position[1]]


        if(pieceCheck!==""){
            pieceCheck=String(pieceCheck).charCodeAt(0)
            if(pieceCheck>=65 && pieceCheck<=90){
                return 1
            }else if(pieceCheck>=97 && pieceCheck<=122){
                return 2
            }
        }
        else{
            return 0
        }
    }

}