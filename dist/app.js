$( function () {
    $.getJSON( "https://api.quite.black", function( response ) {
        const data = response.data;
        let index = Math.floor( Math.random() * data.length ),
            quote = data[ index ].quote,
            author = data[ index ].author;
        $( "#quote" ).html( quote );
        $( "#author" ).html( author );
    });
});
