// head space 


$(document).ready(function() { 

    // for team member page
    $( "#waiting, #assigned, #active, #done" ).sortable({
        connectWith: ".sort",
        dropOnEmpty: false
    });

    // for manager page
    $( "#available, #project1, #project2, #project3, #newProject").sortable({
        connectWith: ".sort",
        dropOnEmpty: false
    });

})
