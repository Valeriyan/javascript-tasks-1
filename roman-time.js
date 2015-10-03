function getRomanDigitAsAsciiByChar(char){
    switch (char)
    {
        case 'I': return ['-------- ',
                          '   ||    ',
                          '   ||    ',
                          '   ||    ',
                          '-------- '];

        case 'V': return ['|       | ',
                          ' |     |  ',
                          '  |   |   ',
                          '   | |    ',
                          '    |     '];

        case 'X': return ['|      | ',
                          ' |    |  ',
                          '   ||    ',
                          ' |    |  ',
                          '|      | '];

        case 'L': return ['|      ',
                          '|      ',
                          '|      ',
                          '|      ',
                          ' ————— '];

        case ':': return ['   ||    ',
                          '   ||    ',
                          '         ',
                          '   ||    ',
                          '   ||    '];

        case '-': return ['         ',
                          '         ',
                          '-------- ',
                          '         ',
                          '         '];

        default: return  ['......',
                          '......',
                          '......',
                          '......',
                          '......'];
    }
}

function printRomanTimeAsAscii(_timeInRomanSystem)
{
    var romanTimeAsAscii = ['', '', '', '', ''];

    for(var i = 0; i < _timeInRomanSystem.length; i++){

        var romanDigitAsAscii = getRomanDigitAsAsciiByChar(_timeInRomanSystem[i]);

        for(var j = 0; j < romanDigitAsAscii.length; j++) {
            romanTimeAsAscii[j] += romanDigitAsAscii[j];
        }
    }
    for (i = 0; i < romanTimeAsAscii.length; i++)
    {
        console.log(romanTimeAsAscii[i]);
    }
}

function getRomanNumber(arabicNumber)
{
    if (arabicNumber === '0' || arabicNumber === '00') {
        return '-';
    }

    var onesDigitToOnesRomanDigit = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    var tensDigitToTensRomanDigit = ['', 'X', 'XX', 'XXX', 'XL', 'L'];
    var onesArabicDigit = arabicNumber % 10;
    var tensArabicDigit = (arabicNumber - onesArabicDigit) / 10;

    return tensDigitToTensRomanDigit[tensArabicDigit] + onesDigitToOnesRomanDigit[onesArabicDigit];
}

function formatRomanTime(_hours, _minutes){
    return _hours + ':' + _minutes;
}

var hours = process.argv[2];
var minutes = process.argv[3];

if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || hours === undefined || minutes === undefined) {
    console.log('Время указано не верно');
    console.log('roman-time.js 0<=Hours<24 0<=Minutes<60');
    process.abort();
}

var timeInRomanSystem = formatRomanTime(getRomanNumber(hours), getRomanNumber(minutes));

console.log(timeInRomanSystem);
printRomanTimeAsAscii(timeInRomanSystem);
