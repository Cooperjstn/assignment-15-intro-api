console.log('wired up!')
console.log($)


var forEach = function(arr, cb){
   for(var i = 0 ; i < arr.length; i+=1){
      cb(arr[i], i, arr)
   }
}



var legisContainer = document.querySelector('.row-legislators')
var popData = function(returnedData){
console.log(returnedData)


forEach (returnedData.results, function (legisObj){
  console.log(legisObj)

  var pushDat = '<div class="col-sm-4 col-md-4">'
  pushDat += '<div class="thumbnail">'
  pushDat += '<h4>'+legisObj.first_name+' '+ legisObj.last_name+'</h4>'
  pushDat += '<h5>' + legisObj.title+'--'+legisObj.party +'-'+ legisObj.state+ '</h5>'
  pushDat +=   '<li>'+legisObj.oc_email+'</li>'
  pushDat +=    '<li>'+legisObj.website+'</li>'
  pushDat +=    '<li>'+legisObj.facebook_id+'</li>'
  pushDat +=     '<li>'+legisObj.twitter_id+'</li>'
  pushDat +=      '<p>'+'TermEnd:'+''+legisObj.term_end+'</p>'
  pushDat +=    '</div>'
  pushDat += '</div>'
  console.log(pushDat)
  legisContainer.innerHTML += pushDat

})
}









$.getJSON('https://congress.api.sunlightfoundation.com/legislators?apikey=dde05dbec94a457d83cab6aafc94b3e8').then(popData)
