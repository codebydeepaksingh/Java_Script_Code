const isFromChandigarh = true;
const buyFromRedtape = true;
const isFromSector17 = false;
const priceUnder1500 = true;

if (isFromChandigarh && buyFromRedtape && priceUnder1500 && isFromSector17){
    console.log("you can buy a shoes")
}

else {
    console.log("you cannot buy a shoes")

}

if (isFromChandigarh || buyFromRedtape || priceUnder1500 || isFromSector17){
    console.log("you can buy a shoes")
}

else {
    console.log("you cannot buy a shoes")

}