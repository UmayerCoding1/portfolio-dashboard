import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import Logo from "./SidebarHeader"


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader> 
        <Logo/>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup >
           
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}