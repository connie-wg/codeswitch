from flask import Flask

app = Flask(__name__)

@app.route("/translate_code", methods=['POST'])
def code():
  return {"status": "200"}
  
if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode