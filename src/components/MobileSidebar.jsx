import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarFooter,
} from "@/components/ui/sidebar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Menu items.
const categories = [
  {
    name: "Development",
    subItems: [
      "Web Development",
      "Mobile Development",
      "Web3 Development",
      "Game Development",
      "Software Development",
    ],
  },
  {
    name: "Business",
    subItems: [
      "Entrepreneurship",
      "Communication",
      "Management",
      "Sales",
      "Strategy",
    ],
  },
  {
    name: "Finance",
    subItems: [
      "Investing",
      "Trading",
      "Personal Finance",
      "Accounting",
      "Cryptocurrency",
    ],
  },
  {
    name: "Software and IT",
    subItems: [
      "Networking",
      "Security",
      "Cloud Computing",
      "DevOps",
      "Data Science",
    ],
  },
  {
    name: "Design",
    subItems: [
      "Graphic Design",
      "UX/UI Design",
      "Interior Design",
      "Fashion Design",
      "3D Design",
    ],
  },
  {
    name: "Marketing",
    subItems: [
      "Digital Marketing",
      "Content Marketing",
      "SEO",
      "Social Media Marketing",
      "Email Marketing",
    ],
  },
];

export function MobileSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to={"authentication/login"}>Login</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
          <SidebarMenuButton asChild>
              <Link to={"authentication/register"}>Signup</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Most Popular</SidebarGroupLabel>
          <SidebarGroupContent>
          <Accordion type="single" collapsible className="w-full">
              {categories.map((category) => (
                <AccordionItem key={category.name} value={category.name}>
                  <AccordionTrigger>
                    <span>{category.name}</span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <SidebarMenu>
                      {category.subItems.map((subItem) => (
                        <SidebarMenuItem key={subItem}>
                          <SidebarMenuButton asChild>
                            <Link to={subItem.link}>
                              <span>{subItem}</span>
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupLabel>More From Himalayan Sikshya</SidebarGroupLabel>
          <SidebarGroupContent>
            {" "}
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/about">About Us</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to={"/becomeAInstructor"}>Become A Instructor</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
