const chai = require('chai');
const expect = chai.expect;

const Hotel = require('../models/hotel')
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
  describe('Protection for overwriting', function() {
    it('Should not overwrite the existing array', function() {
      let c = new HotelCollection()
      c.hotels = ['overwriting']
      expect(c.hotels).to.deep.equal([])
      let hotel = new Hotel("Hilton Metropole", "San Francisco")
      c.addHotel(hotel)
      c.hotels = ['overwriting']
      expect(c.hotels).to.deep.equal([hotel])
    })
  })
  describe('sortedHotels', function(){
    it('should return hotels in descending order of rating', function(){
      //// TODO: Write test for this
      //// TODO: Implement this
    })
  })
})
