function theBeatlesPlay(musicians, instruments) {
  var beatles = []; 
  for (var i = 0; i < 4; i++) {
     beatles.push(musicians[i] + " plays " + instruments[i]); 
  }
  return beatles;
  
}

function johnLennonFacts(facts) {
    var i = 0; 
    var excitedFacts = []; 
    while (i < facts.length) {
        excitedFacts.push(facts[i] + "!!!");
        i++;
    }
    return excitedFacts; 
}