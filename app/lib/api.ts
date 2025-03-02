import { ApiResponse } from './types';

const BASE_URL = 'https://app.ftoyd.com/fronttemp-service';

export async function fetchMatches(): Promise<ApiResponse> {
  try {
    const response = await fetch(`${BASE_URL}/fronttemp`);
    
    if (!response.ok) {
      throw new Error(`Server error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof TypeError && error.message === 'Failed to fetch') {
      throw new Error('Server is unavailable. Please check your connection and try again.');
    }
    
    if (error instanceof Error) {
      throw new Error(`Failed to load matches: ${error.message}`);
    }

    throw new Error('An unexpected error occurred');
  }
}