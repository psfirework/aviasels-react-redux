export function priceConverter(price, currency) {
    let usd = 77, eur = 91;

    if (currency === "usd") {
        price = Number(price) / usd;
        price = price.toFixed(2);
        price = price + " $";
    } else if (currency === "eur") {
        price = Number(price) / eur;
        price = price.toFixed(2);
        price = price + " €";
    } else {
        price = price + " ₽";
    }
    return price;
}