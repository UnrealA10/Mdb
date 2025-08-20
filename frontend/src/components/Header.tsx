import { useState, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown, LogOut, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "/lovable-uploads/logo.jpg";

interface UserShape {
  loggedIn: boolean;
  username: string;
  role: string;
}

interface HeaderProps {
  user: UserShape | null;
  setUser: (user: null) => void;
}

const Header = ({ user, setUser }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Always derive "logged in" + "display name" from either React state OR localStorage.
  const isLoggedIn = useMemo(
    () => Boolean(user?.loggedIn || localStorage.getItem("token")),
    [user]
  );
  const displayName = useMemo(
    () => user?.username || localStorage.getItem("username") || "Account",
    [user]
  );
  const role = useMemo(
    () => user?.role || (localStorage.getItem("role") as string) || "guest",
    [user]
  );

  const navItems = [
    {
      name: "Home",
      href: "/",
      roles: ["student", "teacher", "guest", "admin"],
    },
    {
      name: "About",
      href: "/about",
      roles: ["student", "teacher", "guest", "admin"],
    },
    {
      name: "Academics",
      href: "/academics",
      roles: ["student", "teacher", "guest", "admin"],
    },
    {
      name: "Facilities",
      href: "/facilities",
      roles: ["student", "teacher", "guest", "admin"],
    },
    {
      name: "Student Services",
      roles: ["student", "teacher", "guest", "admin"],
      children: [
        {
          name: "Miscellaneous Application Forms",
          href: "/student-services/misc-application-forms",
        },
        {
          name: "Duplicate Marksheet",
          href: "/student-services/duplicate-marksheet",
        },
        {
          name: "Transcript (Marks/Grades)",
          href: "/student-services/transcript-marks",
        },
        { name: "Migration", href: "/student-services/migration" },
        {
          name: "Provisional Certificate",
          href: "/student-services/provisional-certificate",
        },
        {
          name: "Continuation/Re-Admission/Examination Form",
          href: "/student-services/continuation-readmission-exam-form",
        },
        { name: "Books and Manuals", href: "/student-services/books-manuals" },
        {
          name: "Ordinances (Academic)",
          href: "/student-services/ordinances-academic",
        },
        {
          name: "Students' Conduct & Discipline",
          href: "/student-services/students-conduct-discipline",
        },
        {
          name: "Examination (Control of Unfair Means & Disorderly Conduct) Regulations",
          href: "/student-services/exam-unfair-means-regulations",
        },
        { name: "Convocation", href: "/student-services/convocation" },
        { name: "Picture Gallery", href: "/student-services/picture-gallery" },
      ],
    },
    { name: "Faculty", href: "/faculty", roles: ["teacher", "admin"] },
    {
      name: "School",
      roles: ["guest", "teacher", "admin"],
      children: [
        {
          name: "School Admission",
          href: "/school/admission",
          roles: ["guest"],
        },
        {
          name: "School Examination",
          href: "/school/examination",
          roles: ["teacher", "admin"],
        },
      ],
    },
    {
      name: "Contact",
      href: "/contact",
      roles: ["student", "teacher", "guest", "admin"],
    },
  ];

  const handleLogout = () => {
    // No backend route needed; JWT is stateless. Just clear and navigate.
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("role");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft">
      <div className="bg-forest-green text-primary-foreground py-2 text-center text-xs md:text-sm">
        MDB Senior Secondary School Sagra Sunderpur, Pratapgarh, Uttar Pradesh,
        India, 230136
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="flex items-center gap-3 mt-2">
                <img src={logo} alt="MDB" className="h-8 w-8 rounded" />
                <div className="font-semibold">MDB Senior Secondary School</div>
              </div>
              <div className="flex flex-col space-y-3 mt-6">
                {navItems.map((item) => {
                  const allowed = item.roles?.includes(role) || !item.roles;
                  if (!allowed) return null;
                  return (
                    <div key={item.name}>
                      {item.href ? (
                        <Link
                          to={item.href}
                          className="text-base font-medium text-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <div className="text-base font-medium text-foreground">
                          {item.name}
                        </div>
                      )}
                      {item.children
                        ?.filter((c) => c.roles?.includes(role) || !c.roles)
                        .map((sub) => (
                          <Link
                            key={`${item.name}-${sub.name}`}
                            to={sub.href}
                            className="block text-sm text-muted-foreground hover:text-primary pl-4 mt-1"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        ))}
                    </div>
                  );
                })}

                <div className="pt-4 border-t border-border">
                  <Link to="/admissions" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full mb-2">
                      Admissions
                    </Button>
                  </Link>
                  <Link to="/downloads" onClick={() => setIsOpen(false)}>
                    <Button variant="outline" className="w-full">
                      Downloads
                    </Button>
                  </Link>

                  {isLoggedIn ? (
                    <Button
                      variant="outline"
                      className="w-full mt-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  ) : (
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full mt-2">
                        Login
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Logo (center on mobile, left on desktop) */}
          <Link
            to="/"
            className="flex-1 flex justify-center md:justify-start md:ml-8"
          >
            <div className="flex items-center">
              <img
                src={logo}
                alt="MDB Logo"
                className="h-10 w-10 mr-3 rounded"
              />
              <div className="hidden md:block">
                <div className="text-lg font-bold text-foreground">
                  MDB Senior Secondary School
                </div>
                <div className="text-xs text-muted-foreground">
                  Excellence in Education Since 1999
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const allowed = item.roles?.includes(role) || !item.roles;
              if (!allowed) return null;

              if (item.children) {
                return (
                  <DropdownMenu key={item.name}>
                    <DropdownMenuTrigger className="flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {item.children
                        .filter((c) => c.roles?.includes(role) || !c.roles)
                        .map((sub) => (
                          <DropdownMenuItem key={`${item.name}-${sub.name}`}>
                            <Link
                              to={sub.href}
                              className={`w-full ${
                                location.pathname === sub.href
                                  ? "text-primary"
                                  : "text-foreground hover:text-primary"
                              }`}
                            >
                              {sub.name}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors relative group ${
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      location.pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-2 ml-8">
            <Link to="/admissions">
              <Button
                variant="outline"
                size="sm"
                className="text-foreground border-border"
              >
                ADMISSIONS
              </Button>
            </Link>
            <Link to="/downloads">
              <Button
                variant="outline"
                size="sm"
                className="text-foreground border-border"
              >
                DOWNLOADS
              </Button>
            </Link>

            {isLoggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-foreground border-border"
                  >
                    <User className="h-4 w-4 mr-2" />
                    {displayName}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem
                    onSelect={() => {
                      localStorage.removeItem("token");
                      localStorage.removeItem("username");
                      localStorage.removeItem("role");
                      setUser(null);
                      navigate("/login", { replace: true });
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-foreground border-border"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
