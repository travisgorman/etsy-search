// make settings object
  // url with api key and search term
  // dataType: `jsonp`, and success function / data handling function. 

var settings = {
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=pu2cbxtd1z6oa4m2d4pmynu6&keywords=russia+watch&includes=Images,Shop',
  dataType: 'jsonp',
  success: function( response ) {
    // save array of results to a jQuery wrapped variable 
    var russianWatches = response.results;

    russianWatches.forEach( function( watch ){
    // iterate data, and create a html framework for each item
      var $item = $('<div class="item"><main><a><img src="#"/></a></main><section class="item-info"><a class="title"></a><section class="bottom"><a class="shop-name"></a><a class="price"></a></section></section></div>');
    // then go down the tree of this empty item, adding data from the `watch` object

// links
      $item .find( 'a' ) .attr('href', watch.url );

// thumbnail
      $item .find('img') .attr('src', watch.Images[0] .url_170x135 );
// title
      $item. find( '.item-info' ) .children( 'a' ) .text( watch.title );
// shop name
      $item .find( '.shop-name' ) .text( watch.Shop.shop_name );
     
// price
      $item .find('.price') .text( '$'+ watch.price );
      
      // put the whole element on the page
     $('#results').prepend( $item );


    }); // end forEach()
  }     // end success()
}       // end `settings`

// make an ajax call with jQuery and pass in the settings object
$.ajax( settings );


// // links
      // $item                     // in the newly created empty HTML, 
      //   .find( 'a' )            // find the anchors -
      //     .attr(                // and use the `attr()` function 
      //           'href',         // to set the `href` attributes 
      //            watch.url );   // to `item.url`

// thumbnail
//       $item
//         .find('img')                  // find the images -
//           .attr(                      // with the attr() jQuery method, 
//                 'src',                // set the `src` attribute
//                  watch.Images[0]      //  to the first thumbnail in the obj.Images array
//                   .url_170x135 );     // that's the correct size for the layout
// // title
//       $item.
//         find( '.item-info' )          // go to `section.item-info` and 
//           .children( 'a' )            // find child elements that are anchors
//             .text( watch.title );     // and set their text to `watch.title`
// // shop name
//       $item
//           .find( '.shop-name' )               // find the `.shop-name` anchor
//               .text( watch.Shop.shop_name );  // and change its text 
     
// // price
//       $item
//           .find('.price')                 // find the `.price` anchor
//               .text( '$'+ watch.price );  // and change its text

//       // put the whole element on the page
//      $('#results').prepend( $item );
