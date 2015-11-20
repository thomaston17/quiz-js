//The Ultimate Quiz Challenge - By Thomas Ton

//Quiz begins, no answers correct
var correct = 0;

//Ask questions
var answer1 = prompt('What programming language is also a gem?');
if (answer1.toUpperCase() === 'RUBY') {
    correct += 1;
}
var answer2 = prompt('What programming language is also a snake?');
if (answer2.toUpperCase() === 'PYTHON') {
    correct += 1;
}
var answer3 = prompt('What programming language styles web pages?');
if (answer3.toUpperCase() === 'CSS') {
    correct += 1;
}
var answer4 = prompt('What programming language structures web pages?');
if (answer4.toUpperCase() === 'HTML') {
    correct += 1;
}
var answer5 = prompt('What programming language makes websites interactive?');
if (answer5.toUpperCase() === 'JAVASCRIPT') {
    correct += 1;
}

//Output results
    document.write('<p>You got ' + correct + ' out of 5 questions correct.</p>');

//Output rank
if (correct === 5) {
    document.write('<p><strong>You earned a gold medal!</strong></p>');
} else if (correct >= 3) {
    document.write('<p><strong>You earned a silver medal!</strong></p>');
} else if (correct >= 1) {
    document.write('<p><strong>You earned a bronze medal!</strong></p>');
} else {
    document.write('<p><strong>You earned nothing. Try again!</strong></p>');
}