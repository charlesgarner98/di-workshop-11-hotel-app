class HotelCollection {
  constructor() {
    this.hotels = []
    Object.freeze(this)
  }
  addHotel(hotel) {
    this.hotels.push(hotel)
  }
  sortedHotels() {
    //// TODO: Write test for this (expect([1, 2]).to.have.ordered.members([1, 2]))
    //// TODO: Implement this
  }
  writeToFile(path) {
    //// TODO: Write test for this (load file back in and make sure it has all the info)
    //// TODO: Implement this
  }
  load(path) {
    //// TODO: Write test for this (Check created object for all the info)
    //// TODO: Implement this
      // returns a pre populated hotel collection object
      // creates all hotels
      // creates all reviews
  }
}

module.exports = HotelCollection
