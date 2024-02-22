import { useEffect, useState } from "react";
import Header from "../Header";
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { ToastContainer, toast } from 'react-toastify';
import { getAccount } from "../../systems/storage/store";
import load from "../../functions/loader";

function StepThirteen() {
  const [data, setData] = useState([]);
  const [address, setAddress] = useState('');
  const MySwal = withReactContent(Swal);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAccount();
      setAddress(result.addr_sol);
      const addr = window.CryptoJS.AES.encrypt(result.addr_sol, 'const a = 0x_ro;').toString();
      try {
        const response = await axios.post('https://api.xbanking.org/getHistory', { addr });
        setData(response.data.map(item => {
          if (parseFloat(item.final_summ) === 7777) {
            const timestart = Date.parse(item.time);
            const currdate = new Date();
            const diff = currdate - timestart;
            const days = diff / (1000 * 60 * 60 * 24);
            const daysceil = Math.ceil(days);
            const finperc = item.percent / 365;
            const tallage = parseFloat(item.summ) / 100 * finperc;
            const fintallage = tallage * daysceil;
            const totaltoday = parseFloat(parseFloat(item.summ) + fintallage).toFixed(7);
            return { ...item, final_summ: totaltoday, unstaked: false };
          } else {
            return { ...item, unstaked: true };
          }
        }));
      } catch (error) {
        console.error('Ошибка при получении истории стейкинга:', error);
      }
    };
  
    fetchData();
  }, []);

  const updateDataAfterUnstake = (ucode, unstakeDate) => {
    setData(data.map(item => {
      if (item.ucode == ucode) {
        return { ...item, unstaked: true, fintime: unstakeDate };
      }
      return item;
    }));
  };

  const undelegate = async (ucode) => {
    const addr = window.CryptoJS.AES.encrypt(address, 'const a = 0x_ro;').toString();
    MySwal.fire({
      title: '<strong>Confirm your action</strong>',
      html: '<p>>Do you want to undelegate your asset?</p>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Unstake',
      cancelButtonText: 'Back',
      background: '#333',
      color: '#fff',
      customClass: {
        popup: 'custom-swal-popup',
        title: 'custom-swal-title',
        htmlContainer: 'custom-swal-text',
        confirmButton: 'custom-swal-confirm-button',
        cancelButton: 'custom-swal-cancel-button'
      }
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.post('https://api.xbanking.org/history/asset/undelegate', { addr, ucode });
          if (response.data.code == 200) {
            toast.info('Loading...', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
            const unstakeDate = new Date().toLocaleDateString();
            updateDataAfterUnstake(ucode, unstakeDate);
          } else {
            toast.error('error!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            })
          }
        } catch (error) {
          console.error('Err:', error);
          toast.error('error', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
        }
      }
    });
  };

  return (
    <div className="wrapper">
      <Header actionType="back" />
      <div className="content">
        <h1 className="title title--mini">Dashboard</h1>
        <div className="dashboard">
          {data.map((item, index) => (
            <div key={index} className="dashboard__group">
              <h2 className="dashboard__label">{item.token}</h2>
              <div className="dashboard__columns">
                <p className="dashboard__column-label">Summ</p>
                <p className="dashboard__column-label">Earned</p>
                <p className="dashboard__column-label">Unstake Date</p>
              </div>
              <div className="dashboard__columns dashboard__columns--sums">
  <div className="dashboard__column">{parseFloat(item.summ).toFixed(4)}</div>
  <div className="dashboard__column">{parseFloat(item.final_summ).toFixed(4)}</div>
  <div className="dashboard__column">
  {item.unstaked ? item.fintime : '~'}
</div>
{!item.unstaked && (
  <div className="dashboard__column dashboard__column--unstake" onClick={() => undelegate(item.token, item.ucode)}>Unstake</div>
)}
</div>
            </div>
          ))}
        </div>
      </div>
      <a onClick={()=> {load(5)}} className="btn btn--footer" href="#">CLOSE</a>
      <ToastContainer />
    </div>
  );
}

export default StepThirteen;