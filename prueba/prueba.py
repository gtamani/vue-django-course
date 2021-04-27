from dotenv import load_dotenv
import os

load_dotenv()

api = os.environ.get("API")
print(api)