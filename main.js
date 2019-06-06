var curProject = ""; // store current project id

// time out loader
function loader() {
  var myVar = setTimeout(showPage, 3000);
}

// get rid of loader and show page
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("page").style.display = "block";
}

$(document).ready(function(){

  // show nav
  $("h1").click(function(){
    $("ul#medium").slideToggle();
  });
  
  // expand projcts
  $(".media").click(function(){
    $(this).parent().children("ul").slideToggle();
  });
  
  // content changing
  $(".project").click(function(){
    // hide intro if porject hasn't been selected yet
    if (curProject == "")
      $("#intro").hide();
    // hide current project content
    $(curProject).hide();
    // show clicked on project content
    var id = "#" + $(this).attr("id") + "content";
    $(id).show();
    // if a project is selected and not the same, reload videos and scroll to top
    if (curProject != "" && curProject != id)
    {
      $(curProject).children(".youtube").each(function(){
        $(this).attr("src",$(this).attr("src")); // reloads video
      });
      window.scrollTo(0,0); // scroll to top
    }
    //save current project
    curProject = id;
  });
  
});