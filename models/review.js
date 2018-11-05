class Review {
  constructor(rating, text, date) {
    this.rating = rating
    this.text = text
    this.date = date
  }
  ratingAsStars(){
    var ratingAsStarsString = ''
    for(let i=0; i < this.rating; i++) {
      ratingAsStarsString += '*'
    }
    return ratingAsStarsString
  }
}

module.exports = Review
