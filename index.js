function theBeatlesPlay (musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var index = 0
  while (index < facts.length) {
    facts[index] = facts[index] + "!!!"
    index ++
  }
  return facts
}
