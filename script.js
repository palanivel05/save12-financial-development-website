const incomeInput = document.getElementById("income");
const expenseInputs = document.querySelectorAll(".expense");
const totalExpensesText = document.getElementById("totalExpenses");
const savingsRatioText = document.getElementById("savingsRatio");
const warningMessage = document.getElementById("warningMessage");

const emergencySavingsInput = document.getElementById("emergencySavings");
const emergencyProgress = document.getElementById("emergencyProgress");
const emergencyPercentText = document.getElementById("emergencyPercent");

function calculateSavings() {

    let income = parseFloat(incomeInput.value) || 0;
    let totalExpenses = 0;

    expenseInputs.forEach(input => {
        totalExpenses += parseFloat(input.value) || 0;
    });

    totalExpensesText.textContent = totalExpenses;

    if (income > 0) {

        let savings = income - totalExpenses;
        let savingsRatio = (savings / income) * 100;

        savingsRatio = savingsRatio.toFixed(1);
        savingsRatioText.textContent = savingsRatio + "%";

        if (savingsRatio < 12) {
            warningMessage.textContent = "⚠ Warning: Savings below recommended 12%!";
            warningMessage.style.color = "red";
        } else {
            warningMessage.textContent = "✅ Great! You are saving well.";
            warningMessage.style.color = "green";
        }
    }
}

function calculateEmergency() {

    let income = parseFloat(incomeInput.value) || 0;
    let emergencySavings = parseFloat(emergencySavingsInput.value) || 0;
    let target = income * 3;

    if (income <= 0) {
        emergencyPercentText.textContent = "Enter income first";
        return;
    }

    let percent = (emergencySavings / target) * 100;
    percent = Math.min(percent, 100);

    emergencyProgress.style.width = percent + "%";
    emergencyPercentText.textContent = percent.toFixed(1) + "% is completed";
}
