
import React from 'react';

const Footer = () => {
  return (
    <footer className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Trek Studio. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
