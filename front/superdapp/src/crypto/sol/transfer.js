/* eslint-disable no-unused-vars */
import { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL, SystemProgram, Transaction, PublicKey, sendAndConfirmTransaction } from "@solana/web3.js";
import * as buffer from "buffer";
import { getAccount as getCurrent, addToAccount } from "../../systems/storage/store";
import axios from 'axios'
import { getToken } from "./history";
import { createAssociatedTokenAccountInstruction, createTransferInstruction, getAssociatedTokenAddress, TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { mnemonicToSeed, generateMnemonic } from "bip39";
import { fromMasterSeed } from "hdkey";
window.Buffer = buffer.Buffer;
const derivePath = "m/44'/501'/0'/0'"
export async function send_sol(amount, address, contract = 'solana', decimals = 9) {
    let signature = 0;
    const increase = Math.pow(10, decimals);
    const ammo = parseFloat(amount) * increase;
    const connection = new Connection(
        'https://solana-mainnet.phantom.app/YBPpkkN4g91xDiAnTE9r0RcMkjg0sKUIWvAfoFVJ',
        'confirmed',
        );
        const result = await getCurrent();
        const seedx = await mnemonicToSeed(result.seed)
        const masterNode = fromMasterSeed(seedx);
        const derivedKey = masterNode.derive(derivePath);
        const keypairs = Keypair.fromSeed(derivedKey._privateKey);
    if(contract == 'solana') {
        try {
            const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: keypairs.publicKey,
                toPubkey: new PublicKey(address),
                lamports: ammo,
            }),
            );
            signature = await sendAndConfirmTransaction(
                connection,
                transaction,
                [keypairs],
            );
        } catch(e) {
        throw e.message;
        }
    } else {
        try {
            const destPublicKey = new PublicKey(address);
            const mintPublicKey = new PublicKey(
              contract
            );
            const account = await connection.getTokenAccountsByOwner(keypairs.publicKey, { mint: mintPublicKey});
            const accountPublicKeyTokenWallet = account.value[0].pubkey.toString();

            const accountDestination = await connection.getTokenAccountsByOwner(destPublicKey, { mint: mintPublicKey});
            const accountDestinationPublicKeyTokenWallet = accountDestination.value[0].pubkey.toString();

            const transaction = new Transaction();
            const instructions = []
            instructions.push(
                createTransferInstruction(
                    new PublicKey(accountPublicKeyTokenWallet),
                    new PublicKey(accountDestinationPublicKeyTokenWallet),
                    keypairs.publicKey,
                    ammo,
                    [],
                    TOKEN_PROGRAM_ID
                )
            );
    
            transaction.add(...instructions);
            signature = await sendAndConfirmTransaction(
                connection,
                transaction,
                [keypairs],
            );
        } catch(e) {
            console.log(e)
        throw e.message;
        }
    }
    return signature;
  }