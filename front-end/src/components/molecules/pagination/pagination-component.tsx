import React, { useContext } from "react";
import "./pagination-styles.scss";
import Block from "../../atoms/block/block-component";
import Icon from "../../atoms/icon/icon-component";
import { CurrentPage } from "../../../contexts/current-page-context";

interface paginationProperties {
  pages: number;
}

function Pagination(props: paginationProperties): JSX.Element {
  const { currentPage, setCurrentPage } = useContext(CurrentPage);

  const generatePages: JSX.Element[] = [...Array(props.pages)].map((value, index) => {
      return <Block variant="default" onClick={() => onPaginationBlockClick(index)} state={(currentPage === index) ? true : false} text={`${index + 1}`} key={index} />
  });

  return (
    <div className="pagination">
      <Block variant={currentPage > 0 ? "default" : "disabled"} onClick={() => setCurrentPage(currentPage - 1)} icon={ <Icon iconName="chevron-left" iconColor="#fff" iconHeight="24px" iconWidth="24px" /> } />
      {generatePages}
      <Block variant={currentPage >= props.pages - 1 ? "disabled" : "default"} onClick={() => setCurrentPage(currentPage + 1)} icon={ <Icon iconName="chevron-right" iconColor="#fff" iconHeight="24px" iconWidth="24px" /> } />
    </div>
  );

  function onPaginationBlockClick(index: number): void {
    if(index === currentPage) return;
    setCurrentPage(index);
  }
}

export default Pagination;
