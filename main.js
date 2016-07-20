var niceArray = [
  "Nice try.",
  "Maybe next time you'll get it.",
  "Don't stay up too late."
]

function generate () {
  return Math.floor(Math.random()*niceArray.length)
}

// $("#result h1")

$("button").click(function(){$("#result h1").html(niceArray[generate()])})

console.log(generate())
// "Jesse open the door! Jesse!"
// "Mr. White is gay for me"
