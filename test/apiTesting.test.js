var chai = require('chai')
var expect = chai.expect
var supertest = require('supertest')

// supertest lets us easily test our API
var api = supertest('http://localhost:3000')

describe('API Testing', function(){
  describe('GET', function(){
    describe('Get list of all words', function(){
      it('should return an array', function(done){
        api
          .get('/words')
          .expect(200)
          .expect(function(res) {
            expect(res.body.words).to.be.a('array')
          })
          .end(done)
      })
    })
    describe('Get single word', function(){
      it('should return a string', function(){

      })
    })
  })
  describe('POST', function(){

  })
})
