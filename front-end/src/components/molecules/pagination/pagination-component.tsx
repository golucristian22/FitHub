import React, { useEffect, useState } from "react";
import "./pagination-styles.scss";
import PaginationBlock from "../../atoms/pagination-block/pagination-block-component";
import Icon from "../../atoms/icon/icon-component";

interface paginationProperties {
  pages: number;
}

function Pagination(props: paginationProperties) {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    document.addEventListener("apointDirectionClickEvent", onApointDirectionEvent);
    return () => {
      document.removeEventListener("apointDirectionClickEvent", onApointDirectionEvent);
    };
  });

  const generatePages = [...Array(props.pages)].map((value, index) => {
      return <PaginationBlock variant="default" onClick={() => onPageClick(index)} state={(currentPage === index) ? true : false} text={`${index + 1}`} key={index} />;
  });

  return (
    <div className="pagination">
      <h1>{currentPage+1}</h1>
      <PaginationBlock variant={currentPage > 0 ? "default" : "disabled"} isApoint apointDirection="backward" icon={ <Icon iconName="chevron-left" iconColor="#fff" iconHeight="24px" iconWidth="24px" /> } />
      {generatePages}
      <PaginationBlock variant={currentPage >= props.pages - 1 ? "disabled" : "default"} isApoint apointDirection="forward" icon={ <Icon iconName="chevron-right" iconColor="#fff" iconHeight="24px" iconWidth="24px" /> } />
    </div>
  );

  function onApointDirectionEvent(e: CustomEventInit): void {
    switch(e.detail.direction) {
      case "forward":
        setCurrentPage(currentPage + 1);
        break;
      case "backward":
        setCurrentPage(currentPage - 1);
        break;
      default:
        return;
    }
  }

  function onPageClick(index: number): void {
    if(index === currentPage) return;
    console.log(index);
    setCurrentPage(index);
  }
}

export default Pagination;
