from flask import Flask,request,jsonify

from flask_cors import CORS

from flask_sqlalchemy import SQLAlchemy

from routes import friends_bp

from config import db

# cur.execute("create table friend(id primary key, name, role, description, gender)")
# cur.execute("INSERT INTO friend (id, name, role, description, gender)VALUES (1, 'John', 'Best friend', 'Loyal companion since childhood', 'Male');")
# res = cur.execute("select * from friend;")
# print(res.fetchall())

app = Flask(__name__)

CORS(app)



app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///friends.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

import routes
# Register the Blueprint
app.register_blueprint(friends_bp)


with app.app_context():
  db.create_all()

if __name__ == "__main__":
  app.run(debug=True)