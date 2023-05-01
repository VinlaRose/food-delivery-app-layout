
import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

export const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === 'https://example.com/api/menu') {
          resolve({
            status: 200,
            message: 'Success',
            data: {
              menu: [
                {
                  id: 1,
                  name: 'Margherita Pizza',
                  description: 'Fresh mozzarella, tomato sauce, and basil.',
                  price: 12.99,
                  image:
                    'https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg',
                  is_vegetarian: true,
                  is_spicy: false,
                  delivery_time: 30,
                },
                {
                  id: 2,
                  name: 'Pepperoni Pizza',
                  description: 'Pepperoni, mozzarella, and tomato sauce.',
                  price: 14.99,
                  image:
                    'https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_6240,h_4160,al_c,q_90/Pepperoni%20Pizza_1_compressed.jpg',
                  is_vegetarian: false,
                  is_spicy: true,
                  delivery_time: 35,
                },
                {
                  id: 3,
                  name: 'Pesto Pasta',
                  description: 'Penne pasta with homemade pesto sauce.',
                  price: 10.99,
                  image:
                    'https://silveroak.com/wp-content/uploads/2020/03/Recipe-Basil-Pesto-Pizza.jpg',
                  is_vegetarian: true,
                  is_spicy: false,
                  delivery_time: 25,
                },
                {
                  id: 4,
                  name: 'Chicken Alfredo',
                  description:
                    'Fettuccine pasta with creamy Alfredo sauce and grilled chicken.',
                  price: 13.99,
                  image:
                    'https://assets.kraftfoods.com/recipe_images/opendeploy/120201_640x428.jpg',
                  is_vegetarian: false,
                  is_spicy: false,
                  delivery_time: 40,
                },
                {
                  id: 5,
                  name: 'Tiramisu',
                  description:
                    'Classic Italian dessert with ladyfingers, espresso, and mascarpone cream.',
                  price: 6.99,
                  image:
                    'https://www.countdown.co.nz/Content/Recipes/224513%20Tiramisu%20810x570.jpg',
                  is_vegetarian: true,
                  is_spicy: false,
                  delivery_time: 15,
                },
              ],
            },
          })
        } else {
          reject({
            status: 404,
            message: 'Food list not found.',
          })
        }
      }, 2000)
    })
  }
export const ProductProvider = ({children}) =>{

    const [items, setItems] = useState([]);
    const [cart, setCarts] = useState([])

    const getData = async() => {
        try{
            const response = await fakeFetch( 'https://example.com/api/menu');
            if(response.status === 200){
                setItems(response.data.menu.map((item) => {
                  return {...item, is_added: false, count: 1}
                }))
               
            }

        }catch(e){
            console.error(e)
        }
      }
      useEffect(() => {
        getData();
      },[])
 
    
    const cartHandler = (selecteditem, id) => {

      if(selecteditem.is_added === false){
        setCarts(prevCart => [...prevCart, selecteditem]);

      }


      const updatedItems = items.map((item) => {
        if(item.id === id){
          return {...item, is_added: true}
        }else{
          return item
        }
      })

      setItems(updatedItems)
     
    }

    const cartRemove = (id) => {
      setCarts(cart.filter((item) => item.id !== id));

      const updatedItems = items.map((item) => {
        if(item.id === id){
          return {...item, is_added: false}
        }else{
          return item
        }
      })

      setItems(updatedItems)
    }


    const addCount = (id) => {

      const updatedCart = cart.map((item) => {
        if(item.id === id){
          return {...item, count: item.count+1}
        }else{
          return item
        }
      })

      setCarts(updatedCart)
     

    }

    const subtractCount = (id) => {

      const updatedCart = cart.map((item) => {
        if(item.id === id){
          return {...item, count: item.count <= 1 ? 1 : item.count-1}
        }else{
          return item
        }
      })

      setCarts(updatedCart)
     

    }

  const [couponApplied, setCouponApplied] = useState(false);

  const cartPrice = cart.reduce((acc,curr) => acc + curr.price*curr.count, 0)

  const totalPrice = couponApplied ? cartPrice - 5 : cartPrice;
  
  const totalDeliverTime = cart.reduce((acc,curr) => acc + curr.delivery_time, 0)

    const couponHandler = () =>{
        setCouponApplied(true);

    }

    const undoCoupon = () => {
      setCouponApplied(false)
    }

    const [userinput, setInput] = useState(" ")

const inputBar = (event) => {
  setInput(event.target.value);


if(userinput === " "){
  setItems(items)
}else{
  const filterItems  = items.filter(
    (nameObj) =>
      nameObj.name.toLowerCase().startsWith(userinput.toLowerCase())
  );
  setItems(filterItems)

}
  
}
  

    return (
        <ProductContext.Provider value={{items, cartHandler, cartRemove, addCount, cart, subtractCount, totalDeliverTime,couponHandler, totalPrice, couponApplied, undoCoupon, inputBar}}>
            {children}
        </ProductContext.Provider>
    )
}