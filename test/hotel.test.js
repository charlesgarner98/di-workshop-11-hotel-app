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
  describe('#reviewCount',function(){
    it('should return the number of reviews', function(){
      let hotel = new Hotel("Hilton Metropole", "London")
      expect(hotel.reviewCount()).to.equal(0)
    })
  })
});
