import { FC } from "react"

export const LocationIcon = () => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.66406C9.10457 8.66406 10 7.76863 10 6.66406C10 5.55949 9.10457 4.66406 8 4.66406C6.89543 4.66406 6 5.55949 6 6.66406C6 7.76863 6.89543 8.66406 8 8.66406Z" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
<path d="M7.99739 1.33203C6.58291 1.33203 5.22635 1.89393 4.22616 2.89413C3.22597 3.89432 2.66406 5.25088 2.66406 6.66536C2.66406 7.9267 2.93206 8.75203 3.66406 9.66536L7.99739 14.6654L12.3307 9.66536C13.0627 8.75203 13.3307 7.9267 13.3307 6.66536C13.3307 5.25088 12.7688 3.89432 11.7686 2.89413C10.7684 1.89393 9.41188 1.33203 7.99739 1.33203V1.33203Z" stroke="#545D6A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
</svg>

export const ArrowDownIcon:FC<{extrClass?:string}> = ({extrClass}) => <svg className={`${extrClass} duration-300`} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.96484 1.26147L5.00112 4.71674L1.00004 1.30481" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export const SearchIcon:FC<{extraClass:string}>  = ({extraClass}) => <svg className={`${extraClass}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.0918 16.9083L15.0002 13.8416C16.2002 12.3453 16.7814 10.446 16.6242 8.53434C16.4669 6.62267 15.5832 4.84391 14.1548 3.56379C12.7263 2.28368 10.8617 1.59951 8.94427 1.65198C7.02686 1.70445 5.20243 2.48956 3.84612 3.84587C2.4898 5.20219 1.70469 7.02662 1.65222 8.94402C1.59976 10.8614 2.28392 12.7261 3.56403 14.1545C4.84415 15.583 6.62292 16.4667 8.53458 16.6239C10.4462 16.7812 12.3455 16.2 13.8418 14.9999L16.9085 18.0666C16.986 18.1447 17.0781 18.2067 17.1797 18.249C17.2812 18.2913 17.3902 18.3131 17.5002 18.3131C17.6102 18.3131 17.7191 18.2913 17.8206 18.249C17.9222 18.2067 18.0144 18.1447 18.0918 18.0666C18.242 17.9112 18.326 17.7035 18.326 17.4874C18.326 17.2713 18.242 17.0636 18.0918 16.9083ZM9.16683 14.9999C8.01311 14.9999 6.88529 14.6578 5.926 14.0168C4.96672 13.3759 4.21904 12.4648 3.77753 11.3989C3.33602 10.333 3.2205 9.16012 3.44558 8.02856C3.67066 6.89701 4.22624 5.8576 5.04204 5.0418C5.85785 4.22599 6.89725 3.67042 8.0288 3.44534C9.16036 3.22026 10.3332 3.33578 11.3992 3.77729C12.4651 4.2188 13.3761 4.96647 14.0171 5.92576C14.658 6.88505 15.0002 8.01286 15.0002 9.16659C15.0002 10.7137 14.3856 12.1974 13.2916 13.2914C12.1977 14.3853 10.7139 14.9999 9.16683 14.9999Z" fill="white"/>
</svg>

