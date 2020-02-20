import requests

UBER_AUTH_ENDPOINT ="https://login.uber.com/oauth/v1.2/authorize?client_id=Y31cWiSmUyCeFgwLp3I5_IG1Bi7Bn5Ht&response_type=code&redirect_uri=http://localhost"

r = requests.get(UBER_AUTH_ENDPOINT) 
#data = r.json() 
print(r)