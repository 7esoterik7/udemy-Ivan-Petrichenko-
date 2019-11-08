var start = document.querySelector('#start');

var btn = document.getElementsByTagName('button');
var enterExpenses = btn[0];
var enterOptionalExpenses = btn[1];
var calculateBudgetDay = btn[2];
var calculateAll =  btn[3];

var budgetValue = document.querySelector('.budget-value');
var daybudgetValue = document.querySelector('.daybudget-value');
var levelValue = document.querySelector('.level-value');
var expensesValue = document.querySelector('.expenses-value');
var optionalexpensesValue  = document.querySelector('.optionalexpenses-value');
var incomeValue = document.querySelector('.income-value');
var monthsavingsValue = document.querySelector('.monthsavings-value');
var yearsavingsValue = document.querySelector('.yearsavings-value');

var expenses = document.querySelectorAll('.expenses-item');
var optionalexpenses = document.querySelectorAll('.optionalexpenses-item');

var chooseIncome = document.querySelector('.choose-income');
var savings = document.querySelector('#savings');
var sum = document.querySelector('#sum');
var percent = document.querySelector('#percent');

var yearValue = document.querySelector('.year-value');
var monthValue = document.querySelector('.month-value');
var dayValue = document.querySelector('.day-value');




console.log(enterExpenses, enterOptionalExpenses, calculateBudgetDay, calculateAll);