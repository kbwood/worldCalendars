/* http://keith-wood.name/worldCalendars.html
   Latvian localisation for Gregorian/Julian calendars.
   Arturas Paleicikas <arturas.paleicikas@metasite.net>. */

import { GregorianCalendar } from '../Gregorian'

GregorianCalendar.localisations.lv = {
  name: 'Gregorian',
  epochs: ['BCE', 'CE'],
  monthNames: ['Janvāris', 'Februāris', 'Marts', 'Aprīlis', 'Maijs', 'Jūnijs',
    'Jūlijs', 'Augusts', 'Septembris', 'Oktobris', 'Novembris', 'Decembris'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jūn',
    'Jūl', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  dayNames: ['svētdiena', 'pirmdiena', 'otrdiena', 'trešdiena', 'ceturtdiena', 'piektdiena', 'sestdiena'],
  dayNamesShort: ['svt', 'prm', 'otr', 'tre', 'ctr', 'pkt', 'sst'],
  dayNamesMin: ['Sv', 'Pr', 'Ot', 'Tr', 'Ct', 'Pk', 'Ss'],
  digits: undefined,
  dateFormat: 'dd-mm-yyyy',
  firstDay: 1,
  isRTL: false
}
