from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from flask_bcrypt import Bcrypt
from datetime import datetime


db = SQLAlchemy()

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    lastname = db.Column(db.String(100), unique=False, nullable=False)
    birth_date = db.Column(db.Date, nullable=True)
    gender = db.Column(db.Enum('male', 'female', 'none', name='gender_enum'), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    user_calendar = relationship('Calendar', backref='user', lazy=True)
    user_session = relationship('SessionCall', backref='user', lazy=True)

    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "birth_date": self.birth_date,  
            "gender": self.gender,
            "email": self.email
        }

class Psychologist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    lastname = db.Column(db.String(100), unique=False, nullable=False)
    experience = db.Column(db.String(100), nullable=False)
    language = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)
    psychologist_calendar = relationship('Calendar', backref='psychologist', lazy=True)

    def __repr__(self):
        return f'<Psychologist {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "experience": self.experience,
            "language": self.language,
            "email": self.email
        }

class Manager(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=False, nullable=False)
    lastname = db.Column(db.String(100), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(255), unique=False, nullable=False)

    def __repr__(self):
        return f'<Manager {self.email}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email
        }

class Calendar(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.Date, nullable=False)
    month = db.Column(db.Integer, nullable=False)  
    hour = db.Column(db.Time, nullable=False)  
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  
    psychologist_id = db.Column(db.Integer, db.ForeignKey('psychologist.id'), nullable=False)  
    
    def __repr__(self):
        return f'<Calendar {self.day}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "day": self.day,
            "month": self.month,
            "hour": self.hour,
            "user_id": self.user_id,
            "psychologist_id": self.psychologist_id
        }

class SessionCall(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    introductory = db.Column(db.Integer, unique=False, nullable=False)
    fullSession = db.Column(db.Integer, unique=False, nullable=False)
    sessionPackage_5 = db.Column(db.Integer, unique=True, nullable=False)
    sessionPackage_10 = db.Column(db.Integer, unique=True, nullable=False)
    user_session = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)  

    def __repr__(self):
        return f'<Session {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "introductory": self.introductory,
            "fullsession": self.fullSession,
            "sessionPackage_5": self.sessionPackage_5,
            "sessionPackage_10": self.sessionPackage_10,
            "usersession": self.user_session
        }

class Chatbot(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    frequently_ask = db.Column(db.String(100), unique=True, nullable=False)
    relaxation_exercises = db.Column(db.String(100), unique=True, nullable=False)

    def __repr__(self):
        return f'<Chatbot {self.id}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "frequently_ask": self.frequently_ask,
            "relaxation_exercises": self.relaxation_exercises
        }
