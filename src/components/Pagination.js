const Pagination = ({ nextPage, prevPage, nPages, currentPage }) => {
  const disableBtn = (pageNum) =>
    parseInt(currentPage) === pageNum ? "disabled" : "";

  return (
    <div className="paginationBtns">
      <span>Page {currentPage} </span>

      <span>of {nPages}</span>
      <button
        aria-label="Previous Page"
        className="btnPag btnPrev"
        onClick={prevPage}
        disabled={disableBtn(1)}
      >
        {"<"}
      </button>
      <button
        aria-label="Next Page"
        className="btnPag btnNext"
        onClick={nextPage}
        disabled={disableBtn(nPages)}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
