import MovieBlock from "@/lib/component/MovieBlock";
import SearchBar from "@/lib/component/SearchBar";
import TopBar from "@/lib/component/TopBar";
import { useState } from "react";

export default function Main() {
  
  return(
    <div>
      <div>
      <TopBar></TopBar>

    <MovieBlock></MovieBlock>   
      </div>

    </div>
  )
}