export async function getExchangeRate(from, to) {
  try {
    const response = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=${from}&symbols=${to}`
    );

    const data = await response.json();

    return data.rates[to];
  } catch (error) {
    console.error(error);
    return 0;
  }
}