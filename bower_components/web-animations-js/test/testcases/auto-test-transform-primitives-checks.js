timing_test(function() {
  at(0 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 30, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 30, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 30, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 30, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 40)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 40)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 40)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 40)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 3, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 3, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 3, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 3, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(0.6428, 0.766, -0.766, 0.6428, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.364, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.364, 1, 0, 0)'},
      {'transform':'matrix(1, 0.364, 0.8391, 1, 0, 0)'},
      {'transform':'matrix(1, 0.364, 0.8391, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.8391, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0.8391, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(-1, 1, -1, -1, 10, 10)'},
    ]);
  });
  at(0.5 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 7.5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 5, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 5)'},
      {'transform':'matrix(1, 0, 0, 1, 22.5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 27.5, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 27.5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 22.5, 5)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 30)'},
      {'transform':'matrix(1, 0, 0, 1, 22.5, 30)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 30)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 35)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 22.5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 5)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 15)'},
      {'transform':'matrix(1, 0, 0, 1, 7.5, 15)'},
      {'transform':'matrix(1, 0, 0, 1, 5, 25)'},
      {'transform':'matrix(1, 0, 0, 1, 5, 15)'},
      {'transform':'matrix(1.125, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 1.25, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1.25, 0, 0)'},
      {'transform':'matrix(1.375, 0, 0, 2.5, 0, 0)'},
      {'transform':'matrix(1.625, 0, 0, 2.75, 0, 0)'},
      {'transform':'matrix(1.625, 0, 0, 2.5, 0, 0)'},
      {'transform':'matrix(1.375, 0, 0, 2.75, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 1.75, 0, 0)'},
      {'transform':'matrix(1.875, 0, 0, 2.25, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1.75, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1.875, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1.25, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 1.25, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1.75, 0, 0)'},
      {'transform':'matrix(1.125, 0, 0, 2.25, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 1.75, 0, 0)'},
      {'transform':'matrix(0.9763, 0.2164, -0.2164, 0.9763, 0, 0)'},
      {'transform':'matrix(0.7934, 0.6088, -0.6088, 0.7934, 0, 0)'},
      {'transform':'matrix(1, 0, 0.08749, 1, 0, 0)'},
      {'transform':'matrix(1, 0.08749, 0.1763, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.2679, 1, 0, 0)'},
      {'transform':'matrix(1, 0.08749, 0.4663, 1, 0, 0)'},
      {'transform':'matrix(1, 0.2679, 0.5774, 1, 0, 0)'},
      {'transform':'matrix(1, 0.2679, 0.7002, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.1763, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.5774, 1, 0, 0)'},
      {'transform':'matrix(1, 0.1763, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0.5774, 0, 1, 0, 0)'},
      {'transform':'matrix(0.9176, 0.6131, -0.6131, 0.9176, 2.5, 2.5)'},
      {'transform':'matrix(-0.2557, 1.286, -1.286, -0.2557, 7.5, 7.5)'},
    ]);
  });
  at(1 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 15, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 10, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 10, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 25, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 25, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 10, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 25, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 10, 30)'},
      {'transform':'matrix(1, 0, 0, 1, 10, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 25, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 10, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 10, 30)'},
      {'transform':'matrix(1, 0, 0, 1, 10, 10)'},
      {'transform':'matrix(1.25, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 2.5, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 2.5, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 2.5, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 2.5, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(0.9063, 0.4226, -0.4226, 0.9063, 0, 0)'},
      {'transform':'matrix(0.9063, 0.4226, -0.4226, 0.9063, 0, 0)'},
      {'transform':'matrix(1, 0, 0.1763, 1, 0, 0)'},
      {'transform':'matrix(1, 0.1763, 0.364, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.1763, 1, 0, 0)'},
      {'transform':'matrix(1, 0.1763, 0.5774, 1, 0, 0)'},
      {'transform':'matrix(1, 0.1763, 0.364, 1, 0, 0)'},
      {'transform':'matrix(1, 0.1763, 0.5774, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.364, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.364, 1, 0, 0)'},
      {'transform':'matrix(1, 0.364, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0.364, 0, 1, 0, 0)'},
      {'transform':'matrix(0.4619, 1.115, -1.115, 0.4619, 5, 5)'},
      {'transform':'matrix(0.4619, 1.115, -1.115, 0.4619, 5, 5)'},
    ]);
  });
  at(1.5 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 22.5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 30)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 15)'},
      {'transform':'matrix(1, 0, 0, 1, 7.5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 22.5, 30)'},
      {'transform':'matrix(1, 0, 0, 1, 22.5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 7.5, 15)'},
      {'transform':'matrix(1, 0, 0, 1, 5, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 27.5, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 5, 25)'},
      {'transform':'matrix(1, 0, 0, 1, 5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 27.5, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 30)'},
      {'transform':'matrix(1, 0, 0, 1, 5, 15)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 5)'},
      {'transform':'matrix(1, 0, 0, 1, 22.5, 5)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 35)'},
      {'transform':'matrix(1, 0, 0, 1, 15, 5)'},
      {'transform':'matrix(1.375, 0, 0, 2.5, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 1.75, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1.75, 0, 0)'},
      {'transform':'matrix(1.125, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1.875, 0, 0, 2.25, 0, 0)'},
      {'transform':'matrix(1.875, 0, 0, 1.5, 0, 0)'},
      {'transform':'matrix(1.125, 0, 0, 2.25, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 1.25, 0, 0)'},
      {'transform':'matrix(1.625, 0, 0, 2.75, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1.25, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1.625, 0, 0, 2.5, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1.75, 0, 0)'},
      {'transform':'matrix(1.25, 0, 0, 1.75, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1.25, 0, 0)'},
      {'transform':'matrix(1.375, 0, 0, 2.75, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1.75, 0, 0, 1.25, 0, 0)'},
      {'transform':'matrix(0.7934, 0.6088, -0.6088, 0.7934, 0, 0)'},
      {'transform':'matrix(0.9763, 0.2164, -0.2164, 0.9763, 0, 0)'},
      {'transform':'matrix(1, 0, 0.2679, 1, 0, 0)'},
      {'transform':'matrix(1, 0.2679, 0.5774, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.08749, 1, 0, 0)'},
      {'transform':'matrix(1, 0.2679, 0.7002, 1, 0, 0)'},
      {'transform':'matrix(1, 0.08749, 0.1763, 1, 0, 0)'},
      {'transform':'matrix(1, 0.08749, 0.4663, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.5774, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.1763, 1, 0, 0)'},
      {'transform':'matrix(1, 0.5774, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0.1763, 0, 1, 0, 0)'},
      {'transform':'matrix(-0.2557, 1.286, -1.286, -0.2557, 7.5, 7.5)'},
      {'transform':'matrix(0.9176, 0.6131, -0.6131, 0.9176, 2.5, 2.5)'},
    ]);
  });
  at(2 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 30, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 40)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 40)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 30, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 30, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 40)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 20)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 30, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 40)'},
      {'transform':'matrix(1, 0, 0, 1, 20, 0)'},
      {'transform':'matrix(1.5, 0, 0, 3, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 3, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 3, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1.5, 0, 0, 3, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 2, 0, 0)'},
      {'transform':'matrix(2, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(0.6428, 0.766, -0.766, 0.6428, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.364, 1, 0, 0)'},
      {'transform':'matrix(1, 0.364, 0.8391, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0.364, 0.8391, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.364, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0.8391, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0.8391, 0, 1, 0, 0)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
      {'transform':'matrix(-1, 1, -1, -1, 10, 10)'},
      {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
    ]);
  });
}, "Auto generated tests");
