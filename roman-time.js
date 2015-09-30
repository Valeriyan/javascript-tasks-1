function getRomanNumber(arabicNumber)
{
    var romanNumbers = ['I', 'V', 'X', 'L'];
    var arabicNumbers = ['1', '5', '10', '50'];
    var closestNumber;
    var minDelta = 100;
    var romanNumber ='';
    var lastDelta = 1;
    while(arabicNumber !== 0)
    {
        var delta = 0;
        for (var i = 0; i < arabicNumbers.length; i++)
        {
            delta = arabicNumber - arabicNumbers[i];
            if (Math.abs(delta) < Math.abs(minDelta))
            {
                minDelta = delta;
                closestNumber = i;
            }
        }
        if (lastDelta < 0)
        {
            romanNumber = romanNumbers[closestNumber] + romanNumber;

        }
        if (lastDelta > 0)
        {
            romanNumber = romanNumber + romanNumbers[closestNumber] ;
        }
        lastDelta = minDelta;
        arabicNumber = Math.abs(minDelta);
    }
    return romanNumber;
}
var hours = process.argv[2];
var minutes = process.argv[3];
if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59)
{
    console.log('Время указано не верно');
    process.abort();
}
var result = '';
var onesDigit = process.argv[2] % 10;
var tensDigit = process.argv[2] - onesDigit;
result += getRomanNumber(tensDigit)+getRomanNumber(onesDigit);
result += ':';
onesDigit = process.argv[3] % 10;
tensDigit = process.argv[3] - onesDigit;
result += getRomanNumber(tensDigit)+getRomanNumber(onesDigit);
console.log(result);
// Немного замечательного кода и магии*/
