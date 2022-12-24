import axios from 'axios';
import { AccountModel, AccountRequest } from '../util/systemConfig';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  headers: {
    'Content-type': 'application/json',
  },
});

export const getAccountRequests = async (): Promise<AccountRequest[]> => {
  try {
    const res = await api.get('account-requests/');
    return res.data;
  } catch (err) {
    return [];
  }
};

export const deleteAccountRequests = async (username: string, bank: string) => {
  try {
    await api.delete('delete-account-req/', {
      data: {
        username: username,
        bank: bank,
      },
    });
  } catch (error) {}
};

export const createAccount = async (account: {}) => {
  try {
    await api.post('create-account/', account);
  } catch (error) {
    console.log(error);
  }
};

export const getPinChangeRequests = async () => {
  try {
    const res = await api.get('change-pin-requests/');
    console.log(res.data);
    return res.data;
  } catch (error) {
    return [];
  }
};
