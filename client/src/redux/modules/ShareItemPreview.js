
const UPDATE_NEW_ITEM = 'UPDATE_NEW_ITEM';
const RESET_NEW_ITEM = 'RESET_NEW_ITEM';
const RESET_ITEM_IMAGE = 'RESET_ITEM_IMAGE';


export const updateNewItem = item => ({
  type: UPDATE_NEW_ITEM,
  payload: item
});
export const resetNewItem = () => ({
  type: RESET_NEW_ITEM
});
export const resetNewItemImage = () => ({
  type: RESET_ITEM_IMAGE
});


const initialState = {
  title: 'Name your item',
  description: 'Describe your item',
  date: new Date(),
  imageurl: 'https://via.placeholder.com/350x250?text=Please select an image',
  itemowner: {},
  tags: []
};


export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_ITEM:
      return { ...state, ...action.payload };
    case RESET_NEW_ITEM:
      return { ...initialState };
    case RESET_ITEM_IMAGE:
      return { ...state, imageurl: initialState.imageurl };
    default:
      return state;
  }
};
