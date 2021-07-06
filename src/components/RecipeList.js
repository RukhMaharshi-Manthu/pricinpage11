


export default function RecipeList({
  recipeArr,
  initialRcpArr,
  rcpArr,
  setRcpArr,
  cartMethod, 
        cart
}) {
  
  return (
    <section className="recipeList">
      {rcpArr.map((ele, index) => (
        <div className="card recipe-card col-sm-4 col-md-3 col-4">
          {/* Recipe display contents */}
          <p className="card-header">
            {/* name */}
            <p>{ele.name}</p>

            {/* delete button */}
            
          </p>

          {/* recipe image */}
          <img src={ele.url} alt={ele.name} />

          <div class="star-rating">
            
<input type="radio" id="5-stars"  value="5" name="rating"/>
  <label for="5-stars" class="star1">&#9733;</label>
  <input type="radio" id="4-stars"  value="4" name="rating"/>
  <label for="4-stars" class="star2">&#9733;</label>
  <input type="radio" id="3-stars"  value="3" name="rating"/>
  <label for="3-stars" class="star3">&#9733;</label>
  <input type="radio" id="2-stars"  value="2" name="rating"/>
  <label for="2-stars" class="star4">&#9733;</label>
  <input type="radio" id="1-star"  value="1" name="rating"/>
  <label for="1-star" class="star5">&#9733;</label>
</div>


{/*name="rating"* /}
<p>M.R.P- {ele.price}</p>
          {/* recipe extra details */}
          <button className="addbtn"
            onClick={() => {
              let match = cart.find((prod) => prod.ele === ele.name);
              // let match;
              // cart.forEach((prod) => {
              //   if (prod.item === item.name) {
              //     console.lo`g("enteredddddddd");
              //     match = true;
              //   }
              // });
              // console.log(match);
              if (match) {
                let newArr = cart.map((prod) => {
                  if (prod.item === ele.name) {
                    // console.log(prod.item);
                    // console.log(prod.qty + 1);
                    return {
                      ...prod,

                      qty: prod.qty + 1
                    };
                  } else {
                    return prod;
                  }
                });
                cartMethod(newArr);
              } else {
                cartMethod([
                  ...cart,
                  {
                    id: ele.id,
                    item: ele.name,
                    item1: ele.price,
                    qty: 1,
                    item3: ele.img
                  }
                ]);
              }
            }}
          >
            Add to cart
          </button>
            
         
        </div>
      ))}
    </section>
  );
}
