

export const ACTIONS = {
    INITIAL: "initial",
    CATINITIAL:"catinitial",
    SORTHIGH: "sorthigh",
    SORTLESS:"sortless",
    HIGHCHANGE:"highChange",
    LOWCHANGE:"lowChange",
    RESET:"reset",
    PRICE:"price",
    INSTOCK:"instock",
    DELIVERYTIME:"deliveryTime",
    BESTSELLERS:"bestSellers",
    OLDDATA: "oldData",
    BRANDED: "brandedProducts",
    DESIGNS:"personalizedDesigns",
    SEARCH:"searchBar",
    ADDCART:"addcart",
    MINUS:"minus",
    PLUS:"plus",
    PLUSCOUNT:"plusc",
    ADDWISH:"addwish",
    MINUSCOUNT:"minusc",
    REMOVEFROMCART:"removefromcart",
    REMOVEFROMWISH:"removefromwish",
    REMOVEFROMFAVWISH:"removefromfavwish",
    USERINITIAL:"userinitial",
    ADDTOCART:"addtocart",
    INCREMENT:"increment",
    DECREMENT:"decrement",
    BESTCATEGORY:"bestCategory",
    RATINGFOUR: "ratingfour",
    RATINGTHREETOFOUR:"ratingthreetofour",
    RATINGLESSTHREE:"ratinglessthree"
}

