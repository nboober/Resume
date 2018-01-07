let displayExp = true;
        const showHide = () => {                                                //shows and hides the Data Entry box for Experiences
             
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
        
        let experience = ["Novavax - Rockville, MD | Pharmaceutical Company | Accounting and Facilities Assistant (Temp Assignment), April 18, 2016 - Present | Creating SOP and Work Instructions for Blue Mountains Asset Manager | Validation with Writing PQ Test Cases for Blue Mountain Work Instruction and SOP's | Assisting with testing and setup of Blue Mountain's Asset Manager for transition from paper base to electronic base work system. | Management of Various Documents | Data Entry | Maintaining Filing System | Creating/ Completing Corrective Maintenance Forms | Initiating Equipment and Completing the Appropriate Initiation Form"];
    
    const addExp = () => {                                                        //Adds the new Exp entered into the Experience Data Entry Field to the array
        
        experience.push(document.getElementById('expEntry').value);
        console.log("Experience added");
        console.log(experience);
        document.write("<h2>Experience</h2>");
        
        for(let experienceIndex = 0; experienceIndex < experience.length; experienceIndex++)
            {document.write(experience[experienceIndex] + "</br>" + "</br>");
            console.log("Experience:" + " " + experience[experienceIndex]);
            }
        
        };
    
    
    const showExp = () => {                                                         //Shows Experiences without adding a new one
        document.write("<h2>Experience</h2>");
        
        for (let experienceIndex = 0; experienceIndex < experience.length; experienceIndex++){
            document.write(experience[experienceIndex] + "</br>" + "</br>");
            console.log("Experience:" + " " + experience[experienceIndex]);
        }
    };
        
        
let displayRef = true;        
        
        const showHideRef = () =>{                                                //shows and hides the Data Entry Box for References
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
        
        let references = ["Dustin Berghers - Manager, Facilities | Email: dberghers@novavax.com | 240/ 268-2045","Cynthia Utley - Director of Facilities | Email: cutley@novavax.com | 240-268-2014"];
        
        const addRef = () =>{                                                       //Adds the new Ref entered into the Reference Data Entry Field to the array
            
            references.push(document.getElementById('refEntry').value);
            console.log("Reference Added");
            
            document.write("<h2>References</h2>");
            
            for (let referenceIndex = 0; referenceIndex < references.length; referenceIndex++){
                console.log("Reference:" + " " + references[referenceIndex]);
                document.write(references[referenceIndex] + "</br>" + "</br>");
            }
        };
        
        const showRef = () =>{                                                      //Shows References without adding a new one
            document.write("<h2>References</h2>");
            
            for (let referenceIndex = 0; referenceIndex < references.length; referenceIndex++){
                console.log("Reference:" + " " + references[referenceIndex]);
                document.write(references[referenceIndex] + "</br>" + "</br>");
            }
        };