import { DataService } from '@/config/dataService/dataService';

const response = await DataService.get('/');

export { response };
