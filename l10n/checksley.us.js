/*! checksley - v0.6.0 - 2014-08-13 */
(function() {
  var messages, validators;

  validators = {
    us_postalcode: function(val, elem, self) {
      var end, postalCode, ranges, region, start, tmp, valid, zip_start, _i, _len;
      region = $(elem).data('region');
      if (!region) {
        return /^[0-9]{5}((-| )[0-9]{4})?$/.test(val);
      }
      switch (region) {
        case 'PW':
          ranges = {
            '696': '969'
          };
          break;
        case 'FM':
          ranges = {
            '696': '969'
          };
          break;
        case 'MH':
          ranges = {
            '696': '969'
          };
          break;
        case 'MP':
          ranges = {
            '696': '969'
          };
          break;
        case 'GU':
          ranges = {
            '696': '969'
          };
          break;
        case 'AS':
          ranges = {
            '96799': '96799'
          };
          break;
        case 'AP':
          ranges = {
            '962': '966'
          };
          break;
        case 'WA':
          ranges = {
            '980': '994'
          };
          break;
        case 'OR':
          ranges = {
            '97': '97'
          };
          break;
        case 'HI':
          ranges = {
            '967': '968'
          };
          break;
        case 'CA':
          ranges = {
            '900': '961'
          };
          break;
        case 'AK':
          ranges = {
            '995': '999'
          };
          break;
        case 'WY':
          ranges = {
            '820': '831',
            '83414': '83414'
          };
          break;
        case 'UT':
          ranges = {
            '84': '84'
          };
          break;
        case 'NM':
          ranges = {
            '870': '884'
          };
          break;
        case 'NV':
          ranges = {
            '889': '899'
          };
          break;
        case 'ID':
          ranges = {
            '832': '839'
          };
          break;
        case 'CO':
          ranges = {
            '80': '81'
          };
          break;
        case 'AZ':
          ranges = {
            '85': '86'
          };
          break;
        case 'TX':
          ranges = {
            '75': '79',
            '885': '885',
            '73301': '73301',
            '73344': '73344'
          };
          break;
        case 'OK':
          ranges = {
            '73': '74'
          };
          break;
        case 'LA':
          ranges = {
            '700': '715'
          };
          break;
        case 'AR':
          ranges = {
            '716': '729'
          };
          break;
        case 'NE':
          ranges = {
            '68': '69'
          };
          break;
        case 'MO':
          ranges = {
            '63': '65'
          };
          break;
        case 'KS':
          ranges = {
            '66': '67'
          };
          break;
        case 'IL':
          ranges = {
            '60': '62'
          };
          break;
        case 'WI':
          ranges = {
            '53': '54'
          };
          break;
        case 'SD':
          ranges = {
            '57': '57'
          };
          break;
        case 'ND':
          ranges = {
            '58': '58'
          };
          break;
        case 'MT':
          ranges = {
            '59': '59'
          };
          break;
        case 'MN':
          ranges = {
            '550': '567'
          };
          break;
        case 'IA':
          ranges = {
            '50': '52'
          };
          break;
        case 'OH':
          ranges = {
            '43': '45'
          };
          break;
        case 'MI':
          ranges = {
            '48': '49'
          };
          break;
        case 'KY':
          ranges = {
            '400': '427'
          };
          break;
        case 'IN':
          ranges = {
            '46': '47'
          };
          break;
        case 'AA':
          ranges = {
            '340': '340'
          };
          break;
        case 'TN':
          ranges = {
            '370': '385'
          };
          break;
        case 'MS':
          ranges = {
            '386': '397'
          };
          break;
        case 'GA':
          ranges = {
            '30': '31',
            '398': '398',
            '39901': '39901'
          };
          break;
        case 'FL':
          ranges = {
            '32': '34'
          };
          break;
        case 'AL':
          ranges = {
            '35': '36'
          };
          break;
        case 'WV':
          ranges = {
            '247': '269'
          };
          break;
        case 'VA':
          ranges = {
            '220': '246',
            '200': '201'
          };
          break;
        case 'SC':
          ranges = {
            '29': '29'
          };
          break;
        case 'NC':
          ranges = {
            '27': '28'
          };
          break;
        case 'MD':
          ranges = {
            '206': '219'
          };
          break;
        case 'DC':
          ranges = {
            '200': '200',
            '202': '205',
            '569': '569'
          };
          break;
        case 'PA':
          ranges = {
            '150': '196'
          };
          break;
        case 'NY':
          ranges = {
            '10': '14',
            '06390': '06390',
            '00501': '00501',
            '00544': '00544'
          };
          break;
        case 'DE':
          ranges = {
            '197': '199'
          };
          break;
        case 'VI':
          ranges = {
            '008': '008'
          };
          break;
        case 'PR':
          ranges = {
            '006': '007',
            '009': '009'
          };
          break;
        case 'AE':
          ranges = {
            '09': '09'
          };
          break;
        case 'VT':
          ranges = {
            '05': '05'
          };
          break;
        case 'RI':
          ranges = {
            '028': '029'
          };
          break;
        case 'NJ':
          ranges = {
            '07': '08'
          };
          break;
        case 'NH':
          ranges = {
            '030': '038'
          };
          break;
        case 'MA':
          ranges = {
            '010': '027',
            '05501': '05501',
            '05544': '05544'
          };
          break;
        case 'ME':
          ranges = {
            '039': '049'
          };
          break;
        case 'CT':
          ranges = {
            '06': '06'
          };
          break;
        case 'UM':
          ranges = {
            '': ''
          };
          break;
        default:
          ranges = {
            '': ''
          };
      }
      if (postalCode.length > 5) {
        postalCode = postalCode.substr(0, 5);
      }
      if (postalCode.length < 5) {
        tmp = "00000" + postalCode;
        postalCode = tmp.substr(tmp.length - 5, tmp.length);
      }
      valid = false;
      for (end = _i = 0, _len = ranges.length; _i < _len; end = ++_i) {
        start = ranges[end];
        zip_start = postalCode.substr(0, start.length);
        if (zip_start.parseInt(10) >= start.parseInt(10) && zip_start.parseInt(10) <= end.parseInt(10)) {
          valid = true;
          break;
        }
      }
      return valid;
    },
    us_region: function(val, elem, self) {
      val = val.toUpperCase();
      return val === 'AL' || val === 'AK' || val === 'AZ' || val === 'AR' || val === 'CA' || val === 'CO' || val === 'CT' || val === 'DE' || val === 'DC' || val === 'FL' || val === 'GA' || val === 'HI' || val === 'ID' || val === 'IL' || val === 'IN' || val === 'IA' || val === 'KS' || val === 'KY' || val === 'LA' || val === 'ME' || val === 'MD' || val === 'MA' || val === 'MI' || val === 'MN' || val === 'MS' || val === 'MO' || val === 'MT' || val === 'NE' || val === 'NV' || val === 'NH' || val === 'NJ' || val === 'NM' || val === 'NY' || val === 'NC' || val === 'ND' || val === 'OH' || val === 'OK' || val === 'OR' || val === 'PA' || val === 'RI' || val === 'SC' || val === 'SD' || val === 'TN' || val === 'TX' || val === 'UT' || val === 'VT' || val === 'VA' || val === 'WA' || val === 'WV' || val === 'WI' || val === 'WY';
    }
  };

  messages = {
    us_region: "This value should be a valid US region.",
    us_postalcode: "This value should be a valid US postal code."
  };

  this.checksley.updateValidators(validators);

  this.checksley.updateMessages("default", messages);

}).call(this);
