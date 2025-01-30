import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";
import { ProtectedLayout } from "../layouts/ProtectedLayout";
import { paths, protectedPaths } from "./Paths";

export const PageRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {paths.map((item) => {
            return (
              <Route
                key={item.id}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Route>
        <Route path="/user" element={<ProtectedLayout />}>
          {protectedPaths.map((item) => {
            return (
              <Route
                key={item.id}
                path={item.path}
                element={<item.element />}
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
};
