export default function HomeNewsletter() {
  return (
    <section className="home-newsletter">
      <form className="container">
        <label htmlFor="home-newsletter">
          Subscribe to our <span>newsletter</span>
        </label>

        <input
          type="email"
          name="home-newsletter"
          id="home-newsletter"
          placeholder="email"
          required
        ></input>

        <button type="submit" title="Subscribe">
          Subscribe
        </button>
      </form>
    </section>
  );
}
