var ns = 0.01; // ノイズスケール(係数)
var sz = 5; // 1ドットの縦横サイズ
var t = 0; // 時間軸

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);
  noStroke();
}

function draw() {
  for (var x = 0; x < width; x += sz) {
    for (var y = 0; y < height; y += sz) {
      var n = noise(x * ns, y * ns, t);
      fill(n * 360, 100, 100); // HSBでカラー指定
      rect(x, y, sz, sz);
    }
  }
  t += 0.03; // 時間の更新
}
