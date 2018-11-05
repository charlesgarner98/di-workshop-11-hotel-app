const chai = require('chai');
const expect = chai.expect;

const Hotel = require('../models/hotel')
const Review = require('../models/review')

describe('Hotel', function() {
  describe('#constructor', function(){
    it('should set up the object properly', function(){
      let hotel = new Hotel("Hilton Metropole", "London")

      expect(hotel.name).to.equal('Hilton Metropole')
      expect(hotel.city).to.equal('London')
      expect(hotel.reviews).to.deep.equal([])
    })
  })
  describe('urlSlug', function(){
    it('should return url', function (){
      let hotel = new Hotel("Hilton Metropole", "London")

      expect(hotel.urlSlug()).to.equal('hilton_metropole_london')
    })
    it('should handle cities with multiple words', function(){
      let hotel = new Hotel("Hilton Metropole", "San Francisco")

      expect(hotel.urlSlug()).to.equal('hilton_metropole_san_francisco')
    })
  })
  describe('#addReview', function(){
    it('should add review to reviews array', function(){
      let hotel = new Hotel("Hilton Metropole", "London")
      let review = new Review(5, "Excellent hotel, very clean", "2018-12-17")
      hotel.addReview(review)
      expect(hotel.reviews).to.deep.equal([review])
    })
  })
  describe('#reviewCount',function(){
    it('should return the number of reviews', function(){
      let hotel = new Hotel("Hilton Metropole", "London")
      expect(hotel.reviewCount()).to.equal(0)
      let review = new Review(5, "Excellent hotel, very clean", "2018-12-17")
      hotel.addReview(review)
      expect(hotel.reviewCount()).to.equal(1)
    })
  })
  describe('#rating', function(){
    it('should return the average rating', function(){
      let hotel = new Hotel("Hilton Metropole", "London")
      expect(hotel.rating()).to.equal(0)
      let review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")
      let review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
      hotel.addReview(review1)
      hotel.addReview(review2)

      expect(hotel.rating()).to.equal(3)
    })
  })
  describe('#ratingAsStars', function(){
    it('should return the average rating as stars', function(){
      let hotel = new Hotel("Hilton Metropole", "London")
      expect(hotel.reviewCount()).to.equal(0)
      let review1 = new Review(5, "Excellent hotel, very clean", "2018-12-17")
      let review2 = new Review(1, "Terrible hotel, smelled of mice", "2018-01-01")
      hotel.addReview(review1)
      hotel.addReview(review2)

      expect(hotel.ratingAsStars()).to.equal('⭐️⭐️⭐️')
    })
  })
})
