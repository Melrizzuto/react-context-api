import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TagContext = createContext();

function TagProvider({ children }) {
    const [tagList, setTagList] = useState([]);
    useEffect(() => {
        getTags();
    }, [])

    function getTags() {
        axios
            .get("http://localhost:3000/tags")
            .then((res) => {
                setTagList(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {

            });
    }
    return (
        <TagContext.Provider value={{ tagList }}>
            {children}
        </TagContext.Provider>
    );
};

function useTagContext() {
    const context = useContext(TagContext);
    return context;
}

export { TagProvider, useTagContext };