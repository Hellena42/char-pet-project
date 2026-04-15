import { http, HttpResponse, delay } from 'msw';
import { MOCK_CREDENTIALS } from './mockCredentials';
import { MOCK_SYSTEM_LOGS } from '@/entities/log/model/mock.data';

export const handlers = [
  http.post('/api/auth/login', async ({ request }) => {
    const body: any = await request.json();
    await delay(1000);

    if (body?.email === MOCK_CREDENTIALS.email) {
      return HttpResponse.json(MOCK_CREDENTIALS);
    }

    return new HttpResponse(null, { status: 401 });
  }),
  http.get('/api/logs', async ({ request }) => {
    await delay(800);
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = Number(url.searchParams.get('limit')) || 10;

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedData = MOCK_SYSTEM_LOGS.slice(start, end);

    return HttpResponse.json({
      data: paginatedData,
      total: MOCK_SYSTEM_LOGS.length,
      page
    });
  }),
];