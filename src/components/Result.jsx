import { calculateInvestmentResults } from "../util/investment.js"
import { formatter } from "../util/investment.js"

export default function Result({ input }) {
    const resultsData = calculateInvestmentResults(input);

    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Investment (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
{resultsData.map(yearData => {
    return <tr key={yearData.year}>
        <td>{yearData.year}</td>
        <td>{formatter.format(yearData.investmentValue)}</td>
        <td>{formatter.format(yearData.investment)}</td>
        <td>{formatter.format(yearData.totalInterest)}</td>
        <td>{formatter.format(yearData.investedCapital)}</td>
    </tr>
})
        </tbody>
    </table>;
}