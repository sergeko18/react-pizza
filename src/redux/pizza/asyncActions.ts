import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ItemsPizzaTypes } from './types';

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params: Record<string, string>) => {
    const { sortBy, order, category, search, selectedPage } = params;
    const responce = await axios.get(
      `https://62def0c1976ae7460be54171.mockapi.io/items?${category}&page=${selectedPage}&limit=4&sortby=${sortBy}&order=${order}${search}`,
    );
    return responce.data.items as ItemsPizzaTypes[];
  },
);
