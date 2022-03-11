import requests
import json

print(requests.post('http://localhost:3001/project/add', data=json.dumps({
  "name": "MCS - Minecraft Server List",
  "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  "url": "https://mcs.thecodeblog.net",
}), headers = {u'content-type': u'application/json'}).content)