import React from "react";

const ListItem = ({item, selector, openModal, showName, tabIndex}) => {
    return(
        <div
            tabIndex={tabIndex}
            onClick={() => openModal ? openModal(item) : null}
            className={`containerItem ${selector}`}
        >
            <img alt={`${item.displayName} mobile phone`} src={item.displayImageUrl} />
            {showName && <h4 className="itemName">{item.displayName}</h4>}
        </div>
    );
};

export default ListItem;
