var chai = require('chai');
chai.use(require('chai-json-schema'));
chai.use(require('chai-http'));
var UserSchema = require('../models/user-schema-json.v1.json');
chai.should();

/* Täällä on vain kaksi pikkutestiä, koska jätin ajanpuutteessa loput tekemättä. Halusin kuitenkin varmistaa että osaan käyttää mochaa/chaita */

describe('Demo', function() {
    /* 
        User Schema should be valid json schema
    */
    describe('test user json schema', function() {
    it('should be valid', function() {
        var goodUser = {
            "firstName": "Pekka",
            "lastName": "Pouta",
            "email": "pekan.email@email.fi",
            "password": "AurinkoPaistaa",
            "phoneNumber": "0509879780",
            "createdAt": "2020-03-02"
        }
        var badUser = {
            "firstName": "Fake",
            "email": "user@email.fi"
        }   
        goodUser.should.be.jsonSchema(UserSchema);
        badUser.should.not.be.jsonSchema(UserSchema);
        })
    });


    /*
        Test user registration
    */

    describe('User registration', function() {
        it('should register user', function() {
            chai.request('http://localhost:3000/')
            .post('/user/register')
            .send({
                "firstName": "Pekka",
                "lastName": "Pouta",
                "email": "pekan.email@email.fi",
                "password": "AurinkoPaistaa",
                "phoneNumber": "0509879780",
                "createdAt": "2020-03-02"
            })
            .then((response) => {
                const body = response.body;
                body.should.be.jsonSchema(jsonSchema);
                response.should.have.status(200);
            })
            .catch((err) => { throw err; })
        })
    })
});