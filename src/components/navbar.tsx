import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LogoIcon } from "./icons/logo-icon";
import { MenuIcon } from "./icons/menu-icon";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "./ui/menubar";
import { NotificationIcon } from "./icons/notification-icon";
import { SearchIcon } from "./icons/search-icon";
import { Separator } from "./ui/separator";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 h-12 bg-white">
      <Menubar className="lg:hidden bg-transparent border-0">
        <MenubarMenu>
          <MenubarTrigger className="hover:bg-slate-100">
            <MenuIcon width={24} height={24}  />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem disabled>Home</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Blog</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Gifts</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <LogoIcon className="mr-auto lg:mr-6" width={101} height={32}/>
      <ul className="lg:flex space-x-4 mr-auto hidden">
        <li className="text-primary font-semibold after:border-b-4 after:border-primary after:rounded-lg after:block after:translate-y-2 ">
          Home
        </li>
        <li className="text-primary-foreground/70 font-semibold">Blog</li>
        <li className="text-primary-foreground/70 font-semibold">Gifts</li>
      </ul>
      <SearchIcon className="mr-4" width={24} height={24} />
      <Separator
        className="hidden bg-primary/25 lg:mr-2 lg:block"
        decorative
        orientation="vertical"
      />
      <NotificationIcon className="mr-4" width={24} height={24} />
      <Separator
        className="hidden bg-primary/25 lg:mr-2 lg:block"
        decorative
        orientation="vertical"
      />
      <Avatar>
        <AvatarImage
          src="/images/avatar.jpg"
          alt="Click to view profile"
          className="object-cover object-center"
          width={24}
          height={24}
        />
        <AvatarFallback>HA</AvatarFallback>
      </Avatar>
    </nav>
  );
}
