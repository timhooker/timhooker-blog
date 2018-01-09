import * as moment from 'moment';

function parseDate(dateString: string = '') {
  return dateString ? moment(dateString).format('DD MMMM YYYY') : '';
}
export { parseDate };