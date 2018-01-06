let display = true;
        const showHide = () => {
             
            if(display === false){
        document.getElementById('newExp').style.visibility="hidden";
        display = true;
        } else {
            document.getElementById('newExp').style.visibility="visible";
            display = false;
        }
        };
        
        
        