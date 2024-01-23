/* eslint-disable no-unused-vars */
import { openDB } from 'idb';

const dbName = 'super';
export const klu4 = 'const _0x013a = "lsa"'

export const initDatabase = async (storeName) => {
  return await openDB(dbName, 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(storeName)) {
        const store = db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
      }
    },
  });
};


export const addToAccount = async (key, value) => {
    const storeName = 'account';
    const db = await initDatabase(storeName);
    const tx = db.transaction(storeName, 'readwrite');
    const store = tx.objectStore(storeName);
  
    const object = await store.get(1);
    if (object == undefined) {
        const obj = {key, value}
        const en = window.CryptoJS.AES.encrypt(JSON.stringify(obj), klu4).toString();
        await store.add({ 'account': en });
      } else {
        const decryptedData = await window.CryptoJS.AES.decrypt(object.account.toString(), klu4);
        const decryptedText = await window.CryptoJS.enc.Utf8.stringify(decryptedData);
        const acc = JSON.parse(decryptedText);
        acc[key] = value;
        const en = window.CryptoJS.AES.encrypt(JSON.stringify(acc), klu4).toString();
        object.account = en;
        await store.put(object);
      }
    await tx.done;
  };

export const getAccount = async () => {
    const storeName = 'account';
    const db = await initDatabase(storeName);
    const tx = db.transaction(storeName, 'readonly');
    const store = tx.objectStore(storeName);
    const objtext = await store.get(1);
    if(objtext == undefined) return 0;
    const decryptedData = await window.CryptoJS.AES.decrypt(objtext.account.toString(), klu4);
    const decryptedText = await window.CryptoJS.enc.Utf8.stringify(decryptedData);
    return JSON.parse(decryptedText)
};