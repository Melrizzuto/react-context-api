import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const TagContext = createContext();

function TagProvider({ children }) {
    const [tagList, setTagList] = useState([]);

    useEffect(() => {
        getTags();
    }, []);

    function getTags() {
        axios
            .get("http://localhost:3000/tags")
            .then((res) => {
                setTagList(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("finally")
            });
    }

    return (
        <TagContext.Provider value={{ tagList, setTagList }}>
            {children}
        </TagContext.Provider>
    );
}

function useTagContext() {
    const context = useContext(TagContext);
    if (!context) {
        throw new Error("useTagContext must be used within a TagProvider");
    }
    return context;
}

export { TagProvider, useTagContext };