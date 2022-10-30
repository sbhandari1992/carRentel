let numofDays;
let dailyBasicChrgAmt = 30;
let surCharge = .30;
let tollTag = 3.95;
let gps = 4;
let roadsideAst = 2;


estBtn.addEventListener('click', calTotalAmt);

function calTotalAmt() {
    let numOfDays = Number(document.getElementById('numOfDays').value);

    ///for car rental with just basic daily rate
    let totalBasicChrgAmt = dailyBasicChrgAmt * numOfDays;
    document.querySelector('output.carRental').innerText = (`$${totalBasicChrgAmt.toFixed(2)}`);

    ///for total optional charge
    let totalOptChrgAmt = Number(getOptCharge()) * numOfDays ;
    document.querySelector('output.option').innerText = (`$${totalOptChrgAmt.toFixed(2)}`);


    ///for under 25 surcharge
    document.getElementById('yes').checked ? totalSurChargeAmt = totalBasicChrgAmt * surCharge : totalSurChargeAmt = 0;
    document.querySelector('output.surcharge').innerText = (`$${totalSurChargeAmt.toFixed(2)}`);


    ///for total due
    let totalDue = totalBasicChrgAmt + totalOptChrgAmt + totalSurChargeAmt;
    document.querySelector('output.total').innerText = (`$${totalDue.toFixed(2)}`);
 
}

function getOptCharge() {
    let optCharge = 0;

    if (document.getElementById('tollTag').checked) {
        optCharge += tollTag;
    }
    if (document.getElementById('gps').checked) {
        optCharge += gps;
    }
    if (document.getElementById('roadside').checked) {
        optCharge += roadsideAst;
    }
    return optCharge;
}