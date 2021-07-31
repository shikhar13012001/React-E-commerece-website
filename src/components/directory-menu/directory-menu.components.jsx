import React from "react";
import MenuItem from "../menu-item/menu-item.components";
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory.selectors'
import "./directory-menu.styles.scss";
const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionprops }) => (
      <MenuItem key={id} {...otherSectionprops} />
    ))}
  </div>
);
const mapStateToprops=createStructuredSelector({
  sections:selectDirectorySections
})
export default connect(mapStateToprops)(Directory);
