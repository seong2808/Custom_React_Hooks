const usePreventLeave = () => {
  const listner = (e) => {
    e.preventDefault();
    e.returnValue = "";
  }
  const enablePrevent = () => window.addEventListener("beforeunload", listner);
  const disablePrevent = () => window.removeEventListener("beforeunload", listner);

  return { enablePrevent, disablePrevent }
}

export default usePreventLeave;