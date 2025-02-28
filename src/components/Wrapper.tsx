import { ProjectContextProvider } from "../contexts/projectContext";
import { TasksContextProvider } from "../contexts/TasksContext";
import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";
import { EcommerceContextProvider } from "../contexts/ecommerceContext";

export const Wrapper = () => {
  return (
    <EcommerceContextProvider>
      <TasksContextProvider>
        <ProjectContextProvider>
          <div className="flex flex-col items-center min-h-screen bg-zinc-900">
            <Header />
            <div className="w-full">
              <Outlet />
            </div>
            <Footer />
          </div>
        </ProjectContextProvider>
      </TasksContextProvider>
    </EcommerceContextProvider>
  );
};
