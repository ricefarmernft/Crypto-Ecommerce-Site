import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Buy your crypto from <em>Rice Labs</em> with our easy to use app,
          and get your coins delivered straight to your wallet.
        </p>
        <Link to="/products" className="btn btn-default">
          Start shopping
        </Link>
      </div>
      <img
        src="https://res.cloudinary.com/dctoezvq5/image/upload/v1668024009/storefront/pexels-rodnae-productions-8370752_vxhrwn.jpg"
        width="350"
        height="240"
        className="rounded home-image"
        alt=""
      />
    </div>
  );
}
