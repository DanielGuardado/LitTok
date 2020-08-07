![](https://i.imgur.com/FUON2YS.png)

***

## LitTok the TikTok clone, is a social media app that lets users watch and create short 1 minute video clips that can be liked, commented on and shared with other users.
[LitTok Live!](www.littok.com)

### Technologies Used
* Javascript
* Ruby
* HTML
* CSS
* Heroku
* React
  * ReactPlayer
  * Waypoint
  * Dropzone
* Redux
* Ruby on Rails
* Postgresql
* AWS S3

### Likes!
The like feature was one of the trickier things I had to piece together. Likes were implemented as a polymorphic association since users can like both comments and video. The amount of likes a video has is sent down from the backend using jbuilder to count all of the likes on a given video.

***

![](https://media3.giphy.com/media/l4jPpqXzcFGnpY7yer/giphy.gif)![](https://media3.giphy.com/media/RJQ8LHFoQ2T4zAg2K2/giphy.gif)

### Video Feed!
Videos are hosted on AWS S3 and have the added functionality of playing videos when you are viewing them and as soon as you scroll off of them the previous video will stop playing and the next one will start playing this was implemented using react-waypoint.

***

![](https://media0.giphy.com/media/UodCdHkswWA0QYmAwA/giphy.gif)


### Upcoming features
* Profiles
* Follows
* Customized video feed