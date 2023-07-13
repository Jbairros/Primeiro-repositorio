function validationform() {
    let validationCod = document.forms["register"]["cod"].value;
    let validationTitle = document.forms["register"]["title"].value;   
    let validationPublisher = document.forms["register"]["publisher"].value;    
    let validationAuthor = document.forms["register"]["author"].value;       
    let validationRadio = document.forms["register"]["radio"].value;    
   
    if(validationCod == "") {
      alert("O código deve ser preenchido");
      return false;
    } 
     
    if(validationTitle == "") {
      alert("O titulo deve ser preenchido");
      return false;
     }
    
    if(validationPublisher == "") {
      alert("O Nome editora deve ser preenchido");
      return false;
    }
  
    if(validationAuthor == "") {
      alert("O autor(a) deve ser preenchido");
      return false;
    }
    
    if(validationRadio == "") {
      alert("O gênero deve ser preenchido");
      return false;
    }
      alert("A validação ocorreu de forma correta"); 
  
  }
  
  function insert(){
    let cod = document.forms["register"]["cod"].value;
    let title = document.forms["register"]["title"].value;   
    let publisher = document.forms["register"]["publisher"].value;    
    let author = document.forms["register"]["author"].value;    
    let radio = document.forms["register"]["radio"].value;    
    
    let insert = window.document.getElementById("insertRow");
     
    insert.innerHTML = `
       <th scope="row">${cod}</th>
       <td>${title}</td>
       <td>${publisher}</td>
       <td>${author}</td>
       <td>${radio}</td>
      `;
  
    
    
    
      
  }