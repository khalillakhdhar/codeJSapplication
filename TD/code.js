function evaluer() {
    let ag=document.getElementById("age").value;
    if (ag<18)
    alert("vous êtes junior")
    else if(ag<70)
    {
        alert("vous êtes majeur");
    }
    else{
        alert("vous êtes sénior");
    }
    
}