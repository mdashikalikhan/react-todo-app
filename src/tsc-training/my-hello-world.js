console.log("Hi! This is Md. Ashik ALi Khan...");
var str1 = 'Hi, ';
var str2 = 'Ashik...';
var num1 = 100.00;
var num2 = 99;
/**
 * Hi,,
 */
console.log("".concat(str1, " ").concat(str2));
console.log('num1 = ' + num1);
console.log('num2 = ' + num2);
for (var i = 0; i < 5; i++) {
    console.log(i);
}
var reviews = [100, 5, 5, 5.5, 200, 900];
reviews.push(500);
/* for(let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
} */
var total = 0;
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var review = reviews_1[_i];
    console.log(review);
    total += review;
}
var average = total / reviews.length;
console.log('Average = ' + average);
var games = ['Football', 'Cricket', 'Badminton'];
games.push('Swimming');
games.push('Baseball');
games.push('Tennis');
for (var _a = 0, games_1 = games; _a < games_1.length; _a++) {
    var game = games_1[_a];
    if (game == 'Cricket') {
        console.log("".concat(game, "  <<< My favourite"));
    }
    else {
        console.log(game);
    }
}
