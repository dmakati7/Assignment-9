$(function(){
    $('h2')
        .css('border', 'solid 1px black')
        .css('color', '#CC1C0D')
		.css('padding', '3px 0 3px 20px')
		.css("border-radius", '0 5px 0 5px')
		.css('background-color', '#DFE3E6');

    $('nav ul li a')
        .addClass('navigation')
        .css('border', 'solid 1px #929CA4')
        .css('color', '#CC1C0D')
        .css('padding', '3px 0 3px 20px')
        .css('background-color', '#DFE3E6');

    $('section p:not(:first)')
         .removeClass();

    $('aside p:last')
         .append("<br>Chevy Dealers Association");

    $('aside p:first')
         .wrapInner("<q><i></i></q>");

    $('section p:first b')
         .replaceWith("<a href='http://www.vectacorp.com'>Vecta Corp.</a>");
})