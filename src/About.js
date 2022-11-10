export default function About() {
  return (
    <div className="about-layout">
      <div>
        <h1>About Us</h1>
        <p>
          We started operations in 2022. We guarantee clean crypto.
          <br />
          Save time by shopping on our app and we'll deliver the coins right
          to your wallet. <br />
          <em>We use Stripe to process your payment.</em>
        </p>
      </div>
      <img
        src="https://res.cloudinary.com/dctoezvq5/image/upload/v1668033856/storefront/pexels-tima-miroshnichenko-7567303_v7r4ty.jpg"
        height="275"
        width="183"
        className="rounded"
        alt=""
      />
    </div>
  );
}
