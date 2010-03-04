// pour Shadowbox
Shadowbox.init();

// JQuery
$(document).ready(function() {
    // grille de mise en page
    $("body").addGrid(16, {img_path: 'squelettes/img/', z_index:'99', left:'0'});
    
    // selections sommaire
    //$('#selection').tabs();
    $("#selection").tabs({fx:{opacity:'toggle', duration:'slow'}}).tabs('rotate',5000,false);
    
    $("#selection li").bind('chgt',function(){
        $('.ui-tabs-selected').addClass("test");
    });
    
    
    

});