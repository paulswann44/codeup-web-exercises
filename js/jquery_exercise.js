"use strict";
(function () {

    $(document).ready(function () {

        // +++ID Selectors+++
        // let h1Content =$('#h1-id').html()
        // alert(h1Content);
        // alert(typeof(h1Content));
        // let h1Content =$('#p-id').html()
        // alert(h1Content);

        //only altered the first child with the same ID
        // let h1Content =$('#li1-id').html()
        // alert(h1Content);

        // +++Class Selectors+++
        // $('.codeup').css('border', 'solid 1px red');
        //Give another element an id of codeup. Does this element get a border now?
        //does not work


        // +++Element Selectors+++
        // $('li').css('font-size', '20px');
        // $('li').css('background', 'yellow');
        // $('h1').css('background', 'yellow');
        // $('p').css('background', 'yellow');
        //another to select the three selectors h1, p, li
        // $('li, h1, p').css('background', 'yellow');
        //
        //
        // let h1Content =$('h1').html()
        // alert(h1Content);



        //Add jQuery code that will change the background color of an h1 element when clicked.
        $('#h1-id').click(
            function(){
            $(this).css('background', 'green');
        })

        // Make all paragraphs have a font size of 18px when they are double clicked.
        $('#p-id').dblclick(
            function(){
            $(this).css('font-size', '18px');
        })


        //Set all li text color to red when the mouse is hovering; reset to black when it is not.
        $('.li-class').hover(
            function(){
            $(this).css('color', 'red');


        //This section was for fun.
        }).mouseenter(function(){
            $(this).css('background', 'blue')
            $(this).css('font-size', '3rem')
        })

        $('.li-class').hover(
            function(){
            $(this).css('color', 'red');
        }).mouseleave(function(){
            $(this).css('background', 'white')
            $(this).css('font-size', '1rem')
        })







    })


}())