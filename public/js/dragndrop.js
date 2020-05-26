// head space 


$(document).ready(function() { 

    $( "#waiting, #assigned, #active, #done" ).sortable({
        connectWith: ".sort",
        dropOnEmpty: false
    });

})
