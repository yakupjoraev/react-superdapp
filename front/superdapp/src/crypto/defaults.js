const balances = [{
    summ: 0,
    sol: {
        balance: 0,
        usd: 0,
    },
    sol_usd: 0,
}];

const percents = [{
    sol: 0,
}]

const prices = [{
    sol: 0,
}]

const transaction = {
    token: 'sol',
    amount: 0,
    address: '0x'
}

const token = 'sol'


const defaults = { balances, percents, token, prices, transaction }

export default defaults;

export function truncateNumberDefault(numb, n = 4) { // 4
    const num = parseFloat(numb);
    const factor = Math.pow(10, n);
    return Math.floor(num * factor) / factor;
  }