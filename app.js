var important = false;
var icon;

function togglePriority() {
    console.log("Clicked");

    if(important == true){
    // set it as non-importatnt
    icon.removeClass("far").addClass("fas");
        important = false;
}
else{
    //set it as important
    icon.removeClass("fas").addClass("far");
    important = true;
    }
}


function init(){
    console.log("Task Manager");
    icon = $("#iPriority");
    
    //hook event
    icon.click(togglePriority);
    
    // load data

}





window.onload = init;