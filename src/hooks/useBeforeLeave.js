const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
      const { clientY } = event;
      // 해당 조건문은 마우스가 화면 위로 나갈때를 말한다.
      if (clientY <= 0) {
        onBefore();
      } else {
        console.log('leaving'); 
      }
    };
  
    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };

export default useBeforeLeave;