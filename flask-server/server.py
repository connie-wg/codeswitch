from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route("/translate_code", methods=['POST'])
def code():
  body = request.json
  return jsonify(body)
  
if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode