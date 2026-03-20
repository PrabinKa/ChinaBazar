import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface SearchHistoryItem {
  id: string;
  query: string;
  timestamp: number;
}

interface SearchHistoryState {
  history: SearchHistoryItem[];
}

const initialState: SearchHistoryState = {
  history: [],
};

const searchHistorySlice = createSlice({
  name: 'searchHistory',
  initialState,
  reducers: {
    addSearchQuery: (state, action: PayloadAction<string>) => {
      const newItem: SearchHistoryItem = {
        id: Date.now().toString(),
        query: action.payload,
        timestamp: Date.now(),
      };
      
      // Remove duplicate if exists (to avoid repeats)
      state.history = state.history.filter(
        item => item.query.toLowerCase() !== action.payload.toLowerCase(),
      );
      
      // Add new item at the beginning
      state.history.unshift(newItem);
      
      // Keep only last 9 items
      if (state.history.length > 9) {
        state.history = state.history.slice(0, 9);
      }
    },
    
    removeSearchQuery: (state, action: PayloadAction<string>) => {
      state.history = state.history.filter(item => item.id !== action.payload);
    },
    
    clearSearchHistory: state => {
      state.history = [];
    },
  },
});

export const {addSearchQuery, removeSearchQuery, clearSearchHistory} =
  searchHistorySlice.actions;

export default searchHistorySlice.reducer;
