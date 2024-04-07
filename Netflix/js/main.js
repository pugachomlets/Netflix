const tabItems = document.querySelectorAll('.tab-item');
const contentItems = document.querySelectorAll('.tab-content-item');


// Select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //add border to current tab
    this.classList.add('tab-border');
    //grab content item from the DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentItem.classList.add('show');
}
//removes border
function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'))
}

//Remove show class
function removeShow(){
    contentItems.forEach(item => item.classList.remove('show'))
}

//listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));
