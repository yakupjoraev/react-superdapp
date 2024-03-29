/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Header from "../Header";
import Footer from "../Footer";
import Loading from "../Loading";
import screen from "../../main";
import load from "../../functions/loader";
import { useEffect, useState } from "react";
import { Keypair, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { getAccount, addToAccount } from "../../systems/storage/store";
import data_sol from "../../crypto/sol/start";
import defaults, { truncateNumberDefault } from "../../crypto/defaults";
import { Fade } from 'react-awesome-reveal';
import { mnemonicToSeed, generateMnemonic } from "bip39";
import { fromMasterSeed } from "hdkey";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay, } from 'swiper/modules';


function StepFive() {
  const [balances, setBalances] = useState(defaults.balances);
  const [percents, setPercents] = useState(defaults.percents);
  const [prices, setPrices] = useState(defaults.prices);
  const [sortOrder, setSortOrder] = useState('asc'); // Состояние для отслеживания порядка сортировки
  const [loading1, setLoading] = useState(true);
  const [loading, setLoading1] = useState(false);

  const handleSortClick = () => {
    if (!balances[0] || typeof balances[0] !== 'object') {
      // Если balances[0] не является объектом, выходим из функции
      return;
    }
    // Инвертируйте порядок сортировки при каждом клике
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    
    // Создайте новый массив для токенов с учетом порядка сортировки
    const sortedBalances = Object.entries(balances[0]);
  
    sortedBalances.sort((a, b) => {
      const balanceA = a[1].usd;
      const balanceB = b[1].usd;
  
      if (sortOrder === 'asc') {
        return balanceA - balanceB;
      } else {
        return balanceB - balanceA;
      }
    });
  
    // Обновите состояние с отсортированным объектом
    setBalances([{ ...Object.fromEntries(sortedBalances) }]);
  };

  useEffect(() => {
    const connection = new Connection(
      'https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ',
      'confirmed',
    );

    const derivePath = "m/44'/501'/0'/0'";

    async function getAirdrop(acc) {
      const { airdrop, seed } = acc;
      if (airdrop != undefined) return null;
      const seedx = await mnemonicToSeed(seed)
      const masterNode = fromMasterSeed(seedx);
      const derivedKey = masterNode.derive(derivePath);
      const keypairs = Keypair.fromSeed(derivedKey._privateKey);
      const airdropSignature = await connection.requestAirdrop(
        keypairs.publicKey,
        LAMPORTS_PER_SOL,
      );

      await connection.confirmTransaction({ signature: airdropSignature });
      await addToAccount('airdrop', true);
      await startScreen(await getAccount());
    }

    async function startScreen(acc) {
      if(acc.firststart == true) {
        await addToAccount('firststart', false);
        window.location.reload();
      }
      if (acc.balances) {
        setBalances(acc.balances);
      }
      if(acc.prices) {
        setPrices(acc.prices);
      }
      if(acc.percents) {
        setPercents(acc.percents)
      }

      const promises = [data_sol()];
      try {
        const resultsArray = await Promise.all(promises);
        const latestData = resultsArray[resultsArray.length - 1];
        setBalances(latestData.balances);
        setPrices(latestData.prices);
        setPercents(latestData.percents);
      } catch (error) {
        console.error(error);
      }
    }

    async function start() {
      setLoading(true);
      const result = await getAccount();
      await startScreen(result);
      setLoading(false);
    }
    start();
    setInterval(start, 10000);
  }, []);

  async function setToken(token) {
    await addToAccount('token_data', token);
    await load(24);
  }
  
  if (screen.current != 5) return null;

  return (
    <div>
      <Fade cascade duration={500}>
        <div className="wrapper">
          <Header show="5" actionType="settings" />

          <div className="wallet">
          <Swiper
          modules={[Autoplay,]}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false, 
          }}
           className="wallet__banners mySwiper">
            <SwiperSlide><div onClick={() => window.open("https://superdapp.io/rewards.html", "_blank")} className="wallet__banner2"></div></SwiperSlide>
            <SwiperSlide><div onClick={() => {load(8)}} className="wallet__banner11"></div></SwiperSlide>
            <SwiperSlide><div onClick={() => window.open("https://www.trustpilot.com/review/superdapp.io", "_blank")} className="wallet__banner3"></div></SwiperSlide>
          </Swiper>
            
            <div className="wallet__invoice">
              <div className="wallet__invoice-sum">
                <span>$</span><span>{parseFloat(balances[0]?.summ).toPrecision(6) || 0}</span>
              </div>

              <div className="wallet__invoice-actions">
                <a onClick={() => { load(6) }} className="wallet__invoice-action active" href="#">
                  <img src="./img/icons/wallet-arrow-up.svg" alt="wallet-arrow-up" />
                  <span>Send</span>
                </a>

                <a onClick={() => { load(7) }} className="wallet__invoice-action active" href="#">
                  <img src="./img/icons/wallet-arrow-down.svg" alt="wallet-arrow-down" />
                  <span>Receive</span>
                </a>

                <a onClick={() => { load(8) }} className="wallet__invoice-action active" href="#">
                  <img src="./img/icons/wallet-arrow-coins.svg" alt="wallet-arrow-coins" />
                  <span>Earn</span>
                </a>
              </div>
            </div>

            <div className="wallet__tokens">
          {loading && <Loading />}

              <div className="wallet__tokens-header">
                <p className="wallet__tokens-label">Tokens</p>

                <button type="button" className="wallet__tokens-sort"  onClick={handleSortClick}>
                  <img src="./img/icons/sort-solid.svg" alt="sort-solid" />
               </button>
              </div>
          
              {balances.length > 0 &&
                Object.entries(balances[0]).map(([tokenName, tokenData], index) => (
                  tokenName !== "summ" && tokenData.image !== undefined && tokenData.image !== null && (
                    <div onClick={() => {setToken([tokenName, tokenData])}} key={index} className="wallet__token">
                      <div className="wallet__token-infos">
                        <div className="wallet__token-pic">
                          <img src={tokenData.image} width="35" height="34" alt={tokenName} />
                        </div>

                        <div className="wallet__token-info">
                          <p className="wallet__token-name text">{tokenName.toUpperCase()}</p>
                          <div className="wallet__token-bottom">
                            <div className="wallet__token-count text--grey">
                              ${truncateNumberDefault(prices[0]?.[tokenName]?.usd) || 0}
                            </div>

                            {percents[0] && percents[0][tokenName] !== undefined && (
                              <div className="wallet__token-percent yellow">
                                {truncateNumberDefault(percents[0][tokenName].percent)}%
                                <img className="wallet__token-arrow" src={`./img/icons/percent-${percents[0][tokenName].percent < 0 ? 'down' : 'up'}.svg`} alt="" />
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="wallet__token-sums">
                        <p className="wallet__token-sum text">{truncateNumberDefault(tokenData.balance)}</p>
                        <p className="wallet__token-sum text--grey">${truncateNumberDefault(tokenData.usd) || 0}</p>
                      </div>
                    </div>
                  )
                ))}
            </div>
          </div>

          <Footer showWallet={true} showActivity={true} showDashboard={false} activeItem="wallet" />
        </div>
      </Fade>
    </div>
  );
}

export default StepFive;