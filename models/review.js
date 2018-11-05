class Review {
  constructor(rating, text, date) {
    this.rating = rating
    this.text = text
    this.date = new Date(date).toISOString()
  }
  ratingAsStars(){
    var ratingAsStarsString = ''
    for(let i=0; i < this.rating; i++) {
      ratingAsStarsString += '⭐️'
    }
    return ratingAsStarsString
  }
  toJSON(){
    return {
      rating: this.rating,
      text: this.text,
      date: this.date,
      ratingAsStars: this.ratingAsStars(),
    }
  }
}

module.exports = Review
