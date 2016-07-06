var settings = {
  url: 'https://api.etsy.com/v2/listings/active.js?api_key=pu2cbxtd1z6oa4m2d4pmynu6&keywords=russia+watch&includes=Images,Shop',
  dataType: 'jsonp',
  success: function(response) {console.log('this is the response ', response) }
}

$.ajax( settings );