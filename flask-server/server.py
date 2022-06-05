from flask import Flask, request, jsonify, send_file
from importlib import import_module
from text_splitting import split_str

app = Flask(__name__)

@app.route("/translate_code", methods=['POST'])
def code():
  foreignCode = request.json['foreignCode']
  engCode = split_str(foreignCode)
  return jsonify(engCode)

@app.route("/download", methods=['POST'])
def download():
  engCode = request.json['engCode']
  with open("English.js", "w") as fo:
   fo.write(engCode)

  path = 'English.js'
  return send_file(path, as_attachment=True, attachment_filename='English.js')

if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode