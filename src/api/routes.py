"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/users/create', methods=['POST'])
def handle_signup():
    body = request.json # get the request body content
    email = request.json.get('email')
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    age = request.json.get('age')
    favorite_color = request.json.get('favorite_color')
    
    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to enter an email',400
    if not first_name:
        return 'You need to enter a first name',400
    if not last_name:
        return 'You need to enter a last name',400
    if not age:
        return 'You need to enter an age', 400
    if not favorite_color:
        return 'You need to enter a favorite color', 400

    check_user = User.query.filter_by(email=email).first()

    if check_user is not None:
        return jsonify({
            'msg': 'The email address already exists. Please login to your account to continue.'
        }),409

    user = User(email=email, first_name=first_name, last_name=last_name, age=age, favorite_color=favorite_color)

    db.session.add(user)
    db.session.commit()

    users = User.query.all()
    
    payload = {
        'msg': 'New user was successfully created.',
        'newUser': user.serialize(),
        'users': [item.serialize() for item in users]
    }

    return jsonify(payload), 200

@api.route('/users', methods=['GET'])
def get_all_users():
   users = User.query.all()
   
   serialized_users = [item.serialize() for item in users]
   return jsonify(serialized_users), 200

@api.route('/users/<int:user_id>/edit', methods=['PUT'])
def editUser(user_id):
    body = request.json # get the request body content
    email = request.json.get('email')
    first_name = request.json.get('first_name')
    last_name = request.json.get('last_name')
    age = request.json.get('age')
    favorite_color = request.json.get('favorite_color')
    
    if body is None:
        return "The request body is null", 400
    if not email:
        return 'You need to enter an email',400
    if not first_name:
        return 'You need to enter a first name',400
    if not last_name:
        return 'You need to enter a last name',400
    if not age:
        return 'You need to enter an age', 400
    if not favorite_color:
        return 'You need to enter a favorite color', 400

    User.query.filter_by(id=user_id).update(dict(email=email, first_name=first_name, last_name=last_name, age=age, favorite_color=favorite_color))
    db.session.commit()

    updatedUsers = User.query.all()
    serialized_users = [item.serialize() for item in updatedUsers]
    return jsonify(serialized_users), 200

@api.route('/users/<int:user_id>/delete', methods=['DELETE'])
def delUser(user_id):
   User.query.filter_by(id=user_id).delete()
   db.session.commit()
   updatedUsers = User.query.all()
   serialized_users = [item.serialize() for item in updatedUsers]
   return jsonify(serialized_users), 200
