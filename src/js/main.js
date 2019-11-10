var startBtn = document.querySelector('#start');

var btn = document.getElementsByTagName('button');
var expensesBtn = btn[0];
var optionalExpensesBtn = btn[1];
var calculateBudgetDay = btn[2];
var calculateAll =  btn[3];

var budgetValue = document.querySelector('.budget-value');
var dayBudgetValue = document.querySelector('.daybudget-value');
var levelValue = document.querySelector('.level-value');
var expensesValue = document.querySelector('.expenses-value');
var optionalExpensesValue  = document.querySelector('.optionalexpenses-value');
var incomeValue = document.querySelector('.income-value');
var monthSavingsValue = document.querySelector('.monthsavings-value');
var yearSavingsValue = document.querySelector('.yearsavings-value');

var expensesItem = document.querySelectorAll('.expenses-item');
var optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');

var chooseIncome = document.querySelector('.choose-income');
var checkSavings = document.querySelector('#savings');
var sumValue = document.querySelector('#sum');
var percentValue = document.querySelector('#percent');

var yearValue = document.querySelector('.year-value');
var monthValue = document.querySelector('.month-value');
var dayValue = document.querySelector('.day-value');


startBtn.addEventListener('click', function() {
	expensesBtn.removeAttribute('disabled');
	optionalExpensesBtn.removeAttribute('disabled');
	calculateBudgetDay.removeAttribute('disabled');
	
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
	money = +prompt('Ваш бюджет на месяц?', '');
	
	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '');
        time = prompt('Введите дату в формате YYYY-MM-DD', '');
	}
	
	appData.budget = money;
	appData.timeData = time;
	
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
	
	var sum = 0;
	for (var i = 0; i < expensesItem.length; i++) {
	    var obligatoryExpenses = expensesItem[i].value;
        var priceObligatoryExpenses = expensesItem[++i].value;
		
	    if (typeof(obligatoryExpenses) === 'string' && typeof(obligatoryExpenses) !== null
	        && typeof(priceObligatoryExpenses) == 'string' && obligatoryExpenses !== ''
	        && priceObligatoryExpenses !== '' && obligatoryExpenses.length < 50) {
	        appData.expenses[obligatoryExpenses] = priceObligatoryExpenses;
			sum += +priceObligatoryExpenses;
	    } else {
	           i--
	    }
    }
	expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
	for (var i = 0; i < optionalExpensesItem.length; i++) {
		
		//do {
			//var optExpenses = prompt('Статья необязательных расходов под номером ', '');
		//} while (optExpenses === '' || optExpenses == null);
		
		var opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}	
});

calculateBudgetDay.addEventListener('click', function() {
	
	if (appData.budget != 0) {
	    appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed();
	    dayBudgetValue.textContent = appData.moneyPerDay;
	    
	    if (appData.moneyPerDay < 1000) {
	        levelValue.textContent = 'Минимальный уровень достатка';
	    } else if (appData.moneyPerDay >= 1000 && appData.moneyPerDay < 2000){
	        levelValue.textContent = 'Средний уровень достатка';
	    } else if (appData.moneyPerDay >= 2000) {
	        levelValue.textContent = 'Высокий уровень достатка';
	    } else {
	        console.log('Mistake');
	       }
	} else {
		dayBudgetValue.textContent = 'Нажмите внизу "Начать расчет"'
	}
});

chooseIncome.addEventListener('input', function() {
	var items = chooseIncome.value;
	appData.income = items.split(', ');
	incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumValue.addEventListener('input', function() {
	if (appData.savings == true) {
		var sum = +sumValue.value;
		var percent = +percentValue.value;
		
		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;
		
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
});

percentValue.addEventListener('input', function() {
	if (appData.savings == true) {
		var sum = +sumValue.value;
		var percent = +percentValue.value;
		
		appData.monthIncome = sum / 100 / 12 * percent;
		appData.yearIncome = sum / 100 * percent;
		
		monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
		yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
	}
}) ;



var appData = {
	budget: 0,
    timeData: 0,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}




































