export default function HeaderSecondary() {
  return (
    <section className="header-secondary">
      <div className="header-support">
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

      <div className="header-search">
        <ul>
          <li>
            <a href="/" title="Menu">
              <i className="fa-solid fa-bars"></i>
            </a>
          </li>

          <li>
            <a href="/" title="Search">
              <i className="fa-solid fa-search"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="header-controls">
        <ul>
          <li>
            <a href="/" title="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </a>
          </li>

          <li>
            <a href="/" title="My Account">
              <img src="/images/user-avatar.png" alt="My Account"></img>

              <i className="fa-solid fa-angle-down"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
