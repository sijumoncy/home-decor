export interface AppContextInterface {
    currentMenu:string,
    mobNavOpen:boolean,
    openCart:boolean,
    setCurrentMenu: React.Dispatch<React.SetStateAction<string>>
    setMobNavOpen: React.Dispatch<React.SetStateAction<boolean>>
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>
    
}
  
export interface AppProviderProps {
    children: React.ReactNode
}