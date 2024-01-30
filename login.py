from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///users.db'  # Use SQLite for simplicity
db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    password = db.Column(db.String(50), nullable=False)

# Initialize the database with a default user (toby, 123toby)
@app.before_first_request
def create_default_user():
    db.create_all()
    default_user = User(username='toby', password='123toby')
    db.session.add(default_user)
    db.session.commit()

@app.route('/api/users/authenticate', methods=['POST'])
def authenticate_user():
    data = request.get_json()
    user = User.query.filter_by(username=data['uid']).first()

    if user and user.password == data['password']:
        # Successful authentication, return JWT or other response
        return jsonify({'token': 'your_jwt_token'})
    else:
        # Failed authentication, return appropriate HTTP status code
        return jsonify({'error': 'Authentication failed'}), 401

if __name__ == '__main__':
    app.run(debug=True)
