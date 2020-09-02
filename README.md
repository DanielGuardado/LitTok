![](https://i.imgur.com/FUON2YS.png)

---

## LitTok the TikTok clone, is a social media app that lets users watch and create short 1 minute video clips that can be liked, commented on and shared with other users.

[LitTok Live!](https://littok.herokuapp.com/#/)

### Technologies Used

- Javascript
- Ruby
- HTML
- CSS
- Heroku
- React
  - ReactPlayer
  - Waypoint
  - Dropzone
- Redux
- Ruby on Rails
- Postgresql
- AWS S3

### Likes!

The like feature was one of the trickier things I had to piece together. Likes were implemented as a polymorphic association since users can like both comments and video. The amount of likes a video has is sent down from the backend using jbuilder to count all of the likes on a given video.

```ruby
  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.string "likeable_type"
    t.bigint "likeable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["likeable_type", "likeable_id", "liker_id"], name: "index_likes_on_likeable_type_and_likeable_id_and_liker_id", unique: true
    t.index ["likeable_type", "likeable_id"], name: "index_likes_on_likeable_type_and_likeable_id"
  end
```

---

![](https://media3.giphy.com/media/l4jPpqXzcFGnpY7yer/giphy.gif)![](https://media3.giphy.com/media/RJQ8LHFoQ2T4zAg2K2/giphy.gif)

### Video Feed!

Videos are hosted on AWS S3 and have the added functionality of playing videos when you are viewing them and as soon as you scroll off of them the previous video will stop playing and the next one will start playing this was implemented using react-waypoint.

```ruby

      <Waypoint
        onEnter={() => this.setState({ playing: true })}
        onLeave={() => this.setState({ playing: false })}
      >
          <Link to={`/videos/${this.props.video.id}`}>
            <ReactPlayer
              playing={this.state.playing}
              className="videoBox"
              height={520}
              width={350}
              controls={true}
              volume={0}
              url={this.props.video.videoUrl}
            />
      </Waypoint>
```

---

![](https://media0.giphy.com/media/UodCdHkswWA0QYmAwA/giphy.gif)

### Upcoming features

- Profiles
- Follows
- Customized video feed
