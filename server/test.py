import requests
import json

print(requests.post('http://localhost:3001/project/add', data=json.dumps({
  "name": "SSBuiltit - SimCity BuildIt Item List",
  "desc": "This is one of my few jquery project I'd built a long time ago. For those who are playing SimCity BuiltIt, this is a page showcasing all in-game items, their price, etc.",
  "url": "https://melvinchia3636.github.io/ssbuiltit/",
}), headers = {u'content-type': u'application/json'}).content)