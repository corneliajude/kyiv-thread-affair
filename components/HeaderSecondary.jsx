export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="header-logo">
        <a href="http://pixellab.ro" title="Thread Affair">
          <img src="/images/logo.jpg" alt="Thread Affair - Logo"></img>
        </a>
      </div>

      <div className="header-support d-none d-lg-block">
        <ul>
          <li>
            <a href="tel:1-877-666-1840" title="Call us">
              Toll Free 1-877-666-1840
            </a>{' '}
            |
          </li>

          <li>
            <a href="mailto:x@x.ro" title="Email us">
              office@traidaffairs.com
            </a>
          </li>
        </ul>
      </div>

      <div className="header-search d-lg-none">
        <ul>
          <li>
            <a href="http://pixellab.ro" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

          <li>
            <a href="http://pixellab.ro" title="Search">
              <i className="fa-solid fa-search"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <ul>
          <li>
            <a href="http://pixellab.ro" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>

          <li>
            <a href="http://pixellab.ro" title="My Account">
              <img src="/images/user-avatar.png" alt="My Account"></img>

              <i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
