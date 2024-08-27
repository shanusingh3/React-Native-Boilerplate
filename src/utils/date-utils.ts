import { format } from 'date-fns-tz';

const DATES = Object.freeze({
  MMddyyyy: 'MM/dd/yyyy',
  MMMMyyyy: 'MMMM yyyy',
  MMM: 'MMM',
  dd: 'dd',
  yyyy: 'yyyy',
  MMMM: 'MMMM',
  ddMMMyyyy: 'dd MMM yyyy',
  MMMddyyyy: 'MMM dd yyyy',
  MMMdd_yyyy: 'MMM dd, yyyy',
  doMMMM_EEEE: 'do MMMM, EEEE',
  do_MMMM: 'do MMMM',
  EEEE_MMMM_d__yyyy: 'EEEE, MMMM d, yyyy',
  do_MMMM_yyyy: 'do MMMM yyyy',
  dd_MM_yyyy: 'dd-MM-yyyy',
  yyyy_mm_ddHH_mm_ss: 'yyyy-MM-dd HH:mm:ss',
} as const);

const TIMES = Object.freeze({
  H: 'h',
  HH: 'hh',
  hhmma: 'hh:mm a',
  mm_dd_yyyy_HH_mm_ss: 'hh:mm a (do MMMM)',
} as const);

type DateFormats = typeof DATES;
type TimeFormats = typeof TIMES;

export const DATE_TIME_FORMATS = Object.freeze({
  DATES,
  TIMES,
} as const);

type DateTimeFormats = keyof DateFormats | keyof TimeFormats;

export function formatDateTime(
  date: Date,
  formatString: DateTimeFormats,
): string {
  if (formatString in DATE_TIME_FORMATS.DATES) {
    return format(
      date,
      DATE_TIME_FORMATS.DATES[formatString as keyof DateFormats],
    );
  } else if (formatString in DATE_TIME_FORMATS.TIMES) {
    return format(
      date,
      DATE_TIME_FORMATS.TIMES[formatString as keyof TimeFormats],
    );
  } else {
    return '';
  }
}
