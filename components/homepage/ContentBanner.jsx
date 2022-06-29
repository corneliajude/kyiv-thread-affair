export default function ContentBanner() {
  return (
    <div className="content-banner">
      <div className="content-banner-inner container">
        <div>
          <h1>Custom Suits</h1>
          <h2>Get back to work in style</h2>
        </div>

        <div className="text-center">
          <a
            href="httsp://x.ro"
            className="button button-large text-uppercase"
            title="Create your suit"
          >
            Create your suit
          </a>
        </div>

        <footer className="content-banner-copy">
          <p className="m-0">
            A Tailored Suit that will fit you perfectly is a dream for
            everybody.
          </p>

          <p className="m-0 d-none d-lg-block">
            We provide you with the design and you choose if you like it or if
            you want to change the details with our online configurator.
          </p>
        </footer>
      </div>
    </div>
  );
}
