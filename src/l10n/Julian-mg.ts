/* http://keith-wood.name/worldCalendars.html
   Malagasy localisation for Gregorian/Julian calendars.
   Fran Boon (fran@aidiq.com). */

import { JulianCalendar } from '../Julian'

JulianCalendar.localisations.mg = {
  name: 'Julian',
  epochs: ['BCE', 'CE'],
  monthNames: ['Janoary', 'Febroary', 'Martsa', 'Aprily', 'Mey', 'Jona',
    'Jolay', 'Aogositra', 'Septambra', 'Oktobra', 'Novambra', 'Desembra'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mey', 'Jon',
    'Jol', 'Aog', 'Sep', 'Okt', 'Nov', 'Des'],
  dayNames: ['Alahady', 'Alatsinainy', 'Talata', 'Alarobia', 'Alakamisy', 'Zoma', 'Sabotsy'],
  dayNamesShort: ['Alah', 'Alat', 'Tal', 'Alar', 'Alak', 'Zom', 'Sab'],
  dayNamesMin: ['Ah', 'At', 'Ta', 'Ar', 'Ak', 'Zo', 'Sa'],
  digits: undefined,
  dateFormat: 'dd/mm/yyyy',
  firstDay: 1,
  isRTL: false
}
