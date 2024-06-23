import {AlertType} from "../../types"

type AlertProps = {
    type: AlertType,
    message: string;
}

const Alert = ({type, message}: AlertProps) => {

  return (
    <div className={`${type === "success" ? "bg-green-700" : " bg-red-800"} p-2 rounded text-white text-center font-bold`}>
        {message}
    </div>
  )
}

export default Alert