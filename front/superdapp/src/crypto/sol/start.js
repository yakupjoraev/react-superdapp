/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import axios from 'axios';
import { getToken } from "./history";
import defaults from "../../crypto/defaults";
import { Fade } from 'react-awesome-reveal';
import { mnemonicToSeed, generateMnemonic } from "bip39";
import { fromMasterSeed } from "hdkey";
const derivePath = "m/44'/501'/0'/0'"

export default async function data_sol() {
    const acc = await getAccount();
    const delays = acc.delays
    if (delays) {
        const timestamp = delays.data_delay;
        const curr_timestamp = Date.now();
        if (curr_timestamp - timestamp > (5 * 1000)) {
            await addToAccount('delays', {data_delay: Date.now(), history_delay: delays.history_delay, lock_delay: delays.data_delay,});
            const connection = new Connection(
                'https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ',
                'confirmed',
            );

            let allBalance = 0;
            const { seed } =  await getAccount(); 
            const dat = await axios.get(`https://api.cryptorank.io/v0/tickers?isTickersForPriceCalc=true&limit=1&coinKeys=solana`)
            const seedx = await mnemonicToSeed(seed)
            const masterNode = fromMasterSeed(seedx);
            const derivedKey = masterNode.derive(derivePath);
            const keypairs = Keypair.fromSeed(derivedKey._privateKey);

            const balance_sol = await connection.getBalance(keypairs.publicKey);
            const tokens = await axios.get(`https://api.solana.fm/v1/addresses/${keypairs.publicKey.toString()}/tokens`)
            const toks = tokens.data.tokens;
            const spl_tokens_balances_data = {};
            const spl_tokens_prices_data = {};
            const spl_tokens_percents_data = {};
            const zaglushka = `./img/solana.svg`;
            for (const tokenAddress in toks) {
                const tokenInfo = toks[tokenAddress];
                if (tokenInfo.balance !== null) {
                    const toktok = await getToken(tokenAddress);
                    const dat = toktok.data
                    let image = dat.tokenList.image
                    if(image == null) {
                        image = zaglushka;
                        if(dat.tokenMetadata.offChainInfo == null) {
                            image = zaglushka
                          } else {
                            image = dat.tokenMetadata.offChainInfo.image
                          }
                    }
                    spl_tokens_balances_data[dat.tokenList.symbol] = {
                        balance: tokenInfo.balance,
                        image,
                        contract: tokenAddress,
                        chain: 'solana',
                        decimals: dat.decimals
                    };
                    spl_tokens_prices_data[dat.tokenList.symbol] = {
                        usd: 0,
                    };
                    spl_tokens_percents_data[dat.tokenList.symbol] = {
                        percent: 0,
                    };
                }
            }
            const balancefinal_sol = balance_sol / LAMPORTS_PER_SOL
            const finaldollarbalance_sol = parseFloat(parseFloat(dat.data.data[0].usdLast) * balancefinal_sol).toFixed(2)
            allBalance += + finaldollarbalance_sol
            await addToAccount('balances', [{ summ: allBalance, sol: { balance: balancefinal_sol, usd: finaldollarbalance_sol, image: './img/solana.svg', contract: 'solana', chain: 'solana' }, ...spl_tokens_balances_data}]);
            // await addToAccount('prices', [{sol: { parseFloat(dat.data.data[0].usdLast).toFixed(2) }, ...spl_tokens_prices_data} ] );
            await addToAccount('prices', [{ sol: { usd: parseFloat(dat.data.data[0].usdLast).toFixed(2) }, ...spl_tokens_percents_data}]);
            await addToAccount('percents', [{ sol: { percent: parseFloat(dat.data.data[0].change).toFixed(2) }, ...spl_tokens_percents_data}]);
            const accUpdated = await getAccount();
            return accUpdated;
        } else {
            return await getAccount();
        }
    } else {
        await addToAccount('delays', {data_delay: 0, history_delay: 0, lock_delay: 0});
        return await getAccount();
      }
  }