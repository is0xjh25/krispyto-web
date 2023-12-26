// components/Row.js

import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Row = ({ rowData, headers }) => {
  const navigate = useNavigate();
  const tdRef = useRef(null);

  const handleRowClick = (rowData) => {
    navigate(`/crypto/${rowData.crypto}-${rowData.symbol}`);
  };

  const formatCellValue = (key, value) => {
    const floatValue = parseFloat(value);

    if (!isNaN(floatValue)) {
      const formattedValue =
      (key === '1m' || key === '24h' || key === '7d')
        ? floatValue.toFixed(2)
        : (key === 'market-cap' || key === '24h-volume')
        ? floatValue.toFixed(0)
        : floatValue.toFixed(1);

        let textColor = 'var(--text-color)';
        if (key === '1m' || key === '24h' || key === '7d') {
          textColor = floatValue >= 0 ? 'green' : 'red';
        }
      
      return (
        <span ref={tdRef} style={{ color: textColor }}>
          {formattedValue}
        </span>
      );
    } else {
      return value;
    }
  };

  return (
    <tr className='clickable-row' onClick={() => handleRowClick(rowData)}>
      {headers.map((header) => (
        <td ref={tdRef} key={header.key}>
          {formatCellValue(header.key, rowData[header.key])}
        </td>
      ))}
    </tr>
  );
};

export default Row;