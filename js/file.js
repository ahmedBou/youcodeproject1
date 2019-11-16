 function redirection(str){
        window.location.replace(str);
    }

function validation(){
    
    var name=document.getElementById('name').value,Email = document.getElementById('Em').value,Phone = document.getElementById('PN').value,
        Desc = document.getElementById('Desc').value,pattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/";
    
    
    if(name == "" || Email == "" || Phone == "" || Desc == ""){
        
        alert("Vous devez completer tous les champs avant de l'envoyer");
        
    }else{
        
       if(Phone.length != 10){
            
            alert('Le numbre de telephone il ne doit pas etre inferieur ou superieur de 11');
        }else if(Email.match(pattern))
        {
            
              alert("la form de mail nest pas valide");
            
        }else{

            alert("lae message a ete bien envoyer");
            
        }
        
        
        
      
        
    }
    
    
}