export function commerceReducer(state, action){
    switch(action.type){
        case ACTIONS.ADDTOCART:{
            return {...state, cartItems:action.payLoad}
        }
        case ACTIONS.INCREMENT:{
            return{...state, cartItems: [...action.payLoad]}
        }
        case ACTIONS.DECREMENT:{
            return{...state, cartItems: [...action.payLoad]}
        }
        case ACTIONS.INITIAL:{
            return {...state, ProductsData:[...action.payLoad], oldData:[...action.payLoad]}
        }
        case ACTIONS.CATINITIAL:{
            return{...state, commerceCategoryData:[...action.payLoad]}
        }
        case ACTIONS.SORTHIGH:{    
            const filteredData = state.ProductsData.sort((a,b) => b.price - a.price)
            return {...state, toSort: action.payLoad,  ProductsData: [...filteredData] }
        }
        case ACTIONS.SORTLESS:{
            const filteredData = state.ProductsData.sort((a,b) => a.price - b.price)
            return {...state, toSort: action.payLoad,  ProductsData: [...filteredData]}
        }
        case ACTIONS.RESET:{
            return {...state,ProductsData: state.ProductsData ,[action.payLoad]: false}
        }
        case ACTIONS.PRICE:{
            const filteredData = state.ProductsData.filter((product) => product.price > action.payLoad)
            return {...state, ProductsData:[...filteredData] }
        }
        case ACTIONS.INSTOCK:{
            return {...state, inStock: !state.inStock}
        }
        case ACTIONS.DELIVERYTIME:{
            return {...state, DeliveryTime: !state.DeliveryTime}
        }
        case ACTIONS.BESTSELLERS:{  
            if(!state.bestSellers){
                const filteredData = state.ProductsData.filter((product) => product.categoryName === action.payLoad)
                return {...state,  bestSellers: !state.bestSellers, ProductsData:[...filteredData]}
            }else{
                return{...state, ProductsData: [...state.oldData],bestSellers: !state.bestSellers}
            }
        }
        case ACTIONS.BRANDED:{
            if(!state.brandedProducts){
                const filteredData = state.ProductsData.filter((product) => product.categoryName === action.payLoad)
                return {...state, brandedProducts:!state.brandedProducts, ProductsData:[...filteredData]}
            }
            else{
                return {...state, ProductsData:[...state.oldData], brandedProducts:!state.brandedProducts}
            }
        }
        case ACTIONS.DESIGNS:{
            if(!state.personalizedDesigns){
                const filteredData = state.ProductsData.filter((product) => product.categoryName === action.payLoad)
                return{...state, personalizedDesigns:!state.personalizedDesigns, ProductsData:[...filteredData]}
            }
            else{
                return{...state,ProductsData:[...state.oldData], personalizedDesigns:!state.personalizedDesigns}
            }
        }
        case ACTIONS.RATINGFOUR:{
            if(!state.ratingfour){
                const filteredData = state.ProductsData.filter((product) => Number(product.star > 4))
                return {...state, ratingfour:!state.ratingfour, ProductsData:[...filteredData]}
            }
            else{
                return{...state,ProductsData:[...state.oldData],ratingfour:!state.ratingfour }
            }
        }
        case ACTIONS.RATINGTHREETOFOUR:{
            if(!state.ratingthreetofour){
                const filteredData = state.ProductsData.filter((product) => Number(product.star <= 4) && Number(product.star > 3))
                return {...state, ProductsData:[...filteredData],ratingthreetofour:!state.ratingthreetofour}
            }
            else{
                return{...state,ProductsData:[...state.oldData],ratingthreetofour:!state.ratingthreetofour }
            }
            
        }
        case ACTIONS.RATINGLESSTHREE:{
            if(!state.ratinglessthree){
                const filteredData = state.ProductsData.filter((product) =>  Number(product.star < 3))
                return {...state, ProductsData:[...filteredData]}
            }
            else{
                return{...state,ProductsData:[...state.oldData],ratinglessthree:!state.ratinglessthree }
            }
        }
        case ACTIONS.SEARCH:{ 
            const filteredData = state.ProductsData.filter((product) => product.name.toLowerCase().includes(action.payLoad.toLowerCase()))         
            return{...state, ProductsData:[...filteredData]}
        }
        case ACTIONS.ADDCART:{
            const discountAdding = (state.originalPrice)+ (action.payLoad.price -action.payLoad.originalPrice);        
            const adding = state.price+action.payLoad.price
            console.log(action.payLoad)
            const filteredData = state.ProductsData.find((product)=> product?._id === action.payLoad?._id )
            return{...state, price: adding, originalPrice:discountAdding, cartItems:[...state.cartItems,{...filteredData}]}
        }
        case ACTIONS.ADDWISH:{
            const filteredData = state.ProductsData.find((product) => product?._id === action.payLoad._id)
            if(filteredData){
                return{...state, wishList:[...state.wishList,{...filteredData}], ProductsData: state.ProductsData.map((prod) => prod?._id === filteredData?._id ? {...prod, wish: !prod.wish}: prod)}
            }
            return{...state}
        }
        case ACTIONS.PLUS:{
            const adding = state.price + action.payLoad.price
            const discountAdding = (state.originalPrice) + (action.payLoad.price - action.payLoad.originalPrice)
            return{...state, price: adding, originalPrice: discountAdding}
        }
        case ACTIONS.MINUS:{
            const minusing = state.price - action.payLoad.price
            const discountMinus = (state.originalPrice) - (action.payLoad.price - action.payLoad.originalPrice)
            return{...state, price: minusing, originalPrice: discountMinus}
        }
        case ACTIONS.PLUSCOUNT:{
            const filteredData = state.cartItems.find((product) => product?._id === action.payLoad?._id)
            console.log(state.cartItems.find((product) => product?._id === action.payLoad?._id))
            if(filteredData){
               return {...state,  cartItems: state.cartItems.map((cart) => cart?._id === filteredData?._id ? {...cart, count:cart.count+1} : cart) }
            }
            return{...state}
        }
        case ACTIONS.MINUSCOUNT:{
            const filteredData = state.cartItems.find((product) => product?._id === action.payLoad?._id)
            if(filteredData){
                return{...state, cartItems: state.cartItems.map((cart) => cart?._id === filteredData?._id ? {...cart, count: cart.count - 1}: cart)}
            }
            return{...state}
        }
        case ACTIONS.REMOVEFROMCART:{
            const minus = state.price - action.payLoad.price
            const discountMinus = (state.originalPrice) - (action.payLoad.price - action.payLoad.originalPrice)
            const filteredData = state.cartItems.filter((product) => product?._id !== action.payLoad?._id)
            return{...state, cartItems:[...filteredData], price: minus, originalPrice: discountMinus}
        }
        case ACTIONS.REMOVEFROMWISH:{
            const filteredData = state.wishList.filter((product) => product?._id !== action.payLoad?._id)
            return{...state, wishList:[...filteredData], ProductsData: state.ProductsData.map((prod) => prod?._id === filteredData?._id ? {...prod, wish: !prod.wish}: prod)}
        }
        case ACTIONS.REMOVEFROMFAVWISH:{
            if(action.payLoad.wish){
            const filteredData = state.wishList.filter((product) => product?._id !== action.payLoad?._id)
            return{...state, wishList:[...filteredData], ProductsData: state.ProductsData.map((prod) => prod?._id === filteredData?._id ? {...prod, wish: !prod.wish}: prod)}
            }
            return{...state}
        }

        
        default: {
            throw new Error("Unknown action " + action.type);
          }

    }
}