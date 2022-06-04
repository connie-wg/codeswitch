from flask import Flask

app = Flask(__name__)

# example api
@app.route("/members")
def members():
  return {"members": ["Member1", "Member2", "Member3"]} # random stuff

@app.route("/send_code", methods=['POST'])
def code():
  return {"status": "200"}

if __name__ == "__main__":
  app.run(debug=True) # since this is in development mode