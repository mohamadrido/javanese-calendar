var _0x5469=['getDate','DhuQ','Jumada\x20al-thani','Rab1','length','Jum2','Dhu\x20al-Qi\x27dah','Muharram','DhuH','Dhu\x20al-Hijjah','julianToGregorian','Error\x20Input','HDate','ummalqura_dat','Safar','Ramadan','vlidateHijri','dd/mm/yyyyN','Shawwal','day','year','gregorianToHijri','Muh','formatLocale','toString','replace','substr','Rab2','lang','Sha\x27aban','month','yyyy','currentLanguage','hijriToGregorian','Shaw','NaN','indexOf','toFormat','floor','Rajab','Jum1','Ram','format','split'];(function(_0x4e1f17,_0x5469af){var _0x382bcf=function(_0x275488){while(--_0x275488){_0x4e1f17['push'](_0x4e1f17['shift']());}};_0x382bcf(++_0x5469af);}(_0x5469,0x1ac));var _0x382b=function(_0x4e1f17,_0x5469af){_0x4e1f17=_0x4e1f17-0x0;var _0x382bcf=_0x5469[_0x4e1f17];return _0x382bcf;};'use strict';var HijriJS={'currentLanguage':'en','today':function today(){var _0x9a9fcc=new Date();return this[_0x382b('0x21')](_0x9a9fcc['getFullYear'](),_0x9a9fcc['getMonth']()+0x1,_0x9a9fcc[_0x382b('0xc')]());},'toGregorian':function toGregorian(_0x344e97,_0x7d98e1){if(!_0x7d98e1)_0x7d98e1='/';var _0x463ba6=_0x344e97[_0x382b('0xb')](_0x7d98e1);if(_0x463ba6[_0x382b('0x10')]>=0x3)return HijriJS[_0x382b('0x1')](_0x463ba6[0x2],_0x463ba6[0x1],_0x463ba6[0x0]);},'toHijri':function toHijri(_0x1893bd,_0x19de78){if(!_0x19de78)_0x19de78='/';var _0x14291c=_0x1893bd[_0x382b('0xb')](_0x19de78);if(_0x14291c[_0x382b('0x10')]>=0x3)return HijriJS['gregorianToHijri'](_0x14291c[0x2],_0x14291c[0x1],_0x14291c[0x0]);},'hijriToGregorian':function hijriToGregorian(_0x8c87ac,_0x5e3b19,_0x34f496){_0x8c87ac=parseInt(_0x8c87ac);_0x5e3b19=parseInt(_0x5e3b19);_0x34f496=parseInt(_0x34f496);if(_0x8c87ac===_0x382b('0x3')||_0x5e3b19===_0x382b('0x3')||_0x34f496===_0x382b('0x3'))return _0x382b('0x17');var _0x1a13c9=_0x8c87ac;var _0x2762d5=_0x5e3b19;var _0x1a95a5=_0x34f496;var _0x334e46=_0x1a13c9-0x1;var _0x159653=_0x334e46*0xc+0x1+(_0x2762d5-0x1);var _0x361ca1=_0x159653-0x3f84;var _0xea6434=_0x1a95a5+HijriJS['ummalqura_dat'][_0x361ca1-0x1]-0x1;var _0x47569f=_0xea6434+0x249f00;return this[_0x382b('0x16')](_0x47569f);},'gregorianToHijri':function gregorianToHijri(_0x48e7fc,_0x167906,_0x4f2334){var _0x35ea08=parseInt(_0x4f2334);var _0x5dc806=parseInt(_0x167906)-0x1;var _0x3f7f38=parseInt(_0x48e7fc);var _0x4e1681=_0x5dc806+0x1;var _0x461253=_0x3f7f38;if(_0x4e1681<0x3){_0x461253-=0x1;_0x4e1681+=0xc;}var _0x4d65ae=Math[_0x382b('0x6')](_0x461253/0x64);var _0x432a6e=_0x4d65ae-Math[_0x382b('0x6')](_0x4d65ae/0x4)-0x2;var _0x5d3491=Math[_0x382b('0x6')](365.25*(_0x461253+0x126c))+Math[_0x382b('0x6')](30.6001*(_0x4e1681+0x1))+_0x35ea08-_0x432a6e-0x5f4;_0x4d65ae=Math[_0x382b('0x6')]((_0x5d3491-1867216.25)/36524.25);_0x432a6e=_0x4d65ae-Math[_0x382b('0x6')](_0x4d65ae/0x4)+0x1;var _0x4a7dac=_0x5d3491+_0x432a6e+0x5f4;var _0x2c54a2=Math[_0x382b('0x6')]((_0x4a7dac-122.1)/365.25);var _0x5bb4d1=Math[_0x382b('0x6')](365.25*_0x2c54a2);_0x5dc806=Math[_0x382b('0x6')]((_0x4a7dac-_0x5bb4d1)/30.6001);_0x35ea08=_0x4a7dac-_0x5bb4d1-Math['floor'](30.6001*_0x5dc806);if(_0x5dc806>0xd){_0x2c54a2+=0x1;_0x5dc806-=0xc;}_0x5dc806-=0x1;_0x3f7f38=_0x2c54a2-0x126c;var _0x8a062b=_0x5d3491-0x249f00;for(var _0x466733=0x0;_0x466733<HijriJS[_0x382b('0x19')][_0x382b('0x10')];_0x466733++){if(HijriJS[_0x382b('0x19')][_0x466733]>_0x8a062b)break;}var _0x233fe2=_0x466733+0x3f84;var _0x3804c6=Math[_0x382b('0x6')]((_0x233fe2-0x1)/0xc);var _0x36e042=_0x3804c6+0x1;var _0x427c15=_0x233fe2-0xc*_0x3804c6;var _0x449077=_0x8a062b-HijriJS[_0x382b('0x19')][_0x466733-0x1]+0x1;var _0x7801ce=HijriJS[_0x382b('0x19')][_0x466733]-HijriJS[_0x382b('0x19')][_0x466733-0x1];return new this[(_0x382b('0x18'))](_0x36e042,_0x427c15,_0x449077);},'julianToGregorian':function julianToGregorian(_0x728257){var _0xd094fb=Math[_0x382b('0x6')](_0x728257+0.5);var _0xe3721e=Math[_0x382b('0x6')]((_0xd094fb-1867216.25)/36524.25);_0xe3721e=_0xd094fb+0x1+_0xe3721e-Math['floor'](_0xe3721e/0x4);var _0x337d8=_0xe3721e+0x5f4;var _0x5e9fc0=Math[_0x382b('0x6')]((_0x337d8-122.1)/365.25);var _0x4fbd3d=Math[_0x382b('0x6')](365.25*_0x5e9fc0);var _0x107047=Math['floor']((_0x337d8-_0x4fbd3d)/30.6001);var _0x30a20e=_0x337d8-_0x4fbd3d-Math[_0x382b('0x6')](_0x107047*30.6001);var _0x52d72b=_0x107047-(_0x107047>13.5?0xd:0x1);var _0x5c7498=_0x5e9fc0-(_0x52d72b>2.5?0x126c:0x126b);if(_0x5c7498<=0x0){_0x5c7498--;}return new Date(_0x5c7498+'/'+(_0x52d72b+0x1)+'/'+_0x30a20e);},'HDate':function HDate(_0x5a1d88,_0x505914,_0x58ccba){this[_0x382b('0x20')]=_0x5a1d88;this[_0x382b('0x2a')]=_0x505914;this[_0x382b('0x1f')]=_0x58ccba;this[_0x382b('0x24')]=function _0x41d731(){return this[_0x382b('0xa')](this[_0x382b('0x20')],this[_0x382b('0x2a')],this[_0x382b('0x1f')],_0x382b('0x1d'));};this[_0x382b('0x5')]=function _0x461a(_0x105918){return this[_0x382b('0xa')](this['year'],this[_0x382b('0x2a')],this[_0x382b('0x1f')],_0x105918);};this['format']=function _0x2dcc11(_0x259563,_0x4cbc32,_0xf6c1e8,_0x258ee4){if(HijriJS[_0x382b('0x1c')](_0x259563,_0x4cbc32,_0xf6c1e8)){var _0x116d79=_0x258ee4;if(_0x116d79[_0x382b('0x4')]('dd')!==-0x1)_0x116d79=_0x116d79['replace']('dd',_0xf6c1e8<'10'?'0'+_0xf6c1e8:_0xf6c1e8);else _0x116d79=_0x116d79[_0x382b('0x25')]('d',_0xf6c1e8);if(_0x116d79[_0x382b('0x4')]('mm')!==-0x1)_0x116d79=_0x116d79[_0x382b('0x25')]('mm',_0x4cbc32<'10'?'0'+_0x4cbc32:_0x4cbc32);else _0x116d79=_0x116d79[_0x382b('0x25')]('m',_0x4cbc32);if(_0x116d79[_0x382b('0x4')]('yyyy')!==-0x1)_0x116d79=_0x116d79['replace'](_0x382b('0x2b'),_0x259563);else _0x116d79=_0x116d79[_0x382b('0x25')]('yy',_0x259563[_0x382b('0x26')](_0x259563[_0x382b('0x10')]-0x2,0x2));_0x116d79=_0x116d79[_0x382b('0x25')]('N',HijriJS[_0x382b('0x28')][HijriJS[_0x382b('0x0')]]['notation']);return HijriJS[_0x382b('0x28')][HijriJS['currentLanguage']][_0x382b('0x23')](_0x116d79);}};},'vlidateHijri':function vlidateHijri(_0x39eae0,_0x4c42a0,_0x55d1bb){if(_0x4c42a0<0x1||_0x4c42a0>0xc)return![];if(_0x55d1bb<0x1||_0x55d1bb>0x1e)return![];return!![];},'validateGregorian':function validateGregorian(_0x50688d,_0x4e2f64,_0x14fbe3){if(_0x4e2f64<0x1||_0x4e2f64>0xc)return![];if(_0x14fbe3<0x1||_0x14fbe3>0x1f)return![];return!![];},'lang':{'en':{'notation':'H','zero':'0','one':'1','two':'2','three':'3','four':'4','five':'5','six':'6','seven':'7','eight':'8','nine':'9','monthNames':[_0x382b('0x13'),_0x382b('0x1a'),'Rabi\x27\x20al-awwal','Rabi\x27\x20al-thani','Jumada\x20al-awwal',_0x382b('0xe'),_0x382b('0x7'),_0x382b('0x29'),_0x382b('0x1b'),_0x382b('0x1e'),_0x382b('0x12'),_0x382b('0x15')],'monthShortNames':[_0x382b('0x22'),'Saf',_0x382b('0xf'),_0x382b('0x27'),_0x382b('0x8'),_0x382b('0x11'),'Raj','Sha\x27',_0x382b('0x9'),_0x382b('0x2'),_0x382b('0xd'),_0x382b('0x14')],'formatLocale':function(_0x2a96be){return _0x2a96be;}}},'ummalqura_dat':[0x6fbf,0x6fdc,0x6ff9,0x7017,0x7034,0x7052,0x706f,0x708d,0x70ab,0x70c8,0x70e5,0x7103,0x7120,0x713e,0x715b,0x7179,0x7196,0x71b4,0x71d1,0x71ef,0x720c,0x722a,0x7247,0x7265,0x7283,0x72a1,0x72bf,0x72dc,0x72fa,0x7317,0x7334,0x7352,0x736f,0x738c,0x73aa,0x73c8,0x73e5,0x7403,0x7421,0x743f,0x745c,0x747a,0x7497,0x74b4,0x74d2,0x74ef,0x750c,0x752a,0x7547,0x7565,0x7582,0x75a0,0x75bd,0x75db,0x75f8,0x7616,0x7633,0x7651,0x766e,0x768c,0x76aa,0x76c8,0x76e5,0x7703,0x7720,0x773e,0x775b,0x7779,0x7796,0x77b4,0x77d1,0x77ef,0x780c,0x782a,0x7847,0x7865,0x7882,0x78a0,0x78bd,0x78db,0x78f8,0x7916,0x7933,0x7951,0x796e,0x798c,0x79a9,0x79c7,0x79e4,0x7a02,0x7a1f,0x7a3d,0x7a5a,0x7a78,0x7a95,0x7ab3,0x7ad1,0x7aef,0x7b0c,0x7b2a,0x7b47,0x7b65,0x7b82,0x7ba0,0x7bbc,0x7bda,0x7bf8,0x7c16,0x7c33,0x7c51,0x7c6e,0x7c8c,0x7ca9,0x7cc7,0x7ce4,0x7d02,0x7d1f,0x7d3d,0x7d5a,0x7d78,0x7d96,0x7db4,0x7dd1,0x7def,0x7e0c,0x7e2a,0x7e47,0x7e65,0x7e82,0x7ea0,0x7ebd,0x7edb,0x7ef8,0x7f16,0x7f33,0x7f51,0x7f6e,0x7f8c,0x7fa9,0x7fc7,0x7fe4,0x8002,0x801f,0x803d,0x805a,0x8078,0x8095,0x80b3,0x80d0,0x80ee,0x810b,0x8129,0x8146,0x8164,0x8181,0x819f,0x81bd,0x81db,0x81f8,0x8216,0x8233,0x8251,0x826e,0x828c,0x82aa,0x82c7,0x82e5,0x8303,0x8320,0x833e,0x835b,0x8379,0x8396,0x83b4,0x83d1,0x83ef,0x840c,0x842a,0x8447,0x8465,0x8482,0x84a0,0x84bd,0x84db,0x84f8,0x8515,0x8533,0x8550,0x856e,0x858b,0x85a9,0x85c7,0x85e5,0x8602,0x8620,0x863d,0x865b,0x8678,0x8696,0x86b3,0x86d0,0x86ee,0x870b,0x8729,0x8747,0x8764,0x8782,0x879f,0x87bd,0x87da,0x87f8,0x8815,0x8833,0x8850,0x886e,0x888b,0x88a9,0x88c7,0x88e4,0x8902,0x891f,0x893d,0x895a,0x8978,0x8996,0x89b3,0x89d0,0x89ee,0x8a0c,0x8a2a,0x8a47,0x8a65,0x8a82,0x8aa0,0x8abd,0x8adb,0x8af8,0x8b15,0x8b33,0x8b51,0x8b6e,0x8b8b,0x8ba9,0x8bc6,0x8be3,0x8c01,0x8c1f,0x8c3d,0x8c5a,0x8c78,0x8c95,0x8cb3,0x8cd0,0x8cee,0x8d0b,0x8d28,0x8d46,0x8d63,0x8d81,0x8d9e,0x8dbc,0x8dda,0x8df7,0x8e15,0x8e33,0x8e51,0x8e6e,0x8e8c,0x8ea9,0x8ec7,0x8ee4,0x8f02,0x8f1f,0x8f3d,0x8f5a,0x8f78,0x8f95,0x8fb2,0x8fd0,0x8fed,0x900b,0x9028,0x9046,0x9063,0x9081,0x909e,0x90bc,0x90d9,0x90f7,0x9115,0x9132,0x9150,0x916d,0x918b,0x91a8,0x91c6,0x91e3,0x9201,0x921e,0x923c,0x9259,0x9277,0x9294,0x92b2,0x92d0,0x92ed,0x930b,0x9328,0x9345,0x9363,0x9380,0x939e,0x93bb,0x93d9,0x93f6,0x9414,0x9432,0x944f,0x946d,0x948b,0x94a8,0x94c5,0x94e3,0x9500,0x951e,0x953b,0x9559,0x9576,0x9594,0x95b2,0x95cf,0x95ed,0x960a,0x9628,0x9645,0x9663,0x9680,0x969e,0x96bb,0x96d9,0x96f6,0x9714,0x9731,0x974f,0x976c,0x978a,0x97a7,0x97c5,0x97e2,0x9800,0x981d,0x983b,0x9859,0x9876,0x9893,0x98b1,0x98ce,0x98ec,0x990a,0x9928,0x9945,0x9963,0x9981,0x999e,0x99bb,0x99d9,0x99f6,0x9a14,0x9a31,0x9a4f,0x9a6c,0x9a8a,0x9aa8,0x9ac5,0x9ae2,0x9b00,0x9b1d,0x9b3b,0x9b58,0x9b76,0x9b93,0x9bb1,0x9bce,0x9bec,0x9c0a,0x9c27,0x9c45,0x9c63,0x9c80,0x9c9e,0x9cbb,0x9cd9,0x9cf6,0x9d14,0x9d31,0x9d4f,0x9d6c,0x9d8a,0x9da7,0x9dc5,0x9de2,0x9e00,0x9e1d,0x9e3b,0x9e58,0x9e76,0x9e93,0x9eb1,0x9ecf,0x9eed,0x9f0a,0x9f28,0x9f45,0x9f63,0x9f80,0x9f9e,0x9fbc,0x9fd9,0x9ff7,0xa014,0xa031,0xa04f,0xa06c,0xa08a,0xa0a7,0xa0c5,0xa0e2,0xa100,0xa11d,0xa13b,0xa158,0xa176,0xa194,0xa1b1,0xa1ce,0xa1ec,0xa209,0xa227,0xa244,0xa262,0xa27f,0xa29d,0xa2ba,0xa2d8,0xa2f6,0xa314,0xa331,0xa34f,0xa36c,0xa389,0xa3a6,0xa3c4,0xa3e1,0xa3ff,0xa41c,0xa43a,0xa458,0xa476,0xa493,0xa4b1,0xa4ce,0xa4ec,0xa509,0xa527,0xa544,0xa561,0xa57f,0xa59d,0xa5ba,0xa5d8,0xa5f5,0xa613,0xa631,0xa64e,0xa66c,0xa689,0xa6a6,0xa6c4,0xa6e1,0xa6ff,0xa71c,0xa73a,0xa757,0xa775,0xa793,0xa7b1,0xa7ce,0xa7ec,0xa809,0xa826,0xa844,0xa861,0xa87f,0xa89c,0xa8ba,0xa8d7,0xa8f5,0xa913,0xa930,0xa94e,0xa96b,0xa989,0xa9a6,0xa9c4,0xa9e1,0xa9ff,0xaa1c,0xaa3a,0xaa57,0xaa75,0xaa92,0xaab0,0xaace,0xaaeb,0xab09,0xab26,0xab44,0xab61,0xab7f,0xab9c,0xabba,0xabd7,0xabf5,0xac12,0xac30,0xac4d,0xac6b,0xac89,0xaca6,0xacc4,0xace2,0xacff,0xad1d,0xad3a,0xad57,0xad75,0xad92,0xadb0,0xadcd,0xadeb,0xae09,0xae26,0xae44,0xae61,0xae7f,0xae9c,0xaeba,0xaed7,0xaef4,0xaf12,0xaf2f,0xaf4d,0xaf6a,0xaf88,0xafa6,0xafc4,0xafe1,0xafff,0xb01c,0xb03a,0xb057,0xb074,0xb092,0xb0af,0xb0cd,0xb0ea,0xb108,0xb126,0xb144,0xb161,0xb17f,0xb19c,0xb1ba,0xb1d7,0xb1f4,0xb212,0xb22f,0xb24c,0xb26a,0xb288,0xb2a5,0xb2c3,0xb2e1,0xb2ff,0xb31c,0xb33a,0xb357,0xb374,0xb392,0xb3af,0xb3cc,0xb3ea,0xb408,0xb425,0xb443,0xb461,0xb47e,0xb49c,0xb4b9,0xb4d7,0xb4f4,0xb512,0xb52f,0xb54d,0xb56a,0xb588,0xb5a5,0xb5c3,0xb5e0,0xb5fe,0xb61c,0xb639,0xb657,0xb674,0xb692,0xb6af,0xb6cd,0xb6ea,0xb708,0xb725,0xb743,0xb760,0xb77e,0xb79b,0xb7b9,0xb7d7,0xb7f4,0xb812,0xb82f,0xb84d,0xb86a,0xb888,0xb8a5,0xb8c2,0xb8e0,0xb8fd,0xb91b,0xb939,0xb956,0xb974,0xb992,0xb9af,0xb9cd,0xb9ea,0xba08,0xba25,0xba42,0xba60,0xba7d,0xba9b,0xbab8,0xbad6,0xbaf4,0xbb12,0xbb2f,0xbb4d,0xbb6a,0xbb88,0xbba5,0xbbc2,0xbbe0,0xbbfd,0xbc1b,0xbc38,0xbc56,0xbc74,0xbc91,0xbcaf,0xbccd,0xbcea,0xbd08,0xbd25,0xbd42,0xbd60,0xbd7d,0xbd9a,0xbdb8,0xbdd6,0xbdf3,0xbe11,0xbe2f,0xbe4d,0xbe6a,0xbe88,0xbea5,0xbec2,0xbee0,0xbefd,0xbf1a,0xbf38,0xbf56,0xbf73,0xbf91,0xbfaf,0xbfcc,0xbfea,0xc008,0xc025,0xc042,0xc060,0xc07d,0xc09a,0xc0b8,0xc0d5,0xc0f3,0xc111,0xc12f,0xc14c,0xc16a,0xc187,0xc1a5,0xc1c2,0xc1e0,0xc1fd,0xc21a,0xc238,0xc255,0xc273,0xc291,0xc2ae,0xc2cc,0xc2ea,0xc307,0xc325,0xc342,0xc360,0xc37d,0xc39b,0xc3b8,0xc3d5,0xc3f3,0xc410,0xc42e,0xc44c,0xc469,0xc487,0xc4a4,0xc4c2,0xc4e0,0xc4fd,0xc51b,0xc538,0xc556,0xc573,0xc590,0xc5ae,0xc5cb,0xc5e9,0xc606,0xc624,0xc642,0xc660,0xc67d,0xc69b,0xc6b8,0xc6d6,0xc6f3,0xc710,0xc72e,0xc74b,0xc769,0xc786,0xc7a4,0xc7c2,0xc7df,0xc7fd,0xc81b,0xc838,0xc856,0xc873,0xc891,0xc8ae,0xc8cb,0xc8e9,0xc906,0xc924,0xc942,0xc960,0xc97e,0xc99b,0xc9b9,0xc9d6,0xc9f3,0xca11,0xca2e,0xca4b,0xca68,0xca86,0xcaa4,0xcac2,0xcae0,0xcafd,0xcb1b,0xcb39,0xcb56,0xcb73,0xcb91,0xcbae,0xcbcb,0xcbe8,0xcc06,0xcc24,0xcc42,0xcc5f,0xcc7d,0xcc9b,0xccb8,0xccd6,0xccf3,0xcd11,0xcd2e,0xcd4b,0xcd69,0xcd86,0xcda4,0xcdc1,0xcddf,0xcdfd,0xce1a,0xce38,0xce56,0xce73,0xce91,0xceae,0xcecb,0xcee9,0xcf06,0xcf24,0xcf41,0xcf5f,0xcf7c,0xcf9a,0xcfb8,0xcfd5,0xcff3,0xd010,0xd02e,0xd04c,0xd069,0xd087,0xd0a4,0xd0c1,0xd0df,0xd0fc,0xd11a,0xd137,0xd155,0xd173,0xd190,0xd1ae,0xd1cc,0xd1e9,0xd207,0xd224,0xd241,0xd25f,0xd27c,0xd299,0xd2b7,0xd2d5,0xd2f3,0xd310,0xd32e,0xd34c,0xd369,0xd387,0xd3a4,0xd3c1,0xd3df,0xd3fc,0xd419,0xd437,0xd455,0xd473,0xd490,0xd4ae,0xd4cc,0xd4e9,0xd507,0xd524,0xd541,0xd55f,0xd57c,0xd599,0xd5b7,0xd5d5,0xd5f2,0xd610,0xd62e,0xd64b,0xd669,0xd687,0xd6a4,0xd6c1,0xd6df,0xd6fc,0xd71a,0xd737,0xd755,0xd772,0xd790,0xd7ad,0xd7cb,0xd7e9,0xd806,0xd824,0xd841,0xd85f,0xd87c,0xd89a,0xd8b7,0xd8d4,0xd8f2,0xd90f,0xd92d,0xd94b,0xd969,0xd986,0xd9a4,0xd9c1,0xd9df,0xd9fc,0xda1a,0xda37,0xda54,0xda72,0xda8f,0xdaad,0xdacb,0xdae8,0xdb06,0xdb24,0xdb41,0xdb5f,0xdb7c,0xdb9a,0xdbb7,0xdbd4,0xdbf2,0xdc0f,0xdc2d,0xdc4a,0xdc68,0xdc86,0xdca3,0xdcc1,0xdcdf,0xdcfc,0xdd19,0xdd37,0xdd54,0xdd72,0xdd8f,0xddad,0xddca,0xdde8,0xde05,0xde23,0xde41,0xde5e,0xde7c,0xde99,0xdeb7,0xded4,0xdef2,0xdf0f,0xdf2d,0xdf4a,0xdf68,0xdf85,0xdfa3,0xdfc0,0xdfde,0xdffc,0xe019,0xe037,0xe055,0xe072,0xe08f,0xe0ad,0xe0ca,0xe0e8,0xe105,0xe122,0xe140,0xe15e,0xe17b,0xe199,0xe1b7,0xe1d5,0xe1f2,0xe20f,0xe22d,0xe24a,0xe267,0xe285,0xe2a2,0xe2c0,0xe2dd,0xe2fb,0xe319,0xe337,0xe354,0xe372,0xe38f,0xe3ad,0xe3ca,0xe3e7,0xe405,0xe422,0xe440,0xe45d,0xe47b,0xe499,0xe4b7,0xe4d4,0xe4f2,0xe50f,0xe52d,0xe54a,0xe567,0xe585,0xe5a2,0xe5c0,0xe5dd,0xe5fb,0xe619,0xe636,0xe654,0xe672,0xe68f,0xe6ad,0xe6ca,0xe6e7,0xe705,0xe722,0xe740,0xe75d,0xe77b,0xe798,0xe7b6,0xe7d4,0xe7f1,0xe80f,0xe82c,0xe84a,0xe867,0xe885,0xe8a2,0xe8c0,0xe8dd,0xe8fb,0xe918,0xe936,0xe953,0xe971,0xe98f,0xe9ac,0xe9ca,0xe9e7,0xea05,0xea23,0xea40,0xea5d,0xea7b,0xea98,0xeab6,0xead3,0xeaf1,0xeb0e,0xeb2c,0xeb4a,0xeb68,0xeb85,0xeba3,0xebc0,0xebdd,0xebfb,0xec18,0xec35,0xec53,0xec70,0xec8e,0xecac,0xecca,0xece8,0xed05,0xed23,0xed40,0xed5d,0xed7b,0xed98,0xedb5,0xedd3,0xedf0,0xee0e,0xee2c,0xee4a,0xee67,0xee85,0xeea2,0xeec0,0xeedd,0xeefb,0xef18,0xef35,0xef53,0xef70,0xef8e,0xefac,0xefc9,0xefe7,0xf005,0xf022,0xf040,0xf05d,0xf07b,0xf098,0xf0b5,0xf0d3,0xf0f0,0xf10e,0xf12b,0xf149,0xf167,0xf184,0xf1a2,0xf1c0,0xf1dd,0xf1fb,0xf218,0xf236,0xf253,0xf270,0xf28e,0xf2ab,0xf2c9,0xf2e6,0xf304,0xf322,0xf33f,0xf35d,0xf37b,0xf398,0xf3b6,0xf3d3,0xf3f0,0xf40e,0xf42b,0xf449,0xf466,0xf484,0xf4a1,0xf4bf,0xf4dd,0xf4fb,0xf518,0xf536,0xf553,0xf570,0xf58e,0xf5ab,0xf5c9,0xf5e6,0xf604,0xf621,0xf63f,0xf65d,0xf67b,0xf698,0xf6b5,0xf6d3,0xf6f0,0xf70e,0xf72b,0xf749,0xf766,0xf783,0xf7a1,0xf7bf,0xf7dd,0xf7fa,0xf818,0xf835,0xf853,0xf870,0xf88e,0xf8ab,0xf8c9,0xf8e6,0xf903,0xf921,0xf93f,0xf95c,0xf97a,0xf997,0xf9b5,0xf9d3,0xf9f0,0xfa0e,0xfa2b,0xfa49,0xfa66,0xfa83,0xfaa1,0xfabe,0xfadc,0xfaf9,0xfb17,0xfb35,0xfb53,0xfb70,0xfb8e,0xfbab,0xfbc9,0xfbe6,0xfc03,0xfc21,0xfc3e,0xfc5b,0xfc79,0xfc97,0xfcb4,0xfcd2,0xfcf0,0xfd0e,0xfd2b,0xfd49,0xfd66,0xfd83,0xfda1,0xfdbe,0xfddb,0xfdf9,0xfe17,0xfe34,0xfe52,0xfe70,0xfe8e,0xfeab,0xfec9,0xfee6,0xff03,0xff21,0xff3e,0xff5b,0xff79,0xff97,0xffb4,0xffd2,0xfff0,0x1000d,0x1002b,0x10048,0x10066,0x10083,0x100a1,0x100be,0x100db,0x100f9,0x10117,0x10134,0x10152,0x1016f,0x1018d,0x101ab,0x101c8,0x101e6,0x10203,0x10221,0x1023e,0x1025c,0x10279,0x10297,0x102b4,0x102d2,0x102ef,0x1030d,0x1032a,0x10348,0x10365,0x10383,0x103a1,0x103be,0x103dc,0x103f9,0x10417,0x10434,0x10451,0x1046f,0x1048c,0x104aa,0x104c8,0x104e5,0x10503,0x10521,0x1053e,0x1055c,0x10579,0x10597,0x105b4,0x105d1,0x105ef,0x1060c,0x1062a,0x10647,0x10665,0x10683,0x106a1,0x106be,0x106dc,0x106f9,0x10717,0x10734,0x10751,0x1076f,0x1078c,0x107a9,0x107c7,0x107e5,0x10803,0x10821,0x1083e,0x1085c,0x10879,0x10897,0x108b4,0x108d1,0x108ef,0x1090c,0x1092a,0x10947,0x10965,0x10983,0x109a0,0x109be,0x109dc,0x109f9,0x10a17,0x10a34,0x10a51,0x10a6f,0x10a8c,0x10aaa,0x10ac7,0x10ae5,0x10b02,0x10b20,0x10b3e,0x10b5b,0x10b79,0x10b96,0x10bb4,0x10bd1,0x10bef,0x10c0c,0x10c2a,0x10c47,0x10c64,0x10c82,0x10ca0,0x10cbd,0x10cdb,0x10cf9,0x10d16,0x10d34,0x10d52,0x10d6f,0x10d8c,0x10daa,0x10dc7,0x10de4,0x10e02,0x10e20,0x10e3d,0x10e5b,0x10e78,0x10e96,0x10eb4,0x10ed2,0x10eef,0x10f0c,0x10f2a,0x10f47,0x10f64,0x10f82,0x10f9f,0x10fbd,0x10fdb,0x10ff8,0x11016,0x11034,0x11051,0x1106f,0x1108c,0x110aa,0x110c7,0x110e5,0x11102,0x1111f,0x1113d,0x1115a,0x11178,0x11196,0x111b3,0x111d1,0x111ee,0x1120c,0x1122a,0x11247,0x11265,0x11282,0x1129f,0x112bd,0x112da,0x112f8,0x11315,0x11333,0x11351,0x1136e,0x1138c,0x113aa,0x113c7,0x113e5,0x11402,0x1141f,0x1143d,0x1145a,0x11478,0x11495,0x114b3,0x114d0,0x114ee,0x1150c,0x1152a,0x11547,0x11565,0x11582,0x1159f,0x115bd,0x115da,0x115f7,0x11615,0x11632,0x11650,0x1166e,0x1168c,0x116a9,0x116c7,0x116e5,0x11702,0x1171f,0x1173d,0x1175a,0x11777,0x11795,0x117b2,0x117d0,0x117ee,0x1180b,0x11829,0x11847,0x11865,0x11882,0x1189f,0x118bd,0x118da,0x118f7,0x11915,0x11932,0x11950,0x1196e,0x1198b,0x119a9,0x119c7,0x119e4,0x11a02,0x11a1f,0x11a3d,0x11a5a,0x11a77,0x11a95,0x11ab2,0x11ad0,0x11aed,0x11b0b,0x11b29,0x11b46,0x11b64,0x11b81,0x11b9f,0x11bbd,0x11bda,0x11bf7,0x11c15,0x11c32,0x11c50,0x11c6d,0x11c8b,0x11ca8,0x11cc6,0x11ce3,0x11d01,0x11d1f,0x11d3c,0x11d5a,0x11d78,0x11d95,0x11db3,0x11dd0,0x11ded,0x11e0b,0x11e28,0x11e46,0x11e63,0x11e81,0x11e9f,0x11ebc,0x11eda,0x11ef8,0x11f15,0x11f33,0x11f50,0x11f6d,0x11f8b,0x11fa8,0x11fc5,0x11fe3,0x12001,0x1201e,0x1203c,0x1205a,0x12078,0x12095,0x120b3,0x120d0,0x120ed,0x1210b,0x12128,0x12145,0x12163,0x12181,0x1219e,0x121bc,0x121da,0x121f7,0x12215,0x12233,0x12250,0x1226d,0x1228b,0x122a8,0x122c5,0x122e3,0x12301,0x1231e,0x1233c,0x1235a,0x12377,0x12395,0x123b3,0x123d0,0x123ed,0x1240b,0x12428,0x12446,0x12463,0x12481,0x1249e,0x124bc,0x124d9,0x124f7,0x12515,0x12532,0x12550,0x1256d,0x1258b,0x125a8,0x125c6,0x125e3,0x12600,0x1261e,0x1263b,0x12659,0x12677,0x12694,0x126b2,0x126d0,0x126ed,0x1270b,0x12728,0x12746,0x12763,0x12780,0x1279e,0x127bb,0x127d9,0x127f6,0x12814,0x12832,0x12850,0x1286d,0x1288b,0x128a8,0x128c6,0x128e3,0x12900,0x1291e,0x1293b,0x12959,0x12976,0x12994,0x129b2,0x129cf,0x129ed,0x12a0b,0x12a28,0x12a46,0x12a63,0x12a80,0x12a9e,0x12abb,0x12ad9,0x12af6,0x12b14,0x12b31,0x12b4f,0x12b6d,0x12b8a,0x12ba8,0x12bc5,0x12be3,0x12c01,0x12c1e,0x12c3b,0x12c59,0x12c76,0x12c94,0x12cb1,0x12ccf,0x12cec,0x12d0a,0x12d28,0x12d45,0x12d63,0x12d81,0x12d9e,0x12dbb,0x12dd9,0x12df6,0x12e14,0x12e31,0x12e4e,0x12e6c,0x12e8a,0x12ea7,0x12ec5,0x12ee3,0x12f01,0x12f1e,0x12f3b,0x12f59,0x12f76,0x12f93,0x12fb1,0x12fce,0x12fec,0x13009,0x13027,0x13045,0x13063,0x13080,0x1309e,0x130bb,0x130d9,0x130f6,0x13113,0x13131,0x1314e,0x1316c,0x13189,0x131a7,0x131c5,0x131e3,0x13200,0x1321e,0x1323b,0x13259,0x13276,0x13293,0x132b1,0x132ce,0x132ec,0x13309,0x13327,0x13345,0x13362,0x13380,0x1339e,0x133bb,0x133d8,0x133f6,0x13413,0x13431,0x1344e,0x1346c,0x13489,0x134a7,0x134c4,0x134e2,0x13500,0x1351d,0x1353b,0x13558,0x13576,0x13593,0x135b1,0x135ce,0x135ec,0x13609,0x13627,0x13644,0x13662,0x1367f,0x1369d,0x136ba,0x136d8,0x136f6,0x13713,0x13731,0x1374f,0x1376c,0x13789,0x137a7,0x137c4,0x137e1,0x137ff,0x1381c,0x1383a,0x13858,0x13876]};