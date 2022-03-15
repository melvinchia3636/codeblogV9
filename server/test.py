import requests
import json

quotes = [
  ["The only way to learn a new programming language is by writing programs in it.", "Dennis Ritchie"],
  ["Simplicity is the soul of efficiency.", "Austin Freeman"],
  ["Copy-and-Paste was programmed by programmers for programmers actually.", "Internet"],
  ["Algorithm: Word used by programmers when they don’t want to explain what they did.", "Internet"],
  ["A program is never less than 90% complete and never more than 95% complete.", "Internet"],
  ["Documentation is like sex: When it is bad, it is better than nothing. When it is good, it is really, really good.", "Internet"],
  ["Talk is cheap. Show me the code.", "Linus Torvalds"],
  ["Programming is like writing a book... except if you miss a single comma on page 156 the whole thing makes no damn sense.", "Internet"],
  ["You might not think that programmers are artists but programming is an extremely creative profession. It is logic-base creativity.", "John Romero"],
  ["Everything you can imagine is real.", "Pablo Picasso"],
  ["You can't use up creativity. The more you use the more you have.", "Maya Angelou"]
]

mottoes = [
  "You'll never be the best, since there is always someone who is better than you.",
  "Keep learning new stuff and creating cool projects. That's the meaning of my life.",
  "Regardless of how ridiculous the idea is, go ahead and turn it into reality.",
  "Feeling bored? Write some codes. Tired? Get yourself a cup of coffee and tea.",
  "If someone ask me how to start programming, I'll always him/her the same asnwer: learn and do projects.",
  "Don't be afraid to ask for help, although I've barely asked for help before.",
  "Google is your best friend.",
  "Age is never a barrier to your mastery of programming.",
  "If you can't write code, you can't write anything.",
  "Don't follow tutorials on how to code something line-by-line. They are useless. Try to implement it yourself.",
  "I hate Bootstrap, it looks so ugly. Long live TailwindCSS.",
  "Never start a project before another one is finished. Imagine the feeling of working on 8 projects simultaneously.",
  "Those who sucks at UI design, please make use of a UI Framework. I beg you, don't make my eyes hurt again.",
  "When someone doesn't believe you're a programmer, use your portfolio to slap their face."
]

for content in mottoes:
  print(requests.post('http://localhost:3001/quotes/mottoes/add/redaxe3636', data=json.dumps({
    "content": content,
    "author": "Melvin Chia"
  }), headers = {u'content-type': u'application/json'}).content)