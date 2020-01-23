
const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  additionalFeatures: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
  // figure out how I want to structure initialState based
  // on how data being added is structured.
};

 const appReducer = (state = initialState, action) => {
   console.log(action)
  switch (action.type) {
    case "REMOVE_FEATURE":
      return {
          ...state,
          car: {...state.car,
            features: state.car.features.filter(item => item.id !== action.payload.id),
            price: state.carprice - action.payload.price
         },
         additionalFeatures: [...state.additionalFeatures, action.payload]
          
     
      };
//use filter
    case "ADD_ITEM":
      return {
        ...state,
        car: {...state.car,
          additionalFeatures: state.car.additionalFeatures.filter(item => item.id !== action.payload.id),
          price: state.carprice + action.payload.price
       },
       additionalFeatures: [...state.additionalFeatures, action.payload]
        
      };
      default: return state;
    }
    
};

export default appReducer
