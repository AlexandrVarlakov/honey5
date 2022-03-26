/* 111 Мобильное меню */
let hamburger = document.querySelector('.hamburger');
let mobMenu = document.querySelector('.header__mob-menu');
let mobMenuInner = document.querySelector('.header__mob-menu--inner');

let innerHeight = mobMenuInner.clientHeight;



if (hamburger && mobMenu ){
    hamburger.onclick = function(){
      console.log(innerHeight);
        if (this.classList.contains('open')){
          mobMenu.style.height = 0 + 'px';
          this.classList.remove('open');
        } else{
          this.classList.add('open');
          mobMenu.style.height = innerHeight + 'px';
        }
    }

    
        
    window.addEventListener('resize', function(event){
        let contentWidth = document.documentElement.clientWidth;

        if ( contentWidth > 1300 ){
            if (hamburger.classList.contains('open')){
              hamburger.classList.remove('open');
              mobMenu.style.height = 0 + 'px';
            }
        }
    })

}


/* 333 Слайдеры */


  let reviews = new Swiper(".reviews-list", {
    speed: 1000,
    
    slidesPerView: 1,
    spaceBetween: 32,
    loop: true,
    navigation: {
        nextEl: ".reviews-next",
        prevEl: ".reviews-prev",
      },

      breakpoints: {
        
        
        640: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        // when window width is >= 640px
        960: {
          slidesPerView: 3,
          spaceBetween: 64
        }
      }
  });
  
/* / Слайдеры */

//

/* 444 Маски */


let phoneMasks = document.querySelectorAll("input[name='phone']");

phoneMasks.forEach( (input) => {
    IMask(
        input, {
          mask: '+{375}(00) 000-00-00'
      });
})

  

/* / Маски */


let inputsPF = document.querySelectorAll('.p-form-inputs');

inputsPF.forEach( (inp) => {
    inp.onfocus = function(){
        inp.classList.remove('filling');
    }

    inp.onblur = function(){
        if ( this.value.length > 0 ){
            this.classList.add('filling');
        }
    }
})


let hContact = document.querySelector('.h-contact');

hContact.onclick = function(){
  this.classList.toggle('show');
}


let hOrders = document.querySelectorAll('.h-order');

hOrders.forEach( (hOrder) => {
  hOrder.onclick = function(event){
    if (event.target.classList.contains('h-order__btn') ){

      
      if ( this.classList.contains('show') ){
        this.classList.remove('show');
      } else{

        let activeOrders = document.querySelectorAll('.h-order.show');
      
        activeOrders.forEach( (order) => {
          order.classList.remove('show');
        })


        this.classList.add('show');
        let inp = this.querySelector('input');
        inp.focus();
      }

      
    }
    
  }
  
} )




document.addEventListener('click', function(event){

  let contactsTarget = event.target.closest('.h-contact');
  
  
  
  let orderTarget = event.target.closest('.h-order');
  
  

  if ( !contactsTarget ) {
    let hContact = document.querySelector('.h-contact.show');

    if ( hContact ){
      hContact.classList.remove('show');
    }
  }

  if ( !orderTarget ) {
    let hOrder = document.querySelector('.h-order.show');

    if ( hOrder ){
      hOrder.classList.remove('show');
    }
  }


})


let ttForms = document.querySelectorAll('.tt-form');


if ( ttForms ){
  ttForms.forEach((ttForm) => {
    ttForm.onsubmit = function(event){
      event.preventDefault();
      
      let btn = this.querySelector('.page-form__btn');
      let wrap = this.querySelector('.page-form__input-wrap');
      let inp = this.querySelector('.page-form__input');


      if ( inp.value.length == 0 ){
        wrap.classList.add('error');
      } else {

        let data_body = "phone=" + inp.value; 


        fetch("send-phone.php", { 
          method: "POST",
          body: data_body,   
          headers:{"content-type": "application/x-www-form-urlencoded"} 
          })
          
        
        .then( (response) => {
                if (response.status !== 200) {           
                    return Promise.reject();
                    
                }   
          
          
          btn.innerHTML = "Заявка отправлена";      
          btn.classList.add('success')  ;

          setTimeout(() => {
            btn.innerHTML = "Оставить заявку";      
            btn.classList.remove('success')  ;
            inp.value = '';
          }, 3000);
        return response.text()
        })
        .then(i => console.log(i))
        .catch(() => console.log('ошибка'));



    }

    }
  })
}





let pageFormInputWrap = document.querySelectorAll('.page-form__input-wrap');

if ( pageFormInputWrap ){
  pageFormInputWrap.forEach( (iw) => {
    let inp = iw.querySelector('input');

    iw.onclick = function(){
      iw.classList.remove('error');
      inp.focus();
    }
  })
}


let productsInfoBtn = document.querySelectorAll('.card__product-info');




