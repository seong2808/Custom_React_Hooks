const useComfirm = (message = "", callback ,rejection) => {
    const confirmAction = () => {
      if (window.confirm(message)) {
        callback();
      } else {
        rejection();
      }
    };
  
    return typeof rejection !== "function" && typeof callback !== "function" ? undefined : confirmAction
  };

export default useComfirm;