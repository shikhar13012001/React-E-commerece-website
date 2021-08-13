import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { selectCollectionIsLoaded } from "../../redux/shop/shop.selector";
import withSpinner from "../../components/with-spinned/with-spinner.component";
import CategoryPage from "./collection.component";
const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectCollectionIsLoaded(state),
});
const CollectionPageContainer= compose(
    connect((mapStateToProps),withSpinner)(CategoryPage)
)
export default CollectionPageContainer