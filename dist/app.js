$( function () {
    $.getJSON( "quotes.json", function( data ) {
        var index = Math.floor( Math.random() * data.length ),
            quote = data[ index ].quote,
            author = data[ index ].author;
        $( "#quote" ).html( quote );
        $( "#author" ).html( author );
    });
});
