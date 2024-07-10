import { calculateInvestmentResults, formatter } from '../util/investment.js';
export default function Results({ input }){
    const resultsData = calculateInvestmentResults(input);

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultsData.map(yearData => {
                    const totalInvesment = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year;
                    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;
                    const totalAmountInvested = yearData.valueEndOfYear - totalInvesment;
                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInvesment)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                } )}
            </tbody>
        </table>
    );
}