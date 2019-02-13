function mhaOpiateDetector(inputs){
  var regimenList = inputs.rxcuis.split(",");
  var output = [];
  var jsonoutput ={"condition_satisfied":false,"summary":"","detail":""};
  //RxNorm Codes from Feb 12 list sent by Allen Flynn

  //OPIOID CODES

  var mhaOpiateArray = [996655,1356807,993781,995447,1356804,1294356,1356800,995450,994226,993770,993890,1089021,996706,1114026,1088975,1440003,995062,1089025,995065,1042693,995068,993763,995983,1089028,996710,995226,2001623,995108,996714,995868,996718,995071,1089055,995075,1089058,993755,995079,994049,995476,994289,997019,994046,995116,996722,994043,996725,996728,1114003,1356797,1357402,995082,2056893,1308438,1792707,995086,995483,995120,997301,995123,1089070,995128,996734,996976,996736,996978,996979,1536457,1114878,1099711,1114110,995093,996580,997398,1235862,1536459,996981,996982,996983,1113417,1089061,996988,1541630,1424297,1424295,997280,997284,997165,997285,997164,1664543,996991,997287,1661319,997169,996994,1190580,996512,996998,996757,997170,1088968,997296,996640,994402,1088963,995438,1113998,995041,993943,995441,1431286,994237,991486,1088951,1237057,1237050,1237068,1237064,1237060,1729320,1115577,1115573,668363,858098,668364,668365,668366,668367,858095,858092,706898,858101,1053661,1053664,1053658,1053655,1053652,1053647,858087,313992,313993,310292,310293,310294,310295,310296,310297,245136,245135,1666831,1603498,1603495,197696,577057,245134,1603501,858770,859146,857121,1860501,859383,1595746,858778,859027,1595740,857839,859939,1860497,859156,1860499,857734,1595730,1357940,1595770,859315,858939,1860491,860579,1860493,1860495,858991,860592,859366,860593,860151,1114334,858876,858953,1595764,1244754,858798,1651558,860549,1366873,860426,992668,1372265,1595758,859097,857512,857556,1595752,1356835,1313294,858967,859137,857510,1098906,1112220,992656,1535979,860599,860596,859220,857083,857005,856992,857002,833036,857128,856903,856944,856908,857099,857131,857134,856962,856999,857383,857501,857107,1044427,857111,857391,857076,856980,856987,857118,856940,897710,898624,897657,898611,898138,902741,902729,898618,898139,898612,898614,897702,897696,898004,897771,1306898,902736,1655058,861479,861578,861467,861455,1655060,864769,864978,864706,864718,864761,991147,864984,891878,863845,863848,1871434,891874,894986,895201,892297,863850,891888,894918,891881,891883,891885,892579,895208,1303729,1872234,895206,892582,891890,892669,895016,894970,863852,863854,863856,892554,892672,1871444,1871441,895238,892646,892643,894942,895240,892494,895247,895014,1303736,892625,892345,892342,891893,892349,894801,895219,892589,895217,895861,892352,895221,894814,892355,892596,895869,894933,895867,895233,895871,895199,894780,1303740,1944541,1049611,1860148,1049615,1049618,1806734,637540,1049691,1049696,1791567,1049574,1049720,1049686,1049721,1545910,1860137,1049604,724614,1806701,1049683,1791558,1049563,1049599,1545903,1049557,1860127,1860129,1049717,1791580,1545907,1806716,1806710,1049593,1944529,1049621,1049543,1049502,1860157,1049589,1113314,1806728,1791574,1806722,1944538,1790527,848768,1049584,1860151,1860154,1049214,1049658,1014599,1014632,1049251,1049651,2105822,1491832,1049635,1037259,1049270,1014615,1049233,1049225,1049580,1049260,1049221,1049267,836485,836395,1946525,999729,1148485,833711,835603,1248115,836466,849331,1148478,1148489,849561,836408,833713,849903,1946529,1946527,833709];

  var summaryentry = {"mhaOpiate":false}
  var detail ={}
  regimenList.forEach(function(e){
    var detailentry = {"mhaOpiate":false}
    var cui = parseInt(e,10)
    detailentry.mhaOpiate = mhaOpiateArray.indexOf(cui)!=-1
    detail[e]=detailentry
    summaryentry.mhaOpiate= ( summaryentry.mhaOpiate || detailentry.mhaOpiate )
  })
  jsonoutput.detail=detail
  jsonoutput.summary=summaryentry
  jsonoutput.condition_satisfied = summaryentry.mhaOpiate
  return jsonoutput
 }
