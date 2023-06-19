import { Link } from "react-router-dom";
import { FaBookOpen, FaCode, FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-gray-900 flex justify-center items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          <div className="flex items-center justify-center">
            <FaBookOpen className=" mr-2" />
            <h3 className="text-2xl font-bold text-orange-500">
              Desafio
              <span className="text-white font-mono ml-3">GenesisBank</span>
            </h3>
          </div>
        </Link>

        <div className="flex items-center justify-center space-x-6">
          <Link
            to="https://www.linkedin.com/in/giulianno-zanetti/"
            target="_blank"
          >
            <FaLinkedin className="w-6 h-6 text-white hover:text-orange-500" />
          </Link>

          <Link to="https://github.com/Giuzntt" target="_blank" className="">
            <FaGithub
              className="w-6 h-6 text-white
                hover:text-orange-500
              "
            />
          </Link>

          <Link
            to="https://github.com/Giuzntt/desafio-genesis-bank"
            target="_blank"
          >
            <FaCode className="w-6 h-6 text-white hover:text-orange-500" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
