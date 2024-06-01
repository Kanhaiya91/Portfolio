var navmenu = document.querySelectorAll('.nav-menu a');
for(var i=0 ; i<=navmenu.length ; i++){
  navmenu[i].addEventListener('click', function(event){
    event.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase();
    var targetSection =document.getElementById(targetSectionId);
   
    var interval = setInterval(function(){
        var targetSectionCoordinates = targetSection.getBoundingClientRect();
      if(targetSectionCoordinates.top<=0)
      { clearInterval(interval);
         return; 
    }

        window.scrollBy(0,50);
    },20)
    console.log(targetSection)
  });
}