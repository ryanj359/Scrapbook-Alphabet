document.addEventListener("DOMContentLoaded", () => {
    const scripts = [
      "scrapbookFullType.js",
      "scrapbooktypeStyleBW.js",
      "scrapbooktypeStyleColor.js",
      "scrapbookTypeSize.js"
    ];
  
    const randomScript = scripts[Math.floor(Math.random() * scripts.length)];
  
    const scriptEl = document.createElement("script");
    scriptEl.src = randomScript;
  
    scriptEl.onload = () => {
      const button = document.getElementById("randomizeBtn");
      if (typeof randomizeText === "function") {
        button.addEventListener("click", randomizeText);
      } else {
        console.error("randomizeText is not defined in the loaded script.");
      }
    };
  
    document.body.appendChild(scriptEl);
  });