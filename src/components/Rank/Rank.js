import React from "react";

const Rank = () => {
    return (
        <div>
            <div className="white f3">
                {`${name}, sweetie, your current entry count is...`}
            </div>
            <div className="white f1">
                {entries}
            </div>
        </div>
    )
}

export default Rank