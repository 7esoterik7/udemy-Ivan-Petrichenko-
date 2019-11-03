var money = +prompt('Ваш бюджет на месяц?', '');
var time = prompt('Введите дату в формате YYYY-MM-DD', '');
var exp = {};

var appData = {budget: money,
               timeData: time,
               expenses: exp,
               optionalExpenses: {},
               income: [],
               savings: false
               };

for (var i = 0; i < 2; i++) {
	var obligatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
    var priceObligatoryExpenses = prompt('Во сколько обойдется?', '');
	
	if (typeof(obligatoryExpenses) === 'string' && typeof(obligatoryExpenses) !== null
	    && typeof(priceObligatoryExpenses) == 'string' && obligatoryExpenses !== ''
		&& priceObligatoryExpenses !== '' && obligatoryExpenses.length < 50) {
		console.log(obligatoryExpenses, typeof(priceObligatoryExpenses));
		appData.expenses[obligatoryExpenses] = priceObligatoryExpenses;
	} else {
		i--
	}
}

 appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюдже: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 1000) {
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 2000){
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay >= 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Mistake');
}
