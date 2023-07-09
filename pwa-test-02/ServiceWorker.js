
self.addEventListener('install', function (e) {
    console.log('[Service Worker] Install');
    
});


let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault(); // Prevent the default install prompt
  installPrompt = event; // Store the event for later use
  installButton.removeAttribute("hidden");

  // Show your custom install prompt
    // You can display a custom UI element or a button to trigger the installation
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  installPrompt = null;
  installButton.setAttribute("hidden", "");
});