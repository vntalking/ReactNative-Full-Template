import Moment from 'moment';
import 'moment/locale/vi';

export default function (value, format = null) {
  if (!value) {
    return 'không xác định';
  }

  let datetime;
  datetime = new Moment(value).locale('vi').utc().format('DD/MM/YYYY HH:mm');
  if (format) {
    datetime = new Moment(value).locale('vi').utc().format(format);
  }
  return datetime;
}
