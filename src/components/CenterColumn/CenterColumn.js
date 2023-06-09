import './CenterColumn.css';

function CenterColumn() {
    return (
        <div className='container'>
            <div className='Overview'>
                <h1> Overview</h1>
                <h3> Finance</h3>
                <div className='AccumulatedProfitAndLoss'>

                </div>
                <div className='MonthlyIncome'>
                    <p>Monthly Income</p>
                    <div className='littletitle'>yyyy/mm - yyyy/mm<span>Net Revenu</span></div>
                    <img className='MonthlyIncomeIMG' src='./OV_Fi_MonthlyIncome.jpg' alt="Monthly Income" />
                </div>
                <div className='FinanceRow'>
                    <div className='CurrentCashProfile'>

                    </div>
                    <div className='CurrentAccountsReceivable'>

                    </div>
                </div>
                <div className='FinanceRow'>
                    <div className='CashFlowThisMonth'>

                    </div>
                    <div className='CurrentAccountsPayable'>

                    </div>

                </div>
                <div className='FinanceRow'>
                    <div className='TotalPettyCashOutgoing'>

                    </div>
                    <div className='RatioOfOperatingExpenses'>

                    </div>

                </div>
                <div className='PettyCashInAndOutStatus'>

                </div>
                <h3> Sales</h3>
                <div className='AchievementRate'>

                </div>
                <div className='AchievementRateOfBusinessBody'>

                </div>
                <div className='SalesRow'>
                    <div className='ProductSalesRanking'>

                    </div>
                    <div className='CustomerSalesRanking'>

                    </div>
                    <div className='SalesmanSalesRanking'>

                    </div>
                </div>
            </div>
            <div className='buttom'>
                <h5>Copyright @ 2020-2023 Globex Corporation</h5>
            </div>


        </div>
    )
}

export default CenterColumn;