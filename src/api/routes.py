"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/users', methods=['GET'])
def get_all_users():
   user = User.query.all()
   
   serialized_users = [item.serialize() for item in user]
   return jsonify(serialized_users), 200