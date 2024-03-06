import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import Menu from "./components/menu/menu";
import Projects from "./components/projects/projects";

import styles from "./section2.module.scss";

const Section2 = () => {
  const [repository, setRepository] = useState();
  const [sort, setSort] = useState();
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  function handleSearch(value) {
    setSearchParams({ search: value });
    navigate(`/portfolio?search=${encodeURIComponent(value)}`);
  }
  const content = useSelector(
    createSelector(
      (mode) => {
        return mode;
      },
      (content) => {
        return content.content.portfolio.section2;
      }
    )
  );

  return (
    <section className={styles["section-2"]}>
      <Menu content={content} handleSearch={handleSearch} />
      <Projects />
    </section>
  );
};

export default Section2;
