class HotelCollection {
  constructor() {
    this.hotels = []
  }
  addHotel(hotel) {
    this.hotels.push(hotel)
  }
  sortedHotels() {
    var sortedHotels = this.hotels.sort((a, b) => {
      return b.rating() - a.rating()
    })
    return sortedHotels
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
