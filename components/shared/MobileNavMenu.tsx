import { motion } from "motion/react";
import { NavLinkItems } from "@/const/data";
import useActiveSection from "@/lib/useActiveSection";

const MobileNavMenu = ({
  menuState,
  toggleMenu,
}: {
  menuState: boolean;
  toggleMenu: (value: boolean) => void;
}) => {
  const { isActive } = useActiveSection();
  return (
    <motion.ul
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className={`w-full flex flex-col flex-1 fixed left-0 top-16 h-full bg-background/90 z-10 px-6 space-y-6 py-2 pb-3 ${menuState ? "block" : "hidden"}`}
    >
      {NavLinkItems.map((item) => {
        const active = isActive(item.href);
        return (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              toggleMenu(false);
            }}
            className="flex flex-col space-y-1 cursor-pointer"
          >
            <motion.a
              href={item.href}
              className={active ? "font-bold text-muted-foreground" : ""}
              aria-current={active ? "page" : undefined}
            >
              {item.title}
              <div className="h-[0.5px] bg-gray-50"></div>
            </motion.a>
          </motion.li>
        );
      })}
    </motion.ul>
  );
};
export default MobileNavMenu;
