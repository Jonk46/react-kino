import React from "react";


class Pagination extends React.Component {
    render() {
        const { totalPages, page, changePageToPrevious, changePageToNext } = this.props;
        return (
            <div className="d-flex justify-content-center">
                <ul className="tabs nav nav-pills">
                    <li className="nav-item">
                        <button className="btn btn-primary"
                            onClick={changePageToPrevious.bind()}>
                            Previous
                        </button>
                    </li>
                    <li className="nav-item">
                        Current page: {page}
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-primary"
                            onClick={changePageToNext.bind()}>
                            Next
                        </button>
                    </li>
                    <li className="nav-item">
                        Total pages: {totalPages}
                    </li>
                </ul>
            </div>
        );
    }
}

export default Pagination;