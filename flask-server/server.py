from importlib import import_module
from flask import Flask
import text_splitting
from text_splitting import split_str


app = Flask(__name__)

# example api
@app.route("/members")
def members():
  return {"members": ["Member1", "Member2", "Member3"]} # random stuff

if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode