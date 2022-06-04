from flask import Flask, request, jsonify
from importlib import import_module
import text_splitting
from text_splitting import split_str

app = Flask(__name__)

@app.route("/translate_code", methods=['POST'])
def code():
  body = request.json['frenCode']
  return {
    "body": body
  }

if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode