class Hotel {
  constructor(name, location) {
    this.name = name
    this.city = location
    this.reviews = []
  }
  urlSlug() {
    var formattedName = this.name.toLowerCase().replace(' ', '_')
    var formattedLocation = this.city.toLowerCase()
    return formattedName + '_' + formattedLocation
  }
  reviewCount() {
    return this.reviews.length
  }
  addReview(review) {
    this.reviews.push(review)
  }
}
module.exports = Hotel
