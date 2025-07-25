import { useState } from "react";

function Deposit() {
    function addDeposits(formData) {
    const deposit = formData.get("deposit")
    }
    return(
        <section>
            <h1>Deposits</h1>
            <form method="post">
            <label htmlFor="deposit">Deposit</label>
            <input id="deposit" type="number" name="deposit" />
            </form>
        </section>
    )
}

export default Deposit