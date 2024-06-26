from flask import Blueprint, jsonify, request
from models import Friend
from config import db

friends_bp = Blueprint('friends_bp', __name__)

# Get All Friends

@friends_bp.route("/api/friends", methods=["GET"])
def get_friends():
    friends = Friend.query.all()
    res = [friend.to_json() for friend in friends]
    return jsonify(res)

# Add Friend

@friends_bp.route("/api/friends", methods=["POST"])
def create_friend():
    try:
        data = request.json

        required_fields = ["name","role", "gender", "description"]

        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing {field} field"}), 400

        name = data.get("name")
        role = data.get("role")
        description = data.get("description")
        gender = data.get("gender")
        gender = gender.lower()

        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
        else:
            img_url = None

        new_friend = Friend(name=name, role=role, gender=gender, img_url=img_url, description=description)
        db.session.add(new_friend)
        db.session.commit()

        return jsonify(new_friend.to_json()), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500

# Delete Friend Based on id

@friends_bp.route("/api/friend/<int:id>", methods = ["DELETE"])
def delete_friend(id):
    try:
        friend = Friend.query.get(id)

        if friend is None:
            return jsonify({"error" : f"Friend not Found"}), 404
        db.session.delete(friend)
        db.session.commit()
        return jsonify({"message" : f"Friend {id} Deleted"}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500

# Update a friend profile

@friends_bp.route("/api/friend/<int:id>", methods = ["PATCH"])
def update_friend(id):
    try:
        
        friend = Friend.query.get(id)

        if friend is None:
            return jsonify({"error" : f"Friend not Found"}), 404
        
        data = request.json
        gender = data.get("gender")
        name = data.get("name")
        friend.name = data.get("name",friend.name)
        friend.role = data.get("role",friend.role)
        friend.gender = data.get("gender",friend.gender)
        friend.description = data.get("description",friend.description)
        if gender == "male":
            img_url = f"https://avatar.iran.liara.run/public/boy?username={name}"
            friend.img_url = img_url
        elif gender == "female":
            img_url = f"https://avatar.iran.liara.run/public/girl?username={name}"
            friend.img_url = img_url
        else:
            img_url = None
        # print(friend.gender)
        # print(friend.img_url)
        db.session.commit()
        return jsonify(friend.to_json()),200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error":str(e)}),500