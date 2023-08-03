
const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurentIndex] = useState(initialTab);
    if (!allTabs || !Array.isArray(allTabs)) {
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurentIndex,
    }
}

export default useTabs;