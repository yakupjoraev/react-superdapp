/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
import { useSelector } from 'react-redux';

async function getWallet() {
    const { password, seed, address } = useSelector((state) => state);
    const connection = new Connection(
        clusterApiUrl('devnet'),
        'confirmed',
    );
    const mnemonicas = seed
    const derivePath = "m/44'/501'/0'/0'"
    const sd = await window.bitcoin.bip39.mnemonicToSeed(mnemonicas)
    const masterNode = window.bitcoin.bip32.fromSeed(sd);
    const derivedKey = masterNode.derivePath(derivePath);
    const KEYPAIRS = Keypair.fromSeed(derivedKey.__D);
    return KEYPAIRS;
}
export default getWallet