// ==============================================
// Copyright 2004 by CodeLifter.com
// Free for all; but please leave in this header.
// ==============================================

var Quotation = new Array(); // do not change this!
var Authors = new Array();

// Set up the quotations to be shown, below.
// To add more quotations, continue with the
// pattern, adding to the array.  Remember
// to increment the Quotation[x] index!

Quotation[0] = "Where there is love there is life.";
Quotation[1] = "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.";
Quotation[2] = "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.";
Quotation[3] = "A successful marriage requires falling in love many times, always with the same person.";
Quotation[4] = "If I had a flower for every time thought of you… I could walk through my garden forever.";
Quotation[5] = "Being deeply loved by someone gives you strength, while loving someone deeply gives you courage.";
Quotation[6] = "We loved with a love that was more than love.";
Quotation[7] = "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.";
Quotation[8] = "Love doesn’t just sit there, like a stone, it has to be made, like bread; remade all the time, made new.";
Quotation[9] = "My love for you is a journey, starting at forever and ending at never."
Quotation[10] = "Whatever our souls are made of, his and mine are the same."
Quotation[11] = "With great power comes great responsibility."
// Quotation[11] = ""

Authors[0] = "Mahatma Gandhi";
Authors[1] = "Dr. Seuss";
Authors[2] = "Maya Angelou";
Authors[3] = "Mignon McLaughlin";
Authors[4] = "Alfred Tennyson";
Authors[5] = "Lao Tzu";
Authors[6] = "Edgar Allan Poe";
Authors[7] = "When Harry Met Sally";
Authors[8] = "Ursula K. Le Guin, The Lathe of Heaven";
Authors[9] = "Anonymous";
Authors[10] = "Emily Brontë";
Authors[11] = "Uncle Ben";
// Authors[11] = "";

function getAuthor(index) {
    if (index >= Authors.length)
        return "Anonymous";
    return Authors[index];
}

// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

function showQuotation(){
    document.write("\"" + Quotation[whichQuotation] + "\"<br/>-- " + getAuthor(whichQuotation));
}

// showQuotation();