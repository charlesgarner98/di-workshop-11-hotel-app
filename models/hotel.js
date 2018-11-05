class Hotel {
  constructor(name, location) {
    this.name = name
    this.city = location
    this.reviews = []
  }
  urlSlug() {
    var formattedName = this.name.toLowerCase().replace(' ', '_')
    var formattedLocation = this.city.toLowerCase().replace(' ', '_')
    return formattedName + '_' + formattedLocation
  }
  reviewCount() {
    return this.reviews.length
  }
  addReview(review) {
    this.reviews.push(review)
  }
  rating() {
    if(this.reviews.length == 0) {
      return 0
    } else {
      let ratingsTotal = 0
      for(var review of this.reviews) {
        ratingsTotal += review.rating
      }
      return ratingsTotal / this.reviewCount()
    }
  }
  ratingAsStars() {
    let ratingAsStarsString = ''
    for(let i=0; i<this.rating(); i++) {
      ratingAsStarsString += '⭐️'
    }
    return ratingAsStarsString
  }
}
module.exports = Hotel
