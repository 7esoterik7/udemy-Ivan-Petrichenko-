
/* unction chooseExpenses() {
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
} */

/* function checkSavings() {
	if (appData.savings) {
		var save = +prompt('Какова сумма накоплений?', '');
		var percent = +prompt('Под какой процент?', '');
		
		appData.monthIncome = save / 100 / 12 * percent;
		alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
	}
} */

/* function detectDayBudget(bud) {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert('Ежедневный бюджет: ' + appData.moneyPerDay);
} */


/* function detectLevel(perDay) {
	if (perDay < 1000) {
	    console.log('Минимальный уровень достатка');
    } else if (perDay >= 1000 && perDay < 2000){
	    console.log('Средний уровень достатка');
    } else if (perDay >= 2000) {
	    console.log('Высокий уровень достатка');
    } else {
	    console.log('Mistake');
    }
}
 */
/* function chooseOptExpenses() {
	
	for (var i = 1; i <= 3; i++) {
		
		do {
			var optExpenses = prompt('Статья необязательных расходов под номером ' + i, '');
		} while (optExpenses === '' || optExpenses == null);
		
		appData.optionalExpenses[i] = optExpenses;
	}
} */
function start() {
	money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
	
	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
	}
}



var money;
var time;
start();

var appData = {
	budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function(){
	    for (var i = 0; i < 2; i++) {
	        var obligatoryExpenses = prompt('Введите обязательную статью расходов в этом месяце', '');
            var priceObligatoryExpenses = prompt('Во сколько обойдется?', '');
	        if (typeof(obligatoryExpenses) === 'string' && typeof(obligatoryExpenses) !== null
	            && typeof(priceObligatoryExpenses) == 'string' && obligatoryExpenses !== ''
	            && priceObligatoryExpenses !== '' && obligatoryExpenses.length < 50) {
	            appData.expenses[obligatoryExpenses] = priceObligatoryExpenses;
	        } else {
	               i--
	        }
        }
    },
	detectDayBudget: function() {
	    appData.moneyPerDay = (appData.budget / 30).toFixed();
	    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
	},
	detectLevel: function() {
		if (appData.moneyPerDay < 1000) {
		    console.log('Минимальный уровень достатка');
		} else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 2000){
		    console.log('Средний уровень достатка');
		} else if (appData.moneyPerDay >= 2000) {
		    console.log('Высокий уровень достатка');
		} else {
		    console.log('Mistake');
	    }
    },
	checkSavings: function() {
		if (appData.savings) {
			var save = +prompt('Какова сумма накоплений?', '');
			var percent = +prompt('Под какой процент?', '');
			
			appData.monthIncome = save / 100 / 12 * percent;
			alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
		}		
	},
	chooseOptExpenses: function() {
		for (var i = 1; i <= 3; i++) {
			
			do {
				var optExpenses = prompt('Статья необязательных расходов под номером ' + i, '');
			} while (optExpenses === '' || optExpenses == null);
			
			appData.optionalExpenses[i] = optExpenses;
		}		
	},
	chooseIncome: function() {
		
		var items;
		while (items == '' || typeof(items) !== 'string') {
			items = prompt('Что принесет дополнительный доход? (Через запятую)', '');
		}
	
		appData.income = items.split(', ');
		
		items = '';
		while (items == '' || typeof(items) !== 'string') {
			items = prompt('Может что-то еще?', '');
		}
		appData.income.push(items);
		appData.income.sort();
		
		appData.income.forEach(function (item, i) {
			var n = i + 1;
			alert('Способы дополнительного заработка: ' + n + ') ' + item);
		});
	}
}

appData.chooseExpenses();

appData.detectDayBudget();

appData.detectLevel();

appData.checkSavings();

appData.chooseIncome();

for (var key in appData) {
	console.log('Наша программа включает в себя данные: ' + key);
}




 
 
