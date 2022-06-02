/* http://keith-wood.name/worldCalendars.html
   Dutch/Belgian localisation for Gregorian/Julian calendars.
   Written by Mathias Bynens <http://mathiasbynens.be/>. */

import { JulianCalendar } from '../Julian'

JulianCalendar.localisations['nl-BE'] = {
  name: 'Julian',
  epochs: ['BCE', 'CE'],
  monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  monthNamesShort: ['jan', 'feb', 'maa', 'apr', 'mei', 'jun',
    'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
  dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
  dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
  dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
  digits: undefined,
  dateFormat: 'dd/mm/yyyy',
  firstDay: 1,
  isRTL: false
}
