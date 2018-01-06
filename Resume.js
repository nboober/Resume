let displayExp = true;
        const showHide = () => {                                                //shows and hides the 
             
            if(displayExp === false){
        document.getElementById('newExp').style.visibility="hidden";
        displayExp = true;
        console.log("Exp Entry Hidden");
        } else {
            document.getElementById('newExp').style.visibility="visible";
            displayExp = false;
            console.log("Exp Entry Shown");
        }
        };
        
let displayRef = true;        
        
        const showHideRef = () =>{
            if(displayRef === true){
                document.getElementById('newRef').style.visibility="visible";
                displayRef = false;
                console.log("Ref Entry Shown");
            } else {
                document.getElementById('newRef').style.visibility="hidden";
                displayRef = true;
                console.log("Ref Entry Hidden");
            }
        };