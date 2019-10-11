import Item1 from '../../images/item1.jpg'
import Item2 from '../../images/item2.jpg'
import Item3 from '../../images/item3.jpg'
import Item4 from '../../images/item4.jpeg'
import Item5 from '../../images/item5.jpg'
import Item6 from '../../images/item6.jpg'
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING } from '../actions/action-types/cart-actions'


const initState = {
    items: [
        { id: 1, title: 'Kehwa', desc: "The tea is made by boiling green tea leaves with saffron strands, cinnamon bark, cardamom pods, and occasionally Kashmiri roses to add a great aroma. Generally, it is served with sugar or honey and crushed nuts, usually almonds or walnuts. Some varieties are made as an herbal infusion only, without the green tea leaves. ", price: 70, img: Item1 },
        { id: 2, title: 'Lavasa(Bread)', desc: "It is a thin, large, unleavened flat bread, white in colour, made of maida (finely- milled wheat flour). It is a paper-thin blistered naan. One can also apply butter or jam to lavasa. Some lavasas are soft while others are crispy. It is also used to wrap barbequed meats and chickpeas (Masala lavasa).(Tip:Apply a Little butter to it.)", price: 70, img: Item2 },
        { id: 3, title: 'Pink Tea(Sheer Chai)', desc: "Noon chai is traditionally made from a type of green tea leaves, milk, salt, baking soda and usually cooked in a samavar.[5] A pinch of baking soda gives it a pronounced pink color. Sugar is not traditionally used in Kashmiri home recipes, although newer commercial preparations in Indian and Pakistani restaurants and tea stalls may include sweetener. ", price: 150, img: Item3 },
        { id: 4, title: 'Katlam(Crispy Bread)', desc: "This is more like puff pastry, cooked in layers and often served with kahwa. The bread is made by stretching a sheet of dough repeatedly and interleaving with ghee before baking in a tandoor. A large bakerkhwani ,made in ghee, is usually used as accompaniments to Chicken or rogan josh Trays/ Majmas in social customs like child birth, wedding, engagement etc.", price: 90, img: Item4 },
        { id: 5, title: 'Roganjosh', desc: "Rogan josh is a staple of Kashmiri cuisine and is one of the main dishes of the Kashmiri multicourse meal (the wazwan). The dish was originally brought to Kashmir by the Mughals, whose cuisine was, in turn, influenced by Persian cuisine. The unrelenting summer heat of the Indian plains took the Mughals frequently to Kashmir, which has a cooler climate because of its elevation and latitude.", price: 350, img: Item5 },
        { id: 6, title: 'Yakhni', desc: "The meat is first cooked along with a handful of spices to acquire an aromatic broth, then the pieces are removed and yoghurt is added and left to simmer. The meat pieces are again added back to the broth and it is slow-cooked for some more time to finally acquire the smooth texture with delicate meat. The spices that are commonly added are fennel seeds, cinnamon, cardamom and cloves, among others.", price: 400, img: Item6 }
    ],
    addedItems: [],
    total: 0

}
const cartReducer = (state = initState, action) => {

    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        }
        else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 100
        }
    }

    if (action.type === 'SUB_SHIPPING') {
        return {
            ...state,
            total: state.total - 100
        }
    }

    else {
        return state
    }

}

export default cartReducer
