/* eslint-disable no-unused-vars */
import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import BigNumber from 'bignumber';
import axios from "axios";

export async function getToken(token_addr) {
  const tok_curr = await axios.get(`https://api.solana.fm/v1/tokens/${token_addr}`);
  return tok_curr;
}

export default async function history_sol() {
    const transactions_in_sol = [];
    const result = await getAccount();
    const delays = result.delays
    if (delays) {
      let timestamp = 0;
      const curr_timestamp = Date.now();
      if(delays.history_delay == undefined) {
        timestamp = curr_timestamp;
      } else {
        timestamp = delays.history_delay;
      }
      if (curr_timestamp - timestamp > (5 * 1000)) {
        await addToAccount('delays', {history_delay: Date.now(), data_delay: delays.data_delay, lock_delay: delays.lock_delay});
        const derivePath = "m/44'/501'/0'/0'"
        const sd = await window.bitcoin.bip39.mnemonicToSeed(result.seed)
        const masterNode = window.bitcoin.bip32.fromSeed(sd);
        const derivedKey = masterNode.derivePath(derivePath);
        const keypairs = Keypair.fromSeed(derivedKey.__D);
        const transes = await axios.get(`https://api.solana.fm/v0/accounts/${result.addr_sol}/transfers?utcFrom=0&utcTo=8223321783287231812&limit=100`)
        console.log(transes)
        const transactions1 = transes.data.results;
        console.log(transactions1)
        const transactions = transactions1.filter((element) => element.data[1].action !== 'mintToCollectionV1');
        for(let i = 0; i < transactions.length; i ++) {
          const element = transactions[i];
          let transactionData = [];
          let type = '';
          let transactionHash = '';
          let token_addr = 'So11111111111111111111111111111111111111112';
          let token_name = 'SOL';
          let decimals = LAMPORTS_PER_SOL;
          if(element.data.length == 3) {
            transactionData = element.data[2];
            token_addr = transactionData.token
          } else {
            transactionData = element.data[1];
            if(transactionData.token) {
              token_addr = transactionData.token
            }
          }

          if(transactionData.destination.toLowerCase() == result.addr_sol.toLowerCase()) {
            type = 'recieve'
          } else {
            type = 'transfer'
          }

          let token_png = `./img/solana.svg`;

          if(token_addr != 'So11111111111111111111111111111111111111112') {
            console.log(token_addr)
            const tok_curr = await getToken(token_addr);
            const dat = tok_curr.data;
            if(dat.tokenMetadata.offChainInfo == null) {
              token_png = `./img/solana.svg`;
            } else {
              token_png = dat.tokenMetadata.offChainInfo.image
            }
            token_name = dat.tokenList.symbol
            token_addr = dat.mint;
            decimals = Math.pow(10, dat.decimals);
            console.log(tok_curr)
          }
          const lamports = transactionData.amount
          const tx = transactionHash;
          const d = new Date(transactionData.timestamp * 1000);
          const data = d.getDate() + '/' + (d.getMonth()+1) + '/' + d.getFullYear();
          const source = transactionData.source
          const summa = parseFloat(lamports) / decimals
          const newTransaction = {
            id: i,
            date: data,
            summ: summa,
            source,
            tx,
            summ_usd: ((parseFloat(result.prices[0][token_name.toLowerCase()]?.usd) || 0) * summa).toFixed(2),
            type,
            token_name,
            token_png,
          };
          console.log(newTransaction)
          if(lamports) {
            transactions_in_sol.push(newTransaction)
          }
        }
        await addToAccount('transactions', [{sol: transactions_in_sol}]);
        return transactions_in_sol;
      } else {
        console.log('blya')
        if (result.transactions && result.transactions.length > 0) {
          const solValue = result.transactions[0].sol;
          if (solValue !== undefined) {
              transactions_in_sol.push(solValue);
          } else {
            return []
          }
      }
        return transactions_in_sol[0];
      }
    } else {
      await addToAccount('delays', {history_delay: 0, data_delay: 0, lock_delay: 0});
      // window.location.reload();
    }
  }