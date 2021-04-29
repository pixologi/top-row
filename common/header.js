<script>

jQuery(document).ready(function($) {
    
    var itsNow = Date.now();
    var trFile = "https://data.pixologic.com/top-row/toprow.txt?v=2"+itsNow;
    
    $("#top-row-container").load(trFile, function() {
    
        $('#top-row-container').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 20,
            slidesToScroll: 2,
            autoplay: false,
            arrows: true,
            centerMode: false,
            variableWidth: true,
            responsive: [{
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 3
              }
            },
            {
               breakpoint: 400,
               settings: {
                  arrows: true,
                  slidesToShow: 3,
                  slidesToScroll: 1
               }
            }]
        });
    
    }); 
    if ($('.tiles-grid').length){
        //console.log('tile layout active');
        $('.tiles-grid').imagesLoaded( function() {
           //console.log('Switch tiles fired');
        });        
    }

}); //ready.function
