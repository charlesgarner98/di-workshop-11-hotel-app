const chai = require('chai');
const expect = chai.expect;

const Review = require('../models/review')

describe('Review', function(){
  describe('#constructor', function(){
    it('should set up the object properly', function(){
      let review = new Review(5, "Excellent hotel, very clean", "2018-12-17")

      expect(review.rating).to.equal(5)
      expect(review.text).to.equal("Excellent hotel, very clean")
      expect(review.date).to.equal('2018-12-17T00:00:00.000Z')
    })
  })
  describe('#ratingAsStars', function(){
    it('should display the rating in stars', function(){
      let review = new Review(5, "Excellent hotel, very clean", "2018-12-17")

      expect(review.ratingAsStars()).to.equal("⭐️⭐️⭐️⭐️⭐️")
    })
  })
  describe('#toJSON', function(){
    it('should return a JSON string', function(){
      let review = new Review(5, "Excellent hotel, very clean", "2018-12-17")
      expect(JSON.stringify(review, null, 2)).to.equal('{\n  "rating": 5,\n  "text": "Excellent hotel, very clean",\n  "date": "2018-12-17T00:00:00.000Z",\n  "ratingAsStars": "⭐️⭐️⭐️⭐️⭐️"\n}')
    })
  })
})
