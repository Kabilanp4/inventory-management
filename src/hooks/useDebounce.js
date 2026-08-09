import { useEffect, useState } from "react";

export const useDebounce = (value, delay = 500) => {
  const [debouncedSearch, setDebouncedSearch] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(value);
      console.log("setTimeout got triggered");
    }, delay);
    // The clean up function always runs first before executing the above code when the dependency array value gets changed.
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return debouncedSearch;
};
