function depositProfit(deposit, rate, threshold) {
  for (let year = 0; year >= 0; year++) {
    if (deposit >= threshold) {
      return year;
    } else {
      deposit = deposit + (deposit * rate) / 100;
    }
  }
}
