/**
 * @name SAL (SCSS Architectural Library)
 * @author OnlineCoderbd
 * @version 1.0-Alpha-1 
 */


// SAL Accrondion
function collapse(element, option){
    document.addEventListener('click', ({target}) => {
        if (!target.matches(`${element} .a-toggle`)) return;
        else{
            if(!target.parentElement.classList.contains('active')){
                
                if(option==true){
                    const elementList = document.querySelectorAll(`${element} .a-wrapper`);
                    Array.prototype.forEach.call(elementList, ({classList}) => {
                        classList.remove('active');
                    });
                }            
                target.parentElement.classList.add('active');
            }else{
                target.parentElement.classList.remove('active'); 
            }
        }
    });
}

collapse('.accordion.collapsing', false);
