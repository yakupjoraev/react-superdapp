// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable react-hooks/rules-of-hooks */
// /* eslint-disable no-unused-vars */
// import { klu4 } from "../../systems/storage/store";
// import load from "../../functions/loader";
// import Header from "../Header";
// import screen from "../../main";
// import { useEffect, useState } from "react";
// import { Keypair, Connection, clusterApiUrl } from "@solana/web3.js";
// import { getAccount, addToAccount } from "../../systems/storage/store";
// function StepThreeImportWalletOut() {
//   const [data, updateData] = useState([]);

//   useEffect(() => {
//     async function get() {
//       const acc = await getAccount();
//       const mnemonicas = acc.seed;
//       const splittedSeed = await mnemonicas.split(' ');
//       updateData(await splittedSeed);
//     }
//     get();
//   }, [])
//   if (screen.current != '3out') return null;
//   return (
//     <div className="wrapper">
//         <Header actionType="back" />
//       <div className="content">
//         <div className="create-password">

//           <h1 className="title title--middle">
//             Secret Backup Phrase
//           </h1>

//           <p className="text">
//              Write or paste here your secret (seed) phrase for wallet recovery.
//           </p>
          

//           <form className="create-password__form form" action="#">
//             <ul className="form__words">
//               <li className="form__word">{data[0]}</li>
//               <li className="form__word">{data[1]}</li>
//               <li className="form__word">{data[2]}</li>
//               <li className="form__word">{data[3]}</li>
//               <li className="form__word">{data[4]}</li>
//               <li className="form__word">{data[5]}</li>
//               <li className="form__word">{data[6]}</li>
//               <li className="form__word">{data[7]}</li>
//               <li className="form__word">{data[8]}</li>
//               <li className="form__word">{data[9]}</li>
//               <li className="form__word">{data[10]}</li>
//               <li className="form__word">{data[11]}</li>
//             </ul>

//             <button type="submit" onClick={() => {load(5)}} className="form__btn btn">BACK</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StepThreeImportWalletOut;