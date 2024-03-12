import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing
import MutualfundService from '../services/MutualfundService';

const MutualFundPage = () => {
  const { companyId } = useParams(); // Fetching company ID from path variable
  const [mutualFunds, setMutualFunds] = useState([]);
  const [newMutualFund, setNewMutualFund] = useState('');
  const [updateIndex, setUpdateIndex] = useState(null);

  // Function to fetch mutual funds based on company ID
  const fetchMutualFunds = async () => {
    try {
      // Assuming you have a function getMutualfundById from some API service
      const response = await MutualfundService.getMutualfundById(companyId);
      setMutualFunds(response.data); // Assuming response.data is an array of mutual funds
    } catch (error) {
      console.error('Error fetching mutual funds:', error);
    }
  };

  useEffect(() => {
    fetchMutualFunds();
  }, [companyId]); // Fetch mutual funds whenever companyId changes

  const handleAddMutualFund = async () => {
    if (newMutualFund.trim() === '') return;

    try {
      // Assuming you have a function addMutualFund from some API service
      await  MutualfundService.addMutualfund(companyId, newMutualFund);
      setNewMutualFund('');
      fetchMutualFunds(); // Refetch mutual funds after adding
    } catch (error) {
      console.error('Error adding mutual fund:', error);
    }
  };

  const handleDeleteMutualFund = async (index) => {
    try {
      // Assuming you have a function deleteMutualFund from some API service
      await MutualfundService.deleteMutualfund(mutualFunds[index].id); // Assuming each mutual fund has an ID
      fetchMutualFunds(); // Refetch mutual funds after deleting
    } catch (error) {
      console.error('Error deleting mutual fund:', error);
    }
  };

  const handleUpdateMutualFund = async () => {
    if (updateIndex === null || newMutualFund.trim() === '') return;

    try {
      // Assuming you have a function updateMutualFund from some API service
      await MutualfundService.updateMutualfund(mutualFunds[updateIndex].id, newMutualFund); // Assuming each mutual fund has an ID
      setNewMutualFund('');
      setUpdateIndex(null);
      fetchMutualFunds(); // Refetch mutual funds after updating
    } catch (error) {
      console.error('Error updating mutual fund:', error);
    }
  };

  return (
    <div>
      <h1>Mutual Funds for Company ID: {companyId}</h1>
      <ul>
        {mutualFunds.map((fund, index) => (
          <li key={fund.id}>
            {fund.name}
            <button onClick={() => handleDeleteMutualFund(index)}>Delete</button>
            <button onClick={() => {setNewMutualFund(fund.name); setUpdateIndex(index);}}>Update</button>
          </li>
        ))}
      </ul>
      <input type="text" value={newMutualFund} onChange={(e) => setNewMutualFund(e.target.value)} />
      {updateIndex !== null ? (
        <button onClick={handleUpdateMutualFund}>Update</button>
      ) : (
        <button onClick={handleAddMutualFund}>Add</button>
      )}
    </div>
  );
};

export default MutualFundPage;