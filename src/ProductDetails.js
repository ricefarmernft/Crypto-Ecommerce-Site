import { useState, useEffect } from "react";
import {
  NavLink,
  Switch,
  Route,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import useFetch from "./useFetch.js";
import ProductDetailInfo from "./ProductDetailInfo.js";
import ProductDetailBiography from "./ProductDetailBiography.js";

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const { get } = useFetch("https://ricefarmsapi-default-rtdb.firebaseio.com/");
  const params = useParams();
  const match = useRouteMatch();

  useEffect(() => {
    get(`cryptoinfo/${params.id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log("Could not load product details", error));
         // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="125"
          height="125"
          className="product-details-image"
          alt={product.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink exact activeClassName="tab-active" to={match.url}>
                Details
              </NavLink>
            </li>
            <li>
              {/* <NavLink
                exact
                activeClassName="tab-active"
                to={match.url + "/nutrition"}
              >
                Nutrition
              </NavLink> */}
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path={match.path}>
            <ProductDetailInfo
              onProductAdd={props.onProductAdd}
              product={product}
            />
          </Route>
          <Route path={match.path + "/biography"}>
            <ProductDetailBiography description={product.description} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
