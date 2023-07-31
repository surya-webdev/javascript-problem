var tweet=prompt("give a tweet");
var count=tweet.length;
var slicen= tweet.slice(0,140);
alert("this the length of tweet you used:" + count + "remaining:"+ (140- count));
alert(slicen);

