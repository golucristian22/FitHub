import React, { useEffect, useState } from "react";
import "./pagination-styles.scss";
import PaginationBlock from "../../atoms/pagination-block/pagination-block-component";
import Icon from "../../atoms/icon/icon-component";

interface paginationProperties {
  pages: number;
}

function Pagination(props: paginationProperties): JSX.Element {
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    document.addEventListener("apointDirectionClickEvent", onApointDirectionEvent);
    return () => {
      document.removeEventListener("apointDirectionClickEvent", onApointDirectionEvent);
    };
  });

  useEffect(pageChangeEventDispatcher, [currentPage]);

  const generatePages: JSX.Element[] = [...Array(props.pages)].map((value, index) => {
      return <PaginationBlock variant="default" onClick={() => onPageClick(index)} state={(currentPage === index) ? true : false} text={`${index + 1}`} key={index} />
  });

  return (
    <div className="pagination">
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
    setCurrentPage(index);
  }

  function pageChangeEventDispatcher(): void {
    const event = new CustomEvent("pageChangeEvent", {
      detail: {
        currentPage: currentPage,
      },
      composed: true,
      bubbles: false,
    })

    document.dispatchEvent(event);
  }
}

export default Pagination;
