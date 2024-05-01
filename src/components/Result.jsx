import { calculateInvestmentResults } from "../util/investment.js"
import { formatter } from "../util/investment.js"

function deriveResults(initialInvestment, annualInvestment, expectedReturn, duration) {
    return calculateInvestmentResults({
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
    });
}

function renderResults(results) {
    const tbody = document.getElementById("tbody");
    results.forEach((result) => {
        const row = document.createElement("tr");
        const year = document.createElement("td");
        year.textContent = result.year;
        row.appendChild(year);
        const interest = document.createElement("td");
        interest.textContent = formatter.format(result.interest);
        row.appendChild(interest);
        const valueEndOfYear = document.createElement("td");
        valueEndOfYear.textContent = formatter.format(result.valueEndOfYear);
        row.appendChild(valueEndOfYear);
        const annualInvestment = document.createElement("td");
        annualInvestment.textContent = formatter.format(result.annualInvestment);
        row.appendChild(annualInvestment);
        tbody.appendChild(row);
    });
}

export function updateResults(initialInvestment, annualInvestment, expectedReturn, duration) {
    const results = deriveResults(initialInvestment, annualInvestment, expectedReturn, duration);
    renderResults(results);
}

export default function Result() {
    return <div id="result">
        <table>
            <thead id="thead">
                <tr>
                    <th>Year</th>
                    <th>Interest</th>
                    <th>Value at Year End</th>
                    <th>Annual Investment</th>
                </tr>
            </thead>
            <tbody id="tbody">
            </tbody>
        </table>
    </div>
}