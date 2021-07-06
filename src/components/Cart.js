function Cart({ cart, cartMethod }) {
  // console.log("triggered");
  console.log(...cart);
  return (
    <div>
      {cart.map((item, idx) => {
        return (
          <div
            key={item.id}
            style={{
              display: "flex",
              maxWidth: "250px",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "auto"
            }}
          >
            <img src={item.img} alt={item.name} />
            <span>
              {item.item}
              {"  -  "}
              {item.item1}rs
            </span>

            <div>
              <button
                onClick={() => {
                  console.log("entered negative button");
                  // let newCart = [...cart];
                  // let quan = newCart[idx].qty;
                  // if (quan > 1) {
                  //   newCart.splice(idx, 1, {
                  //     id: item.id,
                  //     item: item.item,
                  //     qty: item.qty - 1
                  //   });
                  //   cartMethod(newCart);
                  // } else if (quan === 1) {
                  //   newCart.splice(idx, 1);
                  //   cartMethod(newCart);
                  // }
                  if (item.qty > 1) {
                    let newCart = cart.map((prod) => {
                      if (prod.item === item.item) {
                        return {
                          ...prod,
                          qty: prod.qty - 1
                        };
                      } else return prod;
                    });
                    cartMethod(newCart);
                  } else if (item.qty === 1) {
                    let newCart = cart.filter((prod) => {
                      if (prod.item === item.item) {
                        return false;
                      } else return true;
                    });
                    cartMethod(newCart);
                  }
                }}
              >
                -
              </button>
              {item.qty}
              <button
                onClick={() => {
                  // let newCart = [...cart];
                  // newCart.splice(idx, 1, {
                  //   id: item.id,
                  //   item: item.item,
                  //   qty: item.qty + 1
                  // });
                  // cartMethod(newCart);
                  let newCart = cart.map((prod) => {
                    if (prod.item === item.item) {
                      return {
                        ...prod,
                        qty: prod.qty + 1
                      };
                    } else return prod;
                  });
                  cartMethod(newCart);
                }}
              >
                +
              </button>
            </div>
            {/* <button
              onClick={() => {
                // let newCart = [...cart];
                // newCart.splice(idx, 1);
                // cartMethod(newCart);
                let toRemove = cart[idx].item;
                console.log(toRemove);
                let newArr = cart.filter((cartitem) => {
                  if (cartitem.item === toRemove) {
                    return false;
                  } else {
                    return item;
                  }
                });
                cartMethod(newArr);
              }}
            >
              Remove
            </button> */}
          </div>
        );
      })}
    </div>
  );
}

export default Cart;
