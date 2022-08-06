import { FC } from "react";
import { Header } from "./Header";

type Props ={
  todoCount:number;
  children: React.ReactNode;
}
export const Layout:FC <Props>=({todoCount,children})=>{
  return(
    <>
    <Header todoCount={todoCount}/>
    <main>{children}</main>
    </>
  );
}
