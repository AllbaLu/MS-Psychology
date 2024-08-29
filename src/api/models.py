from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    lastname = db.Column(db.String(100), unique=True, nullable=False)
    age = db.Column(db.String(80), unique=False, nullable=False)
    gender = db.Column(db.String(80), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    

    def __repr__(self):
        return f'<User {self.name}>'

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "age": self.age,
            "gender": self.gender,
            "email": self.email

        }
class Psychologist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    lastname = db.Column(db.String(100), unique=True, nullable=False)
    experience = db.Column(db.String(100), unique=True, nullable=False)
    language = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<Psychologist {self.name}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "age": self.age,
            "experience": self.experience,
            "language": self.language,
            "email": self.email

        }

class Manager(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)
    lastname = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)

    def __repr__(self):
        return f'<Manager {self.email}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "name": self.name,
            "lastname": self.lastname,
            "email": self.email,
            "password": self.password
        }

class Calendar(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    day = db.Column(db.String(100), unique=True, nullable=False)
    month = db.Column(db.String(100), unique=True, nullable=False)
    hour = db.Column(db.String(120), unique=True, nullable=False)
    userCalendar = db.Column(db.Integer, primary_key=True)
    psychologistCalendar = db.Column(db.String(100), unique=True, nullable=False)
    
    def __repr__(self):
        return f'<Calendar {self.day}>'
    
    def serialize(self):
        return{
            "id": self.id,
            "day": self.day,
            "month": self.month,
            "hour": self.hour,
            "userCalendar": self.userCalendar,
            "psycologistCalendar": self.psychologistCalendar
        }

class Session(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    introductory = db.Column(db.Integer, primary_key=True)
    fullSession = db.Column(db.Integer, primary_key=True)
    sessionPackage_5 = db.Column(db.Integer, primary_key=True)
    sessionPackage_10 = db.Column(db.Integer, primary_key=True)
    Usersession = db.Column(db.String(100), unique=True, nullable=False)

    


