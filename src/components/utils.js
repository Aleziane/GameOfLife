
export const nextStep = (currentGrid) => {

    const MAX_LENGTH = currentGrid.length;

    return  currentGrid.map((row, rowIndex) => {
        return row.map((col, colIndex)=>{
            let count=0;
            if(rowIndex+1<MAX_LENGTH) {
                //bas
                count = count + (currentGrid[rowIndex + 1][colIndex] ? 1 : 0);
                if ((colIndex + 1 < MAX_LENGTH)) {
                    //bas + droite
                    count = count + (currentGrid[rowIndex + 1][colIndex+1] ? 1 : 0);
                }
                if((colIndex-1>-1)) {
                    //bas + gauche
                    count = count + (currentGrid[rowIndex + 1][colIndex-1] ? 1 : 0);

                }
            }
            //haut
            if((rowIndex-1>-1)){
                count = count + (currentGrid[rowIndex-1][colIndex]?1:0)
                if ((colIndex + 1 < MAX_LENGTH)) {
                    //haut + droite
                    count = count + (currentGrid[rowIndex-1][colIndex+1] ? 1 : 0);
                }
                if((colIndex-1>-1)) {
                    //haut + gauche
                    count = count + (currentGrid[rowIndex-1][colIndex-1] ? 1 : 0);
                }
            }

            //droite
            if((colIndex+1<MAX_LENGTH)){
                count = count +(currentGrid[rowIndex][colIndex+1]?1:0)
            }
            //gauche
            if((colIndex-1>-1)){
                count = count +(currentGrid[rowIndex][colIndex-1]?1:0)
            }
            if(currentGrid[rowIndex][colIndex]){
                //si cellule vivante et possède 2 ou 3 voisine => vivante, sinon, morte.
                if(count===2 || count===3){
                    return true;
                }
                return false;
            }else {
                //si cellule morte et possède 3 voisine => vivante, sinon, morte.
                if(count===3){
                    return true;
                }
                return false;
            }
        })
    });
};
