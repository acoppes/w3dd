// ==============================================
// Copyright 2004 by CodeLifter.com
// Free for all; but please leave in this header.
// ==============================================

var Quotation = new Array() // do not change this!

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

// ======================================
// Do not change anything below this line
// ======================================
var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));

function showQuotation(){
    document.write("\"" + Quotation[whichQuotation] + "\"");
}

// showQuotation();