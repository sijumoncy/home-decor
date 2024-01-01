export interface AdminContextInterface {
    currentMenu:string,
    mobNavOpen:boolean,
    setCurrentMenu: React.Dispatch<React.SetStateAction<string>>
    setMobNavOpen: React.Dispatch<React.SetStateAction<boolean>>
    
}
  
export interface AdminProviderProps {
    children: React.ReactNode
}