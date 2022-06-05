from flask import Flask, request, jsonify
from importlib import import_module
import text_splitting
from text_splitting import split_str

app = Flask(__name__)

@app.route("/translate_code", methods=['POST'])
def code():
  frenCode = request.json['frenCode']
  engCode = split_str(frenCode)

  return jsonify(engCode)

if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode