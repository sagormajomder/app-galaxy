// Number Format
export function formatLargeNumber(number) {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  });
  return formatter.format(number);
}

// get installed App from localstorage
export function localGetInstalledApp() {
  return JSON.parse(localStorage.getItem("installedApp")) ?? [];
}

// Save installed App into localstorage
export function localSetInstalledApp(id) {
  const installedApps = localGetInstalledApp();
  localStorage.setItem("installedApp", JSON.stringify([...installedApps, id]));
}

// update installed App into localstorage
export function localUpdateInstalledApp(updatedInstalledApp) {
  localStorage.setItem(
    "installedApp",
    JSON.stringify(updatedInstalledApp.map((app) => app.id)),
  );
}
