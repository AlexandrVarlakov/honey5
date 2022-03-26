document.querySelectorAll('.easySelect').forEach( (item) => {
    item.addEventListener('click', function(event){

        event.stopPropagation();
    
        let optionsList = this.querySelector('.easySelect__options-list');

            
        if ( optionsList.getAttribute('data-state') == 'rolled' ){
            let activeSelectList = document.querySelectorAll('.easySelect[data-state="active"]');
            if ( activeSelectList !== null ) {
                activeSelectList.forEach( (item) => { 
                    item.removeAttribute('data-state');
                    item.querySelector('.easySelect__options-list').setAttribute('data-state', 'rolled');
                })
            }
            item.setAttribute('data-state', 'active');
            optionsList.setAttribute('data-state', 'deploy');
        } else {

            

            item.removeAttribute('data-state');
            optionsList.setAttribute('data-state', 'rolled');
        }
        
        
    })
})



function itemClick(){
    let mainParent = document.querySelector('.easySelect');
    let curValueBlock = mainParent.querySelector('.easySelect__cur-value');

    let hasLabel = curValueBlock.querySelector('label');

    
    if (hasLabel){
        let curHtml = curValueBlock.innerHTML;

        let item = document.createElement('li');

        item.classList.add('easySelect__option');
        let radioWrap = curValueBlock.querySelector('.easySelect__radio-wrap');
        item.append(radioWrap);
        item.addEventListener('click', itemClick);
        let itemsList = document.querySelector('.easySelect__options-list');
        itemsList.append(item);

        





    } else{
        curValueBlock.innerHTML = '';
    }
    let checked = mainParent.querySelector('input[type="radio"]:checked');

    if ( checked ){
        checked.removeAttribute('checked');
    }
    
    this.querySelector('input[type="radio"]').setAttribute('checked', 'checked');
    let event = new Event("changeInSelect", {bubbles: true}); 
    this.querySelector('input[type="radio"]').dispatchEvent(event);


    curValueBlock.append(this.querySelector('.easySelect__radio-wrap'))

    
    curValueBlock.setAttribute('data-value', this.getAttribute('data-value'));
    
    let hiddenInput =  mainParent.querySelector('.easySelect__hide-input');

    if (hiddenInput !== null ){
        hiddenInput.value = this.getAttribute('data-value');
    }
    
    if ( this.hasAttribute('data-checked')  == false ){
        let checkedElement = mainParent.querySelector('.easySelect__option[data-checked="checked"]');
        if ( checkedElement !== null ) {
            checkedElement.removeAttribute('data-checked');
        }

        this.setAttribute('data-checked', 'checked');
    }

    this.remove();
}

document.querySelectorAll('.easySelect__option').forEach( (item) => {
    item.addEventListener('click', itemClick)
})


window.addEventListener('click', function(event){
    let textClass = event.target.getAttribute('class');
    if ( textClass === null ) textClass = '';

    if (  textClass.includes('easySelect') == false ){
        let activeSelectList = document.querySelectorAll('.easySelect[data-state="active"]');
            activeSelectList.forEach( (item) => { 
                item.removeAttribute('data-state');
                item.querySelector('.easySelect__options-list').setAttribute('data-state', 'rolled');
            });
       
    }
})