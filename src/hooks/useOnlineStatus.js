import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  //state for online
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    function removeEventListeners() {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    }
    return removeEventListeners();
  }, []);
  return [online];
};
