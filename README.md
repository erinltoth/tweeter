# Tweeter 

Tweeter is a single-page Twitter clone app built with HTML, CSS, JS, jQuery, and AJAX on the client-side, and Node, Express, and MongoDB on the server-side. 

## Motivation & Features

Tweeter is a project I completed while studying at Lighthouse Labs in order to learn/practice full-stack development.

Tweeter features:
- Compose field appears on button press.
- Tweets are stored via MongoDB and will not be lost on re-start of server. 
- Clear error message if input field contents are too short (0 characters) or too long (over 140 characters)

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Body Parser
- Chance
- md5
- MongoDB
- Nodemon

## Screenshots

![The page as it appears on first load](https://github.com/erinltoth/tweeter/blob/master/docs/tweeter-on-load.png)
The page as it appears on first load

![Composing a new tweet](https://github.com/erinltoth/tweeter/blob/master/docs/Tweeter-compose.png)
Composing a new twit/tweet.

![Displaying a newly sent tweet](https://github.com/erinltoth/tweeter/blob/master/docs/Tweeter-new-tweet.png)
Displaying a newly sent twit/tweet.

![Error for too short of a twit/tweet](https://github.com/erinltoth/tweeter/blob/master/docs/Tweeter-too-short.png)
Error for too short of a twit/tweet.

![Error for too long of a twit/tweet](https://github.com/erinltoth/tweeter/blob/master/docs/Tweeter-too-long.png)
Error for too long of a twit/tweet.