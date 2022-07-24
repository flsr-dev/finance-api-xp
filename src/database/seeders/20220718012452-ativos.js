module.exports = {
  async up (queryInterface, _Sequelize) {

    await queryInterface.bulkInsert('Ativos', 
    [
      {
        cod_ativo: 1,
        simbolo_ativo: "BRFS3",
        valor: 15.36,
        qtde_ativo: 10568,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 2,
        simbolo_ativo: "SUZB3",
        valor: 45.64,
        qtde_ativo: 13532,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 3,
        simbolo_ativo: "SBSP3",
        valor: 42.38,
        qtde_ativo: 17944,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 4,
        simbolo_ativo: "RADL3",
        valor: 19.54,
        qtde_ativo: 7922,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 5,
        simbolo_ativo: "KLBN11",
        valor: 18.46,
        qtde_ativo: 13725,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 6,
        simbolo_ativo: "IGTI11",
        valor: 18.48,
        qtde_ativo: 11709,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 7,
        simbolo_ativo: "WEGE3",
        valor: 25.33,
        qtde_ativo: 28992,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 8,
        simbolo_ativo: "ASAI3",
        valor: 15.41,
        qtde_ativo: 15079,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 9,
        simbolo_ativo: "TAEE11",
        valor: 39.65,
        qtde_ativo: 1476,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 10,
        simbolo_ativo: "SLCE3",
        valor: 41.75,
        qtde_ativo: 15718,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 11,
        simbolo_ativo: "CMIG4",
        valor: 10.51,
        qtde_ativo: 23708,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 12,
        simbolo_ativo: "RENT3",
        valor: 54.81,
        qtde_ativo: 5746,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 13,
        simbolo_ativo: "PETR3",
        valor: 31.59,
        qtde_ativo: 11972,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 14,
        simbolo_ativo: "PETR4",
        valor: 29.02,
        qtde_ativo: 22160,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 15,
        simbolo_ativo: "BRML3",
        valor: 7.74,
        qtde_ativo: 880,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 16,
        simbolo_ativo: "MULT3",
        valor: 23.74,
        qtde_ativo: 15612,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 17,
        simbolo_ativo: "BBSE3",
        valor: 27.62,
        qtde_ativo: 19148,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 18,
        simbolo_ativo: "ENGI11",
        valor: 40.27,
        qtde_ativo: 4063,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 19,
        simbolo_ativo: "EGIE3",
        valor: 41.78,
        qtde_ativo: 28458,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 20,
        simbolo_ativo: "VALE3",
        valor: 68.56,
        qtde_ativo: 1335,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 21,
        simbolo_ativo: "EZTC3",
        valor: 16.23,
        qtde_ativo: 28163,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 22,
        simbolo_ativo: "FLRY3",
        valor: 15.14,
        qtde_ativo: 9304,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 23,
        simbolo_ativo: "BPAN4",
        valor: "07.02",
        qtde_ativo: 21850,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 24,
        simbolo_ativo: "LWSA3",
        valor: 6.69,
        qtde_ativo: 12761,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 25,
        simbolo_ativo: "CPLE6",
        valor: 6.85,
        qtde_ativo: 1122,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 26,
        simbolo_ativo: "NTCO3",
        valor: 15.73,
        qtde_ativo: 3542,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 27,
        simbolo_ativo: "HYPE3",
        valor: 39.65,
        qtde_ativo: 24959,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 28,
        simbolo_ativo: "ENBR3",
        valor: 21.16,
        qtde_ativo: 28850,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 29,
        simbolo_ativo: "CRFB3",
        valor: 16.82,
        qtde_ativo: 8026,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 30,
        simbolo_ativo: "RAIL3",
        valor: 16.01,
        qtde_ativo: 25684,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 31,
        simbolo_ativo: "ECOR3",
        valor: 5.38,
        qtde_ativo: 15502,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 32,
        simbolo_ativo: "CCRO3",
        valor: 12.25,
        qtde_ativo: 9590,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 33,
        simbolo_ativo: "GOAU4",
        valor: 9.92,
        qtde_ativo: 18579,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 34,
        simbolo_ativo: "ELET3",
        valor: 44.56,
        qtde_ativo: 21742,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 35,
        simbolo_ativo: "ELET6",
        valor: 45.64,
        qtde_ativo: 20515,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 36,
        simbolo_ativo: "IRBR3",
        valor: 2.18,
        qtde_ativo: 11331,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 37,
        simbolo_ativo: "AMER3",
        valor: 16.93,
        qtde_ativo: 25870,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 38,
        simbolo_ativo: "MGLU3",
        valor: "03.01",
        qtde_ativo: 22888,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 39,
        simbolo_ativo: "VIIA3",
        valor: 2.63,
        qtde_ativo: 21849,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 40,
        simbolo_ativo: "AZUL4",
        valor: 12.11,
        qtde_ativo: 15314,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 41,
        simbolo_ativo: "BEEF3",
        valor: 13.79,
        qtde_ativo: 13008,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 42,
        simbolo_ativo: "PETZ3",
        valor: 10.28,
        qtde_ativo: 5719,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 43,
        simbolo_ativo: "CVCB3",
        valor: "07.01",
        qtde_ativo: 5179,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 44,
        simbolo_ativo: "COGN3",
        valor: 2.29,
        qtde_ativo: 28675,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 45,
        simbolo_ativo: "RRRP3",
        valor: 30.45,
        qtde_ativo: 18563,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 46,
        simbolo_ativo: "MRVE3",
        valor: 8.94,
        qtde_ativo: 7113,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 47,
        simbolo_ativo: "DXCO3",
        valor: 10,
        qtde_ativo: 19366,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 48,
        simbolo_ativo: "GOLL4",
        valor: 8.19,
        qtde_ativo: 3931,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 49,
        simbolo_ativo: "SANB11",
        valor: 28.3,
        qtde_ativo: 16078,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 50,
        simbolo_ativo: "CASH3",
        valor: 1.11,
        qtde_ativo: 2581,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 51,
        simbolo_ativo: "B3SA3",
        valor: 11.01,
        qtde_ativo: 6060,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 52,
        simbolo_ativo: "VBBR3",
        valor: 16.98,
        qtde_ativo: 26836,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 53,
        simbolo_ativo: "CMIN3",
        valor: 3.49,
        qtde_ativo: 17081,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 54,
        simbolo_ativo: "SOMA3",
        valor: 10.02,
        qtde_ativo: 15790,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 55,
        simbolo_ativo: "HAPV3",
        valor: "06.09",
        qtde_ativo: 2169,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 56,
        simbolo_ativo: "MRFG3",
        valor: 13.68,
        qtde_ativo: 23594,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 57,
        simbolo_ativo: "BRKM5",
        valor: 34.77,
        qtde_ativo: 5819,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 58,
        simbolo_ativo: "TOTS3",
        valor: 26.37,
        qtde_ativo: 7846,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 59,
        simbolo_ativo: "UGPA3",
        valor: 12.68,
        qtde_ativo: 20190,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 60,
        simbolo_ativo: "LREN3",
        valor: 24.82,
        qtde_ativo: 6664,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 61,
        simbolo_ativo: "CSAN3",
        valor: 17.77,
        qtde_ativo: 17461,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 62,
        simbolo_ativo: "USIM5",
        valor: "09.05",
        qtde_ativo: 18043,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 63,
        simbolo_ativo: "JHSF3",
        valor: 5.68,
        qtde_ativo: 3559,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 64,
        simbolo_ativo: "YDUQ3",
        valor: 14.09,
        qtde_ativo: 13884,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 65,
        simbolo_ativo: "BBDC4",
        valor: 17.27,
        qtde_ativo: 29691,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 66,
        simbolo_ativo: "ENEV3",
        valor: 14.53,
        qtde_ativo: 13082,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 67,
        simbolo_ativo: "EQTL3",
        valor: 23.34,
        qtde_ativo: 15907,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 68,
        simbolo_ativo: "ITUB4",
        valor: 23.51,
        qtde_ativo: 28261,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 69,
        simbolo_ativo: "ITSA4",
        valor: 8.56,
        qtde_ativo: 20509,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 70,
        simbolo_ativo: "CIEL3",
        valor: 4.12,
        qtde_ativo: 29269,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 71,
        simbolo_ativo: "EMBR3",
        valor: 11.98,
        qtde_ativo: 4617,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 72,
        simbolo_ativo: "RDOR3",
        valor: 30.53,
        qtde_ativo: 5609,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 73,
        simbolo_ativo: "BBDC3",
        valor: 14.27,
        qtde_ativo: 2625,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 74,
        simbolo_ativo: "POSI3",
        valor: 6.69,
        qtde_ativo: 21858,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 75,
        simbolo_ativo: "PRIO3",
        valor: 22.84,
        qtde_ativo: 20228,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 76,
        simbolo_ativo: "BPAC11",
        valor: 22.63,
        qtde_ativo: 4268,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 77,
        simbolo_ativo: "BBAS3",
        valor: 34.9,
        qtde_ativo: 27074,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 78,
        simbolo_ativo: "CYRE3",
        valor: 12.34,
        qtde_ativo: 17591,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 79,
        simbolo_ativo: "PCAR3",
        valor: 17,
        qtde_ativo: 4083,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 80,
        simbolo_ativo: "BRAP4",
        valor: 22.43,
        qtde_ativo: 5296,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 81,
        simbolo_ativo: "JBSS3",
        valor: 30.87,
        qtde_ativo: 5633,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 82,
        simbolo_ativo: "ALPA4",
        valor: 20.71,
        qtde_ativo: 20524,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 83,
        simbolo_ativo: "CSNA3",
        valor: 14.46,
        qtde_ativo: 17154,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 84,
        simbolo_ativo: "ABEV3",
        valor: 14.56,
        qtde_ativo: 12975,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 85,
        simbolo_ativo: "SULA11",
        valor: 22.17,
        qtde_ativo: 23256,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 86,
        simbolo_ativo: "VIVT3",
        valor: 46.98,
        qtde_ativo: 27474,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 87,
        simbolo_ativo: "QUAL3",
        valor: 10.46,
        qtde_ativo: 23209,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 88,
        simbolo_ativo: "GGBR4",
        valor: 23.84,
        qtde_ativo: 14018,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 89,
        simbolo_ativo: "CPFE3",
        valor: 32.17,
        qtde_ativo: 28052,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      },
      {
        cod_ativo: 90,
        simbolo_ativo: "TIMS3",
        valor: 12.91,
        qtde_ativo: 17855,
        criacao: new Date('2011-08-01T19:58:00.000Z'),
        atualizacao: new Date('2011-08-01T19:58:00.000Z')
      }
    ]

      , {});

  },

  async down (queryInterface, _Sequelize) {

    await queryInterface.bulkDelete('Ativos', null, {});

  }
};
