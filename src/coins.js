export default function changeCounter(coins) {
  const pennies = coins * 100;
  // nickels = Math.floor(pennies / 5)
  // dimes = Math.floor(pennies / 10)
  // quarters = Math.floor(pennies / 25)
  return `Pennies: ${pennies}`;
} 
