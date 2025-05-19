import SearchBar from "@/lib/component/SearchBar";
import TopBar from "@/lib/component/TopBar";
import { useState } from "react";

export default function Main() {
  
  return(
    <div>
      <div>
      <TopBar></TopBar>

      </div>
    <div>

      <SearchBar></SearchBar>
    </div>


    </div>
  )
}