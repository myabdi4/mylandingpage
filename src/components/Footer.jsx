import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className=" mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="text-md font-semibold mb-2">Resources</h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li key={index} className="mb-4">
                <a
                  href={link.href}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-2">Platform</h3>
          <ul>
            {platformLinks.map((link, index) => (
              <li key={index} className="mb-4">
                <a
                  href={link.href}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul>
            {communityLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a
                  href={link.href}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
