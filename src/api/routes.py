"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_cors import CORS
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required
# routes.py
from flask_mail import Mail, Message  # Importar Message desde flask_mail
import os




api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/login', methods=['POST'])
def login():
    body = request.json
    user = User.query.filter_by(email=body["email"]).first()
    if user and user.check_password(password=body["password"]):
        access_token = create_access_token(identity=user.serialize())
        return jsonify({"token": access_token})
    else:
        return jsonify({"msg":"incorrect user or password"}), 401

@api.route('/register', methods=['POST'])
def register():
    body = request.json
    user = User()
    new_user = user.create_user(
        name=body["name"], 
        lastname=body["lastname"], 
        birth_date=body["birth_date"], 
        gender=body["gender"], 
        email=body["email"],
        password=body["password"] 
        )
    print(new_user)

    return jsonify({"msg":"user created"}), 200

@api.route('/send_email', methods=['POST'])
def send_email():
    body = request.get_json()

    if not body or not all(k in body for k in ("name", "email", "message")):
        return jsonify({"status": "Bad Request - Missing required fields"}), 400

    name = body['name']
    email = body['email']
    message = body['message']

    msg = Message(subject=f"New message from {name}",
                  sender=email,
                  recipients=['miguelsapsychology@gmail.com'],
                  body=f"Name: {name}\nEmail: {email}\nMessage: {message}")
    try:
        email.send(msg)
        return jsonify({"status": "Email sent successfully"}), 200
    except Exception as e:
        error_message = f"Error sending email:"
        print(error_message)
        return jsonify({"status": "Error sending email", "error": error_message}), 500


        



    

   
