from unicodedata import category
import requests
import json

print(requests.post('http://localhost:3001/project-list/projects/add/redaxe3636', data=json.dumps({
    "name": "URL Shortener",
    "url": "https://url.thecodeblog.net",
    "desc": "A simple URL shortener that allows you to make long URLs shorter.",
    "repo": "https://github.com/melvinchia3636/URLShortener",
    "category": "webapp",
    "techs": [
           "next.js",
           "tailwindcss",
           "mongodb"
    ]

}), headers={u'content-type': u'application/json'}).content)
