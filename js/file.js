 function redirection(str){
        window.location.replace(str);
    }

function validation(){
    
    var name=document.getElementById('name').value,Email = document.getElementById('Em').value,Phone = document.getElementById('PN').value,
        Desc = document.getElementById('Desc').value,emailReg = new RegExp(/^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/i);
    var valid = emailReg.test(Email);
    
    
    if(name == "" || Email == "" || Phone == "" || Desc == ""){
        
        alert("Vous devez completer tous les champs avant de l'envoyer");
        
    }else{
        
       if(Phone.length != 10){
            
            alert('Le numbre de telephone il ne doit pas etre inferieur ou superieur de 11');
        }else if(!valid)
        {
            
              alert("la form de mail nest pas valide");
            
        }else{

            alert("le message a ete bien envoyer");
           
        }
        
        
        
      
        
    }
    
    
}