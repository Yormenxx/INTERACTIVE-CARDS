// valores de lo cards
const $card_value_name = document.getElementById("card_value_name"),
 $card_value_number = document.getElementById("card_value_number"),
 $card_value_mes = document.getElementById("card_value_mes"),
 $card_value_year = document.getElementById("card_value_year"),
 $card_value_cvc = document.getElementById("card_value_cvc")

parseInt($card_value_mes)

// boton evento
const $btn_confirm = document.querySelector(".btn__confirm");

// modal

const open = document.getElementById('open');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
  modal_container.classList.add('show');  
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});




// elementos donde aparecen los valores de las cards
const $card_name = document.querySelector(".card_name"),
$mes_card= document.querySelector(".mes_card"),
$year_card= document.querySelector(".year_card"),
$card_number= document.querySelector(".card_number"),
$cvc= document.querySelector(".cvc"),
$form__Card = document.querySelector(".form__Card"),
$container__sucess= document.querySelector(".container__sucess"),
$continue=document.getElementById("continue")



const expresiones = {

    letras: /[A-z]/g

}


$btn_confirm.addEventListener("click",()=>{



    nameCardVali($card_value_name.value)

    cardNumberVali($card_value_number.value)


    cardMonthVali($card_value_mes.value)

    cardValiYear($card_value_year.value)

    $cvc.textContent=$card_value_cvc.value

    
    document.querySelector(".form__Card").reset()
    $form__Card.classList.add("ocultar")
    $btn_confirm.classList.add("ocultar")
    $container__sucess.classList.add("mostrar")

   
})

$continue.addEventListener("click",()=>{
    $form__Card.classList.remove("ocultar")
    $btn_confirm.classList.remove("ocultar")
    $container__sucess.classList.remove("mostrar")
})






function nameCardVali(){

    if($card_value_name.value === ""){

        alert("Ingresa un nombre para tu tarjeta")


    }else {
        $card_name.textContent=$card_value_name.value
        

    }

 
}

function cardNumberVali(numberCard){

    if( expresiones.letras.test(numberCard)){

        alert("No se permiten letras en el campo de card number")
    
    }else{
        $card_number.textContent= numberCard.replace(/([0-9]{4})(\B)/g,"$1 ")
    }

    if($card_value_number.value === ""){
        alert("Dejaste vacio el campo number card")
    }

    
}

function cardMonthVali(month){

    parseInt(month)

    if (month>=12 || month<0) {
        
        alert("Debes de elegir el rango de meses correcto")
    }else{

        $mes_card.textContent= month
      
    }

}


function cardValiYear(year){

    parseInt(year)

    if(year >=3000 || year<2000){
        alert("Año no valido intenta otro")
    }else{
        $year_card.textContent= $card_value_year.value
    }

}























