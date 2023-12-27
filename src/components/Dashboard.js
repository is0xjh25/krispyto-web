// components/Dashboard.js

import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { getCrypto } from 'api/api';
import Row from 'components/Row';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Dashboard = ({className }) => {
  const { enqueueSnackbar } = useSnackbar();

  const [id, setId] = useState('');
  const [date, setDate] = useState(null);
  const [orderBy, setOrderBy] = useState(null);
  const [orderType, setOrderType] = useState(null);
  const [data, setData] = useState([]);

  const tableHeaders = [
    { key: 'crypto', label: 'Crypto' },
    { key: 'symbol', label: 'Symbol' },
    { key: 'price', label: 'Price' },
    { key: '1m', label: '1m(±%)' },
    { key: '7d', label: '7d(±%)' },
    { key: '24h', label: '24h(±%)' },
    { key: '24h-volume', label: '24h Volume ' },
    { key: 'market-cap', label: 'Market Cap' },
  ];

  const capital = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleOrderClick = (by) => {
    
    let ok;
    let type = orderType
    if (by === orderBy) {
      if (type === 'asc') {
        type ='desc'
      } else {
        type ='asc'
      }
    } else {
      type = 'desc'
    }

    enqueueSnackbar(`Sorting by ${capital(by)} (${capital(type)}).`, { variant: 'success' });

    getCrypto({ id: id, date: date.format('YYYY-MM-DD'), orderBy: by, orderType: type })
    .then((result) => {
        ok = result.ok;
        return result.body;
    })
    .then((data) => {
      if (ok) {
        setData(data)
      } else {
        enqueueSnackbar(data.error, { variant: 'error' });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      enqueueSnackbar(error, { variant: 'error' });
    });

    setOrderBy(by);
    setOrderType(type);
  };

  const handleRocket = () => {
    let ok;
    enqueueSnackbar(`Searching for ${date.format('YYYY-MM-DD')}`, { variant: 'success' });
    getCrypto({ id: id, date: date.format('YYYY-MM-DD'), orderBy: orderBy, orderType: orderType })
    .then((result) => {
        ok = result.ok;
        return result.body;
    })
    .then((data) => {
      if (ok) {
        setData(data)
      } else {
        enqueueSnackbar(data.error, { variant: 'error' });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      enqueueSnackbar(error, { variant: 'error' });
    });
  };

  useEffect(() => {
    const id = 'all'
    const date = dayjs('2021-07-06')
    const orderBy = 'market-cap'
    const orderType = 'desc'
    
    getCrypto({ id: id, date: date.format('YYYY-MM-DD'), orderBy: orderBy, orderType: orderType })
        .then((result) => {
          if (result.ok) {
            return result.body;
          } else {
            throw new Error('Crypto not found!');
          }
        })
        .then((data) => {
          setData(data)
        })
        .catch((error) => {
          console.error('Error:', error);
          enqueueSnackbar(error.message, { variant: 'error' });
        });

        setId(id)
        setDate(dayjs('2021-07-06'))
        setOrderBy('market-cap')
        setOrderType('desc')
  }, []);

  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main>
        <div className={`dashboard-container ${className}`}>
          <div className='dashboard-header'>
            <div id='dashboard-header-text'>
              <h1>The data is on...... </h1>
            </div>
            <div id='dashboard-header-calendar'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker defaultValue={dayjs('2021-07-06')} onChange={(newValue) => setDate(newValue)} />
              </LocalizationProvider>
              <button id='rocket-button' onClick={()=>handleRocket()}>
                <FontAwesomeIcon icon={faRocket} id='rocket-button-fav'/>
              </button>
            </div>
          </div>
          <div className='dashboard-table'>
            <table style={{ width: '100%', maxWidth: '100%', overflow: 'auto' }}>
              <thead>
                <tr id='dashboard-thead'>
                  {tableHeaders.map((header) => (
                    <th key={header.key}><button className='header-button' onClick={() => handleOrderClick(header.key)}>{header.label}</button></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((rowData, index) => (
                  <Row key={index} rowData={rowData} headers={tableHeaders} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main> 
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Dashboard;