if ( productsInfoBtn ){
  productsInfoBtn.forEach( ( infoBtn ) => {
    infoBtn.onclick = function(){
      let card = this.closest('.card');
      let id = card.id;

      

      let modalCnt = document.querySelector('.honey-info');
      modalCnt.querySelector('.honey-info__title').innerHTML = card.getAttribute('data-title');
      modalCnt.querySelector('.honey-info__text-container').innerHTML = card.getAttribute('data-text');
      modalCnt.querySelector('img').src = card.getAttribute('data-img');

      let modal = new easyModal('.honey-info', optionsModalFog, 'honey-info');
      
      
    }
  });
  
}
let optionsModalFog = {
  
  displayModal: 'block', 
  showModalAnimationName: 'fadeInBottom', 
  closeModalAnimationName: 'fadeOutTop', 
  closeClasses: ['modal__close'], 
  showModalAnimationDuration: 800,
  showFogAnimationName: 'fadeIn',
  closeFogAnimationName: 'fadeOut',
  showFogAnimationDuration: 300,
  closeFogAnimationDuration: 300,
  documentScrolled: false, /*
  onModalClose: function(){
    
  },*/
  
  onModalOpen: function(){
    let modalFog = document.querySelectorAll('.modal-fog');
    modalFog[modalFog.length-1].classList.add('promo-modal-fog');
  }

}

/*Форма заказа*/

let orderInpWraps = document.querySelectorAll('.order-form__inp-wrap');


if ( orderInpWraps ){
  orderInpWraps.forEach( (orderInpWrap) => {
    orderInpWrap.onclick = function(){
      this.classList.remove('error');
      this.querySelector('input').focus();
    }
  })
}
let orderModal;

let btnsBuyProduct = document.querySelectorAll('.card__buy');

if ( btnsBuyProduct ){
  btnsBuyProduct.forEach( (buy) => {

    buy.onclick = function(){
      let productId = this.closest('.card').id;
      document.querySelector('input[name="prodId"').value = productId;


      orderModal = new easyModal('.modal-order', optionsModalFog, 'modal-order');



    }


  })
}


let orderForm = document.querySelector('.order-form');

if  ( orderForm ){
  orderForm.onsubmit = function(event){
    event.preventDefault();
    let userName = this.querySelector('input[name="name"]');
    let userPhone = this.querySelector('input[name="phone"]');
    let modal = this.closest('.modal-order');
    let successNote = modal.querySelector('.modal-order__note-success');
    let note = modal.querySelector('.modal-order__note');
    let productId = this.querySelector('input[name="prodId"');
    let err = false;
    let btn = this.querySelector('.page-form__btn');
    let closeBtn = document.querySelector('.modal__close');


    if ( userName.value.length == 0) {
      err = true;
      userName.parentElement.classList.add('error');  
    }

    if ( userPhone.value.length == 0) {
      err = true;
      userPhone.parentElement.classList.add('error');  
    }

    if (!err){
      let data_body = "name=" + userName.value + '&phone=' + userPhone.value + '&productId=' + productId.value; 

      fetch("send-order.php", { 
        method: "POST",
        body: data_body,   
        headers:{"content-type": "application/x-www-form-urlencoded"} 
        })
        
      
      .then( (response) => {
              if (response.status !== 200) {           
                  return Promise.reject();
                  
              }   
        
        
        btn.innerHTML = "Заявка отправлена";      
        btn.classList.add('success');
        btn.setAttribute('disabled', 'disabled');
        note.style.display = "none";
        successNote.style.display = "block";
        setTimeout(() => {
          btn.innerHTML = "Оставить заявку";      
          btn.classList.remove('success')  ;
          btn.removeAttribute('disabled');
          userName.value = '';
          userPhone.value = '';
          productId.value = '';
          note.style.display = "block";
          successNote.style.display = "none";
          orderModal.closeModal();

        }, 3000);



      return response.text()
      })
      .then(i => console.log(i))
      .catch(() => console.log('ошибка'));
    }

  }
}

let msgForms = document.querySelectorAll('.msg-form');

if ( msgForms ){
  msgForms.forEach( (msgForm) => {
    msgForm.onsubmit = function(event){
      event.preventDefault();
      
      let userName = this.querySelector('input[name="name"]');
      let userPhone = this.querySelector('input[name="phone"]');
      let msg = this.querySelector('textarea[name="message"]');
      
      let err = false;
      let btn = this.querySelector('.page-form__btn');
      

      if ( userName.value.length == 0) {
        err = true;
        userName.parentElement.classList.add('error');  
      }
  
      if ( userPhone.value.length == 0) {
        err = true;
        userPhone.parentElement.classList.add('error');  
      }
  
      if (!err){
        let data_body = "name=" + userName.value + '&phone=' + userPhone.value + '&message=' + msg.value; 
  
        fetch("send-message.php", { 
          method: "POST",
          body: data_body,   
          headers:{"content-type": "application/x-www-form-urlencoded"} 
          })
          
        
        .then( (response) => {
                if (response.status !== 200) {           
                    return Promise.reject();
                    
                }   
          
          
          btn.innerHTML = "Заявка отправлена";      
          btn.classList.add('success');
          btn.setAttribute('disabled', 'disabled');
          
          setTimeout(() => {
            btn.innerHTML = "Оставить заявку";      
            btn.classList.remove('success')  ;
            btn.removeAttribute('disabled');
            userName.value = '';
            userPhone.value = '';
            msg.value = '';
              
          }, 3000);
  
  
  
        return response.text()
        })
        .then(i => console.log(i))
        .catch(() => console.log('ошибка'));
      }

    }
  })
}

/*Смена фильтра продукции*/

let productsType = document.querySelectorAll('input[name ="prod-type"]');


if ( productsType ) {
  productsType.forEach( (rb) => {
    rb.onchange = function(){
      console.log(this.value);
    }

    rb.addEventListener('changeInSelect', function(){
      
      console.log(this.value);
    })
  })
}

