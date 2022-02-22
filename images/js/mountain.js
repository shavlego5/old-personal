function resizeScreen() {
  let mountain1 = [0, window.innerHeight];
  let mountain2 = [
    (window.innerWidth * 15) / 100,
    (window.innerHeight * 70) / 100
  ];
  let mountain3 = [
    (window.innerWidth * 20) / 100,
    (window.innerHeight * 60) / 100
  ];
  let mountain4 = [
    (window.innerWidth * 25) / 100,
    (window.innerHeight * 70) / 100
  ];
  let mountain5 = [(window.innerWidth * 40) / 100, window.innerHeight];
  let mountain6 = [(window.innerWidth * 20) / 100, window.innerHeight];
  let mountain7 = [
    (window.innerWidth * 15) / 100,
    (window.innerHeight * 73) / 100
  ];
  let mountain8 = [
    (window.innerWidth * 16) / 100,
    (window.innerHeight * 71) / 100
  ];
  let mountain9 = [
    (window.innerWidth * 17) / 100,
    (window.innerHeight * 72) / 100
  ];
  let mountain10 = [
    (window.innerWidth * 18) / 100,
    (window.innerHeight * 74) / 100
  ];
  let mountain11 = [
    (window.innerWidth * 19) / 100,
    (window.innerHeight * 68) / 100
  ];
  let mountain12 = [
    (window.innerWidth * 20) / 100,
    (window.innerHeight * 76) / 100
  ];
  let mountain13 = [
    (window.innerWidth * 21) / 100,
    (window.innerHeight * 69) / 100
  ];
  let mountain14 = [
    (window.innerWidth * 22.5) / 100,
    (window.innerHeight * 75) / 100
  ];
  let mountain15 = [
    (window.innerWidth * 23) / 100,
    (window.innerHeight * 68) / 100
  ];
  let mountain22 = [
    (window.innerWidth * 45) / 100,
    (window.innerHeight * 40) / 100
  ];
  let mountain37 = [(window.innerWidth * 45) / 100, window.innerHeight];
  let mountain24 = [(window.innerWidth * 30) / 100, window.innerHeight];
  let mountain35 = [
    (window.innerWidth * 57) / 100,
    (window.innerHeight * 25) / 100
  ];
  let mountain36 = [(window.innerWidth * 57) / 100, window.innerHeight];
  let mountain16 = [
    (window.innerWidth * 37.5) / 100,
    (window.innerHeight * 58) / 100
  ];
  let mountain17 = [
    (window.innerWidth * 39) / 100,
    (window.innerHeight * 64) / 100
  ];
  let mountain18 = [
    (window.innerWidth * 42) / 100,
    (window.innerHeight * 56) / 100
  ];
  let mountain19 = [
    (window.innerWidth * 44) / 100,
    (window.innerHeight * 61.1) / 100
  ];
  let mountain21 = [
    (window.innerWidth * 45) / 100,
    (window.innerHeight * 58.5) / 100
  ];
  let mountain23 = [(window.innerWidth * 70) / 100, window.innerHeight];
  let mountain39 = [(window.innerWidth * 84) / 100, window.innerHeight];

  let mountain41 = [
    (window.innerWidth * 77) / 100,
    (window.innerHeight * 50) / 100
  ];
  let mountain38 = [(window.innerWidth * 77) / 100, window.innerHeight];
  let mountain40 = [(window.innerWidth * 97) / 100, window.innerHeight];

  let radiusi = [(window.innerHeight * 20) / 100];

  let mountain20 = [
    (window.innerWidth * 44.5) / 100,
    (window.innerHeight * 60) / 100
  ];
  let mountain25 = [
    (window.innerWidth * 48) / 100,
    (window.innerHeight * 62) / 100
  ];
  let mountain26 = [
    (window.innerWidth * 50) / 100,
    (window.innerHeight * 66) / 100
  ];
  let mountain27 = [
    (window.innerWidth * 52) / 100,
    (window.innerHeight * 57) / 100
  ];
  let mountain28 = [
    (window.innerWidth * 54) / 100,
    (window.innerHeight * 60) / 100
  ];
  let mountain29 = [
    (window.innerWidth * 57) / 100,
    (window.innerHeight * 56) / 100
  ];
  let mountain30 = [
    (window.innerWidth * 59) / 100,
    (window.innerHeight * 52) / 100
  ];
  let mountain31 = [
    (window.innerWidth * 61) / 100,
    (window.innerHeight * 59) / 100
  ];
  let mountain32 = [
    (window.innerWidth * 64) / 100,
    (window.innerHeight * 56) / 100
  ];
  let mountain33 = [
    (window.innerWidth * 67) / 100,
    (window.innerHeight * 63) / 100
  ];
  let mountain34 = [
    (window.innerWidth * 68.5) / 100,
    (window.innerHeight * 57) / 100
  ];
  let mountain49 = [
    (window.innerWidth * 71.3) / 100,
    (window.innerHeight * 64.5) / 100
  ];
  let mountain48 = [
    (window.innerWidth * 73) / 100,
    (window.innerHeight * 69.5) / 100
  ];
  let mountain47 = [
    (window.innerWidth * 76) / 100,
    (window.innerHeight * 73) / 100
  ];
  let mountain46 = [
    (window.innerWidth * 77) / 100,
    (window.innerHeight * 67) / 100
  ];
  let mountain45 = [
    (window.innerWidth * 79) / 100,
    (window.innerHeight * 72) / 100
  ];
  let mountain44 = [
    (window.innerWidth * 80) / 100,
    (window.innerHeight * 66) / 100
  ];
  let mountain43 = [
    (window.innerWidth * 83) / 100,
    (window.innerHeight * 75) / 100
  ];
  let mountain42 = [
    (window.innerWidth * 83.8) / 100,
    (window.innerHeight * 67) / 100
  ];

  let cloud11x = 40;
  let cloud11y = 100;
  let cloud11r = 40;

  document.getElementById("cloud11").setAttribute("cx", cloud11x);
  document.getElementById("cloud11").setAttribute("cy", cloud11y);
  document.getElementById("cloud11").setAttribute("r", cloud11r);

  let cloud12x = 140;
  let cloud12y = 100;
  let cloud12r = 60;

  document.getElementById("cloud12").setAttribute("cx", cloud12x);
  document.getElementById("cloud12").setAttribute("cy", cloud12y);
  document.getElementById("cloud12").setAttribute("r", cloud12r);

  let cloud13x = 200;
  let cloud13y = 100;
  let cloud13r = 30;

  document.getElementById("cloud13").setAttribute("cx", cloud13x);
  document.getElementById("cloud13").setAttribute("cy", cloud13y);
  document.getElementById("cloud13").setAttribute("r", cloud13r);

  let cloud14x = 90;
  let cloud14y = 80;
  let cloud14r = 50;

  document.getElementById("cloud14").setAttribute("cx", cloud14x);
  document.getElementById("cloud14").setAttribute("cy", cloud14y);
  document.getElementById("cloud14").setAttribute("r", cloud14r);

  let cloud15x = 90;
  let cloud15y = 120;
  let cloud15r = 50;

  document.getElementById("cloud15").setAttribute("cx", cloud15x);
  document.getElementById("cloud15").setAttribute("cy", cloud15y);
  document.getElementById("cloud15").setAttribute("r", cloud15r);

  document.getElementById("cloud21").setAttribute("cx", cloud11x);
  document.getElementById("cloud21").setAttribute("cy", cloud11y);
  document.getElementById("cloud21").setAttribute("r", cloud11r);

  document.getElementById("cloud22").setAttribute("cx", cloud12x);
  document.getElementById("cloud22").setAttribute("cy", cloud12y);
  document.getElementById("cloud22").setAttribute("r", cloud12r);

  document.getElementById("cloud23").setAttribute("cx", cloud13x);
  document.getElementById("cloud23").setAttribute("cy", cloud13y);
  document.getElementById("cloud23").setAttribute("r", cloud13r);

  document.getElementById("cloud24").setAttribute("cx", cloud14x);
  document.getElementById("cloud24").setAttribute("cy", cloud14y);
  document.getElementById("cloud24").setAttribute("r", cloud14r);

  document.getElementById("cloud25").setAttribute("cx", cloud15x);
  document.getElementById("cloud25").setAttribute("cy", cloud15y);
  document.getElementById("cloud25").setAttribute("r", cloud15r);

  let cloud21x = 20;
  let cloud21y = 50;
  let cloud21r = 20;

  let cloud22x = 70;
  let cloud22y = 50;
  let cloud22r = 30;

  let cloud23x = 100;
  let cloud23y = 50;
  let cloud23r = 15;

  let cloud24x = 45;
  let cloud24y = 40;
  let cloud24r = 25;

  let cloud25x = 45;
  let cloud25y = 60;
  let cloud25r = 25;

  document.getElementById("cloud31").setAttribute("cx", cloud21x);
  document.getElementById("cloud31").setAttribute("cy", cloud21y);
  document.getElementById("cloud31").setAttribute("r", cloud21r);

  document.getElementById("cloud32").setAttribute("cx", cloud22x);
  document.getElementById("cloud32").setAttribute("cy", cloud22y);
  document.getElementById("cloud32").setAttribute("r", cloud22r);

  document.getElementById("cloud33").setAttribute("cx", cloud23x);
  document.getElementById("cloud33").setAttribute("cy", cloud23y);
  document.getElementById("cloud33").setAttribute("r", cloud23r);

  document.getElementById("cloud34").setAttribute("cx", cloud24x);
  document.getElementById("cloud34").setAttribute("cy", cloud24y);
  document.getElementById("cloud34").setAttribute("r", cloud24r);

  document.getElementById("cloud35").setAttribute("cx", cloud25x);
  document.getElementById("cloud35").setAttribute("cy", cloud25y);
  document.getElementById("cloud35").setAttribute("r", cloud25r);

  document.getElementById("cloud41").setAttribute("cx", cloud21x);
  document.getElementById("cloud41").setAttribute("cy", cloud21y);
  document.getElementById("cloud41").setAttribute("r", cloud21r);

  document.getElementById("cloud42").setAttribute("cx", cloud22x);
  document.getElementById("cloud42").setAttribute("cy", cloud22y);
  document.getElementById("cloud42").setAttribute("r", cloud22r);

  document.getElementById("cloud43").setAttribute("cx", cloud23x);
  document.getElementById("cloud43").setAttribute("cy", cloud23y);
  document.getElementById("cloud43").setAttribute("r", cloud23r);

  document.getElementById("cloud44").setAttribute("cx", cloud24x);
  document.getElementById("cloud44").setAttribute("cy", cloud24y);
  document.getElementById("cloud44").setAttribute("r", cloud24r);

  document.getElementById("cloud45").setAttribute("cx", cloud25x);
  document.getElementById("cloud45").setAttribute("cy", cloud25y);
  document.getElementById("cloud45").setAttribute("r", cloud25r);

  document.getElementById("cloud51").setAttribute("cx", cloud21x);
  document.getElementById("cloud51").setAttribute("cy", cloud21y);
  document.getElementById("cloud51").setAttribute("r", cloud21r);

  document.getElementById("cloud52").setAttribute("cx", cloud22x);
  document.getElementById("cloud52").setAttribute("cy", cloud22y);
  document.getElementById("cloud52").setAttribute("r", cloud22r);

  document.getElementById("cloud53").setAttribute("cx", cloud23x);
  document.getElementById("cloud53").setAttribute("cy", cloud23y);
  document.getElementById("cloud53").setAttribute("r", cloud23r);

  document.getElementById("cloud54").setAttribute("cx", cloud24x);
  document.getElementById("cloud54").setAttribute("cy", cloud24y);
  document.getElementById("cloud54").setAttribute("r", cloud24r);

  document.getElementById("cloud55").setAttribute("cx", cloud25x);
  document.getElementById("cloud55").setAttribute("cy", cloud25y);
  document.getElementById("cloud55").setAttribute("r", cloud25r);

  document.getElementById("cloud61").setAttribute("cx", cloud21x);
  document.getElementById("cloud61").setAttribute("cy", cloud21y);
  document.getElementById("cloud61").setAttribute("r", cloud21r);

  document.getElementById("cloud62").setAttribute("cx", cloud22x);
  document.getElementById("cloud62").setAttribute("cy", cloud22y);
  document.getElementById("cloud62").setAttribute("r", cloud22r);

  document.getElementById("cloud63").setAttribute("cx", cloud23x);
  document.getElementById("cloud63").setAttribute("cy", cloud23y);
  document.getElementById("cloud63").setAttribute("r", cloud23r);

  document.getElementById("cloud64").setAttribute("cx", cloud24x);
  document.getElementById("cloud64").setAttribute("cy", cloud24y);
  document.getElementById("cloud64").setAttribute("r", cloud24r);

  document.getElementById("cloud65").setAttribute("cx", cloud25x);
  document.getElementById("cloud65").setAttribute("cy", cloud25y);
  document.getElementById("cloud65").setAttribute("r", cloud25r);

  let mountainP1 =
    mountain1.toString() +
    " " +
    mountain3.toString() +
    " " +
    mountain6.toString();
  let mountainP2 =
    mountain2.toString() +
    " " +
    mountain7.toString() +
    " " +
    mountain8.toString() +
    " " +
    mountain9.toString() +
    " " +
    mountain10.toString() +
    " " +
    mountain11.toString() +
    " " +
    mountain12.toString() +
    " " +
    mountain3.toString() +
    " " +
    mountain2.toString();
  let mountainP3 =
    mountain6.toString() +
    " " +
    mountain3.toString() +
    " " +
    mountain5.toString();
  let mountainP4 =
    mountain12.toString() +
    " " +
    mountain13.toString() +
    " " +
    mountain14.toString() +
    " " +
    mountain15.toString() +
    " " +
    mountain4.toString() +
    " " +
    mountain3.toString() +
    " " +
    mountain12.toString();
  let mountainP5 =
    mountain6.toString() +
    " " +
    mountain37.toString() +
    " " +
    mountain22.toString();
  let mountainP6 =
    mountain24.toString() +
    " " +
    mountain35.toString() +
    " " +
    mountain36.toString();
  let mountainP7 =
    mountain16.toString() +
    " " +
    mountain17.toString() +
    " " +
    mountain18.toString() +
    " " +
    mountain19.toString() +
    " " +
    mountain21.toString() +
    " " +
    mountain22.toString() +
    " " +
    mountain16.toString();
  let mountainP8 =
    mountain37.toString() +
    " " +
    mountain22.toString() +
    " " +
    mountain23.toString();
  let mountainP9 =
    mountain36.toString() +
    " " +
    mountain35.toString() +
    " " +
    mountain39.toString();
  let mountainP10 =
    mountain36.toString() +
    " " +
    mountain41.toString() +
    " " +
    mountain38.toString();
  let mountainP11 =
    mountain41.toString() +
    " " +
    mountain38.toString() +
    " " +
    mountain40.toString();

  let radiusi1 = radiusi.toString();

  let mountainP12 =
    mountain20.toString() +
    " " +
    mountain25.toString() +
    " " +
    mountain26.toString() +
    " " +
    mountain27.toString() +
    " " +
    mountain28.toString() +
    " " +
    mountain29.toString() +
    " " +
    mountain35.toString() +
    " " +
    mountain20.toString();
  let mountainP13 =
    mountain29.toString() +
    " " +
    mountain30.toString() +
    " " +
    mountain31.toString() +
    " " +
    mountain32.toString() +
    " " +
    mountain33.toString() +
    " " +
    mountain34.toString() +
    " " +
    mountain35.toString() +
    " " +
    mountain29.toString();
  let mountainP14 =
    mountain49.toString() +
    " " +
    mountain48.toString() +
    " " +
    mountain47.toString() +
    " " +
    mountain46.toString() +
    " " +
    mountain41.toString() +
    " " +
    mountain49.toString();
  let mountainP15 =
    mountain46.toString() +
    " " +
    mountain45.toString() +
    " " +
    mountain44.toString() +
    " " +
    mountain43.toString() +
    " " +
    mountain42.toString() +
    " " +
    mountain41.toString() +
    " " +
    mountain46.toString();

  document.getElementById("mountain1").setAttribute("points", mountainP1);
  document.getElementById("mountain2").setAttribute("points", mountainP2);
  document.getElementById("mountain3").setAttribute("points", mountainP3);
  document.getElementById("mountain4").setAttribute("points", mountainP4);

  document.getElementById("mountain5").setAttribute("points", mountainP5);

  document.getElementById("mountain6").setAttribute("points", mountainP6);
  document.getElementById("mountain7").setAttribute("points", mountainP7);
  document.getElementById("mountain8").setAttribute("points", mountainP8);
  document.getElementById("mountain9").setAttribute("points", mountainP9);

  document.getElementById("mountain10").setAttribute("points", mountainP10);
  document.getElementById("mountain11").setAttribute("points", mountainP11);

  document.getElementById("circle").setAttribute("r", radiusi1);

  document.getElementById("mountain12").setAttribute("points", mountainP12);
  document.getElementById("mountain13").setAttribute("points", mountainP13);

  document.getElementById("mountain14").setAttribute("points", mountainP14);
  document.getElementById("mountain15").setAttribute("points", mountainP15);

  let shine = document.createElement("polygon");
  for (let i = 0; i < 30; i++) {
    document.getElementById("sunshine").appendChild(shine);
    document
      .getElementById("sunshine")
      .children[i].setAttribute("id", "shine" + i);
  }
  for (let i = 0; i < 15; i++) {
    document
      .getElementById("shine" + i)
      .setAttribute(
        "points",
        "0,0" +
          " " +
          "5000" +
          "," +
          (400 * i + 250) +
          " " +
          "5000" +
          "," +
          400 * (i + 1)
      );
  }

  for (let i = 0; i < 30; i++) {
    document.getElementById("shine" + i).classList.add("sunshine-animation");
  }
}

resizeScreen();
