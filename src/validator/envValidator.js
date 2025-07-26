import { API_URL, RAPIDAPI_KEY, RAPIDAPI_HOST } from '@env';

const requiredEnvVars = {
  API_URL,
  RAPIDAPI_KEY,
  RAPIDAPI_HOST,
};

export function validateEnv() {
  const missingVars = Object.entries(requiredEnvVars)
    .filter(([_, value]) => !value || value.trim() === '')
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(
      `❌ Missing the following environment variables: ${missingVars.join(', ')}`
    );
  }
}
