class Hotel {
  constructor(name, location) {
    this.name = name
    this.city = location
    this.reviews = []
  }
  reviewCount() {
    return this.reviews.length
  }
}
module.exports = Hotel
