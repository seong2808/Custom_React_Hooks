const useTitle = (initalTitle) => {
    const [title, setTitle] = useState(initalTitle);
    const updateTitle = () => {
      // document.querySelector("title") => <title></title>
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
  }

  export default useTitle;