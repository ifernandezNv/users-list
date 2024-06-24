import {Icon} from "@iconify/react"

import {AlertType} from "../../types"
type AlertProps = {
    type: AlertType,
    message: string;
}

const Alert = ({type, message}: AlertProps) => {

  return (
    <div className={`${type === "success" ? "bg-green-700" : " bg-red-800"} flex items-center justify-center gap-2 p-2 rounded text-white text-center font-bold`}>
      <Icon height={20} icon={type === "success" ? "mdi:tick-circle" : "material-symbols:error"} />
      <p>{message}</p>
    </div>
  )
}

export default Alert