const chai = require('chai');
const expect = chai.expect;

const Hotel = require('../models/hotel')
const Review = require('../models/review')
const HotelCollection = require('../models/hotelCollection')

describe('Hotel Collections', function() {
  describe('#constructor', function(){
    it('should set up the object properly', function(){
      let c = new HotelCollection()

      expect(c.hotels).to.deep.equal([])
    })
  })
  describe('addHotel', function(){
    it('should add to empty array', function (){
      let hotel = new Hotel("Hilton Metropole", "London")
      let c = new HotelCollection()
      c.addHotel(hotel)
      expect(c.hotels).to.deep.equal([hotel])
    })
    it('should add to existing hotels in array', function(){
      let hotel = new Hotel("Hilton Metropole", "San Francisco")
      let hotel2 = new Hotel("The Green Rooms", "Wood Green")
      let c = new HotelCollection()
      c.addHotel(hotel)
      c.addHotel(hotel2)
      expect(c.hotels).to.deep.equal([hotel, hotel2])
    })
  })
  describe('sortedHotels', function(){
    it('should return hotels in descending order of rating', function(){
      let hotel1 = new Hotel("Hilton Metropole", "San Francisco")
      let hotel2 = new Hotel("The Green Rooms", "Wood Green")
      let hotel3 = new Hotel("Marriot", "Paris")

      let review1 = new Review(1,"Bad Hotel","2018-01-01")
      let review3 = new Review(3,"Good Hotel","2018-01-01")
      let review5 = new Review(5,"Great Hotel","2018-01-01")

      hotel1.addReview(review1)
      hotel2.addReview(review3)
      hotel3.addReview(review5)

      let c = new HotelCollection()
      c.addHotel(hotel1)
      c.addHotel(hotel2)
      c.addHotel(hotel3)

      var sorted = c.sortedHotels()
      expect(sorted[0].name).to.equal('Marriot')
      expect(sorted[1].name).to.equal('The Green Rooms')
      expect(sorted[2].name).to.equal('Hilton Metropole')
    })
  })
})
