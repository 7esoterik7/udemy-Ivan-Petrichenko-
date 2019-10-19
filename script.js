var money = prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');
var obligatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
var priceOobligatoryExpenses = prompt('Во сколько обойдется?', '');
var exp = {};
exp[obligatoryExpenses] = priceOobligatoryExpenses;

var appData = {budget: money,
               timeData: time,
               expenses: exp,
               optionalExpenses: {},
               income: [],
               savings: false
               };

alert('На один день' + appData.budget / 30);
