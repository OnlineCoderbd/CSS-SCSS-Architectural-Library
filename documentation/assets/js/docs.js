
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

// Block Tabs
// var tabLinks = document.querySelectorAll(".tablinks");
// var tabContent = document.querySelectorAll(".tabcontent");


// tabLinks.forEach(function (el) {
// 	el.addEventListener("click", openTabs);
// });


// function openTabs(el) {
// 	var btnTarget = el.currentTarget;
// 	var country = btnTarget.dataset.country;

// 	tabContent.forEach(function (el) {
// 		el.classList.remove("active");
// 	});

// 	tabLinks.forEach(function (el) {
// 		el.classList.remove("active");
// 	});

// 	document.querySelector("#" + country).classList.add("active");

// 	btnTarget.classList.add("active");
// }