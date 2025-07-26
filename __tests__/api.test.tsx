import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { getTeams } from '../src/services/api';

describe('API service', () => {
  let mock: MockAdapter;

  beforeEach(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.restore();
  });

  it('should return team list on getTeams()', async () => {
    const mockResponse = {
      get: 'teams',
      parameters: { league: '1', season: '2023' },
      errors: [],
      results: 2,
      response: [
        { id: 1, name: 'Team A' },
        { id: 2, name: 'Team B' },
      ],
    };

    mock.onGet('/teams?league=1&season=2023').reply(200, mockResponse);

    const response = await getTeams();
    expect(response.data.response.length).toBeGreaterThan(0);
  });
});
