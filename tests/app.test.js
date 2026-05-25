const { runnerApp } = require("../src/index");

console.log("Ejecutando tests...");

if (runnerApp() !== "Runner funcionando") {
  console.error("❌ Test fallido");
  process.exit(1);
}

console.log("✅ Tests correctos");
