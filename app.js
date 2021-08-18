function add(plusButton,inputValue,phoneAmount,value,isTrue){
    document.getElementById(plusButton).addEventListener("click",function(){
        var inputContity=document.getElementById(inputValue);
       var phoneAmountText=document.getElementById(phoneAmount);
        var inputValueContainer=inputContity.value;
        if(isTrue){
            inputValueContainer=parseInt( inputContity.value)+1;
            phoneAmountText.innerText=value*inputValueContainer; 

        }
         else if(inputContity.value>0){
             inputValueContainer=parseInt( inputContity.value)-1;
             phoneAmountText.innerText=value*inputValueContainer;
         }
         inputContity.value=inputValueContainer; 
         sub(); 
     })
    
}
function sub(){
    var subTotal=document.getElementById("sub-total");
    var vatValue=document.getElementById("vat-value");
    var totalValue=document.getElementById("total-value");

    var blackPhoneAmount=document.getElementById("black-phone-amount");
    var casePhoneAmount=document.getElementById("case-phone-amount");
    subTotal.innerText=parseInt(blackPhoneAmount.innerText)+parseInt(casePhoneAmount.innerText);
    vatValue.innerText=parseInt(subTotal.innerText)/10;
   totalValue.innerText=parseInt(vatValue.innerText)+parseInt(subTotal.innerText);



}
add("plus-btn-black","input-value-black","black-phone-amount",1219,true);
add("plus-btn-case","input-value-case","case-phone-amount",59,true);
add("minus-btn-black","input-value-black","black-phone-amount",1219,false);
add("minus-btn-case","input-value-case","case-phone-amount",59,false);



