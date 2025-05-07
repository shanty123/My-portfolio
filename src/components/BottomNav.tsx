import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

export default function BottomNav() {
  return (
    <div className="fixed z-50 w-full transform -translate-x-1/2 bottom-4 left-1/2 sm:w-auto"   style={{ backgroundColor: '#b0bec5', opacity: 0.9 }}>
      <div
        className="max-w-full mx-auto overflow-x-auto rounded-full sm:max-w-fit"
        >
        <div className="flex items-center gap-4 px-4 py-2 text-sm whitespace-nowrap">
          {[
            { to: 'about', label: 'About' },
            { to: 'skills', label: 'Skills' },
            { to: 'education', label: 'Education' },
            { to: 'experience', label: 'Experience' },
            { to: 'projects', label: 'Projects' },
            { to: 'contact', label: 'Contact' },
          ].map((item) => (
            <motion.div
              key={item.to}
              className="text-xl text-gray-700 cursor-pointer hover:text-green-900"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                activeClass="text-green-700 font-semibold"
                className="px-2"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
