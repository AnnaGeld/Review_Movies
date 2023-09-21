import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Review Movies`;
  }, [title]);
  return null;
};

export default useTitle;
