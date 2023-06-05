// Valores del html
const messageInvalid = document.querySelector('#invalid'),
      btnSend = document.querySelector('#send'),
      menuEmojis = document.querySelector('.form__emojis'),
      emojis     = document.querySelectorAll('.emoji'),
      btnEmoji = document.querySelector('#btnEmoji'),
      message    = document.querySelector('#message');

// evento en el boton para abrir el menu de emojis
btnEmoji.addEventListener('click', (e)=>{
    menuEmojis.classList.toggle('visibled');
    e.currentTarget.classList.toggle('rotate');
})

emojis.forEach( (emoji)=>{
    emoji.addEventListener('click', (itemEmoji)=>{
        message.value += itemEmoji.target.innerText;
    })
})

// Validar el input
btnSend.addEventListener('click', (e)=>{
    e.preventDefault()

    if(message.value == '' || message.value <= 5){
        messageInvalid.classList.add('visibled');
        messageInvalidRemove()
    }else{

        let phone = '50670910';
        const messageSend = message.value;

        const url = `https://api.whatsapp.com/send?phone=${phone}&text=
		*_Contacto con Jhonatan Véliz_*%0A%0A
		*Mensaje:*%0A%0A
		${messageSend}`;

        if(messageInvalid.className.includes('visibled')){
            messageInvalid.classList.remove('visibled');
        }

        message.value = '';
        window.open(url);
    }

})
message.addEventListener('keyup', ()=>{
    if(message.value != ''){
        messageInvalid.classList.remove('visibled');
    }else if(message.value == ''){
        messageInvalid.classList.add('visibled');
        messageInvalidRemove()
    }
})

function messageInvalidRemove(){
    setTimeout(()=>{
        messageInvalid.classList.remove('visibled');
    }, 3000)
}