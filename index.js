require("dotenv").config({ path: __dirname + "/.env" });
const { twitterClient } = require("./twitterClient.js");
const { twitterBearer } = require("./twitterClient.js");
const CronJob = require("cron").CronJob;
const express = require('express')
const app = express()
const port = process.env.PORT || 4000;
const { download } = require("./utilities");

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

// const tweet = async () => {

//     const uri = "https://i.imgur.com/Zl2GLjnh.jpg";
//     const filename = "image.png";

//     download(uri, filename, async function(){
//         try {
//             const mediaId = await twitterClient.v1.uploadMedia("./image.png");
//             await twitterClient.v2.tweet({
//                 text: "Hello world! This is an image in Ukraine!",
//                 media: {
//                     media_ids: [mediaId]
//                 }
//             });
//         } catch (e) {
//             console.log(e)
//         }
//     });
// }

const tweet = async () => {
    try {
        await twitterClient.v2.tweet("Hello world!");
    } catch (e) {
        console.log(e)
    }
}

const search = async () => {
    const whereTakenTweets = await twitterBearer.v2.search('#WhereTaken There were');

    for await (const tweet of whereTakenTweets) {
        console.log(tweet);
    }
}

// const cronTweet = new CronJob("*/30 * * * * *", async () => {
//     tweet();
search();
// });

// cronTweet.start();