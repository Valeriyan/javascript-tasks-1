function getRomanNumber(arabicNumber)
{
    if (arabicNumber == 0)
    {
        return '-';
    }
    var romanNumbers = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', '', 'X', 'XX', 'XXX', 'XL', 'L'];
    var romanNumber ='';
    var onesDigit = arabicNumber % 10;
    var tensDigit = (arabicNumber - onesDigit) / 10;
    romanNumber += romanNumbers[tensDigit + 9] + romanNumbers[onesDigit - 1];
    return romanNumber;
}

var hours = process.argv[2];
var minutes = process.argv[3];
var result = '';
if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
{
    console.log('Время указано не верно');
    process.abort();
}
result += getRomanNumber(hours)+ ':' + getRomanNumber(minutes);
console.log(result);

