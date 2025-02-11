import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./pages/SinglePostPage";
import PostsPage from "./pages/PostsPage";
import DefaultLayout from "./pages/DefaultLayout";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import MyFormPage from "./pages/MyFormPage";
import NotFoundPage from "./pages/NotFoundPage";
import { TagProvider } from "./context/TagContext";

function App() {

  return (
    <TagProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about" Component={AboutPage} />
            <Route path="/posts">
              <Route index Component={PostsPage} />
              <Route path=":id" Component={PostPage} />
              <Route path="add-post" Component={MyFormPage} />
            </Route>
          </Route>
          <Route path="*" Component={NotFoundPage}></Route>
        </Routes>
      </BrowserRouter>
    </TagProvider>
  );
}

export default App;