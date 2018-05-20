const App = require('../models/twitter.models.js');
const mongoose = require('mongoose');


// Retrieve and return all notes from the database.

exports.getTweets = () => {
    //Callback functions
    var error = function (err, response, body) {
        console.log('ERROR [%s]', err);
    };
    var success = function (data) {
        // console.log('Data [%s]', data);
        // console.dir(data, { depth: null, colors: true });
        const parseData = JSON.parse(data);
        // const data1 = JSON.stringify(parseData);

        console.log(parseData);
    };

    var Twitter = require('../libs/Twitter').Twitter;

    const config = {
        "consumerKey": "VbGdE51tbP0yAlyfSI03wXZYL",
        "consumerSecret": "rqA9iHEjwgLWbhHqHpN84Eo60wAPnaatZE1wgW8vpDRDqLkqG9",
        "accessToken": "788571026821042176-Hsm6uLp2u1QEHSQk4dyRQVfhfyA3KK8",
        "accessTokenSecret": "S10h7gpFhZUaPQDFngqgS9L3ZxbCml5d8fMaIVGVtQlMH",
        "callBackUrl": "XXX"
    };

    var twitter = new Twitter(config);

    //Example calls

    // twitter.getUserTimeline({ screen_name: 'theage', count: '5' }, error, success);

    // twitter.getMentionsTimeline({ count: '10' }, error, success);

    // twitter.getHomeTimeline({ count: '2' }, error, success);
    twitter.getFriendsList({ count: '10' }, error, success);

    // twitter.getReTweetsOfMe({ count: '10' }, error, success);

    // twitter.getTweet({ id: '1111111111' }, error, success);


    //
    // Get 10 tweets containing the hashtag haiku
    //

    // twitter.getSearch({ 'q': '#haiku', 'count': 10 }, error, success);

    //
    // Get 10 popular tweets with a positive attitude about a movie that is not scary 
    //

    // twitter.getSearch({ 'q': ' movie -scary :) since:2013-12-27', 'count': 10, 'result\_type': 'popular' }, error, success);
};
