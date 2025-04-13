console.log("Hi! This is Md. Ashik ALi Khan...");

let str1 :string = 'Hi, ';

let str2 : string ='Ashik...';

let num1 : number = 100.00;

let num2 : number = 99;

/**
 * Hi,,
 */

console.log(`${str1} ${str2}`);

console.log('num1 = ' + num1);

console.log('num2 = ' + num2);


for(let i=0; i<5; i++){
    console.log(i);
}

let reviews : number[] = [100, 5, 5, 5.5, 200, 900];

reviews.push(500);

/* for(let i=0; i<reviews.length; i++){
    console.log(reviews[i]);
} */


let total : number = 0;

for(let review of reviews){
    console.log(review);
    total += review;
}

let average : number = total / reviews.length;

console.log('Average = ' + average);

let games : string[] = ['Football', 'Cricket', 'Badminton'];

games.push('Swimming');
games.push('Baseball');
games.push('Tennis');

for(let game of games){
    if(game=='Cricket'){
        console.log(`${game}  <<< My favourite`);
    } else{
        console.log(game);
    }
}