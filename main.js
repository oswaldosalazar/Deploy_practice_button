var BrBaArray = [
  "Jesse open the door! Jesse!",
  "Mr. White is gay for me.",
  "What the hell is wrong with you? We're a family!",
  "I am the one who knocks.",
  "Say my name",
  "Yo, Gatorade me, bitch",
  "A man provides",
  "I fucked Ted",
  "I've still got things left to do.",
  "I watched Jane die. I was there. And I watched her die.",
   "Dude, you scared the shit out of me. When you say its contamination. I mean, I’m thinking like… an Ebola leak or something.",
   "So roll me further, bitch.",
   "They’re minerals, Marie! Jesus!",
   "Everyone sounds like Meryl Streep with a gun to their head.",
   "Send him to Belize? I'll send YOU to Belize",
   "Yeah, Mr. White! Yeah, science!",
   "Keys, scumbag. It’s the universal symbol for keys.",
   "Scientists love lasers!",
   "Let me get this straight. I steal your dope, I beat the piss out of your mule boy, and you bring me more meth? That’s brilliant.",
   "Since when do vegans eat fried chicken?",
   "My name is ASAC Schrader, and you can go fuck yourself",
   "Oh, hey, nerdiest old dude I know, you wanna come cook crystal? Please. I’d ask my diaper-wearing granny, but her wheelchair wouldn’t fit in the RV.",
   "As to your dead guy, occupational hazard. Drug dealer getting shot? I'm gonna go out on a limb here and say it's been known to happen.",
   "We’re all on the same page. The one that says, if I can’t kill you, you’ll sure as shit wish you were dead.",
   "This is my own private domicile and I will not be harassed…bitch!",
   "Look, let’s start with some tough love. You two suck at peddling meth. Period.",
   "She had an ass like an onion. It made me cry",
   "All right, $16,000 laundered at 75 cents on the dollar, minus my fee, which is 17%, comes out to $9,960. Congratulations, you've just left your family a second hand Subaru.",
   "Yeah Bitch! Magnets",
   "Someone has to protect this family from the man who protects this family.",
   "If you try to interfere, this becomes a much simpler matter. I will kill your wife. I will kill your son. I will kill your infant daughter.",
   "You're goddamn right.",
   "Say, just for the sake of argument, that the kid's not in the mood for a nuanced discussion of the virtues of child poisoning.",
   "There are laws detective, have your kindergarten teacher read them to you. Right, go grab your juice box and have a nap!",
]

function generate () {
  return Math.floor(Math.random()*BrBaArray.length)
}

$("button").click(function(){$("#result h2").html(BrBaArray[generate()])})

console.log(generate())
