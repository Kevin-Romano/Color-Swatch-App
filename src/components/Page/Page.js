import React from "react";
import "./Page.css";

function Page({ children }) {
  return <section className='page'>{children}</section>;
}
export default Page;