export const CompareIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00329 4.05781C5.91185 4.02441 5.80964 4.06169 5.76119 4.14613L4.97192 5.52168L1.02749 12.2457C1.00949 12.2764 1 12.3113 1 12.3469V12.5218C1 14.8974 2.98419 16.8301 5.42308 16.8301C7.86196 16.8301 9.84615 14.8974 9.84615 12.5218V12.3469C9.84615 12.3113 9.83667 12.2764 9.81867 12.2457L6.40338 6.4221C6.30852 6.26035 6.46839 6.06872 6.64452 6.13306L9.80661 7.28807C9.83354 7.29791 9.84615 7.32317 9.84615 7.35184C9.84615 8.42463 10.5248 9.33826 11.4822 9.72808C11.5611 9.76019 11.6154 9.83536 11.6154 9.92052V20.0767C11.6154 20.1871 11.5258 20.2767 11.4154 20.2767H8.27692C8.16647 20.2767 8.07692 20.3662 8.07692 20.4767V21.8C8.07692 21.9105 8.16647 22 8.27692 22H13.1846C13.2951 22 13.3846 21.9105 13.3846 21.8V9.92031C13.3846 9.83525 13.4387 9.76018 13.5174 9.72795C13.858 9.58855 14.1649 9.38121 14.4183 9.11933C14.4765 9.05911 14.5645 9.03628 14.6429 9.06597L18.462 10.5129C18.5778 10.5568 18.6263 10.6943 18.5636 10.8011L15.1813 16.5678C15.1633 16.5985 15.1538 16.6334 15.1538 16.669V16.8438C15.1538 19.2186 17.138 21.1383 19.5769 21.1383C22.0158 21.1383 24 19.2186 24 16.8438V16.669C24 16.6334 23.9905 16.5985 23.9725 16.5678L19.6127 9.13614C19.5896 9.09668 19.5536 9.06635 19.5108 9.05021L15.1988 7.42423C15.1686 7.41282 15.1538 7.38418 15.1538 7.35184C15.1538 5.92666 13.9632 4.76687 12.5 4.76687C12.1145 4.76832 11.7341 4.85208 11.3854 5.01227C11.0794 5.15289 10.8044 5.34939 10.5752 5.59069C10.5176 5.65129 10.4301 5.67499 10.3516 5.64631L6.00329 4.05781ZM12.5 6.49019C12.7278 6.50011 12.9428 6.59523 13.1004 6.75573C13.258 6.91624 13.3459 7.12976 13.3459 7.35184C13.3459 7.57392 13.258 7.78745 13.1004 7.94795C12.9428 8.10846 12.7278 8.20357 12.5 8.2135C12.2722 8.20357 12.0572 8.10846 11.8996 7.94795C11.742 7.78745 11.6541 7.57392 11.6541 7.35184C11.6541 7.12976 11.742 6.91624 11.8996 6.75573C12.0572 6.59523 12.2722 6.50011 12.5 6.49019ZM5.25058 8.52127C5.32786 8.38955 5.51829 8.38955 5.59557 8.52127L7.2606 11.3589C7.33884 11.4922 7.24269 11.6601 7.08811 11.6601H3.75805C3.60346 11.6601 3.50732 11.4922 3.58555 11.3589L5.25058 8.52127ZM19.4044 12.8425C19.4817 12.7108 19.6721 12.7108 19.7494 12.8425L21.4065 15.6672C21.4847 15.8005 21.3886 15.9684 21.234 15.9684H17.9198C17.7652 15.9684 17.6691 15.8005 17.7473 15.6672L19.4044 12.8425ZM3.04679 13.6462C2.98489 13.5218 3.08093 13.3834 3.21988 13.3834H7.62754C7.76614 13.3834 7.86219 13.5211 7.80084 13.6454C7.60747 14.0371 7.31481 14.3763 6.94853 14.6299C6.5028 14.9385 5.96991 15.1051 5.42308 15.1067C4.37476 15.1067 3.47594 14.5086 3.04679 13.6462ZM17.1916 17.9527C17.1312 17.8285 17.2273 17.6917 17.3654 17.6917H21.7884C21.9265 17.6917 22.0226 17.8285 21.9623 17.9527C21.7701 18.3484 21.4769 18.6915 21.1087 18.9479C20.6617 19.2591 20.1264 19.4272 19.5769 19.4288C19.0275 19.4272 18.4921 19.2591 18.0451 18.9479C17.677 18.6915 17.3838 18.3484 17.1916 17.9527Z" fill="#545D6A"/>
</svg>

export const LikeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M12.0122 5.57169L10.9252 4.48469C8.77734 2.33681 5.29493 2.33681 3.14705 4.48469C0.999162 6.63258 0.999162 10.115 3.14705 12.2629L11.9859 21.1017L11.9877 21.0999L12.014 21.1262L20.8528 12.2874C23.0007 10.1395 23.0007 6.65711 20.8528 4.50923C18.705 2.36134 15.2226 2.36134 13.0747 4.50923L12.0122 5.57169ZM11.9877 18.2715L16.9239 13.3352L18.3747 11.9342L18.3762 11.9356L19.4386 10.8732C20.8055 9.50635 20.8055 7.29028 19.4386 5.92344C18.0718 4.55661 15.8557 4.55661 14.4889 5.92344L12.0133 8.39904L12.006 8.3918L12.005 8.39287L9.51101 5.89891C8.14417 4.53207 5.92809 4.53207 4.56126 5.89891C3.19442 7.26574 3.19442 9.48182 4.56126 10.8487L7.10068 13.3881L7.10248 13.3863L11.9877 18.2715Z" fill="currentColor"/>
</svg>

export const SavedIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fillRule="evenodd" clipRule="evenodd" d="M5 4H19C19.5523 4 20 4.44771 20 5V19C20 19.5523 19.5523 20 19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44771 4 5 4ZM2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V5ZM12 12C9.23858 12 7 9.31371 7 6H9C9 8.56606 10.6691 10 12 10C13.3309 10 15 8.56606 15 6H17C17 9.31371 14.7614 12 12 12Z" fill="currentColor"/>
</svg>

export const AvatarIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

export const MenuIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="#333333"/>
<path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="#333333"/>
<path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="#333333"/>
</svg>

export const ClearIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
