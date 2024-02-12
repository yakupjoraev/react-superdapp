/* eslint-disable no-unused-vars */
import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import BigNumber from 'bignumber';
import axios from "axios";
import { mnemonicToSeed, generateMnemonic } from "bip39";
import { fromMasterSeed } from "hdkey";
export async function getToken(token_addr) {
  const add = JSON.stringify(token_addr);
  try {
    const tok_curr = await axios.get(`https://api.solana.fm/v1/tokens/${token_addr}`);
    return tok_curr;
  } catch(e) {
    if (e.response && e.response.status === 404) {
      console.error(`Токен не найден для адреса: ${token_addr}`);
      // Возвращаем null или другое значение по умолчанию
      return null;
    }
    console.error('Ошибка при запросе токена:', e);
    return null;
  }
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
        const seedx = await mnemonicToSeed(result.seed)
        const masterNode = fromMasterSeed(seedx);
        const derivedKey = masterNode.derive(derivePath);
        const keypairs = Keypair.fromSeed(derivedKey._privateKey);
        const transes = await axios.get(`https://api.solana.fm/v0/accounts/${keypairs.publicKey}/transfers?utcFrom=0&utcTo=8223321783287231812&limit=100`)
        const transactions1 = transes.data.results;
        if(transactions1 == undefined) return [];
        const transactions = transactions1.filter((element) => {
          if (element.data.some(dataElement => dataElement && dataElement.action)) {
            // Проверка условий для фильтрации
            const isFilteredTransaction = element.data.every(dataElement =>
              dataElement.action !== 'mintToCollectionV1'
            );
            
            return isFilteredTransaction;
          }
          
          // Если не хватает необходимых полей, считаем транзакцию невалидной
          return false;
        });
        for(let i = 0; i < transactions.length; i ++) {
          const element = transactions[i];
          let transactionData = [];
          let type = '';
          let transactionHash = element.transactionHash;
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

          if (token_addr !== 'So11111111111111111111111111111111111111112' || token_addr !== '') {
            const tok_curr = await getToken(token_addr);
            // Check if tok_curr is not null before accessing properties
            if (tok_curr && tok_curr.data) {
              const dat = tok_curr.data;
              if (dat.tokenMetadata.offChainInfo == null & dat.tokenList.image == null) {
                token_png = `./img/solana.svg`;
              } else {
                if(dat.tokenMetadata.offChainInfo == null) {
                  token_png = dat.tokenList.image;
                } else {
                  token_png = dat.tokenMetadata.offChainInfo.image
                }

              }
              token_name = dat.tokenList.symbol;
              token_addr = dat.mint;
              decimals = Math.pow(10, dat.decimals);
            } else {
              console.error(`Token data not available for address: ${token_addr}`);
              // Handle this case based on your requirements
            }
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
          if(lamports) {
            transactions_in_sol.push(newTransaction)
          }
        }
        await addToAccount('transactions', [{sol: transactions_in_sol}]);
        return transactions_in_sol;
      } else {
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