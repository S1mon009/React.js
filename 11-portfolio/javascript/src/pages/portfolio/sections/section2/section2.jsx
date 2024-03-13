import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import Menu from "./components/menu/menu";
import Projects from "./components/projects/projects";

import styles from "./section2.module.scss";

const Section2 = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [sort, setSort] = useState("A-Z");
  const [repository, setRepository] = useState("");
  console.log(repository);
  function handleSearch(value) {
    setSearchParams({ search: value });
    navigate(`/portfolio?search=${encodeURIComponent(value)}`);
  }
  function handleSort(event) {
    setSort(event.target.value);
  }
  function handleRepository(event) {
    setRepository(event.target.value);
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
      <Menu
        content={content}
        handleSearch={handleSearch}
        sortValue={sort}
        handleSort={handleSort}
        repositoryValue={repository}
        handleRepository={handleRepository}
      />
      <Projects
        search={searchParams.get("search")}
        sort={sort}
        repository={repository}
      />
    </section>
  );
};

export default Section2;
