
from pymongo import mongo_client
from pymongo.server_api import ServerApi

uri = "mongodb+srv://emanuelongo1001cano:Mongodb2310*.@airbnb.fb2hk.mongodb.net/?retryWrites=true&w=majority&appName=AirBnb"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)