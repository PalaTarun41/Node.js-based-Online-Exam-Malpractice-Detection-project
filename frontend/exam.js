let score = 0;

document.addEventListener("visibilitychange", () => {
  if (document.hidden) score += 10;
});

document.addEventListener("copy", () => score += 15);
document.addEventListener("paste", () => score += 15);

window.addEventListener("blur", () => score += 10);
window.addEventListener("beforeunload", () => score += 20);

setInterval(() => console.log("Suspicion Score:", score), 5000);