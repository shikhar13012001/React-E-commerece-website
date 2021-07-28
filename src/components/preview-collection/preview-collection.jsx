import React from "react";
import "./preview-collections.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item}/>;
          })}
      </div>
    </div>
  );
};
export default PreviewCollection;
