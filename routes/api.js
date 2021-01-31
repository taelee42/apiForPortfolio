var express = require('express');
var router = express.Router();
const path = require('path');



/* GET home page. */
router.get('/product-options', function(req, res, next) {
  let json = [
    {
      "id": "1",
      "optionName": "라이언"
    },
    {
      "id": "2",
      "optionName": "어피치"
    },
    {
      "id": "5",
      "optionName": "네오"
    },
    {
      "id": "6",

      "optionName": "튜브"
    },
    {
      "id": "7",
      "optionName": "Jay-G"
    },
    {
      "id": "8",
      "optionName": "콘"
    }
  ]
  res.json(json);
});

router.get('/product-options/:pageID', function(req, res, next) {
  let json = [
    [
      {
        "id": "11",
        "optionName": "기본",
        "parentOptionId": "1"
      },
      {
        "id": "12",
        "optionName": "제주도",
        "parentOptionId": "1"
      },
      {
        "id": "13",
        "optionName": "베이베",
        "parentOptionId": "1"
      },
      {
        "id": "14",
        "optionName": "땅콩",
        "parentOptionId": "1"
      },
      {
        "id": "15",
        "optionName": "자는 인형",
        "parentOptionId": "1"
      }
    ],


    [
      {
        "id": "21",
        "optionName": "기본",
        "parentOptionId": "2"
      },
      {
        "id": "22",
        "optionName": "서핑",
        "parentOptionId": "2"
      },
      {
        "id": "23",
        "optionName": "베이비",
        "parentOptionId": "2"
      },
      {
        "id": "24",
        "optionName": "한정판",
        "parentOptionId": "2"
      },
      {
        "id": "25",
        "optionName": "특대 사이즈",
        "parentOptionId": "2"
      }
    ],
    [],
    [],

    [
      {
        "id": "51",
        "optionName": "기본",
        "parentOptionId": "5"
      },
      {
        "id": "52",
        "optionName": "꾸벅꾸벅",
        "parentOptionId": "5"
      },
      {
        "id": "53",
        "optionName": "리틀프렌즈",
        "parentOptionId": "5"
      },
      {
        "id": "54",
        "optionName": "꾸벅꾸벅",
        "parentOptionId": "5"
      }
    ],


    [
      {
        "id": "61",
        "optionName": "기본",
        "parentOptionId": "6"
      },
      {
        "id": "62",
        "optionName": "콧물",
        "parentOptionId": "6"
      },
      {
        "id": "63",
        "optionName": "리틀 프렌즈",
        "parentOptionId": "6"
      },
      {
        "id": "64",
        "optionName": "대형 사이즈",
        "parentOptionId": "6"
      },
      {
        "id": "65",
        "optionName": "웃는모습",
        "parentOptionId": "6"
      }
    ],

    [
      {
        "id": "71",
        "optionName": "기본",
        "parentOptionId": "7"
      },
      {
        "id": "72",
        "optionName": "댄스",
        "parentOptionId": "7"
      },
      {
        "id": "73",
        "optionName": "리틀 프렌즈",
        "parentOptionId": "7"
      },
      {
        "id": "74",
        "optionName": "베이비 필로우",
        "parentOptionId": "7"
      }
    ],


    [
      {
        "id": "81",
        "optionName": "기본",
        "parentOptionId": "8"
      },
      {
        "id": "82",
        "optionName": "중형 사이즈",
        "parentOptionId": "8"
      },
      {
        "id": "83",
        "optionName": "특대 사이즈",
        "parentOptionId": "8"
      },
      {
        "id": "84",
        "optionName": "한정판",
        "parentOptionId": "8"
      }
    ]
  ]
  res.json(json[req.params.pageID - 1]);

});

router.get('/stocks/:stockID', function(req, res, next) {
  let json = {
    11: {
      "11": {
        "stock": 6,
        "optionPrice": 10000
      }
    },
    12: {
      "12": {
        "stock": 0,
        "optionPrice": 0
      }
    },
    13: {
      "13": {
        "stock": 7,
        "optionPrice": 0
      }
    },
    14: {
      "14": {
        "stock": 0,
        "optionPrice": 9000
      }
    },
    15: {
      "15": {
        "stock": 0,
        "optionPrice": 0
      }
    },
    21: {
      "21": {
        "stock": 3,
        "optionPrice": 9000
      }
    },
    22: {
      "22": {
        "stock": 10,
        "optionPrice": 9000
      }
    },
    23:{
      "23": {
        "stock": 5,
        "optionPrice": 0
      }
    },
    24: {
      "24": {
        "stock": 5,
        "optionPrice": 3000
      }
    },
    25:{
      "25": {
        "stock": 0,
        "optionPrice": 6000
      }
    },
    51:{
      "51": {
        "stock": 0,
        "optionPrice": 0
      }
    },
    52:{
      "52": {
        "stock": 4,
        "optionPrice": 8000
      }
    },
    53:{
      "53": {
        "stock": 5,
        "optionPrice": 7000
      }
    },
    54:{},
    61:{
      "61": {
        "stock": 4,
        "optionPrice": 4000
      }
    },
    62: {
      "62": {
        "stock": 0,
        "optionPrice": 0
      }
    },
    63: {
      "63": {
        "stock": 5,
        "optionPrice": 3000
      }
    },
    64: {
      "64": {
        "stock": 6,
        "optionPrice": 0
      }
    },
    65: {},
    71: {
      "71": {
        "stock": 7,
        "optionPrice": 0
      }
    },
    72: {
      "72": {
        "stock": 6,
        "optionPrice": 0
      }
    },
    73: {
      "73": {
        "stock": 7,
        "optionPrice": 0
      }
    },
    74: {
      "74": {
        "stock": 7,
        "optionPrice": 7000
      }
    },
    81: {
      "81": {
        "stock": 0,
        "optionPrice": 0
      }
    },
    82: {
      "82": {
        "stock": 6,
        "optionPrice": 3000
      }
    },
    83: {
      "83": {
        "stock": 6,
        "optionPrice": 8000
      }
    },
    84:
      {
        "84": {
          "stock": 3,
          "optionPrice": 15000
        }
      },
  }
  res.json(json[req.params.stockID]);
});

module.exports = router;
