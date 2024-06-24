import {Icon} from "@iconify/react"

type ButtonProps = {
    text: string; 
    className: string; 
    onClick: ()=>void;
    icon?: string;
}
const Button = ({text, className, onClick, icon}: ButtonProps) => {
  return (
    <button
        type='button'
        className={`flex items-center gap-2 p-1 md:p-2 cursor-pointer rounded font-bold ${className}`}
        onClick={onClick}
    >
        {icon && (
            <Icon icon={icon}/>
        )}
        {text}
    </button>
  )
}

export default Button