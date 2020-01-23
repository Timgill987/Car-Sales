export const removeCarFeature = (item) => {
     return { type: 'REMOVE_FEATURE', payload: item  };
   };

 export const buyCarItem = (item) => {
     return { type: 'ADD_ITEM', payload: item }
 }

