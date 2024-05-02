/*eslint-disable */

import { MenuListItem } from 'react95'
import PropTypes from 'prop-types';

const ItemPropTypes = PropTypes.shape({
  onClick: PropTypes.func, 
  icon: PropTypes.string, 
  title: PropTypes.string.isRequired, 
});

MenuListsItem.propTypes = {
  itemObj: ItemPropTypes.isRequired,
};
export default function MenuListsItem({ itemObj }) {
  return (
    <MenuListItem onClick={itemObj.onClick && itemObj.onClick}>
      {itemObj.icon && <span>{itemObj.icon}</span>}
      {itemObj.title}
    </MenuListItem>
  )
}
